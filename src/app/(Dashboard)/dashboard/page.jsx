
const Dashboard = () => {
    const categories = ["category", "category", "category", "category", "category", "category"]
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2 bg-white p-1 shadow-lg">
                <div className="fs-1 btn px-2"><i className="bi bi-person-check"></i></div>
                <div><h2>LOGO</h2></div>
                <div className="fs-1 btn px-2 btn-outline-danger"><i className="bi bi-power"></i></div>
            </div>
            <div id="categories" className="row row-cols-3 my-2 mx-1">
                {
                    categories.map((category, idx) => {
                        return <div className="col px-1" key={idx}><div className="btn btn-success w-100 p-2 my-1 fw-semibold">{category} {++idx}</div></div>
                    })
                }
            </div>

            <div className="text-center my-2"><h2>All Tasks</h2></div>

            {
                categories.map((category, idx) => {
                    return (
                        <div className="p-2 bg-white mx-2 rounded my-2" key={category + idx}>
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <img src="https://portal.amfiindia.com/images/logos/logo63.gif" alt="img" className="w-25" />
                                <h3 className="w-75 ms-2">App Name</h3>
                            </div>
                            <div className="my-2">Task Rules</div>
                            <button className="btn btn-success p-2 w-100 fw-semibold">Complete Now</button>
                        </div>
                    );
                })
            }

            <div className="bg-white text-center fs-1 fw-semibold pt-1 row align-items-center sticky-bottom shadow-lg border-top border-2">
                <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-currency-dollar"></i><span>refer</span></div>
                <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-house-check"></i><span>home</span></div>
                <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-wallet2"></i><span>wallet</span></div>
            </div>
        </>
    )
}

export default Dashboard;