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
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
});