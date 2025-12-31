export default {
  fetch(request) {
    return new Response("Hello from Cloudflare Workers!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
