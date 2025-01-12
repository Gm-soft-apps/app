export const POST = async (req, res) => {
    const { phoneNumber, password } = await req.json();
    const phLength = phoneNumber.toString().length;

    if (!phoneNumber || !password) {
        return new Response(JSON.stringify({ message: 'Email and password are required.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (phLength !== 10) {
        return new Response(JSON.stringify({ message: "Phone number must be 10 digit!" }), {
            status: 400,
            headers: { "Content-Type": "application/json" }
        });
    }

    return new Response(JSON.stringify({ message: 'Success' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}