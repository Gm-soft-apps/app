"use server"

import TopNavBar from "app/ui/Dashboard/TopNavNar";
import BottomNavBar from "app/ui/Dashboard/BottomNavBar";
import { headers } from "next/headers";
import AdminTopNavBar from "app/ui/Dashboard/AdminTopNavBar";

const DashboardLayout = async (props) => {
    const reqHeaders = await headers();
    const user = JSON.parse(reqHeaders.get("x-user"));

    if(!user){
        return null;
    }

    if (user.role === "user") {
        return (
            <>
                <TopNavBar />
                {props.children}
                <div className="mt-5">&nbsp;</div>
                <BottomNavBar />
            </>
        );
    }
    
    if(user.role === "admin"){
        return (
            <>
                <TopNavBar />
                <AdminTopNavBar/>
                {props.children}
            </>
        );
    }
}

export default DashboardLayout;