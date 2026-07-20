export async function onRequestGet(context) {
  const { request, params, env } = context;
  const pathName = new URL(request.url).pathname;
  const key = pathName.replace(/^\/api\/?/, "");

  if (!key) {
    return new Response("Not found", {
      status: 404,
      headers: { "cache-control": "no-store" },
    });
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
      "content-type": object.httpMetadata?.contentType ?? "application/octet-stream",
      "cache-control": "public, max-age=3600",
    },
  });
}
