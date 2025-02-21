"use server"

import { getSession } from "app/actions/sessions";
import { getUserByID } from "db/users/handler";
import { DDMMYYYY } from "utils/time";

const Profile = async () => {

    const session = await getSession();
    const user = await getUserByID(session.id);
    const verifiedAccount = user.verifiedAccount;
    console.log(user.verifiedAccount)


    return (
        <div id="profile" className="mx-1 text-center">
            <div className="d-flex justify-content-around align-items-center bg-white py-2 px-2">
                <div className="">
                    <img src="/avatar.webp" className="border border-2 border-success rounded-pill" alt="" height="100px" width="100px" />
                </div>
                <div className="text-start ms-3">
                    <h3>{user.name || "Name"}</h3>
                    <div className="d-flex justify-content-between w-100"><b>ID: {user.id}</b><button className={`px-1 btn ${verifiedAccount ? "btn-success" : "btn-danger"}`}>{verifiedAccount ? "Verified" : "Not Verified"}</button></div>
                    <div><b>Mobile: </b>{user.countryCode + " " + user.phoneNumber}</div>
                    <div><b>Registered on: </b>{DDMMYYYY(user.registeredOn)}</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;