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

            <div className="my-2 p-2 border">
                <ul className="nav nav-tabs mb-2 row gap-1 fw-semibold">
                    <li className="nav-item col">
                        <button className="nav-link active w-100" id="self-tab" data-bs-toggle="tab" data-bs-target="#self" type="button" role="tab" aria-controls="self" aria-selected="true">Self Link</button>
                    </li>
                    <li className="nav-item col">
                        <button className="nav-link w-100" id="share-tab" data-bs-toggle="tab" data-bs-target="#share" type="button" role="tab" aria-controls="share" aria-selected="false">Share Link</button>
                    </li>
                </ul>

                <div className="tab-content">
                    {/* Self Link Tab */}
                    <div className="tab-pane fade show active" id="self" role="tabpanel" aria-labelledby="self-tab">
                        <div className="text-center my-2 fw-semibold border py-1">https://gm-app.netlify.app</div>
                    </div>

                    {/* Share Link Tab */}
                    <div className="tab-pane fade" id="share" role="tabpanel" aria-labelledby="share-tab">
                        <div className="text-center my-2 fw-semibold border py-1">https://gm-app.netlify.app/share</div>
                        <div className="row justify-content-evenly">
                            <button className="col-5 py-1 btn btn-dark fw-semibold rounded-1">Copy <i className="bi bi-copy"></i></button>
                            <button className="col-5 py-1 btn btn-dark fw-semibold rounded-1">Share <i className="bi bi-share"></i></button>
                        </div>
                    </div>
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