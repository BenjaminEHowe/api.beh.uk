import { Request, Router } from 'itty-router'

import { hello } from './apps/hello'

import { extractClientIp } from './middleware/extractClientIp'

const router = Router()

router.get("/hello/v1/:name", extractClientIp, (request: Request & { clientIp: string }) => {
  const name = request.params?.name || "unknown user"
  const ip = request.clientIp || "unknown IP"
  return new Response(hello(name, ip))
})

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request, e))
})
