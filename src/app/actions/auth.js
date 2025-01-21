"use server"

import { validateSignIn } from "app/lib/validations";
import { signIn, signOut } from "auth";
import { redirect } from "next/navigation";

export const authLogin = async (formData) => {

    //server side form validation
    const { success, data, error } = validateSignIn.safeParse(formData);
    if (!success) {
        return error.flatten().fieldErrors;
    }

    try {
        const resp = await signIn("credentials", {
            phoneNumber: data.phoneNumber,
            password: data.password,
            redirectTo: "/dashboard",
            redirect: false,
        });
    } catch (error) {
        return error.message;
    }

    redirect("/dashboard")
}

export const authSignOut = async ()=>{
    await signOut();
}