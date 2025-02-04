import { headers } from "next/headers";
import Link from "next/link";

const Refer = async () => {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocal = headersList.get("x-forwarded-proto");

    return (
        <div className="mx-2">
            <div id="banner" className="d-flex justify-content-center align-items-center card shadow mb-2">
                <h1>Banner</h1>
            </div><hr />

            <div className="bg-success text-white fw-bold fs-3 d-flex justify-content-around align-items-center my-2 py-2 rounded-1">
                <span>Referred</span>
                <span>-</span>
                <span>10</span>
            </div>

            <div className="row fw-semibold my-2">
                <div className="col-9 fs-3 fw-bold">Referral Link</div>
                <div className="col-3 btn btn-outline-dark align-self-center py-1">History<i className="bi bi-list"></i></div>
                <div className="my-2 border border-dark py-1 px-2 rounded-1 d-flex justify-content-between align-items-center">
                    <span>Copy Link</span>
                    <span><i className="bi bi-clipboard fs-2"></i></span>
                </div>
                <div className="my-2 border border-dark py-1 px-2 rounded-1 d-flex justify-content-between align-items-center">
                    <span>Copy Code</span>
                    <span><i className="bi bi-clipboard fs-2"></i></span>
                </div>
            </div>

            <div id="shareIcons" className="my-4 fs-1 d-flex justify-content-evenly align-items-center">
                <span className="fw-semibold">Share:</span>
                <Link href={`https://api.whatsapp.com/send?text=${protocal+"://"+host}`}           className="bi bi-whatsapp link-dark"></Link>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${protocal+"://"+host}`} className="bi bi-facebook link-dark"></Link>
                <Link href={`https://telegram.dog/share/url?url=${protocal+"://"+host}`}           className="bi bi-telegram link-dark"></Link>
                {/* <Link href="" className="bi bi-instagram"></Link> */}
            </div>
        </div>
    );
}

export default Refer