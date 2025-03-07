"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const OffersLayout = (props) => {

    const path = usePathname();

    const isAddOffers = path === "/dashboard/offers/add";
    const isOffers = path === "/dashboard/offers"
    return (
        <div className="mx-1">
            <div className="text-white text-center fw-bold row gap-1 my-2">
                <Link href="/dashboard/offers"     className={`col py-1 text-decoration-none rounded-1  text-white ${isOffers ? "bg-primary" : "bg-secondary"}`}>All</Link>
                <div className={`col py-1 text-decoration-none rounded-1  text-white bg-secondary`}>Active</div>
                <div className={`col py-1 text-decoration-none rounded-1  text-white bg-secondary`}>Inactive</div>
                <Link href="/dashboard/offers/add" className={`col py-1 text-decoration-none rounded-1  text-white ${isAddOffers ? "bg-primary" : "bg-secondary"}`}>Add</Link>
            </div>
            {props.children}
        </div>
    );
}

export default OffersLayout;