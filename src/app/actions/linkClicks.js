"use server"

import { insertLinkClick } from "db/link-clicks/handler"


export const trackLinkClickAction = async (clickObj) => {
    console.log(clickObj.userOperatingSystem)
    return await insertLinkClick({
        click_id: clickObj.clickID,
        link: clickObj.link,
        link_path: clickObj.linkPath,
        link_user_id: clickObj.linkUserID,
        link_offer_id: clickObj.linkOfferID,
        offer_amount: clickObj.offerAmount,
        aff_link: clickObj.affLink,
        link_type: clickObj.linkType,
        user_browser: clickObj.userBrowser,
        user_operating_system: clickObj.userOperatingSystem,
        user_device: clickObj.userDevice,
        click_time: new Date(),
        click_ip: clickObj.clickIP
    });
}