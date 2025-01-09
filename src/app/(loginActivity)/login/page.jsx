const Login = () => {
    return (
        <>
            <div className="my-4 text-center"><h1>LOGO</h1></div>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card mx-2 w-100 py-3" id="login-page">
                    <h2 className="text-center fw-bolder">Login to Account</h2>
                    <div className="d-flex justify-content-center align-items-center px-2 gap-1 my-3">
                        <a href="/signup" className="btn btn-success w-100 py-2 fw-bold" role="button">Sign Up</a>
                        <a href="/login" className="btn btn-outline-success w-100 py-2 fw-bold" role="button">Login</a>
                    </div>
                    <form action="" className="my-2 px-3">
                        <div className="mb-2">
                            <label htmlFor="mobile-number" className="form-label fw-semibold">Phone Number</label>
                            <input type="tel" className="form-control p-2 my-1" id="mobile-number" name="mobile-number" placeholder="Enter Mobile Number" required pattern="[0-9]{10}" minLength={10} maxLength={10} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label fw-semibold">Password</label>
                            <input type="password" className="form-control p-2 my-1" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                        <div className="">
                            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">Login</button>
                        </div>
                    </form>
                    <div id="google-signin" className="text-center px-3">
                        <div className="fw-semibold my-1">OR</div>
                        <button className="btn btn-dark w-100 py-2 fw-bold">Google Signin</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;