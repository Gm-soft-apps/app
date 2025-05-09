"use client"

import { createOfferAction } from "app/actions/offers";
import Loading from "app/ui/AuthForm/loading";
import Toast from "app/ui/Others/toast";
import { useState } from "react";

const AddOffer = () => {
    const [offerId, setOfferId] = useState("");
    const [offerName, setOfferName] = useState("");
    const [offerPayout, setOfferPayout] = useState("");
    const [offerPriority, setOfferPriority] = useState("");
    const [offerLogo, setOfferLogo] = useState("");
    const [offerTitle, setOfferTitle] = useState("");
    const [offerBanner, setOfferBanner] = useState("");
    const [linkOne, setLinkOne] = useState("");
    const [offerDetails, setOfferDetails] = useState("");
    const [offerSteps, setOfferSteps] = useState("");
    const [offerTerms, setOfferTerms] = useState("");
    const [offerDocs, setOfferDocs] = useState("");
    const [offerPayoutRules, setOfferPayoutRules] = useState("");
    const [offerCategory, setOfferCategory] = useState("");
    const [offerStatus, setOfferStatus] = useState(false);
    const [affNetwork, setAffNetwork] = useState("")
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const priorityOptions = Array.from({ length: 15 }, (_, i) => i + 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const resp = await createOfferAction({
                offerId,
                offerName,
                offerPayout,
                offerPriority,
                offerLogo,
                offerTitle,
                offerBanner,
                linkOne,
                offerDetails,
                offerSteps,
                offerTerms,
                offerDocs,
                offerPayoutRules,
                offerCategory,
                offerStatus,
                affNetwork,
            });
            setLoading(false);
            resetForm();
            setMessage("Offer Saved Successfully !")
        } catch (error) {
            setLoading(false);
            setMessage("something went wrong. [Check Offer ID] Try Again!");
        } finally {
            const toastLiveExample = document.getElementById('liveToast')

            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
        }
    }

    const resetForm = () => {
        setOfferId("");
        setOfferName("");
        setOfferPayout("");
        setOfferPriority("");
        setOfferLogo("");
        setOfferTitle("");
        setOfferBanner("");
        setLinkOne("");
        setOfferDetails("");
        setOfferSteps("");
        setOfferTerms("");
        setOfferDocs("");
        setOfferPayoutRules("");
        setOfferCategory("");
        setOfferStatus(true);
        setAffNetwork("");
    }

    return (
        <form className="bg-white p-1 fw-semibold" onSubmit={handleSubmit}>
            <h2 className="text-center bg-warning py-1 mb-2">New Offer</h2>
            <div className="row gap-2">
                <div className="col">
                    {/* <label htmlFor="offer-logo">Offer Logo Url</label> */}
                    <input type="url" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-logo" name="offer-logo" placeholder="Logo Url" value={offerLogo} onChange={(e) => { setOfferLogo(e.target.value) }} autoFocus required />
                    {offerLogo ? <div className="text-center w-100">
                        <img src={offerLogo} alt={offerName + " logo"} className="my-1 rounded" width={100} height={100} />
                    </div> : null}
                </div>
                <div className="col">
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-id" name="offer-id" placeholder="Offer Id" value={offerId} onChange={(e) => { setOfferId(e.target.value) }} required />
                    <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-name" name="offer-name" placeholder="Offer Name" value={offerName} onChange={(e) => { setOfferName(e.target.value) }} required />
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-payout" name="offer-payout" placeholder="Offer Payout" value={offerPayout} onChange={(e) => { setOfferPayout(e.target.value) }} required />
                    <section className="my-1">
                        {/* <label className="form-label fw-semibold my-1">Offer Status</label> */}
                        <select className="form-select px-2 py-1 fw-semibold" id="offer-priority" name="offer-priority" value={offerPriority} onChange={(e) => { setOfferPriority(e.target.value) }}>
                            <option value="">Choose Priority</option>
                            {priorityOptions.map((priority) => (
                                <option value={priority} key={priority}>{priority}</option>
                            ))}
                        </select>
                    </section>
                </div>
            </div>
            <div>
                <input type="text" className="form-control fw-semibold py-1 px-2 mb-2 border border-2 rounded-1" id="offer-title" name="offer-title" placeholder="Offer Title" value={offerTitle} onChange={(e) => { setOfferTitle(e.target.value) }} required />
            </div>

            <h2 className="text-center bg-warning py-1 my-1">Offer Details</h2>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-lable fw-semibold my-1">Offer Banner</label>
                {offerBanner ? <div className="text-center my-1">
                    <img src={offerBanner} alt={offerName} className="rounded w-100" height={120} />
                </div> : null}
                <input type="url" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-banner" name="offer-banner" placeholder="Offer Banner Url" value={offerBanner} onChange={(e) => { setOfferBanner(e.target.value) }} required />
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Affiliate Link</label>
                <input type="url" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="link-one" name="link-one" placeholder="Main Aff Link" value={linkOne} onChange={(e) => { setLinkOne(e.target.value) }} required />
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-details" className="form-label fw-semibold my-1">Offer Details</label>
                <textarea className="form-control" id="offer-details" name="offer-details" rows="5" value={offerDetails} onChange={(e) => { setOfferDetails(e.target.value) }}></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-steps" className="form-label fw-semibold my-1">Offer Steps</label>
                <textarea className="form-control" id="offer-steps" name="offer-steps" rows="5" value={offerSteps} onChange={(e) => { setOfferSteps(e.target.value) }}></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-terms" className="form-label fw-semibold my-1">Offer Terms & Conditions</label>
                <textarea className="form-control" id="offer-terms" name="offer-terms" rows="5" value={offerTerms} onChange={(e) => { setOfferTerms(e.target.value) }}></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-docs" className="form-label fw-semibold my-1">Offer Documents</label>
                <textarea className="form-control" id="offer-docs" name="offer-docs" rows="5" value={offerDocs} onChange={(e) => { setOfferDocs(e.target.value) }}></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-payout" className="form-label fw-semibold my-1">Offer Payout</label>
                <textarea className="form-control" id="offer-payout-rules" name="offer-payout-rules" rows="5" value={offerPayoutRules} onChange={(e) => { setOfferPayoutRules(e.target.value) }}></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Offer Category</label>
                <select className="form-select px-2 py-1 fw-semibold" id="offer-category" name="offer-category" value={offerCategory} onChange={(e) => { setOfferCategory(e.target.value) }}>
                    <option value="">None</option>
                    <option value="Instant Deals">Instant Deals</option>
                    <option value="Savings Accounts">Savings Accounts</option>
                    <option value="Demat Accounts">Demat Accounts</option>
                    <option value="Credit Cards">Credit Cards</option>
                    <option value="Loan Apps">Loan Apps</option>
                </select>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Offer Status</label>
                <select className="form-select px-2 py-1 fw-semibold" id="offer-status" name="offer-status" value={offerStatus} onChange={(e) => { setOfferStatus(e.target.value) }}>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                </select>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="aff-network" className="form-label fw-semibold my-1">Affiliate Network</label>
                <select name="aff-network" id="aff-network" className="form-select px-2 py-1 fw-semibold" value={affNetwork} onChange={(e) => { setAffNetwork(e.target.value) }}>
                    <option value="">Choose Aff Network</option>
                    <option value="monetizedeal">MonetizeDeal.com</option>
                    <option value="admitad">AdmitAd.com</option>
                </select>
            </section>
            <Toast message={message} />
            <button className="btn btn-dark fw-bold w-100 my-1 py-1 position-sticky sticky-bottom" type="submit">{loading ? <Loading /> : "Save Offer"}</button>
        </form>
    );
}

export default AddOffer;