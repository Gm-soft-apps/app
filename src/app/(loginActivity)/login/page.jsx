"use client"

import { loginAction } from "app/actions/auth";
import { validateSignIn } from "app/lib/validations";
import AuthErrorMsg from "app/ui/(AuthForm)/AuthErrorMsg";
import AuthSubmitButton from "app/ui/(AuthForm)/AuthSubmitButton";
import { useState } from "react";

const Login = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        phoneNumber: null,
        password: null,
        confirmPass: null,
        invitedBy: null,
    });

    const isValid = (props) => {
        // return props ? "is-invalid" : props === null ? "" : "is-valid"
        if (props === null) return ""; // No validation applied
        if (Array.isArray(props)) return "is-invalid"; // Error
        return "is-valid"; // Valid
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { success, data, error } = validateSignIn.safeParse({ phoneNumber, password });
        if (!success) {
            setAlert(error.flatten().fieldErrors);
            return;
        }
        setAlert(data);

        try {
            setLoading(true);
            const resp = await loginAction(data);
            setLoading(false);
            (typeof resp === "object" ? setAlert : setMessage)(resp);
        } catch (error) {
            setLoading(false);
            if (error.message === "NEXT_REDIRECT") return null;
            setMessage("Something went wrong, Try again!")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="my-2 px-3" noValidate>
            <div className="mb-2">
                <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                <div className="input-group my-1">
                    <span className="input-group-text px-2 fw-semibold">+91</span>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`form-control p-2 fw-semibold ${isValid(alert?.phoneNumber)}`} id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                    <div className="invalid-feedback">{alert?.phoneNumber}</div>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control p-2 my-1 was-validated fw-semibold ${isValid(alert?.password)}`} id="password" name="password" placeholder="Enter Password" required />
                <div className="invalid-feedback">
                    <div className="fw-semibold">Password must be:</div>
                    <ul>{Array.isArray(alert?.password) ? alert?.password.map((err) => <li className="list-unstyled ms-2" key={err}>- {err}</li>) : null}</ul>
                </div>
            </div>
            <AuthErrorMsg message={message} />
            <AuthSubmitButton loading={loading} btnText={"Login"} />
        </form>
    );
}

export default Login;