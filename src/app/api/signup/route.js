export const POST = async (req, res) => {
    const { phoneNumber, password, confirmPass, referralCode } = await req.json();

    if (!(password === confirmPass)) {
        return new Response(JSON.stringify({ isAccountCreated: false, message: 'confirm password not matched' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }


    try{
// DB
        return new Response(JSON.stringify({isAccountCreated: true, message: "Account created successfully"}),{
            status: 201,
            headers: {'Content-Type': 'application/json'},
        })
    } catch (error) {
        return new Response(JSON.stringify({isAccountCreated: false}, "something went wrong! try again."),{
            status: 500,
            headers: {'Content-Type': 'application/json'},
        })
    }
}