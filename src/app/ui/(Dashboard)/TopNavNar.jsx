const TopNavBar = () => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2 bg-white p-1 shadow-lg">
            <div className="fs-1 btn px-2"><i className="bi bi-person-check"></i></div>
            <div><h2>LOGO</h2></div>
            <div className="fs-1 btn px-2 btn-outline-danger"><i className="bi bi-power"></i></div>
        </div>
    );
}

export default TopNavBar;