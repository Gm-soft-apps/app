import { headers } from "next/headers";

const Offers = async ()=>{

    const hdr = await headers();
    return (
        <h2>IP: {hdr.get("x-forwarded-for")}</h2>
    );
}

export default Offers