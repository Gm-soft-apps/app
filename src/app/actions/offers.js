"use server"

import { createOffer } from "db/offers/handler"

export const createOfferAction = async (formData)=>{
    console.log(formData)
    try {
        const resp = await createOffer({
            id: formData.get("offer-num"),
            offerPriority: formData.get("offer-priority"),
            offerName: formData.get("offer-name"),
            offerTitle: formData.get("offer-title"),
            offerPayout: formData.get("offer-payout"),
            offerLinkOne: formData.get("link-one"),
            offerLinkTwo: formData.get("link-two"),
            offerDetails: formData.get("offer-details"),
            offerSteps: formData.get("offer-steps"),
            offerTerms: formData.get("offer-terms"),
            offerDocs: formData.get("offer-docs"),
            offerPayoutRules: formData.get("offer-payout-rules"),
            offerCategory: formData.get("offer-category"),
            offerStatus: formData.get("offer-status"),
            offerLogo: formData.get("offer-logo"),
            offerBanner: formData.get("offer-banner"),
        });
        // console.log("resp: ", resp)
    } catch (error) {
        console.log(error)
    }
}