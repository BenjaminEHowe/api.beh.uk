import { expect } from 'chai'
import { hello } from '../../src/apps/hello'

describe('app: hello', () => {
  const NAME = 'NAME'
  const IP = 'IP'
  it('should return name and IP', async () => {
    const text = hello(NAME, IP)
    expect(text).to.include(`Hello ${NAME} from ${IP}, the time is now `)
  })
})
