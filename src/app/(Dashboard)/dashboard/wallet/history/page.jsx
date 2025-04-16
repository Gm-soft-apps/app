import Link from "next/link";

const WalletHistory = ()=>{
    return (
        <div className="mx-1">
            <section className="bg-primary text-white p-1 text-center fw-semibold fs-4 mb-1 row">
                <Link href="/dashboard/wallet" prefetch={true} className="col-1  bi bi-arrow-left-circle link-light"></Link>
                <div className="col">Wallet History</div>
            </section>

            <h3 className="bg-white text-center py-1">No Withdrawls Found</h3>
        </div>
    );
}

export default WalletHistory