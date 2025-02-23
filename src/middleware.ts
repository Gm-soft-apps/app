import { auth } from "auth"
import { getUserByID } from "db/users/handler";

export default auth(async (req) => {
    const path = req.nextUrl.pathname;
    const publicUrl = ["/login", "/register"];
    const adminUrl = ["/dashboard/offers", "/dashboard/users"];
    const isPublicUrl = publicUrl.includes(path);
    const isAdminUrl = adminUrl.includes(path);

    const user = req.auth?.user ? await getUserByID(Number(req.auth.user.id)) : null;
    // if(user){
    //     // console.log("START", req.auth)
    //     //here i need to pass user object to authenticated urls, write logic
    //     req.headers.set('x-auth', JSON.stringify(user));
    //     console.log(user)
    // }

    if (!isPublicUrl && !req.auth?.user) { // for logout users
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    if(req.auth?.user && isPublicUrl){
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    if (req.auth?.user && !(user?.role === "admin") && isAdminUrl) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
})
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}