import { trackLinkClickAction } from "app/actions/linkClicks";
import { searchOfferPath } from "db/offer-paths/handler";
import { getOfferByID } from "db/offers/handler";
import { NextResponse } from "next/server";
import { nanoidString } from "utils/nanoid";

export const GET = async (request, { params }) => {
    const { slug } = await params;
    const headers = request.headers;
    const forwardedFor= headers.get("x-forwarded-for");
    const userIP = forwardedFor.split(",")[0].trim()

    const offerPathObj = await searchOfferPath(slug);

    if (!offerPathObj) { //offer path not found, redirects to register
        return NextResponse.redirect(new URL("/register", request.url))
    }

    const offerID = offerPathObj.offer_id;
    const userID = offerPathObj.user_id;
    const offer = await getOfferByID(offerID);
    let affLink = offer.offerLink;

    const resp = await trackLinkClickAction({
        clickID: nanoidString(12),
        link: request.url,
        linkPath: slug,
        linkUserID: userID,
        linkOfferID: offerID,
        offerAmount: offer.offerPayout,
        affLink: affLink,
        linkType: "self",
        userBrowser: headers.get("user-agent"),
        userOperatingSystem: headers.get("user-agent"),
        userDevice: headers.get("user-agent"),
        clickIP: userIP,
    });

    if(!offer.offerStatus){ // offer not active, redirects to register
        return NextResponse.redirect(new URL("/register", request.url))
    }

    if (offer.affNetwork === "monetizedeal") {
        affLink = `${offer.offerLink}?s1=${userID}&s2=${offerID}`
    }

    if(offer.affNetwork === "admitad") {
        affLink = `${affLink}?subid1=${userID}&subid2=${offerID}`
    }

    return NextResponse.redirect(affLink)
}