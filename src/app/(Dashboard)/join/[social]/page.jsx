"use client"

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const JoinSocialMedia = () => {
    const params = useParams();
    const socialNetwork = params.social;
    const networks = ["telegram", "whatsapp", "youtube", "instagram"];

    const router = useRouter();
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const [timer, setTimer] = useState(10);
    const [status, setStatus] = useState(false);

    const socialLinks = {
        telegram: "No Link Available",
        whatsapp: "No Link Available",
        youtube: "No Link Available",
        instagram: "No Link Available",
    }

    const socialColors = {
        telegram: "bg-primary",
        whatsapp: "bg-success",
        youtube: "bg-danger",
        instagram: "ig-color"
    }

    useEffect(() => {
        if (!networks.includes(socialNetwork)) {
            router.push("/dashboard");
        }
    }, [socialNetwork, router]); // 👈 Dependency array, watch values

    // If socialNetwork is invalid, don't render anything until redirected
    if (!networks.includes(socialNetwork)) {
        return null;
    }

    const link = socialLinks[socialNetwork];
    const color = socialColors[socialNetwork];
    const social = socialNetwork.charAt(0).toUpperCase() + socialNetwork.slice(1);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!image) {
            setIsUploading(false);
            setMessage("Please Select Image from Gallery!");
            return null
        }

        setIsUploading(true);
        setTimer(10);
        setMessage("");

        const interval = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsUploading(false);
                    setStatus(true);
                    setMessage("Amount Credited Succesfully!");
                    return 10;
                }
                return prev - 1;
            });
        }, 1000);
    }

    return (
        <div className="mx-1">
            <div className={`${color} text-white py-1 row align-items-center my-2`}>
                <Link href="/dashboard" className="col-2 link-light text-decoration-none text-center">
                    <i className="bi bi-arrow-left-circle fs-4"></i>
                </Link>
                <div className={`col text-center fw-semibold fs-5`}>Join {social} Get ₹5</div>
            </div>

            <div className="bg-white p-2 text-center my-2">
                <h3>Click on Link Below</h3>
                <Link className="fw-semibold fs-6 d-block border border-dark rounded-1 my-2 py-1 link-dark text-decoration-none" href={link} target="_blank">{link}</Link>
            </div>

            <div className="bg-white px-1 py-2 text-center">
                <form onSubmit={handleSubmit} className="border border-dark rounded-top-1 p-2">
                    <label htmlFor="screenshot" id="plusLabel" className="d-block mb-2 fw-semibold fs-1 h-300px d-flex justify-content-center align-items-center">
                        <img src={image ? image : "/gallery-placeholder.webp"} id="plusLabel" alt="" className="w-100" height={300} />
                    </label>
                    <input type="file" name="screenshot" id="screenshot" accept="image/*" className="d-none"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                const url = URL.createObjectURL(file);
                                setImage(url);
                            }
                        }} />
                    <div className={`fw-semibold ${status ? "text-success" : "text-danger"} my-1`}>{message}</div>
                    <button type="submit" className="fw-semibold py-1 btn btn-outline-dark w-100">{isUploading ? `Uploading (${timer})` : "Upload Screenshot"}</button>
                </form>
            </div>
        </div>
    );
};

export default JoinSocialMedia;
