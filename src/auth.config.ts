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
    id: number;
    phoneNumber: string;
    password: string;
    referralCode: string;
    isRegistering: boolean;
    invitedBy?: string; // Optional field if not always present
    registeredOn: Date;
    lastUpdated: Date;
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
                if (credentials.isRegistering) {
                    try {
                        user = await createUser(credentials);
                        return user[0] as any;
                    } catch (error) {
                        if (error.name === "LibsqlError") {
                            throw new CustomAuthError(`Account Creation Failed, Try Again !`);
                        }
                        throw new CustomAuthError(`Account Already Exists, Try Login!$`);
                    }
                }
                user = await getUserFromDb(credentials);
                if (!user) throw new CustomAuthError("Invalid Details!");
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