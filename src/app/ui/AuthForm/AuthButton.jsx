import Link from "next/link";

const AuthButton = (props) => {
    return (
        <Link href={props.path} role="button" className={`col w-100 py-2 fw-bold btn ${props.isDisabled ? 'btn-outline-success disabled' : 'btn-success'}`}>{props.btnText}</Link>
    );
}

export default AuthButton;