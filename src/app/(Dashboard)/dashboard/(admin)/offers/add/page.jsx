const AddOffer = () => {
    return (
        <form className="bg-white p-1 fw-semibold">
            <h2 className="text-center bg-warning py-1 mb-2">New Offer</h2>
            <div className="row gap-2">
                <input type="file" className="col form-control my-1 px-2" id="offer-logo" name="offer-logo" required />
                <div className="col">
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-num" name="offer-num" placeholder="Offer No" required autoFocus/>
                    <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-name" name="offer-name" placeholder="Offer name" required />
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-payout" name="offer-payout" placeholder="Offer payout" required />
                </div>
            </div>
            <div>
                <input type="text" className="form-control fw-semibold py-1 px-2 mb-2 border rounded-1" id="offer-title" name="offer-name" placeholder="offer title" />
            </div> <hr />

            <h2 className="text-center bg-warning py-1 my-1">Offer Details</h2>
            <section>
                <label className="form-lable fw-semibold my-1">Offer Banner</label>
                <input type="file" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="offer-banner" name="offer-banner" />
            </section>

            <section>
                <label className="form-label fw-semibold my-1">Offer Links</label>
                <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="link-one" name="link-one" placeholder="Link 1" required />
                <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border rounded-1" id="link-two" name="link-two" placeholder="Link 2" required />
            </section>

            <section>
                <label htmlFor="offer-details" className="form-label fw-semibold my-1">Offer Details</label>
                <textarea className="form-control" id="offer-details" rows="5"></textarea>
            </section>

            <section>
                <label htmlFor="offer-steps" className="form-label fw-semibold my-1">Offer Steps</label>
                <textarea className="form-control" id="offer-steps" rows="5"></textarea>
            </section>

            <section>
                <label htmlFor="offer-terms" className="form-label fw-semibold my-1">Offer Terms & Conditions</label>
                <textarea className="form-control" id="offer-terms" rows="5"></textarea>
            </section>
        </form>
    );
}

export default AddOffer;