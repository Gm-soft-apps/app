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
                <div className="fw-bold">
                    <div className={`text-white px-2 fw-semibold position-absolute top-0 end-0 ${verifiedAccount ? "bg-success" : "bg-danger"}`}>{verifiedAccount ? "Verified" : "Not Verified"}</div>

                    {/* <h2 className="text-center">{user.name || "Your Name"}</h2>
                    <div className="my-1">Account ID : <span className="fw-normal">{user.id}</span></div>
                    <div className="my-1">Mobile No : <span className="fw-normal">{user.countryCode + " " + user.phoneNumber}</span></div>
                    <div className="my-1">Registered On : <span className="fw-normal">{DDMMYYYY(user.registeredOn)}</span></div>
                    <div className="my-1">Email ID : <span className="fw-normal">{"name@example.com"}</span></div>
                    <button type="button" className="w-100 btn btn-primary fw-semibold p-1 mt-2 disabled">Verify Account</button> */}
                </div>
                <table className="table table-responsive">
                    <tbody>
                        <tr>
                            <th className="py-1">Account ID</th>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th className="py-1">Mobile Number</th>
                            <td>{user.countryCode + " " + user.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th className="py-1">Email ID</th>
                            <td>{user.email || "name@example.com"}</td>
                        </tr>
                        <tr>
                            <th className="py-1">Registered On</th>
                            <td>{DDMMYYYY(user.registeredOn)}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="w-100 btn btn-primary fw-semibold p-1 mt-2 disabled">Verify Account</button>
            </div>
        </div>
    );
}

export default Profile;