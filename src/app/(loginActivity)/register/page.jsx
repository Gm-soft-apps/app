"use client"

import { Suspense, useState } from "react";
import { validateSignUp } from "app/lib/validations";
import AuthSubmitButton from "app/ui/AuthForm/AuthSubmitButton";
import AuthErrorMsg from "app/ui/AuthForm/AuthErrorMsg";
import { signUpAction } from "app/actions/auth";
import { useSearchParams } from "next/navigation";

const SignupForm = () => {
    const searchParams = useSearchParams();
    const referral = searchParams.get("ref");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [invitedBy, setInvitedBy] = useState(referral || "WELCOME");
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

        const { success, data, error } = validateSignUp.safeParse({ phoneNumber, password, confirmPass, invitedBy });
        if (!success) {
            setAlert(error.flatten().fieldErrors);
            return;
        }
        setAlert(data);

        try {
            setLoading(true);
            const resp = await signUpAction(data);
            setLoading(false);
            (typeof resp === "object" ? setAlert : setMessage)(resp);
        } catch (error) {
            setLoading(false);
            if (error.message === "NEXT_REDIRECT") return null;
            setMessage("Something went wrong!")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="my-2 px-3" noValidate>
            <div className="mb-2">
                <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                <div className="input-group my-1">
                    <span className="input-group-text px-2 fw-semibold">+91</span>
                    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`form-control p-2 fw-semibold ${isValid(alert.phoneNumber)}`} id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                    <div className="invalid-feedback">{alert.phoneNumber}</div>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label fw-semibold">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control p-2 my-1 was-validated fw-semibold ${isValid(alert.password)}`} id="password" name="password" placeholder="Enter Password" required />
                <div className="invalid-feedback">
                    <div className="fw-semibold">Password must be:</div>
                    <ul>{Array.isArray(alert.password) ? alert.password.map((err) => <li className="list-unstyled ms-2" key={err}>- {err}</li>) : null}</ul>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="confirm-password" className="form-label fw-semibold">Confirm Password</label>
                <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className={`form-control p-2 my-1 fw-semibold  ${isValid(alert.confirmPass)}`} id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                <div className="invalid-feedback">
                    <div className="fw-semibold">Fix</div>
                    <ul>{Array.isArray(alert.confirmPass) ? alert.confirmPass.map((err) => <li className="list-unstyled ms-2" key={err}>- {err}</li>) : null}</ul>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="invitedBy" className="form-label fw-semibold">Referral Code</label>
                <input type="text" value={invitedBy} onChange={(e) => setInvitedBy(e.target.value)} className={`form-control p-2 my-1 fw-semibold  ${isValid(alert.invitedBy)}`} id="invitedBy" name="invitedBy" placeholder="(optional)" readOnly disabled />
                <div className="invalid-feedback">{alert.invitedBy}</div>
            </div>
            <AuthErrorMsg message={message} />
            <AuthSubmitButton loading={loading} btnText={"Register"} />
        </form>
    );
}

const Signup = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupForm />
        </Suspense>
    );
};
export default Signup;