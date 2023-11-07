import React, { useContext, useState } from "react";
import { Nightlight, LightModeOutlined } from "@mui/icons-material";
import { styled } from "@mui/material";
import { DataByContext } from "../../../../context/DataByContext";

const Moon = styled(Nightlight)`
    color:#5f6368;
    background-color : #f1f1f1;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    padding: 8px;
    margin-bottom: 3px;
    margin-left: 10px;
    transform: rotate(-40deg)
` 
const Sun = styled(LightModeOutlined)`
    color:#b3b5b7;
    background-color : #121212;
    border-radius: 50%;
    font-size: 24px;
    padding: 5px;
    margin-bottom: 3px;
    margin-left: 10px;


` 

const MoonIcon = ()=>{

    const {mode, setMode} = useContext(DataByContext);

    return <div className="mode-class" onClick={()=>{setMode(prev => !prev)}}>
        
        {mode? <Sun /> : <Moon />  }

    </div>
}

export default MoonIcon;