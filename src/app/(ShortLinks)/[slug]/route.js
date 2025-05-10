import { searchOfferPath } from "db/offer-paths/handler";
import { getOfferByID } from "db/offers/handler";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = await params;
    const headers = request.headers;

    const offerPathObj = await searchOfferPath(slug);

    if (!offerPathObj) {
        return NextResponse.redirect(new URL("/register", request.url))
    }

    const offerID = offerPathObj.offer_id;
    const userID = offerPathObj.user_id;
    const offer = await getOfferByID(offerID);
    let affLink = offer.offerLink;

    if (offer.affNetwork === "monetizedeal") {
        affLink = `${offer.offerLink}?s1=${userID}&s2=${offerID}`
    }

    if(offer.affNetwork === "admitad") {
        affLink = `${affLink}?subid1=${userID}&subid2=${offerID}`
    }

    return NextResponse.redirect(affLink)
}