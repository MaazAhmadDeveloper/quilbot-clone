import React, { useContext, useState } from "react";
import { PersonOutlineOutlined } from '@mui/icons-material/';
import { styled } from "@mui/material";
import { DataByContext } from "../../../../context/DataByContext";

// components


const Icon = styled(PersonOutlineOutlined)`
    ${({mode})=> mode? "color:#a5a7a9 ": "color: #5f6368"};
    ${({mode})=> mode? "background-color: #121212 ": "background-color: #f1f1f1"};
    border-radius: 50%;
    width: 28px;
    height:28px;
    padding: 3px;
    margin-bottom: 3px;
    margin-left: 10px;
`

const ProfileIcon = ({mode}) => {

    const { loginUserData, setProfileClick } = useContext(DataByContext);

    const clickHandle = () => {
        setProfileClick(prev => !prev)
    }

    return <div>

        {
            loginUserData ?

                <>

                    <img 
                        src={loginUserData.picture}
                        className="right-side-main-image"
                     />
                </>
                :
                <>
                    <Icon
                        onClick={clickHandle}
                        mode={mode}
                    />
                </>
        }

    </div>
}

export default ProfileIcon;