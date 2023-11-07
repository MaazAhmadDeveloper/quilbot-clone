import React from "react";
import { googleLogout } from "@react-oauth/google";

const Login = ({setProfileClick})=>{
    return <div style={{position:"relative"}}>
        <ul className="profile-menu-list">
            <li 
                className="profile-menu-list-item" 
                onClick={()=>{
                    setProfileClick (prev => !prev) 
                }}>
                    Login
            </li>
        </ul>
    </div>
}
const Logout = ({setProfileClick})=>{
    return <div style={{position:"relative"}}>
        <ul className="profile-menu-list">
            <li 
                className="profile-menu-list-item" 
                onClick={()=>{
                    console.log("logout clicked");
                    googleLogout() 
                }}>
                    
            </li>
        </ul>
    </div>
}


export {Login, Logout};