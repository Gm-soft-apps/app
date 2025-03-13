import { getAllOffers } from "db/offers/handler";

const Offer = async ()=>{
    const offers = await getAllOffers();
    return (
        <div className="mx-1 ">
            <img src={offers[0].offerBanner} alt={""} className="bannerImg w-100 mb-1" height={200}/>
            <button className="btn btn-success rounded-1 fw-semibold my-1 w-100">Complete Now</button>
            <button className="btn btn-success rounded-1 fw-semibold my-1 w-100">Sell Now</button><hr/>

            <h2 className="text-center bg-white py-1 my-1">Offer Details</h2>

            <section>
                <h3>Documents</h3>
                <div>{offers[0].offerDocs || "Not Available"}</div>
            </section>

            <section>
                <h3>Benifits</h3>
                <div>{offers[0].offer || "Not Available"}</div>
            </section>

            <section>
                <h3>Follow Steps</h3>
                <div>{offers[0].offerSteps || "Not Available"}</div>
            </section>
        </div>
    );
}

export default Offer;