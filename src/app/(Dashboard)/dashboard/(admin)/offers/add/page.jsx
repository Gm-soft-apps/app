const AddOffer = () => {
    return (
        <form className="bg-white p-1">
            <div className="row gap-1">
                {/* <div className="col"> */}
                    {/* <label htmlFor="offer-logo" className="form-label fw-semibold">Choose Offer Logo</label> */}
                    <input type="file" className="col" id="offer-logo" name="offer-logo" required />
                {/* </div> */}
                <div className="col">
                    <h3>New Offer</h3>
                    <input type="number" className="form-control fw-semibold my-1 px-2 border rounded-1" id="offer-num" name="offer-num" placeholder="Offer No" required />
                    <input type="text" className="form-control fw-semibold my-1 px-2 border rounded-1" id="offer-title" name="offer-title" placeholder="Offer Title" required />
                    <input type="number" className="form-control fw-semibold my-1 px-2 border rounded-1" id="offer-payout" name="offer-payout" placeholder="Offer payout" required />
                </div>
            </div>
        </form>
    );
}

export default AddOffer;