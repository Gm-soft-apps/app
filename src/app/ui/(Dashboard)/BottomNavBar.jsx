const BottomNavBar = ({ isActive }) => {
    return (
        // <div className="bg-white text-center fs-1 fw-semibold pt-1 row align-items-center sticky-bottom shadow-lg border-top border-2">
        //     <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-currency-dollar"></i><span>refer</span></div>
        //     <div className="col d-flex justify-content-center align-items-center flex-column text-success"><i className="bi bi-house-check"></i><span>home</span></div>
        //     <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-wallet2"></i><span>wallet</span></div>
        // </div>

        <div className="position-fixed bottom-0 bg-white w-100 fs-1 fw-semibold pt-1 border-top border-2 row" id="bottom-nav">
            <div className={`col ${isActive ? "text-success" : ""}`}><div className="row text-center"><i className="bi bi-currency-dollar"></i><span>refer</span></div></div>
            <div className={`col ${isActive ? "text-success" : ""}`}><div className="row text-center"><i className="bi bi-house-check"></i><span>home</span></div></div>
            <div className={`col ${isActive ? "text-success" : ""}`}><div className="row text-center"><i className="bi bi-wallet2"></i><span>wallet</span></div></div>
        </div>
    );
}

export default BottomNavBar;