const Wallet = () => {
    return (
        <div className="mx-2">
            <div className="d-flex justify-content-end align-items-center"><span className="px-2 my-1 py-1 btn btn-outline-dark rounded-1">History <i className="bi bi-list"></i></span></div>
            <div className="card rounded-1 p-2 text-center shadow my-2">
                <h3>Available Balance</h3>
                <h3 className="fw-bold fs-1 my-3">₹---</h3>
                <div className="w-100 btn btn-primary py-2 fw-semibold">Withdraw</div>
            </div><hr />
            <div className="d-flex justify-content-between align-items-center gap-1 my-2">
                <button className="w-100 btn btn-success fw-semibold py-1 px-2">All</button>
                <button className="w-100 btn btn-success fw-semibold py-1 px-2">Completed</button>
                <button className="w-100 btn btn-success fw-semibold py-1 px-2">Processing</button>
                <button className="w-100 btn btn-success fw-semibold py-1 px-2">Failed</button>
            </div>
            <div className="my-2 card p-2 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <img src="https://portal.amfiindia.com/images/logos/logo63.gif" width="60px" height="60px" />
                    <h3 className="ms-3 w-100">Text Info</h3>
                </div>
                <div className="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success fw-bold" style={{width:"50%"}}>50%</div>
                </div>
            </div>

            <div className="my-2 card p-2 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <img src="https://portal.amfiindia.com/images/logos/logo63.gif" width="60px" height="60px" />
                    <h3 className="ms-3 w-100">Text Info</h3>
                </div>
                <div className="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success fw-bold" style={{width:"75%"}}>75%</div>
                </div>
            </div>
        </div>
    );
}

export default Wallet