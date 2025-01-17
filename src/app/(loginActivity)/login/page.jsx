"use client"

import Loading from "app/components/loading";
import Link from "next/link";
import { useState } from "react";
// import { loginAuth } from "app/actions/loginAuth";
// import { signIn } from "../../../../auth";
import { SignIn } from "app/actions/signInAuth";
import { signInSchema } from "lib/zod";

const Login = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false)

    const resetForm = () => {
        setPhoneNumber("");
        setPassword("");
        // setMessage("");
        setLoading(false);
        // setStatus(false);
    }

    const submitForm = async () => {
        try {
            const { success, error, data } = signInSchema.safeParse({ phoneNumber, password })

            if (success) {
                const err = await SignIn({ phoneNumber, password })
                console.log("Login Error: ", err)
            } else {
                setMessage(error.issues[0].message);
            }

        } catch (err) {
            setMessage("Invalid Credentials!")
        }
    }

    return (
        <>
            <div className="my-4 text-center"><h1>LOGO</h1></div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Login Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <Link href="/register" className="btn btn-success w-100 py-2 fw-bold" role="button">Register</Link>
                        <Link href="/login" className="btn btn-outline-success w-100 py-2 fw-bold disabled" role="button">Login</Link>
                    </div>
                    {/* <form onSubmit={handleSubmit} className="my-2 px-3"> */}
                    <form action={async () => submitForm()} className="my-2 px-3">
                        <div className="mb-2">
                            <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control p-2 my-1 fw-semibold" id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control p-2 my-1 fw-semibold" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div id="error-msg" className={`fw-bold m-1 ${status ? "text-success" : "text-danger"}`}>{message}</div>
                        <div className="">
                            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">Login</button>
                        </div>
                    </form>
                    {/* <div id="google-signin" className="text-center px-3">
                        <div className="fw-semibold my-1">OR</div>
                        <button className="btn btn-dark w-100 py-2 fw-bold">Google Signin</button>
                        </div> */}
                </div>
                {
                    loading ? <Loading /> : ""
                }
            </div>
        </>
    );
}

export default Login;