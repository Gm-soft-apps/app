import { auth } from "auth";
import { getUserByID } from "db/users/handler";
import { NextResponse } from "next/server"; // Import NextResponse for better control

export default auth(async (req) => {
    const path = req.nextUrl.pathname;
    const publicUrl = ["/login", "/register"];
    const adminUrl = ["/dashboard/offers", "/dashboard/users"];
    const userUrl = ["/dashboard/wallet", "/dashboard/refer"];
    const isPublicUrl = publicUrl.includes(path);
    const isAdminUrl = adminUrl.includes(path);
    const isUserUrl = userUrl.includes(path);

    // Fetch user data if authenticated
    let user = null;
    if (req.auth?.user) {
        user = await getUserByID(Number(req.auth.user.id));
        // Attach user data to a custom header
        req.headers.set("x-user", JSON.stringify(user));
    }

    // Redirect logic for unauthenticated users
    if (!isPublicUrl && !req.auth?.user) {
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Redirect authenticated users from public URLs to dashboard
    if (req.auth?.user && isPublicUrl) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Restrict non-admin users from admin URLs
    if (req.auth?.user && user?.role !== "admin" && isAdminUrl) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Restrict admin users from regular user URLs
    if (req.auth?.user && user?.role === "admin" && isUserUrl) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Pass the request forward with modified headers
    return NextResponse.next({
        request: {
            headers: req.headers, // Pass the modified headers along
        },
    });
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};