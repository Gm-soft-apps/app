import NextAuth from "next-auth";
import { authConfig } from "auth.config";
import { JWT } from "next-auth/jwt" // dont comment this line, or dont remove

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 day
    },
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) token.id = user.id!
            return token;
        },
        session: ({ session, token }) => {
            session.user.id = token.id;
            return session;
        },
        // authorized: async ({ auth, request }) => {
        //     const url = request.nextUrl

        //     if (request.method === "POST") {
        //         const { authToken } = (await request.json()) ?? {}
        //         // If the request has a valid auth token, it is authorized
        //         const valid = await validateAuthToken(authToken)
        //         if (valid) return true
        //         return NextResponse.json("Invalid auth token", { status: 401 })
        //     }

        //     // Logged in users are authenticated, otherwise redirect to login page
        //     return !!auth.user
        // }
    },
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    useSecureCookies: process.env.NODE_ENV === 'production',
    pages:{
        signIn: "/login",
    }
});
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    id: string
  }
}

