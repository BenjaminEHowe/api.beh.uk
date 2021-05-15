import { Router } from 'itty-router'

import { handleRequest } from './handler'

const router = Router()

router.all("/handler", (request, event) => { return handleRequest(event.request) })

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request, e))
})
