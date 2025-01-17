"use server";

import { signIn } from "../../../auth"

export const SignIn = async (props) => {
    return await signIn("credentials",props);
} 