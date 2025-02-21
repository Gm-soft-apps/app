"use server"

import { validateSignIn, validateSignUp } from "app/lib/validations";
import { signIn } from "auth";
import { redirect } from "next/navigation";

export const loginAction = async (formData) => {
    //server side LogIn form validation
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
        return error.type === "CallbackRouteError" ? "Account Login Failed, Try Again !" : error.message;
    }

    redirect("/dashboard")
}

export const signUpAction = async (formData) => {
    //server side singUp form validation
    const { success, data, error } = validateSignUp.safeParse(formData);
    if (!success) {
        return error.flatten().fieldErrors;
    }

    try {
        const resp = await signIn("credentials", {
            phoneNumber: data.phoneNumber,
            password: data.password,
            invitedBy: data.invitedBy,
            isRegistering: true,
            redirectTo: "/dashboard",
            redirect: false,
        });
    } catch (error) {
        return error.message;
    }

    return redirect("/dashboard");
}