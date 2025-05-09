"use client";

import { useState, useEffect } from "react";
import { getAllOffers } from "db/offers/handler";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import JoinSocialNetworks from "./JoinSocialNetworks";
import Loading from "../AuthForm/loading";

// Button label vs actual category value
const categoryOptions = [
    { label: "Instant Deals", value: "Instant Deals" },
    { label: "Savings A/C", value: "Savings Accounts" },
    { label: "Demat A/C", value: "Demat Accounts" },
    { label: "Credit Cards", value: "Credit Cards" },
    { label: "Loan Apps", value: "Loan Apps" },
    { label: "All Offers", value: "All Offers" }
];

const UserDashboard = () => {
    const [offers, setOffers] = useState([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const categoryFromURL = searchParams.get("category") || "";
        setSelectedCategory(categoryFromURL);
    }, [searchParams]);


    useEffect(() => {
        const fetchOffers = async () => {
            const all = await getAllOffers();
            setOffers(all);
        };
        fetchOffers();
    }, []);

    const handleCategoryClick = (categoryValue) => {
        setSelectedCategory(categoryValue);
        if (categoryValue === "") {
            router.push("/dashboard");
        } else {
            router.push(`/dashboard?category=${encodeURIComponent(categoryValue)}`);
        }
    };

    const filteredOffers = offers.filter((offer) => {
        if (!offer.offerStatus) return false;
        if (selectedCategory === "") {
            return offer.offerPriority;
        } else if (selectedCategory === "All Offers") {
            return true;
        } else {
            return offer.offerCategory === selectedCategory;
        }
    });

    return (
        <>
            <div id="categories" className="row row-cols-3 my-2 mx-1 bg-white py-1">
                {
                    categoryOptions.map(({ label, value }, idx) => (
                        <div className="col px-1" key={idx}>
                            <button
                                className={`btn ${selectedCategory === value ? "btn-dark" : "btn-success"} rounded-1 w-100 px-1 py-1 my-1 fw-semibold text-truncate`}
                                onClick={() => handleCategoryClick(value)}
                            >
                                {label}
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="bg-danger text-white py-1 mx-1 text-center my-2">
                <h2>
                    {selectedCategory === ""
                        ? "Trending Offers"
                        : selectedCategory}
                </h2>
            </div>

            {offers.length === 0 ? (
                <div className="text-center py-2 bg-white fw-bold"><Loading /></div>
            ) : filteredOffers.length === 0 ? (
                <div className="text-center py-2 mx-1 bg-white fw-semibold">No offers found at this time!</div>
            ) : (
                filteredOffers.map((offer, idx) => (
                    <div className="p-2 bg-white mx-2 rounded my-2 shadow-lg position-relative" key={idx}>
                        <div className="user-offer-payout bg-warning position-absolute top-0 end-0 px-3 fw-semibold">Earn Flat ₹ {offer.offerPayout}</div>
                        <div className="row">
                            <div className="col-3">
                                <img src={offer.offerLogo} alt={offer.offerName} className="shadow rounded-1 border border-2" width={65} height={65} />
                            </div>
                            <div className="col align-self-center">
                                <h2 className="fs-4 mt-3">{offer.offerName}</h2>
                            </div>
                            <div className="fs-6 fw-semibold mt-1">{"※ " + offer.offerTitle}</div>
                        </div>
                        <Link href={`/dashboard/offer/${offer.id}`} className="btn btn-primary py-1 mt-1 w-100 fw-semibold">Complete Now</Link>
                    </div>
                ))
            )}


            {selectedCategory === "" && (
                <JoinSocialNetworks />
            )}
        </>
    );
};

export default UserDashboard;
