"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminTopNavBar = () => {
    const path = usePathname();

    const isPathOffers = path === "/dashboard/offers";
    const isPathUsers = path === "/dashboard/users";
    const isPathWithdrawls = path === "/dashboard/withdrawls";

    return (
        <div className="position-sticky top-0 fw-bold text-center px-1 row gap-1">
            <Link href="/dashboard/offers"     className={`col text-decoration-none rounded-1 py-1 text-white ${isPathOffers ? "bg-primary" : "bg-dark"}`}>Offers</Link>
            <Link href="/dashboard/users"      className={`col text-decoration-none rounded-1 py-1 text-white ${isPathUsers ? "bg-primary" : "bg-dark"}`}>Users</Link>
            <Link href="/dashboard/withdrawls" className={`col text-decoration-none rounded-1 py-1 text-white ${isPathWithdrawls ? "bg-primary" : "bg-dark"}`}>Withdrawls</Link>
        </div>
    );
}

export default AdminTopNavBar;