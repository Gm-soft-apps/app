const AddOffer = () => {
    const priorityArr = [];
    for (let i = 0; i < 15; i++) {
        priorityArr.push(<option defaultValue={i + 1} key={i+1}>{i + 1}</option>)
    }

    return (
        <form className="bg-white p-1 fw-semibold">
            <h2 className="text-center bg-warning py-1 mb-2">New Offer</h2>
            <div className="row gap-2">
                <input type="file" className="col form-control my-1 px-2" id="offer-logo" name="offer-logo" required />
                <div className="col">
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-num" name="offer-num" placeholder="Offer No" required autoFocus />
                    <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-name" name="offer-name" placeholder="Offer name" required />
                    <input type="number" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-payout" name="offer-payout" placeholder="Offer payout" required />
                    <section className="my-1">
                        {/* <label className="form-label fw-semibold my-1">Offer Status</label> */}
                        <select className="form-select px-2 py-1 fw-semibold">
                            <option defaultValue="Active">Choose Priority</option>
                            {priorityArr}
                        </select>
                    </section>
                </div>
            </div>
            <div>
                <input type="text" className="form-control fw-semibold py-1 px-2 mb-2 border border-2 rounded-1" id="offer-title" name="offer-name" placeholder="Offer Title" required />
            </div> <hr />

            <h2 className="text-center bg-warning py-1 my-1">Offer Details</h2>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-lable fw-semibold my-1">Offer Banner</label>
                <input type="file" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="offer-banner" name="offer-banner" required />
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Offer Links</label>
                <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="link-one" name="link-one" placeholder="Link 1 (Self Complete Link)" required />
                <input type="text" className="form-control fw-semibold my-1 py-1 px-2 border border-2 rounded-1" id="link-two" name="link-two" placeholder="Link 2 (Sharable Link)" required />
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-details" className="form-label fw-semibold my-1">Offer Details</label>
                <textarea className="form-control" id="offer-details" rows="5"></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-steps" className="form-label fw-semibold my-1">Offer Steps</label>
                <textarea className="form-control" id="offer-steps" rows="5"></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-terms" className="form-label fw-semibold my-1">Offer Terms & Conditions</label>
                <textarea className="form-control" id="offer-terms" rows="5"></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-docs" className="form-label fw-semibold my-1">Offer Documents</label>
                <textarea className="form-control" id="offer-docs" rows="5"></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label htmlFor="offer-payout" className="form-label fw-semibold my-1">Offer Payout</label>
                <textarea className="form-control" id="offer-payout" rows="5"></textarea>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Offer Category</label>
                <select className="form-select px-2 py-1 fw-semibold">
                    <option defaultValue="Active">None</option>
                    <option defaultValue="Inactive">Instant Deals</option>
                    <option defaultValue="Inactive">Savings Accounts</option>
                    <option defaultValue="Inactive">Demat Accounts</option>
                    <option defaultValue="Inactive">Credit Cards</option>
                    <option defaultValue="Inactive">Loan Apps</option>
                </select>
            </section>

            <section className="border border-2 border-info rounded my-1 p-1">
                <label className="form-label fw-semibold my-1">Offer Status</label>
                <select className="form-select px-2 py-1 fw-semibold">
                    <option defaultValue="Active">Active</option>
                    <option defaultValue="Inactive">Inactive</option>
                </select>
            </section>

            <button className="btn btn-dark fw-bold w-100 my-1 py-1 position-sticky sticky-bottom" type="submit">Save Offer</button>
        </form>
    );
}

export default AddOffer;