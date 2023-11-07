import React from "react";
import { Typography, styled} from "@mui/material";

// right components
import ProfileIcon from "./forRightSide/profile";
import MoonIcon from "./forRightSide/Moon";
import GetStartedButton from "./forRightSide/GetStarted";
import ProfileMenu from "./forRightSide/FAILProfileMenu";


const RightSide = ({mode})=>{
    return <div className="right-side-main-div">
        <GetStartedButton />
        <MoonIcon />
        <ProfileIcon mode={mode}/>
    </div>

}

export default RightSide;