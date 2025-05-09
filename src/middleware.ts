import { auth } from "auth";
import { getUserByID } from "db/users/handler";
import { NextResponse } from "next/server"; // Import NextResponse for better control

export default auth(async (req) => {
    const path = req.nextUrl.pathname;

    const publicUrl = ["/login", "/register"];
    const adminUrl = ["/dashboard/offers", "/dashboard/users"];
    const userUrl = ["/dashboard", "/dashboard/wallet", "/dashboard/refer"];

    // Match shortlinks like /ABC123 or /s/XYZ789 (exactly 6 uppercase letters/numbers)
    const shortlinkRegex = /^\/(?:s\/)?[A-Z0-9]{6}$/;
    const isShortlink = shortlinkRegex.test(path);

    const isPublicUrl = publicUrl.includes(path) || isShortlink;
    const isAdminUrl = adminUrl.includes(path);
    const isUserUrl = userUrl.includes(path);

    // Fetch user data if authenticated
    let user = null;
    if (req.auth?.user) {
        user = await getUserByID(Number(req.auth.user.id));
        req.headers.set("x-user", JSON.stringify(user));
    }

    // Redirect unauthenticated users away from protected pages
    if (!isPublicUrl && !req.auth?.user) {
        const newUrl = new URL("/login", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Redirect authenticated users away from login/register, but NOT from shortlinks
    if (req.auth?.user && publicUrl.includes(path)) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Restrict non-admins from admin-only URLs
    if (req.auth?.user && user?.role !== "admin" && isAdminUrl) {
        const newUrl = new URL("/dashboard", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Restrict admins from regular user-only URLs
    if (req.auth?.user && user?.role === "admin" && isUserUrl) {
        const newUrl = new URL("/dashboard/offers", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }

    // Forward request with modified headers
    return NextResponse.next({
        request: {
            headers: req.headers,
        },
    });
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
