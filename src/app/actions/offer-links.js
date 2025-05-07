import { createOfferLink } from "db/offer-links/handler"
import { nanoidString } from "utils/nanoid"

export const createOfferLinkAction = async (offerID, userID) => {
    return await createOfferLink({
        offer_id: offerID,
        user_id: userID,
        self_path: nanoidString(6),
        share_path: nanoidString(6),
        created_on: new Date()
    })
}