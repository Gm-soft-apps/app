'use client';

import { useState } from "react";
import CopyToast from "../Others/CopyToast";

const ReferralCopy = ({ protocol, host, referralCode }) => {
    const referralLink = `${protocol}://${host}/register?ref=${referralCode}`;
    const [message, setMessage] = useState("");
    const copyToClipboard = (text) => {
        const toast = document.getElementById("liveToast");
        navigator.clipboard.writeText(text)
            .then(() => {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
                setMessage("Copied to Clipboard !")
                toastBootstrap.show()
            }).catch((err) => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <>
            <div className="my-2 border border-dark py-1 px-1 rounded-1 row">
                <div className="col-11 text-truncate">{referralLink}</div>
                <div className="col">
                    <i className="bi bi-copy fs-2" style={{ cursor: 'pointer' }} onClick={() => copyToClipboard(referralLink)}></i>
                </div>
            </div>
            <div className="my-2 border border-dark py-1 px-1 rounded-1 row">
                <div className="col-11">{referralCode}</div>
                <div className="col">
                    <i className="bi bi-copy fs-2" style={{ cursor: 'pointer' }} onClick={() => copyToClipboard(referralCode)}></i>
                </div>
            </div>
            <CopyToast message={message} />
        </>
    );
}

export default ReferralCopy;