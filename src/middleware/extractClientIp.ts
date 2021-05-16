// TODO: convert to using TypeScript

export function extractClientIp(request : any, event : FetchEvent) {
    request.clientIp = event.request.headers.get("CF-Connecting-IP")
}
