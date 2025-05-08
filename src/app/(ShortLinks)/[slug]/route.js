import { searchSelfPathOffer } from "db/offer-links/handler";
import { getOfferByID } from "db/offers/handler";
import { redirect } from "next/navigation";

export const GET = async (request, { params }) => {
    const { slug } = await params;
    const headers = request.headers;

    if (slug.length !== 6) {
        redirect("/register")
    }

    const offerLinkObj = await searchSelfPathOffer(slug);
    const offerID = offerLinkObj.offer_id;
    const userID = offerLinkObj.user_id;
    const offer = await getOfferByID(offerID)

    redirect(offer.offerLink)

    return Response.json({ message: "Redirecting to Partner Site!" })
}