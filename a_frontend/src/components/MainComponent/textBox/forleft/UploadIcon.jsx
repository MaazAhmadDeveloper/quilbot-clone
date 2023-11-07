import React from "react";
import { CloudUploadOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const Icon = styled(CloudUploadOutlined)`
    ${({mode}) => mode? "color: #cbcbcb" : "color: #5f6368"};
    padding: 15px 11px 15px 15px;
    font-size: 24px;
`

const UploadIcon = ({mode}) => {
    return <div >

        <Icon id="upIcon" mode={mode}/>

        <label className={mode? "left-footer-text-upload-doc-DARK" : "left-footer-text-upload-doc" } htmlFor="upIcon" >
            Upload Doc
        </label>

    </div>
}


export default UploadIcon;