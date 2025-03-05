import { headers } from "next/headers";

const Offers = async () => {

    const hdr = await headers();
    return (
        <div className="text-center">
            <h2>Offers Page</h2>
            <h2 className="text-start">IP: {hdr.get("x-forwarded-for")}</h2>
        </div>
    );
}

export default Offers