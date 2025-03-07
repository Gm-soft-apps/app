const AddOffer = () => {
    return (
        <form className="bg-white p-1 fw-semibold">
            <h2 className="text-center bg-warning py-1 mb-2">New Offer</h2>
            <div className="row gap-2">
                <input type="file" className="col" id="offer-logo" name="offer-logo" required />
                <div className="col">
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-num" name="offer-num" placeholder="Offer No" required />
                    <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-name" name="offer-name" placeholder="Offer name" required />
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-payout" name="offer-payout" placeholder="Offer payout" required />
                </div>
            </div>
            <div>
                <input type="text" className="form-control fw-semibold py-1 px-2 mb-2 border rounded-1" id="offer-title" name="offer-name" placeholder="offer title" />
            </div> <hr />

            <h2 className="text-center bg-warning py-1 my-1">Offer Details</h2>
        </form>
    );
}

export default AddOffer;