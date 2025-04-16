"use server"

import Link from "next/link";

const Wallet = () => {
    return (
        <div className="mx-1">
            <section className="bg-dark row align-items-center rounded-1">
                <div id="carouselExampleAutoplaying" className="carousel carousel-fade col" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2500">
                            <img src="/wallet-banner-1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img src="/wallet-banner-2.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img src="/wallet-banner-3.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img src="/wallet-banner-4.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <Link href={"/dashboard/wallet/history"} className="w-100 p-1 link-light text-decoration-none fw-semibold">History <i className="bi bi-list"></i></Link>
                </div>
            </section>

            <section className="bg-white text-center rounded-1 my-2">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="py-1 fs-5 fw-semibold">Pending Balance</th>
                            <th className="py-1 fs-5 fw-semibold">Available Balance</th>
                        </tr>
                        <tr>
                            <td className="py-1 fw-semibold text-success">₹0.00</td>
                            <td className="py-1 fw-semibold text-warning">₹0.00</td>
                        </tr>
                    </thead>
                </table>
                <div className="px-2 pb-2">
                    <button className="btn btn-primary w-100 py-1 fw-bold disabled mt-2">Withdraw</button>
                </div>
            </section><hr />

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
                    <div className="progress-bar progress-bar-striped bg-danger fw-bold" style={{ width: "50%" }}>50%</div>
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