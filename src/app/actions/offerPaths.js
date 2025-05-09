import { createOfferPath } from "db/offer-paths/handler"
import { nanoidString } from "utils/nanoid"

export const createOfferPathAction = async (offerID, userID, userIP) => {
    return await createOfferPath({
        offer_id: offerID,
        user_id: userID,

        path: nanoidString(6),
        created_on: new Date(),
        user_ip: userIP,
    })
}