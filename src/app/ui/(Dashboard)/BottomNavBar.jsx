const BottomNavBar = () => {
    return (
        <div className="bg-white text-center fs-1 fw-semibold pt-1 row align-items-center sticky-bottom shadow-lg border-top border-2">
            <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-currency-dollar"></i><span>refer</span></div>
            <div className="col d-flex justify-content-center align-items-center flex-column text-success"><i className="bi bi-house-check"></i><span>home</span></div>
            <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-wallet2"></i><span>wallet</span></div>
        </div>
    );
}

export default BottomNavBar;