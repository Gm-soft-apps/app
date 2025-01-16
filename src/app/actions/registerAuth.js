"use server"

import { createUser } from "db/users/handler"

export const registerAuth = async ({phoneNumber, password, confirmPass, invitedBy}) => {

    if (!phoneNumber || !password || !confirmPass) {
        return {
            status: false,
            message: "Please fill required Data.",
        }
    }

    if (password !== confirmPass) {
        return {
            status: false,
            message: "Both Passwords not matched.",
        }
    }

    try {
        const resp = await createUser({phoneNumber, password});

        return{
            status:true,
            message: "Account created successfully.",
        }

    } catch (err) {
        return {
            status: false,
            message: "Account creation failed, try again."
        }
    }
}