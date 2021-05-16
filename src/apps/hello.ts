export function hello(name: string, ip: string): string {
    return `Hello ${name} from ${ip}, the time is now ${new Date(Date.now()).toISOString()}`
}
