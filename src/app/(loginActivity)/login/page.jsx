const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div id="loginPage" className="mx-1 card w-100 py-3">
                <h2 className="text-center fw-bolder">Login</h2>
                <form className="px-3 my-3">
                    <div className="mb-3">
                        <label htmlFor="mobile-number" className="form-label fw-semibold">Phone Number</label>
                        <input type="tel" className="form-control p-2" id="mobile-number" name="mobile-number" placeholder="Enter Mobile Number" required pattern="[0-9]{10}" minLength={10} maxLength={10}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold">Enter Password</label>
                        <input type="password" className="form-control p-2" id="password" name="password" placeholder="Enter Password"/>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-success w-100 p-2 fw-bold">Sign in</button>
                    </div>
                    <div className="my-2">Don't have an account? <a href="/signup" className="text-decoration-none fw-semibold">Sign Up</a></div>
                </form>
            </div>
        </div>
    );
}

export default Login;