export { auth as middleware } from "./auth"

export function middleware(request) {
    console.log("middleware", request)
    return NextResponse.next();
}