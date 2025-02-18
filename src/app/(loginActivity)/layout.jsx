"use client"

import AuthButton from "app/ui/AuthForm/AuthButton";
import AuthCard from "app/ui/AuthForm/AuthCard";
import LogoComponent from "app/ui/AuthForm/LogoComponent";
import { usePathname } from "next/navigation";

const AuthLayout = (props) => {
    const path = usePathname();
    const registerPath = "/register";
    const loginPath = "/login";

    return (
        <>
            <LogoComponent />
            <AuthCard title={path === registerPath ? "Register Account" : "Login Account"}>
                <div className="row gap-1 mx-2 my-3">
                    <AuthButton path={registerPath} btnText="Register" isDisabled={path === registerPath} />
                    <AuthButton path={loginPath} btnText="Login" isDisabled={path === loginPath} />
                </div>
                {props.children}
            </AuthCard>
        </>
    );
}

export default AuthLayout