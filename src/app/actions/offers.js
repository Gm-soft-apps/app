"use server"

import { createOffer } from "db/offers/handler"

export const createOfferAction = async (formData)=>{
    console.log(formData)
    try {
        // const resp = await createOffer(formData);
        // console.log("resp: ", resp)
    } catch (error) {
        console.log(error)
    }
}