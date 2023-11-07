import React, {useContext, useState} from "react";
import Navbar from "./navbar/Navbar"
import { Box, Menu, MenuItem } from "@mui/material";
import { DataByContext } from "../../context/DataByContext";

// Components
import MenuComponent from "./menu/Menu";
import styled from "@emotion/styled";
import TextBox from "./textBox/TextBox";
import LoginBox from "./loginBox/loginBox";


const Component = styled(Box)`
    display: flex;
    position: relative;
    top: 50px;
`

const MainComponent = () => {

    const {loginUserData, profileClick, mode, menuClick} = useContext(DataByContext);

    return <div >

        <Navbar />

        <Component>

            <MenuComponent />

            {profileClick? <TextBox menuClick={menuClick} mode={mode}/> : loginUserData? <TextBox menuClick={menuClick} mode={mode}/> : <LoginBox menuClick={menuClick} mode={mode}/>  }
            


        </Component>

    </div>
}

export default MainComponent;