const AuthSubmitButton = (props) => {
    return (
        <div className="">
            <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">{props.btnText}</button>
        </div>
    );
}

export default AuthSubmitButton;