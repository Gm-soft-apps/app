const CopyToast = (props) => {
    return (
        <div id="liveToast" className="w-100 py-1 toast text-bg-secondary" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex justify-content-center align-items-center">
                <div className="toast-body">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default CopyToast;