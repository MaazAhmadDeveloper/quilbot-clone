import React from "react";
import { ContentCopyOutlined } from "@mui/icons-material";
import { styled } from "@mui/material";

const Icon = styled(ContentCopyOutlined)`
    ${({mode}) => mode? "color: #b3b5b7" : "color: #5f6368"};
    font-size: 24px;
    padding: 15px 0px 15px 15px;
`

const CopyIcon = ({mode})=>{

    const copyHandle = ()=>{
        let copyText = document.getElementById("right-textField");
        copyText.select();
        document.execCommand("copy");
    }

    return <div>
        <Icon 
            mode={mode}
            onClick={copyHandle}
            />
    </div>
}


export default CopyIcon;