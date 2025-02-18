"use client"

import Link from "next/link";
import SignoutModal from "../(AuthForm)/SignoutModal";

const TopNavBar = () => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2 bg-white p-1 shadow-lg">
            <Link href="/dashboard/profile" className="fs-1 btn px-2"><i className="bi bi-person-check"></i></Link>
            <div><h2>LOGO</h2></div>
            <div className="fs-1 btn px-2 text-danger" data-bs-toggle="modal" data-bs-target="#signoutModal"><i className="bi bi-box-arrow-right"></i></div>
            <SignoutModal/>
        </div>
    );
}

export default TopNavBar;