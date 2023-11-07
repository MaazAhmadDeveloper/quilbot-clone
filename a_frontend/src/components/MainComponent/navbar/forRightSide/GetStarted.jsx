import React from "react";
import { DiamondOutlined } from "@mui/icons-material";
import { styled } from "@mui/material";


const DiamondIcon = styled(DiamondOutlined)`
    padding: 6px;
    font-size: 21px;
`

const GetStartedButton = ()=>{
    return <div>
        <button className="right-getstart-button">
            < DiamondIcon />
            <p className="right-getstart-text">
                Upgrade to Premium
            </p>
        </button>
    </div>
}

export default GetStartedButton;