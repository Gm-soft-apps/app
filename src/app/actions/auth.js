"use server"

import { signIn } from "auth";

export const authLogin = async (formData) => {
    try {
        const resp = await signIn("credentials", {
            phoneNumber: formData.phoneNumber,
            password: formData.password,
            redirectTo: "/dashboard"
        });
        // console.log("authLogin resp : ", resp)
    } catch (err) {
        console.log("Error in authLogin catch: ", err)
    }
}