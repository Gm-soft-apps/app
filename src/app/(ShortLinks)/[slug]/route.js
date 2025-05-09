import { searchOfferPath } from "db/offer-paths/handler";
import { getOfferByID } from "db/offers/handler";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = await params;
    const headers = request.headers;

    if (slug.length !== 6) {
        redirect("/register")
    }

    const offerPathObj = await searchOfferPath(slug);
    const offerID = offerPathObj.offer_id;
    const userID = offerPathObj.user_id;
    const offer = await getOfferByID(offerID)

    // redirect(offer.offerLink)

    return NextResponse.redirect(offer.offerLink)
}