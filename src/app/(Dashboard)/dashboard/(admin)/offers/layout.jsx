"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const OffersLayout = (props) => {

    const path = usePathname();

    const isAddOffers = path === "/dashboard/offers/add"
    return (
        <>
            <div className="text-white text-center fw-bold row gap-1 px-1">
                <div className={`col py-1 text-decoration-none rounded-1  text-white bg-secondary`}>All</div>
                <div className={`col py-1 text-decoration-none rounded-1  text-white bg-secondary`}>Active</div>
                <div className={`col py-1 text-decoration-none rounded-1  text-white bg-secondary`}>Inactive</div>
                <Link href="/dashboard/offers/add" className={`col py-1 text-decoration-none rounded-1  text-white ${isAddOffers ? "bg-primary" : "bg-secondary"}`}>Add</Link>
            </div>
            {props.children}
        </>
    );
}

export default OffersLayout;