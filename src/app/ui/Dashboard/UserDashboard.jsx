import { getAllOffers } from "db/offers/handler"

const UserDashboard = async () => {

    const offers = await getAllOffers();

    const categories = ["All", "Instant Deals", "Savings Accounts", "Demat Accounts", "Credit Cards", "Loan Apps"]
    return (
        <>
            <div id="categories" className="row row-cols-3 my-2 mx-1">
                {
                    categories.map((category, idx) => {
                        return <div className="col px-1" key={idx}><div className="btn btn-success w-100 px-2 py-1 my-1 fw-semibold text-truncate">{category}</div></div>
                    })
                }
            </div>

            <div className="text-center my-2"><h2>Trending Offers Today</h2></div>

            {
                offers.map((offer, idx) => {
                    return (
                        <div className="p-2 bg-white mx-2 rounded my-2 shadow-lg" key={idx}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <img src={offer.offerLogo} alt="img" width={65} height={65} className="border" />
                                <h3 className="w-75 ms-2">{offer.offerName}</h3>
                            </div>
                            <div className="my-2">{offer.offerTitle}</div>
                            <button className="btn btn-success p-2 w-100 fw-semibold">Complete Now</button>
                        </div>
                    );
                })
            }
        </>
    )
}

export default UserDashboard;