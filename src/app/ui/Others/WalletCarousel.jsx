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
                <div className="carousel-item active" data-bs-interval="3500">
                    <img src="/wallet-banner-1.webp " className="d-block w-100" alt="Join Telegram" />
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="/wallet-banner-2.webp " className="d-block w-100" alt="Subscribe Youtube" />
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="/wallet-banner-3.webp " className="d-block w-100" alt="Join WhatsApp" />
                </div>
                <div className="carousel-item" data-bs-interval="3500">
                    <img src="/wallet-banner-4.webp " className="d-block w-100" alt="Follow on Instagram" />
                </div>
            </div>
        </div>
    );
}
