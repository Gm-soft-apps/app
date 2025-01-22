import Loading from "./loading";

const AuthSubmitButton = (props) => {
    const loading = props.loading;
    return (
        // <div className="">
        //     <button type="submit" className="btn btn-dark w-100 p-2 fw-bold">{props.btnText}</button>
        // </div>
        <div className="">
            <button type="submit" className={`w-100 btn btn-dark p-2 fw-bold ${loading ? "disabled" : "bg-dark"}`}>
                {loading ? <Loading /> : props.btnText}
            </button>
        </div>
    );
}

export default AuthSubmitButton;