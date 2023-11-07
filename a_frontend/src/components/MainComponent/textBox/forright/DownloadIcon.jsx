import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const Icon = styled(DownloadOutlined)`
    ${({mode}) => mode? "color: #b3b5b7" : "color: #5f6368"};
    padding: 15px 0px 15px 15px;
    font-size: 28px;
`

const DownloadIcon = ({mode}) => {
    return <div >

        <Icon mode={mode} />

    </div>
}


export default DownloadIcon;