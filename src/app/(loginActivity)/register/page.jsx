"use client"

import Loading from "app/components/loading";
import { useState } from "react";
import Link from 'next/link'
import { registerAuth } from "app/actions/registerAuth";
import { validateSignUp } from "app/lib/validations";

const Signup = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [invitedBy, setInvitedBy] = useState(undefined);
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState({
        phoneNumber: null,
        password: null,
        confirmPass: null,
        invitedBy: null,
    });
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setPhoneNumber("");
        setPassword("");
        setConfirmPass("");
        setInvitedBy("");
        // setStatus(false);
        setLoading(false);
    }

    const isvalid = (props) => {
        // return props ? "is-invalid" : props === null ? "" : "is-valid"
        if (props === null) return ""; // No validation applied
        if (Array.isArray(props)) return "is-invalid"; // Error
        return "is-valid"; // Valid
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { success, data, error } = validateSignUp.safeParse({ phoneNumber, password, confirmPass, invitedBy });
        if (!success) {
            const formattedErrors = Object.fromEntries(
                Object.entries(error.format()).map(([key, value]) => [key, value._errors])
            );
            // Set alert state
            setAlert(formattedErrors);
            setLoading(false);
            return;
        }

        setAlert(data);

        try {
            const resp = await registerAuth({ phoneNumber: data.phoneNumber, password: data.password, confirmPass: data.confirmPass, invitedBy: data.invitedBy });

            if (resp.status) {
                setStatus(resp.status);
                setLoading(false);
                setMessage(resp.message);
                resetForm();
            } else {
                setStatus(false);
                setLoading(false);
                setMessage(resp.message);
            }
        } catch (err) {
            setStatus(false);
            setLoading(false);
            setMessage("Something went wrong!")
        }
    }

    return (
        <>
            <div className="my-4 text-center"><h1>LOGO</h1></div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Register Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <Link href="/register" className="btn btn-outline-success w-100 py-2 fw-bold disabled" role="button">Register</Link>
                        <Link href="/login" className="btn btn-success w-100 py-2 fw-bold" role="button">Login</Link>
                    </div>
                    <form onSubmit={handleSubmit} className="my-2 px-3 needs-validations" noValidate>
                        <div className="mb-2">
                            <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                            <div className="input-group my-1">
                                <span className="input-group-text px-2 fw-semibold">+91</span>
                                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`form-control p-2 fw-semibold ${isvalid(alert.phoneNumber)}`} id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                                <div className="invalid-feedback">{alert.phoneNumber}</div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`form-control p-2 my-1 was-validated fw-semibold ${isvalid(alert.password)}`} id="password" name="password" placeholder="Enter Password" required />
                            <div className="invalid-feedback">
                                <div className="fw-semibold">Password must be:</div>
                                <ul>{Array.isArray(alert.password) ? alert.password.map((err)=><li className="list-unstyled ms-2" key={err}>- {err}</li>) : null}</ul>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirm-password" className="form-label fw-semibold">Confirm Password</label>
                            <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className={`form-control p-2 my-1 fw-semibold  ${isvalid(alert.confirmPass)}`} id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                            <div className="invalid-feedback">
                                <div className="fw-semibold">Fix</div>
                                <ul>{Array.isArray(alert.confirmPass) ? alert.confirmPass.map((err)=><li className="list-unstyled ms-2" key={err}>- {err}</li>) : null}</ul>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="invitedBy" className="form-label fw-semibold">Referral Code</label>
                            <input type="text" value={invitedBy} onChange={(e) => setInvitedBy(e.target.value)} className={`form-control p-2 my-1 fw-semibold  ${isvalid(alert.invitedBy)}`} id="invitedBy" name="invitedBy" placeholder="(optional)" />
                            <div className="invalid-feedback">{alert.invitedBy}</div>
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">Register Now</button>
                        </div>
                    </form>
                </div>
                {
                    loading ? <Loading /> : ""
                }
            </div>
        </>
    );
}
export default Signup;