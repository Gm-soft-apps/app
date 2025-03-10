const Toast = (props) => {
    return (
        <div className="toast-container position-fixed top-0">
            <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    {/* <img src="..." className="rounded me-2" alt="..."/> */}
                        <strong className="me-auto">{props.message}</strong>
                        {/* <small>11 mins ago</small> */}
                        {/* <button type="button" className="btn-close btn-lg" data-bs-dismiss="toast" aria-label="Close"></button> */}
                </div>
                {/* <div className="toast-body">
                    Hello, world! This is a toast message.
                </div> */}
            </div>
        </div>
    );
}

export default Toast;