"use client"

import Loading from "app/components/loading";
import { useState } from "react";

const Signup = () => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [message, setMessage] = useState("");
    const [passMatch, setPassMatch] = useState(false);
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    // const [formData, setFormData] = useState({})

    const resetForm = ()=> {
        // setPhoneNumber("");
        // setPassword("");
        // setConfirmPass("");
        // setReferralCode("");
        // setPassMatch(false);
        // setIsAccountCreated(false);
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

        if(!passMatch){
            setIsAccountCreated(false)
            setMessage("confirm password not matched")
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber, password, confirmPass, referralCode }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setIsAccountCreated(true)
            } else {
                setMessage(data.message || 'Something went wrong.');
                setIsAccountCreated(false)
            }

            resetForm();
        } catch (error) {
            // setMessage('Error submitting the form.');
            console.log(error)
        }
    }

    return (
        <>
            <div className="my-4 text-center"><h1>LOGO</h1></div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Register Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <a href="/signup" className="btn btn-outline-success w-100 py-2 fw-bold" role="button">Sign Up</a>
                        <a href="/login" className="btn btn-success w-100 py-2 fw-bold" role="button">Login</a>
                    </div>
                    <form onSubmit={handleSubmit} className="my-2 px-3">
                        <div className="mb-2">
                            <label htmlFor="phone-number" className="form-label fw-semibold">Phone Number</label>
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control p-2 my-1" id="phone-number" name="phone-number" placeholder="Enter Mobile Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control p-2 my-1" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirm-password" className="form-label fw-semibold">Confirm Password</label>
                            <input type="password" value={confirmPass} onChange={(e) => { setConfirmPass(e.target.value); checkPass(e) }} className={`form-control p-2 my-1`} id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="referral-code" className="form-label fw-semibold">Referral Code</label>
                            <input type="text" value={referralCode} onChange={(e) => setReferralCode(e.target.value)} className="form-control p-2 my-1" id="referral-code" name="referral-code" placeholder="(optional)" />
                        </div>
                        <div id="error-msg" className={`fw-semibold m-1 ${isAccountCreated ? "text-success" : "text-danger"}`}>{message}</div>
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
                    // isLoad ? "" : <Loading />
                }
            </div>
        </>
    );
}
export default Signup;