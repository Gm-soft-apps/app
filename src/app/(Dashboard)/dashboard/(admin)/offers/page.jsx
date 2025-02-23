import { auth } from "auth";
import { headers } from "next/headers";

const Offers = async (req)=>{
    
    const auth = (await headers());
    console.log(auth, req)
    return (
        <h2>Offers</h2>
    );
}

export default Offers