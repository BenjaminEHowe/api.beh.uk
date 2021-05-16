import { expect } from 'chai'
import { extractClientIp } from '../../src/middleware/extractClientIp'

describe('middleware: extractClientIp', () => {
  const IP = "IP"
  let request : any = {} // TODO: fix typing
  const event : any = { request: { headers: { get : (header : string) => { return (header === "CF-Connecting-IP" ? IP : null) } }}} // TODO: fix typing
  console.log(event.request.headers.get("CF-Conncting-IP"))
  it('should extract IP', async () => {
    extractClientIp(request, event)
    expect(request.clientIp).to.equal(IP)
  })
})
