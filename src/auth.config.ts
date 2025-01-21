import { getUserFromDb } from "db/users/handler";
import Credentials from "next-auth/providers/credentials";
import { AuthError, NextAuthConfig } from "next-auth";
export class CustomAuthError extends AuthError {
    constructor(msg: string) {
        super();
        this.message = msg;
        this.stack = undefined;
    }
}

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                phoneNumber: { label: "Phone Number", type: "tel" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                let user = await getUserFromDb(credentials);
                if (!user) throw new CustomAuthError("Invalid Credentials!");
                return user[0] as any;
            }
        }),
    ]
} satisfies NextAuthConfig;
declare module "next-auth" {
    interface User {
        id?: string;
        phoneNumber: string;
        password: string;
        referralCode: string;
        verifiedAccount: boolean;
        lastVerified: Date;
        RegisteredOn: Date;
        lastUpdated: Date;
    }
}