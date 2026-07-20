import type { R2Bucket } from "@cloudflare/workers-types";

interface Env {
  "finchhive-public": R2Bucket;
}

interface Params {
  key?: string[];
}

function resolveObjectKey(requestUrl: string, params: Params): string {
  const pathName = new URL(requestUrl).pathname;
  const trimmed = pathName.replace(/^\/api\/?/, "");

  if (trimmed) {
    return trimmed;
  }

  if (Array.isArray(params.key) && params.key.length > 0) {
    return params.key.join("/");
  }

  return "";
}

export async function onRequestGet(context: {
  request: Request;
  params: Params;
  env: Env;
}): Promise<Response> {
  const { request, params, env } = context;
  const key = resolveObjectKey(request.url, params);

  if (!key) {
    return new Response("Not found", {
      status: 404,
      headers: {
        "cache-control": "no-store",
      },
    });
  }

  const object = await env["finchhive-public"].get(`public/${key}`);

  if (!object) {
    return new Response("Not found", {
      status: 404,
      headers: {
        "cache-control": "no-store",
      },
    });
  }

  return new Response(object.body as unknown as ReadableStream, {
    headers: {
      "content-type":
        object.httpMetadata?.contentType ?? "application/octet-stream",
      "cache-control": "public, max-age=3600",
    },
  });
}
