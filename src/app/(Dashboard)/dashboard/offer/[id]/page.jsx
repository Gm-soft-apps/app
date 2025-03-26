"use server"

import { getOfferByID } from "db/offers/handler";

const OfferPage = async ({ params }) => {
    const { id } = await params;
    const offer = await getOfferByID(id);

    return (
        <div className="px-1 bg-white">
            <div id="offer-banner">
                <img src={offer.offerBanner} className="w-100 shadow-lg" alt={offer.offerName} height={120} />
            </div>
            <div className="bg-white mb-2 px-1 py-1 row gap-1 border">
                <button className="col btn btn-dark fw-semibold w-100 py-1 rounded-1">Self Link</button>
                <button className="col btn btn-dark fw-semibold w-100 py-1 rounded-1">Share Link</button>
                <div className="text-center my-2 fw-semibold">https://gm-app.netlify.app</div>
                <div className="row justify-content-around">
                    <button className="col-5 btn btn-dark fw-semibold">Copy</button>
                    <button className="col-5 btn btn-dark fw-semibold">Share</button>
                </div>
            </div><hr />

            <div id="offerDetails" className="my-2">
                <h3 className="fs-6 my-1 text-primary">Offer Details</h3>
                <div dangerouslySetInnerHTML={{ __html: offer.offerDetails || "N/A" }}></div>
            </div><hr />

            <section id="offer-steps" className="my-2">
                <h3 className="fs-6 my-1 text-primary">Offer Steps</h3>
                <div dangerouslySetInnerHTML={{ __html: offer.offerSteps || "N/A" }}></div>
            </section><hr />

            <section id="offer-terms" className="my-2">
                <h3 className="fs-6 my-1 text-primary">Offer Terms</h3>
                <div dangerouslySetInnerHTML={{ __html: offer.offerTerms || "N/A" }}></div>
            </section><hr />

            <section id="offer-docs" className="my-2">
                <h3 className="fs-6 my-1 text-primary">Offer Documents</h3>
                <div dangerouslySetInnerHTML={{ __html: offer.offerDocs || "N/A" }}></div>
            </section><hr />

            <section id="offer-payout-rules" className="my-2">
                <h3 className="fs-6 my-1 text-primary">Offer Payout Rules</h3>
                <div dangerouslySetInnerHTML={{ __html: offer.offerPayoutRules || "N/A" }}></div>
            </section>
        </div>
    );
}

export default OfferPage;