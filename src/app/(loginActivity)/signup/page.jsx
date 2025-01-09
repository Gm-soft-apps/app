const Signup = () => {
    return (
        <>
            <div className="bg-dark text-white p-3"><h1>LOGO</h1></div>
            <div className="h-90 d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Register Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <div className="btn btn-success p-2 w-100 fw-bold">Sign Up</div>
                        <div className="btn btn-success p-2 w-100 fw-bold">Login</div>
                    </div>
                    <form action="" className="my-3 px-3">
                        <div className="mb-3">
                            <label htmlFor="mobile-number" className="form-label fw-semibold">Phone Number</label>
                            <input type="tel" className="form-control p-2 my-1" id="mobile-number" name="mobile-number" placeholder="Enter Mobile Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">Enter Password</label>
                            <input type="password" className="form-control p-2 my-1" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;