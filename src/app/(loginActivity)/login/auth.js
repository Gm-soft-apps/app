"use server"

import { loginUser } from "db/users/handler";

export const auth = async ({phoneNumber, password}) => {

    if (!phoneNumber || !password) {
        return {
            status: false,
            message: "Phone Number & Password are required."
        };
    }

    if (phoneNumber.length !== 10) {
        return {
            status: false,
            message: "Phone Number must be 10 digit."
        }
    }

    if (await loginUser({phoneNumber, password})) {
        return {
            status: true,
            message: "Account login successful."
        }
    } else {
        return {
            status: false,
            message: "Invalid Credentials."
        }
    }
}