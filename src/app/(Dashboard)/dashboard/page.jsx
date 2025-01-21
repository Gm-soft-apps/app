const Dashboard = async () => {

    const categories = ["category", "category", "category", "category", "category", "category"]
    return (
        <>
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
                        <div className="p-2 bg-white mx-2 rounded my-2 shadow-lg" key={category + idx}>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <img src="https://portal.amfiindia.com/images/logos/logo63.gif" alt="img" width={65} height={65} className="border"/>
                                <h3 className="w-75 ms-2">App Name</h3>
                            </div>
                            <div className="my-2">Task Rules</div>
                            <button className="btn btn-success p-2 w-100 fw-semibold">Complete Now</button>
                        </div>
                    );
                })
            }
        </>
    )
}

export default Dashboard;