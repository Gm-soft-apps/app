"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNavBar = () => {
    const path = usePathname();

    const isPathHome = path === "/dashboard" ? true : false;
    const isPathWallet = path === "/dashboard/wallet" ? true : false;
    const isPathRefer = path === "/dashboard/refer" ? true : false;

    return (
        // <div className="bg-white text-center fs-1 fw-semibold pt-1 row align-items-center sticky-bottom shadow-lg border-top border-2">
        //     <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-currency-dollar"></i><span>refer</span></div>
        //     <div className="col d-flex justify-content-center align-items-center flex-column text-success"><i className="bi bi-house-check"></i><span>home</span></div>
        //     <div className="col d-flex justify-content-center align-items-center flex-column"><i className="bi bi-wallet2"></i><span>wallet</span></div>
        // </div>

        <div className="position-fixed bottom-0 bg-white w-100 fs-1 fw-semibold pt-1 border-top border-2 row" id="bottom-nav">
            <Link href="/dashboard/refer"  className={`col text-decoration-none ${isPathRefer ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-currency-dollar"></i><span>refer</span></div></Link>
            <Link href="/dashboard"        className={`col text-decoration-none ${isPathHome ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-house-check"></i><span>home</span></div></Link>
            <Link href="/dashboard/wallet" className={`col text-decoration-none ${isPathWallet ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-wallet2"></i><span>wallet</span></div></Link>
        </div>
    );
}

export default BottomNavBar;