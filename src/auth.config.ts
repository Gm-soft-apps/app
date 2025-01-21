import { getUserFromDb } from "db/users/handler";
import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                phoneNumber: { label: "Phone Number", type: "tel" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                let user = await getUserFromDb(credentials);
                if (!user) throw new Error("Invalid Credentials!")
                return user[0] as any;
            }
        }),
    ]
} satisfies NextAuthConfig;

interface user {
    id: number;
}
declare module "next-auth" {
    interface User extends user {
        // id?: string;
        phoneNumber: string;
        password: string;
        referralCode: string;
        verifiedAccount: boolean;
        lastVerified: Date;
        RegisteredOn: Date;
        lastUpdated: Date;
    }
}