import React from "react";
import GoogleLoginButton from "../GoogleLoginButton";
import { Typography, styled, Box, Dialog } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";


const ArrowIcon = styled(ArrowUpward)`
    margin: auto;
`

const SmallBox = ({mode})=>{
    return <div>
        <div className={mode? "main-div-small-box-login-box-DARK" : "main-div-small-box-login-box" }>

        <GoogleLoginButton />

        <div className={mode? "div-green-text-small-box-login-DARK" : "div-green-text-small-box-login" }>
            <p className="p-green-text-small-box-login">
                Login via Google
            </p>
            <ArrowIcon />
        </div>

        </div>
    </div>
}

export default SmallBox;