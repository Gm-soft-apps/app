import { z } from "zod"
import validator from "validator";

export const validateSignIn = z.object({
    phoneNumber: z
        .string()
        .trim()
        .refine((val) => validator.isMobilePhone(val, 'en-IN'), {
            message: "Invalid phone number!"
        }),
    password: z
        .string()
        .min(8, { message: 'Must be at least 8 characters long.' })
        .regex(/[a-z]/, { message: 'Contain at least one lowercase letter.' })
        .regex(/[A-Z]/, { message: 'Contain at least one uppercase letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .max(32, { message: 'Must be less than 32 characters long.' })
        .trim(),
});

export const validateSignUp = validateSignIn.extend({
    confirmPass: z
        .string()
        .min(8, { message: 'Must be at least 8 characters long.' })
        .trim(),
    invitedBy: z
        .string()
        .length(6, { message: 'Invalid Referral code.' })
        .regex(/[A-Z0-9]/, { message: 'Invalid Referral code.' })
        .trim().optional(),
}).refine((data) => data.password === data.confirmPass, {
    message: 'Passwords do not match.',
    path: ["confirmPass"],
});
