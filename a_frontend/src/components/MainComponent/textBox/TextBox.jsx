import React, { useState, useContext } from "react";
import { Typography, styled, Box, Dialog } from "@mui/material";
import { DataByContext } from "../../../context/DataByContext";

// Components
import LeftComponent from "./LeftCompnent";
import ReftComponent from "./RightComponent";
import HeaderButtons from "./HeaderButtons";
import QuilBot from "../underTextBox/QuilBot";

 
const Dialoge = ({menuClick, mode}) => {

    const [leftText, setLeftText] = useState();
    const [recieveTextValue, setrecieveTextValue] = useState("");
    console.log(recieveTextValue);

    return <div className={menuClick ? "main-div-text-box-large-width for-media-query-main-textbox" : "main-div-text-box for-media-query-main-textbox"}>

        <div className={mode ? "main-2nd-div-text-box-DARK" : "main-2nd-div-text-box"}>
            <HeaderButtons mode={mode} />

            <div className={mode ? "div-text-box-DARK" : "div-text-box"}>
                <LeftComponent
                    mode={mode}
                    setrecieveTextValue={setrecieveTextValue}
                />

                {recieveTextValue ?
                    <ReftComponent 
                        mode={mode} 
                        recieveTextValue={recieveTextValue}
                        /> 
                    :
                    null
                    }

            </div>

            <QuilBot mode={mode} />

        </div>

    </div>
}


export default Dialoge; 