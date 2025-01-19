import Link from "next/link";

const AuthNavBtns = (props) => {
    return (
        <div className="row gap-1 mx-2 my-3">
            <Link href="/register" role="button" className={`col w-100 py-2 fw-bold btn ${props.isRegisterPage ? 'btn-outline-success disabled' : 'btn-success'}`}>Register</Link>
            <Link href="/login" role="button" className={`col w-100 py-2 fw-bold btn ${props.isLoginPage ? 'btn-outline-success disabled' : 'btn-success'}`}>Login</Link>
        </div>
    );
}

export default AuthNavBtns;