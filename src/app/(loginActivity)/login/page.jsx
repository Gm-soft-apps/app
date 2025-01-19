"use client"

import AuthErrorMsg from "app/ui/(AuthForm)/AuthErrorMsg";
import AuthSubmitButton from "app/ui/(AuthForm)/AuthSubmitButton";
import Loading from "app/ui/(AuthForm)/loading";
import { useState } from "react";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // const resp = await loginAuth({ phoneNumber, password });

            setStatus(resp.status);
            setLoading(false);
            setMessage(resp.message);

            if (resp.status) {
                resetForm();
            }

        } catch (err) {
            setStatus(false);
            setLoading(false);
            setMessage("Something went wrong, Try again!");
        }
    }

    return (
        <>
                <form onSubmit={handleSubmit} className="my-2 px-3">
                    <div className="mb-2">
                        <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                        <div className="input-group my-1">
                            <span className="input-group-text px-2 fw-semibold">+91</span>
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control p-2 fw-semibold" id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="invalid-feedback">{message}</div>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label fw-semibold">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control p-2 my-1 fw-semibold" id="password" name="password" placeholder="Enter Password" required />
                    </div>
                    <AuthErrorMsg/>
                    <AuthSubmitButton btnText="Login" />
                </form>
                {
                    loading ? <Loading /> : ""
                }
        </>
    );
}

export default Login;