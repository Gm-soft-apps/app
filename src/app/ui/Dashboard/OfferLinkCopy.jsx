"use client";

import { useState } from "react";

const OfferLinkCopy = ({ shareLink }) => {
    const [copied, setCopied] = useState(false);
    const [shared, setShared] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            alert("Failed to copy!");
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title: "Check this out", url: shareLink });
                setShared(true);
                setTimeout(() => setShared(false), 1500);
            } catch (err) {
                alert("Share canceled or failed");
            }
        } else {
            alert("Sharing not supported in this browser.");
        }
    };

    return (
        <div className="row justify-content-evenly">
            <div className="col-5">
                <button onClick={handleCopy} className="w-100 py-1 bg-dark text-white text-center fw-semibold rounded-1 border-0">
                    {copied ? "Copied!" : "Copy"} <i className="bi bi-copy"></i>
                </button>
            </div>
            <div className="col-5">
                <button onClick={handleShare} className="w-100 py-1 bg-dark text-white text-center fw-semibold rounded-1 border-0">
                    {shared ? "Shared!" : "Share"} <i className="bi bi-share"></i>
                </button>
            </div>
        </div>
    );
};

export default OfferLinkCopy;
