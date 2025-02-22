"use server"

import { getSession } from "app/actions/sessions";
import { getUserByID } from "db/users/handler";
import { DDMMYYYY } from "utils/time";

const Profile = async () => {

    const session = await getSession();
    const user = await getUserByID(session.id);
    const verifiedAccount = user.verifiedAccount;
    // console.log(user)


    return (
        <div id="profile" className="mx-1">
            <div className="card p-3">
                <div className="mb-3 text-center">
                    <img src="/avatar.webp" className="border border-2 border-success rounded-pill" alt="" height="150px" width="150px" />
                </div>
                <div className="text-start fw-bold">
                    <h2 className="text-center">{user.name || "Your Name"}</h2>
                    <div className="my-1">Account ID : <span className="fw-normal">{user.id}</span></div>
                    <div className="my-1">Mobile No : <span className="fw-normal">{user.countryCode + " " + user.phoneNumber}</span>
                        {/* <span className={`px-1 ${verifiedAccount ? "btn-success" : "btn-danger"}`}>{verifiedAccount ? "Verified" : "Not Verified"}</button> */}
                        <span className={`ms-2 fw-semibold ${verifiedAccount? "text-success": "text-danger"}`}>({verifiedAccount ? "Verified" : "Not Verified"})</span>
                    </div>
                    <div className="my-1">Registered On: <span className="fw-normal">{DDMMYYYY(user.registeredOn)}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;