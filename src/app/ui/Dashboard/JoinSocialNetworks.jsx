import Link from "next/link";

const JoinSocialNetworks = () => {
    return (
        <>
            <hr />
            <section className="mt-2 p-2 bg-white d-flex flex-column gap-2">
                <div className="text-center my-1 fs-5 fw-semibold">Join Our Social Media Networks</div>
                <Link href="/join/telegram"><img className="w-100" src="/join-telegram.webp" alt="Join Telegram" /></Link>
                <Link href="/join/youtube"><img className="w-100" src="/join-youtube.webp" alt="Join Youtube" /></Link>
                <Link href="/join/whatsapp"><img className="w-100" src="/join-whatsapp.webp" alt="Join WhatsApp" /></Link>
                <Link href="/join/instagram"><img className="w-100" src="/join-instagram.webp" alt="Join Instagram" /></Link>
            </section>
        </>
    );
}

export default JoinSocialNetworks;