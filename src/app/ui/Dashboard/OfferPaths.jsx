"use server"

import { createOfferPathAction } from "app/actions/offerPaths";
import { searchOfferPathWith } from "db/offer-paths/handler";
import { headers } from "next/headers";
import Link from "next/link";
import OfferLinkCopy from "./OfferLinkCopy";

const OfferLink = async ({ offer }) => {
    const reqHeaders = await headers();
    const user = JSON.parse(reqHeaders.get("x-user"));
    const protocol = reqHeaders.get("x-forwarded-proto");
    const host = reqHeaders.get("host");
    const forwardedFor= reqHeaders.get("x-forwarded-for");
    const userIP = forwardedFor.split(",")[0].trim()

    let offerPathObj = await searchOfferPathWith(offer.id, user.id);

    if (!offerPathObj) {
        offerPathObj = await createOfferPathAction(offer.id, user.id, userIP)
    }

    const selfLink = `${protocol}://${host}/${offerPathObj.path}`;
    const shareLink = `${protocol}://${host}/s/${offerPathObj.path}`;

    return (
        <>
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
                        <Link href={selfLink} target="_blank" prefetch={false} className="text-center d-block text-decoration-none link-dark my-2 fw-semibold border py-1">{selfLink}</Link>
                        <div className="text-center my-1 fw-semibold text-danger text-small">* Click the link above</div>
                    </div>

                    {/* Share Link Tab */}
                    <div className="tab-pane fade" id="share" role="tabpanel" aria-labelledby="share-tab">
                        <Link href={shareLink} target="_blank" prefetch={false} className="text-center d-block text-decoration-none link-dark my-2 fw-semibold border py-1">{shareLink}</Link>
                        {/* <div className="row justify-content-evenly">
                            <div className="col-5 py-1 bg-dark text-white text-center fw-semibold rounded-1">Copy <i className="bi bi-copy"></i></div>
                            <div className="col-5 py-1 bg-dark text-white text-center fw-semibold rounded-1">Share <i className="bi bi-share"></i></div>
                        </div> */}
                        <OfferLinkCopy shareLink={shareLink}/>
                    </div>
                </div>
            </div><hr />
        </>
    );
}

export default OfferLink;