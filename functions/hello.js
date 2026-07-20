export async function onRequestGet() {
  return new Response('hello from functions', { status: 200, headers: { 'content-type': 'text/plain' } });
}
