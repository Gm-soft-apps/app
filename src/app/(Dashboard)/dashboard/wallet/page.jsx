"use server"

import WalletCarousel from "app/ui/Others/WalletCarousel";
import Image from "next/image";
import Link from "next/link";

const Wallet = () => {
    return (
        <div className="mx-1">
            <section className="bg-dark row align-items-center rounded-1">
                <WalletCarousel />
                <div className="col-3 text-center">
                    <Link href={"/dashboard/wallet/history"} prefetch={true} className="w-100 p-1 link-light text-decoration-none fw-semibold">History <i className="bi bi-list"></i></Link>
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
                            <td className="py-1 fw-semibold text-warning">₹0.00</td>
                            <td className="py-1 fw-semibold text-success">₹0.00</td>
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

            <div className="my-2 bg-white p-2 row align-items-center position-relative">
                <div className="user-offer-payout bg-warning position-absolute top-0 end-0 px-3 w-auto fw-semibold">₹350</div>
                <div className="col-3">
                    <Image src="/avatar.webp" alt="convertion name" height={60} width={60} />
                </div>
                <div className="col">
                    <h3>User Convertion</h3>
                </div>
                <div className="progress mt-3" role="progressbar" aria-label="Danger striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped bg-warning fw-bold" style={{ width: "50%" }}>50%</div>
                </div>
                <div className="text-center fw-semibold mt-1">
                    Note: You Almost done
                </div>
            </div>
            <div className="text-center fw-semibold">No More Data</div>
        </div>
    );
}

export default Wallet