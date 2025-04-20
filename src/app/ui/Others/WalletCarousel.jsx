"use client";

import { useEffect } from "react";

export default function WalletCarousel() {
    useEffect(() => {
        // Dynamically import Bootstrap only on the client
        import('bootstrap').then(({ Carousel }) => {
            const el = document.querySelector('#carouselExampleAutoplaying');
            if (el) {
                new Carousel(el);
            }
        });
    }, []);

    return (
        <div id="carouselExampleAutoplaying" className="carousel carousel-fade col" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2500">
                    <img src="/wallet-banner-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="/wallet-banner-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="/wallet-banner-3.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2500">
                    <img src="/wallet-banner-4.png" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    );
}
