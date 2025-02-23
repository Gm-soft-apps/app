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
                    <img src="/avatar.webp" className="border border-2 border-dark rounded-pill" alt="" height="150px" width="150px" />
                </div>
                <div className="">
                    <div className={`text-white px-2 fw-semibold position-absolute top-0 end-0 ${verifiedAccount ? "bg-success" : "bg-danger"}`}>{verifiedAccount ? "Verified" : "Not Verified"}</div>
                    <h2 className="text-center my-2">{user.name || "Your Name"}</h2>
                    <table className="table">
                        <tbody>
                            <tr className="">
                                <th className="py-1">Account ID</th>
                                <td className="py-1">{user.id}</td>
                            </tr>
                            <tr>
                                <th className="py-1">Mobile Number</th>
                                <td className="py-1">{user.countryCode + " " + user.phoneNumber}</td>
                            </tr>
                            <tr>
                                <th className="py-1">Email ID</th>
                                <td className="py-1">{user.email || "name@example.com"}</td>
                            </tr>
                            <tr>
                                <th className="py-1">Registered On</th>
                                <td className="py-1">{DDMMYYYY(user.registeredOn)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" className="w-100 btn btn-dark fw-semibold p-1 mt-2 disabled">Verify Account </button>
                    <button type="button" className="w-100 btn btn-dark fw-semibold p-1 mt-2">Change Password</button>
                    <h2 className="text-center mt-2">Company Contact Details</h2>
                    <table className="table mt-2">
                        <tbody>
                            <tr className="">
                                <th className="py-1">Email Support</th>
                                <td className="py-1">support@example.com</td>
                            </tr>
                            <tr className="">
                                <th className="py-1">Telegram ID</th>
                                <td className="py-1">@gmapp</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Profile;