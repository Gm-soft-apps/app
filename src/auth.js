import { getUserFromDb } from "db/users/handler";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                phoneNumber: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;
                user = await getUserFromDb(credentials);

                if (!user) {
                    throw new Error("Invalid Credentials!")
                }
                return user;
            }
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if(user) token.id = user.id
            return token;
        },
        session: ({ session, token }) => {
            const today = new Date()
            session.expires = new Date(today.setDate(7 + today.getDate())).toISOString()
            session.user.id = token.id;
            return session;
        },
        authorized: async ({ auth }) => {
            return !!auth;
        }
    },
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    useSecureCookies: process.env.NODE_ENV === 'production',
    // pages: {
    //     signIn: "/login"
    // }
});
