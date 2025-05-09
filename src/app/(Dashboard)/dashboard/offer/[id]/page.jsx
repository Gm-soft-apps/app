"use server"

import OfferLink from "app/ui/Dashboard/OfferPaths";
import { getOfferByID } from "db/offers/handler";

const OfferPage = async ({ params }) => {
    const { id } = await params;
    const offer = await getOfferByID(id);

    return (
        <div className="px-2 bg-white">
            <div id="offer-banner">
                <img src={offer.offerBanner} className="w-100 mt-1" alt={offer.offerName} height={120} />
            </div>
            
            <OfferLink offer={offer}/>

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