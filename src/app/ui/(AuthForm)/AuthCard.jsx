const AuthCard = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center" id={props.id}>
            <div className="card mx-2 w-100 py-3">
                <h2 className="text-center fw-bolder">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
}

export default AuthCard;