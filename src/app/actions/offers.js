"use server"

import { createOffer, updateOffer } from "db/offers/handler"

export const createOfferAction = async (form) => {
    try {
        const resp = await createOffer({
            id: form.offerId,
            offerPriority: form.offerPriority,
            offerName: form.offerName,
            offerTitle: form.offerTitle,
            offerPayout: form.offerPayout,
            offerLinkOne: form.linkOne,
            offerLinkTwo: form.linkTwo,
            offerDetails: form.offerDetails,
            offerSteps: form.offerSteps,
            offerTerms: form.offerTerms,
            offerDocs: form.offerDocs,
            offerPayoutRules: form.offerPayoutRules,
            offerCategory: form.offerCategory,
            offerStatus: form.offerStatus,
            offerLogo: form.offerLogo,
            offerBanner: form.offerBanner,
        });
        return resp;
    } catch (error) {
        if (error.name === "LibsqlError") {
            // return { status: false, message: "Offer not saved, check \"offer Id\" once" };
            throw error;
        }
        console.log("offers.js: ", error);
    }
}

export const updateOfferAction = async (form) => {
    if (form.offerStatus === "false") {
        form.offerStatus = false;
    }
    
    try {
        const resp = await updateOffer({
            // id: form.offerId,
            offerPriority: form.offerPriority,
            offerName: form.offerName,
            offerTitle: form.offerTitle,
            offerPayout: form.offerPayout,
            offerLinkOne: form.linkOne,
            offerLinkTwo: form.linkTwo,
            offerDetails: form.offerDetails,
            offerSteps: form.offerSteps,
            offerTerms: form.offerTerms,
            offerDocs: form.offerDocs,
            offerPayoutRules: form.offerPayoutRules,
            offerCategory: form.offerCategory,
            offerStatus: form.offerStatus,
            offerLogo: form.offerLogo,
            offerBanner: form.offerBanner,
        }, form.offerId)
        return resp;
    } catch (error) {
        if (error.name === "LibsqlError") {
            // return { status: false, message: "Offer not saved, check \"offer Id\" once" };
            throw error;
        }
        console.log("offers.js: ", error);
    }
}