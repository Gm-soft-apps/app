import { getAllOffers } from "db/offers/handler"

const UserDashboard = async () => {

    const offers = await getAllOffers();

    const categories = ["Instant Deals", "Savings A/C", "Demat A/C", "Credit Cards", "Loan Apps", "All Offers"]
    return (
        <>
            <div id="categories" className="row row-cols-3 my-2 mx-1">
                {
                    categories.map((category, idx) => {
                        return <div className="col px-1" key={idx}><div className="btn btn-success w-100 px-1 py-1 my-1 fw-semibold text-truncate">{category}</div></div>
                    })
                }
            </div>

            <div className="text-center my-2"><h2>Trending Offers</h2></div>

            {
                offers.map((offer, idx) => {
                    return (
                        <div className="p-2 bg-white mx-2 rounded my-2 shadow-lg position-relative" key={idx}>
                            <div className="user-offer-payout bg-warning position-absolute top-0 end-0 px-3 fw-semibold">Earn Flat ₹ {offer.offerPayout}</div>
                            <div className="row">
                                <div className="col-3">
                                    <img src={offer.offerLogo} alt={offer.offerName} width={65} height={65}/>
                                </div>
                                <div className="col align-self-center">
                                    <h2 className="fs-4 mt-3">{offer.offerName}</h2>
                                </div>
                                    <div className="fs-6 fw-semibold mt-1">{offer.offerTitle}</div>
                            </div>
                            <button className="btn btn-primary py-1 mt-1 w-100 fw-semibold">Get Now</button>
                        </div>
                    );
                })
            }
        </>
    )
}

export default UserDashboard;