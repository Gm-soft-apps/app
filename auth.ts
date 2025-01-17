import { loginUser } from "db/users/handler"
import { signInSchema } from "lib/zod"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        phoneNumber: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;
          const { phoneNumber, password } = await signInSchema.parseAsync(credentials)

          // logic to verify if the user exists
          user = await loginUser({ phoneNumber, password })

          if (!user) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.")
          }

          // return user object with their profile data
          return user
        } catch (err) {
          if (err instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
})