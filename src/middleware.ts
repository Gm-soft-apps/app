import { getUserFromDb } from "db/users/handler";
import {auth} from "auth"

// export default async () => {
//     const resp = await getUserFromDb({ phoneNumber: "9848012345", password: "#Sai12345" });
//     console.log("middleware: ", resp);
// }

export default auth((req) =>{
    const isPublicUrl = ["/login", "/register"].includes(req.nextUrl.pathname)
    if(!isPublicUrl && !req.auth?.user){
        console.log("You are not allowed");
    }
})
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}