"use server"

import UserDashboard from "app/ui/Dashboard/UserDashboard";
import { headers } from "next/headers";

const Dashboard = async () => {
    const reqHeaders = await headers();
    const user = JSON.parse(reqHeaders.get("x-user"));

    if(!user){
        return null;
    }

    if(user.role === "user"){
        return <UserDashboard/>;
    }

    if(user.role === "admin"){
        return (<h2>ADMIN DASHBOARD</h2>);
    }
}

export default Dashboard;