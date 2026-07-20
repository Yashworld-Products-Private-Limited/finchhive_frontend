export async function onRequestGet(context) {
  const { params, env } = context;
  const key = params.key;

  if (!env["finchhive-public"]) {
    return new Response("R2 binding missing", { status: 500 });
  }

  const object = await env["finchhive-public"].get(`public/${key}`);

  if (!object) {
    return new Response("Not found", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
  }

  return new Response(object.body, {
    headers: {
      "content-type":
        object.httpMetadata?.contentType ?? "application/octet-stream",
      "cache-control": "public, max-age=3600",
    },
  });
}
