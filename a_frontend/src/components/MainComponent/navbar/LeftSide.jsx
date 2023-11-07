import React from "react";
import { quilbotLogo } from "../../../data/images";
import MenuIcon from "./forLeftSide/MenuIcon";


const LeftSide = ({mode})=>{
    return <div className="left-side-main-div">
            <MenuIcon mode={mode}/>
            <img
                src={quilbotLogo}
                 alt="BrandLogo" 
                 className="left-side-main-image"
            />
             
    </div>
}

export default LeftSide;