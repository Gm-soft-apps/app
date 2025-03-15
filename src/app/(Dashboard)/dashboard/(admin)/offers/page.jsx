"use server"

import { getAllOffers } from "db/offers/handler";
import Link from "next/link";

const Offers = async () => {

    const offers = await getAllOffers();
    // console.log(offers);

    return (
        offers.map((offer) => {
            return (
                <Link href={"/dashboard/offers/edit/"+offer.id} prefetch={true} className="text-decoration-none link-dark border border-2 border-black bg-white rounded-1 my-2 p-2 row align-items-center">
                    <div className="col-3 position-relative">
                        <span className="position-absolute top-0 start-0 bg-primary text-white px-2 rounded-pill">{offer.offerPriority}</span>
                        <img src={offer.offerLogo} className="rounded shadow" alt="img" width={65} height={65} />
                    </div>
                    <div className="col-6">
                        <h2 className="fs-5">{offer.offerName} - {offer.id}</h2>
                        <div className="fs-6 fw-semibold">{offer.offerTitle}</div>
                    </div>
                    <div className="d-flex flex-column gap-2 col-3 text-center">
                        <div className="bg-warning px-2 fw-semibold rounded-1">{offer.offerPayout}</div>
                        <div className={`text-white px-2 rounded-1 fw-semibold ${offer.offerStatus ? "bg-success":"bg-danger"}`}>{offer.offerStatus ? "Active" : "In-active"}</div>
                    </div>
                </Link>
            )
        })
    );
}

export default Offers