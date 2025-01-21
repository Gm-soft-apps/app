import { auth } from "auth"

export default auth((req) => {
    const path = req.nextUrl.pathname;
    const PublicUrl = ["/login", "/register"];
    const isPublicUrl = PublicUrl.includes(path);

    if (!isPublicUrl && !req.auth?.user) { // for logout users
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    if(req.auth?.user && isPublicUrl){
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
})
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}