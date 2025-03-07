const Modal = (props) => {
    return (
        <div className="modal fade" id="signoutModal" tabIndex="-1" aria-labelledby="signoutModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered mx-2">
                <div className="modal-content p-2">
                    <div className="modal-header flex justify-content-between align-items-center">
                        <h2 className="modal-title fs-5" id="signoutModalLabel">{props.head}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body py-2">
                        {props.body}
                    </div>
                    <div className="modal-footer pt-2">
                        <button type="button" className="btn btn-secondary px-2 py-1 fw-semibold" data-bs-dismiss="modal">NO</button>
                        <button type="button" className="btn btn-primary px-2 py-1 fw-semibold ms-2" onClick={props.action}>{props.text}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;