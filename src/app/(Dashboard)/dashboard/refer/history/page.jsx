import { getRefHistory } from "db/users/handler";
import { headers } from "next/headers";
import Link from "next/link";

const ReferHistory = async () => {

    const user = JSON.parse((await headers()).get("x-user"));

    const referrals = await getRefHistory(user.referralCode)
    return (
        <div className="mx-1">
            <section className="bg-primary text-white p-1 text-center fw-semibold fs-4 mb-1 row">
                <Link href="/dashboard/refer" className="col-1  bi bi-arrow-left-circle link-light"></Link>
                <div className="col">Referral History</div>
            </section>
            <table className="table table-bordered border-dark p-1 text-center">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Mobile No</th>
                        <th>Amount Rs</th>
                        <th>Verified</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        referrals.map((referee, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{referee.phoneNumber}</td>
                                    <td>{5}</td>
                                    <td className={`bi ${referee.verifiedAccount? "bi-check-circle-fill text-success": "bi-x-circle-fill text-danger"}`}></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

            <div className="fw-semibold text-center mt-2">No more data</div>
        </div>
    );
}

export default ReferHistory;