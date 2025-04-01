import Link from "next/link";

const Wallet = () => {
    return (
        <div className="mx-1">
            <div className="row gap-1">
                <div className="col bg-white text-center py-1 rounded-start-2">
                    <img className="w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqqGUTfWX5VisLv6q8l586IskPaKyUe_5UI31J0GllIYB8SvZ83k4bDTH3_a4KBUDqpl6X6ZWMdsRbPTiD25L3yTwHB6Aqm2H2a5_anTg1KJWxKRWh6CklL1MZuKxJ3epLRcLytX3V2rkQwN7dDZVCKO7ScXv7tEZ0QWDv-iuAupxXelv2j3FmXhhqJ9M/s16000/%E2%82%B9200%20(2).png" alt="wallet Banner" height={23}/>
                </div>
                <span className="col-3 px-2 py-1 btn btn-dark rounded-start-0 rounded-end-2">History <i className="bi bi-list"></i></span>
            </div>
            <div className="card rounded-1 p-2 text-center shadow my-2">
                <h3>Available Balance</h3>
                <h3 className="fw-bold fs-1 my-3">₹360.81</h3>
                <div className="w-100 btn btn-primary py-1 fw-bold disabled">Withdraw</div>
            </div><hr />
            <div className="row gap-1 mt-2">
                <Link href={""} className="col-2 py-1 link-light text-center fw-semibold text-decoration-none rounded-1 bg-dark">All</Link>
                <Link href={""} className="col   py-1 link-light text-center fw-semibold text-decoration-none rounded-1 bg-success">Completed</Link>
                <Link href={""} className="col   py-1 link-light text-center fw-semibold text-decoration-none rounded-1 bg-success">Processing</Link>
                <Link href={""} className="col-2 py-1 link-light text-center fw-semibold text-decoration-none rounded-1 bg-success">Failed</Link>
            </div>
            <div className="my-2 card p-2 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <img src="https://portal.amfiindia.com/images/logos/logo63.gif" width="60px" height="60px" />
                    <h3 className="ms-3 w-100">Text Info</h3>
                </div>
                <div className="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success fw-bold" style={{ width: "50%" }}>50%</div>
                </div>
            </div>

            <div className="my-2 card p-2 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <img src="https://portal.amfiindia.com/images/logos/logo63.gif" width="60px" height="60px" />
                    <h3 className="ms-3 w-100">Text Info</h3>
                </div>
                <div className="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-success fw-bold" style={{ width: "75%" }}>75%</div>
                </div>
            </div>
        </div>
    );
}

export default Wallet