import Link from "next/link";

const ReferHistory = () => {
    return (
        <div className="mx-1">
            <section className="bg-primary text-white p-1 text-center fs-4 mb-1 row">
                <Link href="/dashboard/refer" className="col-1 bi bi-arrow-left-circle link-light"></Link>
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
                    <tr>
                        <td>1</td>
                        <td>99XXXXXX62</td>
                        <td>530</td>
                        <td className="bi bi-check-circle text-success"></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>99XXXXXX62</td>
                        <td>530</td>
                        <td className="bi bi-check-circle text-success"></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>99XXXXXX62</td>
                        <td>530</td>
                        <td className="bi bi-check-circle text-success"></td>
                    </tr>
                </tbody>
            </table>

            <div className="fw-semibold text-center mt-2">No more data</div>
        </div>
    );
}

export default ReferHistory;