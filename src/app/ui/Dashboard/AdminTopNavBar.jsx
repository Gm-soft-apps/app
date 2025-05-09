"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminTopNavBar = () => {
    const path = usePathname();

    let isPathOffers = path.startsWith("/dashboard/offers");
    const isPathUsers = path === "/dashboard/users";
    const isPathWithdrawls = path === "/dashboard/withdrawls";

    return (
        <div className="position-sticky top-0 fw-bold text-center px-1 row gap-1 mb-2">
            <Link href="/dashboard/offers" className={`col text-decoration-none rounded-1 py-1 text-white ${isPathOffers ? "bg-success" : "bg-dark"}`}>Offers</Link>
            <Link href="/dashboard/users" className={`col text-decoration-none rounded-1 py-1 text-white ${isPathUsers ? "bg-success" : "bg-dark"}`}>Users</Link>
            <Link href="/dashboard/withdrawls" className={`col text-decoration-none rounded-1 py-1 text-white ${isPathWithdrawls ? "bg-success" : "bg-dark"}`}>Withdrawls</Link>
        </div>
    );
}

export default AdminTopNavBar;