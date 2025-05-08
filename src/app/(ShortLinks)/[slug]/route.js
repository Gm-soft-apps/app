import { redirect } from "next/navigation";

export const GET = async (request, {params})=>{
    const {slug} = await params;
    const headers = request.headers;
    console.log(request)
    if(slug.length !== 6){
        redirect("/register")
    }
    
    return Response.json({message: "Redirecting to Partner Site!"})
}