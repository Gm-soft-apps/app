import { headers } from "next/headers";
import Link from "next/link";

const Refer = async () => {
    const reqHeaders = await headers();
    const host = reqHeaders.get("host");
    const protocal = reqHeaders.get("x-forwarded-proto");
    const user = JSON.parse(reqHeaders.get("x-user"));

    return (
        <div className="mx-2">
            <div id="banner" className="d-flex justify-content-center align-items-center card shadow mb-2">
                <img className="w-100 object-fit-cover" src="https://media.geeksforgeeks.org/wp-content/uploads/20240429125422/what-is-banner-copy.webp" alt="Refer banner" height={120} />
            </div><hr />

            <div className="row my-1">
                <table className="table table-bordered border-dark text-center">
                    <tbody>
                        <tr>
                            <th className="p-1">Total Reffered</th>
                            <th className="p-1">Total Earnings</th>
                        </tr>
                        <tr>
                            <td className="p-1">10</td>
                            <td className="p-1">450</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="fw-semibold my-2">
                <div className="d-flex justify-content-between bg-primary text-white px-1">
                    <div className="fs-3 fw-bold ms-2">Referral Link</div>
                    <Link href="/dashboard/refer/history" className="link-light text-decoration-none align-self-center py-1">History<i className="ms-1 bi bi-list"></i></Link>
                </div>
                <div className="my-2 border border-dark py-1 px-1 rounded-1 row">
                    <div className="col-11 text-truncate">{protocal + "://" + host + "/register?ref=" + user.referralCode}</div>
                    <div className="col"><i className="bi bi-copy fs-2"></i></div>
                </div>
                <div className="my-2 border border-dark py-1 px-1 rounded-1 row">
                    <div className="col-11">{user.referralCode}</div>
                    <div className="col"><i className="bi bi-copy fs-2"></i></div>
                </div>
            </div>

            <div id="shareIcons" className="bg-white rounded-1 shadow-sm fs-1 d-flex justify-content-evenly align-items-center">
                <span className="fw-semibold">Share:</span>
                <Link href={`https://api.whatsapp.com/send?text=${protocal + "://" + host}`} className="bi bi-whatsapp link-dark"></Link>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${protocal + "://" + host}`} className="bi bi-facebook link-dark"></Link>
                <Link href={`https://telegram.dog/share/url?url=${protocal + "://" + host}`} className="bi bi-telegram link-dark"></Link>
                {/* <Link href="" className="bi bi-instagram"></Link> */}
            </div>
        </div>
    );
}

export default Refer