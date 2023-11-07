import React, {useContext} from "react";
import { Typography, styled, Box, Dialog } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google'; 
import { DataByContext } from "../../../context/DataByContext";
import jwt_decode from "jwt-decode"
import { addUserApi } from "../../../services/api";


const GoogleLoginButton = () => {

    const {setLoginUserData} = useContext(DataByContext);

    const loginSuccess = async (e)=>{
        const decodeData = jwt_decode(e.credential);
        setLoginUserData(decodeData);

        await addUserApi(decodeData);
    }
    const loginError = (error)=>{
        console.log("Login Failed" + error);
    }

    return <div className="main-div-google-login-button">

        <div style={{margin:"auto"}}>

        <GoogleLogin
                className="custom-google-login-button"
                onSuccess={loginSuccess}
                onError={loginError}
            />

        </div>        
    </div>
}

export default GoogleLoginButton; 