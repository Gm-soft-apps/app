"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const OffersLayout = (props) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const isAddOffers = path === "/dashboard/offers/add";
  const isAll = !status && !isAddOffers;
  const isActive = status === "active";
  const isInactive = status === "inactive";

  return (
    <div className="mx-1">
      <div className="text-white text-center fw-bold row gap-1 my-2">
        <Link href="/dashboard/offers" className={`col py-1 text-decoration-none rounded-1 text-white ${isAll ? "bg-primary" : "bg-secondary"}`}>All</Link>
        <Link href="/dashboard/offers?status=active" className={`col py-1 text-decoration-none rounded-1 text-white ${isActive ? "bg-primary" : "bg-secondary"}`}>Active</Link>
        <Link href="/dashboard/offers?status=inactive" className={`col py-1 text-decoration-none rounded-1 text-white ${isInactive ? "bg-primary" : "bg-secondary"}`}>Inactive</Link>
        <Link href="/dashboard/offers/add" className={`col py-1 text-decoration-none rounded-1 text-white ${isAddOffers ? "bg-primary" : "bg-secondary"}`}>Add</Link>
      </div>
      {props.children}
    </div>
  );
}

export default OffersLayout;