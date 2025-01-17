"use server";

import { signIn } from "~/auth"
import { AuthError } from "next-auth";

export const SignIn = async (props) => {
    try {
        await signIn("credentials",{redirectTo: "/dashboard", ...props});
    } catch(err) {
        if (err instanceof AuthError) {
            switch (err.type) {
                case "CredentialsSignin":
                    return { msg: "Invalid credentials" , status: "error"};
                case "CredentialsSignin":
                    throw err;
                default:
                    return { msg: "Something went wrong", status: "error" };
            }
        }
        return err
    }
} 