"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminBtmNavBar = () => {
    const path = usePathname();

    const isPathHome = path === "/dashboard" ? true : false;
    const isPathUsers = path === "/dashboard/users" ? true : false;
    const isPathOffers = path === "/dashboard/offers" ? true : false;
    const isPathReports = path === "/dashboard/reports" ? true : false;
    const isPathChat = path === "/dashboard/chat" ? true : false;

    return (
        <div className="position-fixed bottom-0 bg-white w-100 fs-1 fw-semibold pt-1 border-top border-2 row" id="bottom-nav">
            <Link href="/dashboard/users" prefetch={true} className={`col text-decoration-none ${isPathUsers ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-people"></i><span>users</span></div></Link>
            <Link href="/dashboard/reports" prefetch={true} className={`col text-decoration-none ${isPathReports ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-bar-chart"></i><span>reports</span></div></Link>
            <Link href="/dashboard" prefetch={true} className={`col text-decoration-none ${isPathHome ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-house-check"></i><span>home</span></div></Link>
            <Link href="/dashboard/chat" prefetch={true} className={`col text-decoration-none ${isPathChat ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-chat-dots"></i><span>chat</span></div></Link>
            <Link href="/dashboard/offers" prefetch={true} className={`col text-decoration-none ${isPathOffers ? "text-success" : "text-dark"}`}><div className="row text-center"><i className="bi bi-boxes"></i><span>offers</span></div></Link>
        </div>
    );
}

export default AdminBtmNavBar;