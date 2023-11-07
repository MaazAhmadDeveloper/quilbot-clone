import React from "react";
import SmallBox from "./Box/SmallBox";


const LoginBox = ({ mode, menuClick }) => {
    return <div className={menuClick? "main-div-login-box-large-width" : "main-div-login-box-small-width" }>
        <div className={mode ? "main-div-login-box-DARK" : "main-div-login-box"}>

            <p className={mode ? "h-text-login-box-DARK" : "h-text-login-box"}>
                Log in to your QuillBot account
            </p>

            <SmallBox mode={mode} />

        </div>
    </div>
}

export default LoginBox; 