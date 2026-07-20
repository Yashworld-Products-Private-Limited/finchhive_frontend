// public/[key].js
export async function onRequestGet({ params, env }) {
  const object = await env["finchhive-public"].get(`public/${params.key}`);

  if (!object) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "content-type":
        object.httpMetadata?.contentType || "application/octet-stream",
      "cache-control": "public, max-age=3600",
    },
  });
}
