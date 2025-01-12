const Dashboard = () => {
    const categories = ["category", "category", "category", "category", "category", "category"]
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2 bg-white px-3 py-1">
                <div className="fs-1"><span className="bi bi-person-check"></span></div>
                <div><h2>App Name</h2></div>
                <div className="fs-1"><span className="bi bi-list"></span></div>
            </div>
            <div id="categories" className="row row-cols-3 my-2">
                {
                    categories.map((category, idx) => {
                        return <div className="col px-1" key={idx}><div className="btn btn-success w-100 p-2 my-1 fw-semibold">{category} {++idx}</div></div>
                    })
                }
            </div>

            <div className="text-center my-2"><h2>All Tasks</h2></div>

            <div className="border border-dark p-2 bg-white mx-1">
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <img src="/" alt="img" className="w-25" />
                    <h3 className="w-75">App Name</h3>
                </div>
                <div>Task Rules</div>
                <button className="btn btn-success p-2 w-100 fw-semibold">Complete Now</button>
            </div>

            <div className="bg-white row text-center w-100 position-fixed bottom-0">
                <div className="fs-4 col pt-1 btn"><span className="bi bi-people fs-1"></span> refer</div>
                <div className="fs-4 col pt-1 btn bg-success text-white rounded-top-4"><span className="bi bi-house-check fs-1"></span></div>
                <div className="fs-4 col pt-1 btn"><span className="bi bi-wallet2 fs-1"></span> wallet</div>
            </div>
        </>
    )
}

export default Dashboard