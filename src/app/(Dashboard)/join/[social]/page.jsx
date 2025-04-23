import Link from "next/link";
import { redirect } from "next/navigation";

const JoinSocialMedia = async ({ params }) => {
    let { social } = params;
    const networks = ["telegram", "whatsapp", "youtube", "instagram"];

    const socialLinks = {
        telegram: "No Link Available",
        whatsapp: "No Link Available",
        youtube: "No Link Available",
        instagram: "No Link Available",
    }

    if (!networks.includes(social)) {
        redirect("/dashboard");
    }

    const link = socialLinks[social];
    social = social.charAt(0).toUpperCase() + social.slice(1);

    return (
        <div className="mx-1">
            <div className="bg-primary text-white py-1 row align-items-center my-2">
                <Link href="/dashboard" className="col-2 link-light text-decoration-none text-center">
                    <i className="bi bi-arrow-left-circle fs-4"></i>
                </Link>
                <div className="col text-center fw-semibold fs-5">Join {social} Get ₹5</div>
            </div>

            <div className="bg-white p-2 text-center my-2">
                <h3>Click on Link Below</h3>
                <Link className="fw-semibold fs-6 d-block border border-dark rounded-1 my-1 py-1 link-dark text-decoration-none" href={link} target="_blank">{link}</Link>
            </div>

            <div className="bg-white px-1 py-2 text-center">
                <div className="border border-dark rounded-top-1 p-2">
                    <label htmlFor="screenshot" className="d-block mb-2 fw-semibold fs-1 h-300px d-flex justify-content-center align-items-center">+</label>
                    <input type="file" name="screenshot" id="screenshot" accept="image/*" className="d-none" required/>
                    <button className="fw-semibold py-1 btn btn-outline-dark w-100">Upload Screenshot</button>
                </div>
            </div>
        </div>
    );
};

export default JoinSocialMedia;
