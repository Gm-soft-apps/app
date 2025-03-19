"use server"

import { getOfferByID } from "db/offers/handler";

const OfferPage = async ({ params }) => {
    const { id } = await params;

    const offer = await getOfferByID(id);
    return (
        <div className="px-1">
            <div id="offer-banner">
                <img src={offer.offerBanner} className="w-100 shadow" alt={offer.offerName} height={180} />
            </div>
            <div className="bg-white my-2 px-1 py-1 row gap-1">
                <button className="col btn btn-dark fw-semibold w-100 py-1 rounded-1">Self Link</button>
                <button className="col btn btn-dark fw-semibold w-100 py-1 rounded-1">Share Link</button>
                <div className="text-center my-2 fw-semibold">https://gm-app.netlify.app</div>
                <div className="row justify-content-around">
                    <button className="col-5 btn btn-dark fw-semibold">Copy</button>
                    <button className="col-5 btn btn-dark fw-semibold">Share</button>
                </div>
            </div>

            <div id="offerDetails">
                <h3>Offer Details</h3>
                <div>{offer.offerDetails}</div>
            </div>

            <section id="offer-steps">
                <h3>Offer Steps</h3>
                <div>{offer.offerSteps}</div>
            </section>

            <section id="offer-terms">
                <h3>Offer Terms</h3>
                <div>{offer.offerTerms}</div>
            </section>
        </div>
    );
}

export default OfferPage;