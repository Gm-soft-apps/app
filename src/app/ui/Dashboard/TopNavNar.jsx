"use server"

import Link from "next/link";
import Modal from "../Others/modal";
import { signOut } from "next-auth/react";

const TopNavBar = () => {
    const modalHead = "Do you want to Sign Out?";
    const modalBody = "You will be signed out from your account, Please confirm it by clicking below on button.";
    const btnText = "YES";

    return (
        <div className="d-flex justify-content-between align-items-center mb-2 bg-white p-1 shadow-lg">
            <Link href="/dashboard/account" className="fs-1 btn px-2"><i className="bi bi-person-check"></i></Link>
            <Link href={"/dashboard"} className="link-dark text-decoration-none"><h2>LOGO</h2></Link>
            <div className="fs-1 btn px-2 text-danger" data-bs-toggle="modal" data-bs-target="#signoutModal"><i className="bi bi-box-arrow-right"></i></div>
            <Modal head={modalHead} body={modalBody} text={btnText} action={signOut}/>
        </div>
    );
}

export default TopNavBar;