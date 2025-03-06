import { headers } from "next/headers";

const Offers = async () => {

    const hdr = await headers();
    return (
        <div className="border border-black bg-white rounded-1 my-2 p-2 d-flex justify-content-between align-items-center">
            <div>
                <img src="https://portal.amfiindia.com/images/logos/logo63.gif" className="rounded-pill border border-black" alt="img" width={65} height={65} />
            </div>
            <div>
                <h2>Upstox - 0001</h2>
                <div className="fs-6 fw-semibold">Open Demat Account</div>
            </div>
            <div className="bg-success text-white px-2 rounded-1 fw-semibold">Active</div>
        </div>
    );
}

export default Offers