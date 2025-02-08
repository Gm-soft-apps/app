import { createUser, getUserFromDb } from "db/users/handler";
import Credentials from "next-auth/providers/credentials";
import { AuthError, NextAuthConfig } from "next-auth";
export class CustomAuthError extends AuthError {
    constructor(msg: string) {
        super();
        this.message = msg;
        this.stack = undefined;
    }
}

interface Credentials {
    phoneNumber: string;
    password: string;
    isRegistering: boolean;
    invitedBy?: string; // Optional field if not always present
}

export const authConfig = {
    providers: [
        Credentials({
            credentials: {
                phoneNumber: { label: "Phone Number", type: "tel" },
                password: { label: "Password", type: "password" },
                invitedBy: { label: "Invited By", type: "text" },
                isRegistering: { label: "Is a Registered User", type: "text" },
            },
            authorize: async (credentials: Credentials) => {
                let user = null;
                console.log(credentials)
                if (credentials.isRegistering && !credentials) {
                    try {
                        user = await createUser(credentials);
                        return user[0] as any;
                    } catch (error) {
                        throw new CustomAuthError(`Already Account Exists, please Login!!`);
                    }
                }
                user = await getUserFromDb(credentials);
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