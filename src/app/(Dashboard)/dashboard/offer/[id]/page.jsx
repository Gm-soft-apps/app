"use server"

import { getOfferByID } from "db/offers/handler";

const OfferPage = async ({ params }) => {
    const { id } = await params;
    const offer = await getOfferByID(id);

    return (
        <div className="px-2 bg-white">
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

            {
                offer.offerDetails ? <div>
                    <div id="offerDetails" className="my-2">
                        <div dangerouslySetInnerHTML={{ __html: offer.offerDetails }}></div>
                    </div><hr />
                </div> : ""
            }

            {
                offer.offerSteps ? <div>
                    <section id="offer-steps" className="my-2">
                        {/* <h3 className="fs-6 my-1 text-primary">Offer Steps</h3> */}
                        <div dangerouslySetInnerHTML={{ __html: offer.offerSteps }}></div>
                    </section><hr />
                </div> : ""
            }

            {
                offer.offerTerms ? <div>
                    <section id="offer-terms" className="my-2">
                        {/* <h3 className="fs-6 my-1 text-primary">Offer Terms</h3> */}
                        <div dangerouslySetInnerHTML={{ __html: offer.offerTerms }}></div>
                    </section><hr />
                </div> : ""
            }

            {
                offer.offerDocs ? <div>
                    <section id="offer-docs" className="my-2">
                        {/* <h3 className="fs-6 my-1 text-primary">Offer Documents</h3> */}
                        <div dangerouslySetInnerHTML={{ __html: offer.offerDocs }}></div>
                    </section><hr />
                </div> : ""
            }

            {
                offer.offerPayoutRules ? <section id="offer-payout-rules" className="my-2">
                    {/* <h3 className="fs-6 my-1 text-primary">Offer Payout Rules</h3> */}
                    <div dangerouslySetInnerHTML={{ __html: offer.offerPayoutRules }}></div>
                </section> : ""
            }
        </div>
    );
}

export default OfferPage;