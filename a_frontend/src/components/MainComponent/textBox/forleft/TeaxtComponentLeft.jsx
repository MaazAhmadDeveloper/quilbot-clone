import React, { useContext, useState } from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";

const DeleteIcon = styled(DeleteOutlineOutlined)`
    ${({mode}) => mode? "color:#a1a2a4" : "color:#5f6368" };    
    position: absolute;
    right: 0px;
    padding: 0px;
    font-siz:24px;
`

const TeaxtComponentLeft = ({mode, setUserTextValue, userTextValue}) => {

    const leftTextChange =(e)=>{
        setUserTextValue(e.target.value);
    }

    const deleteHandle = ()=>{
        setUserTextValue("");
    }

    return <div className={mode? "left-side-text-box-DARK" : "left-side-text-box"}>

        <textarea 
            className={mode? "left-textArea-DARK" : "left-textArea" } 
            placeholder="To rewrite text, enter or paste it here and press &quot;Paraphrase.&quot;"
            onChange={leftTextChange}
            value={userTextValue}
            >

            </textarea>
        {userTextValue? 
            <DeleteIcon 
                mode={mode}
                onClick={deleteHandle}
                /> 
            :
             null 
             }

    </div>
}

export default TeaxtComponentLeft;