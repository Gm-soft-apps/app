import { z } from "zod";
import validator from "validator";

const page = () => {

    const signUpFormSchema = z.object({
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
        confirmPass: z
            .string()
            .min(8, { message: 'Must be at least 8 characters long.' })
            .trim().refine(val => console.log(val)),
    }).refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match.',
        path: ["confirmPassword"],
    });



    console.log(
        signUpFormSchema.safeParse({
            phoneNumber: "6666666666",
            password: "$jgudfyFe54enu#",
            confirmPass: "$jgudfyFe54enu#"
        })
    );
    // console.log(validator.isStrongPassword("$jgudfyFe54enu#"))

    return (
        <>hi</>
    )

}

export default page;
