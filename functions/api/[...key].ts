import type { R2Bucket } from "@cloudflare/workers-types";

interface Env {
  "finchhive-public": R2Bucket;
}

interface Params {
  key?: string | string[];
}

function toObjectKey(key: string | string[] | undefined): string {
  if (Array.isArray(key)) {
    return key.join("/");
  }

  return key ?? "";
}

export async function onRequestGet(context: {
  params: Params;
  env: Env;
}): Promise<Response> {
  const { params, env } = context;
  const key = toObjectKey(params.key);

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
