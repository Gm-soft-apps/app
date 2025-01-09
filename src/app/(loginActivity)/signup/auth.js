"use server"

import {db} from 'turso'
import { usersTable } from 'db/schema';

export async function auth (formData) {
    const user = {
        phone_number: formData.get("phone-number"),
        password: formData.get("password"),
        // referral_code: formData.get("referral-code"),
    }
    try{
        await db.insert(usersTable).values(user);
    } catch (e) {
        return -1
    }

    return 0
}