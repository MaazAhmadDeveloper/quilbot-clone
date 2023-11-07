import React from "react";
import { styled } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material"

const ArrowIcon  =styled(KeyboardArrowDown)`
    position: relative;
    top: 5px;
    left: 5px;
`

const TopHeadButtons = ({mode}) => {
    return <div style={{
        display: "flex",
    }}>
        <div style={{margin: "15px 0px 0px 50px"}} className="for-media-query-topHeadedButton">

            <button className={mode? "top-head-buttons-DARK" : "top-head-buttons"} autoFocus >English(US)</button>
            <button className={mode? "top-head-buttons-DARK" : "top-head-buttons"} >Hindi</button>
            <button className={mode? "top-head-buttons-DARK" : "top-head-buttons"} >French</button>
            <button className={mode? "top-head-buttons-DARK" : "top-head-buttons"} >Spanish</button>
            <button className={mode? "top-head-buttons-DARK" : "top-head-buttons"} >
                All 
                <ArrowIcon />
            </button>
            
        </div>

    </div>
}

export default TopHeadButtons;