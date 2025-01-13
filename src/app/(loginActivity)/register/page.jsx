"use client"

import Loading from "app/components/loading";
import { useState } from "react";
import Link from 'next/link'

const Signup = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [message, setMessage] = useState("");
    const [passMatch, setPassMatch] = useState(false);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setPhoneNumber("");
        setPassword("");
        setConfirmPass("");
        setReferralCode("");
        setPassMatch(false);
        // setStatus(false);
        setLoading(false);
    }

    const checkPass = (e) => {
        if (password === e.target.value) {
            setPassMatch(true);
        } else {
            setPassMatch(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!passMatch) {
            setStatus(false);
            setLoading(false)
            setMessage("confirm password not matched");
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, password, confirmPass, referralCode }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setLoading(false);
                setStatus(true);
            } else {
                setMessage(data.message || 'Something went wrong.');
                setLoading(false);
                setStatus(false);
            }

            resetForm();
        } catch (error) {
            setMessage("Error submitting the form!");
            setLoading(false);
            setStatus(false);
        }
    }

    return (
        <>
            <div className="my-4 text-center"><h1>LOGO</h1></div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Register Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <Link href="/register" className="btn btn-outline-success w-100 py-2 fw-bold" role="button">Register</Link>
                        <Link href="/login" className="btn btn-success w-100 py-2 fw-bold" role="button">Login</Link>
                    </div>
                    <form onSubmit={handleSubmit} className="my-2 px-3">
                        <div className="mb-2">
                            <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control p-2 my-1 fw-semibold" id="phone-number" name="phone-number" placeholder="Enter Phone Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control p-2 my-1  fw-semibold" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirm-password" className="form-label fw-semibold">Confirm Password</label>
                            <input type="password" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value); checkPass(e) }} className={`form-control p-2 my-1 fw-semibold`} id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="referral-code" className="form-label fw-semibold">Referral Code</label>
                            <input type="text" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="form-control p-2 my-1 fw-semibold" id="referral-code" name="referral-code" placeholder="(optional)" />
                        </div>
                        <div id="error-msg" className={`fw-semibold m-1 ${status ? "text-success" : "text-danger"}`}>{message}</div>
                        <div className="">
                            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">Register Now</button>
                        </div>
                    </form>
                    {/* <div id="google-signin" className="text-center px-3">
                        <div className="fw-semibold my-1">OR</div>
                        <button className="btn btn-dark w-100 py-2 fw-bold">Google Sign Up</button>
                    </div> */}
                </div>
                {
                    loading ? <Loading /> : ""
                }
            </div>
        </>
    );
}
export default Signup;