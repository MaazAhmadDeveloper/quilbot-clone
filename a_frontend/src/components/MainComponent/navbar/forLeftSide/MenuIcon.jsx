import React, { useState, useContext } from "react";
import { styled } from "@mui/material";
import { Menu, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';
import { DataByContext } from "../../../../context/DataByContext";

const LDoubleArrow = styled(KeyboardDoubleArrowLeft)`
    transition:0.3s;
    margin: 10px;
    color: #499577;
    ${({mode})=> mode? "color:#b3b5b7 ": "color: #499577"};
    ${({mode})=> mode? "background-color:#121212 ": "background-color: #f1f1f1"};
    border-radius: 50%;
    padding: 2px;
    // opacity: ${({ menuClick }) => (menuClick ? 0 : 1)};
    // display: ${({ menuClick }) => (menuClick ? "none" : null)};
`
const RDoubleArrow = styled(KeyboardDoubleArrowRight)`
    transition: 0.3s;
    margin: 10px;
    color: ;
    ${({mode})=> mode? "color:#b3b5b7 ": "color: #499577"};
    ${({mode})=> mode? "background-color:#121212 ": "background-color: #f1f1f1"};
    border-radius: 50%;
    padding: 2px;
    // opacity: ${({ menuClick }) => (menuClick ? 1 : 0)};
    // display: ${({ menuClick }) => (menuClick ? null : "none")};
`

const MenuIcon = ({mode}) => {
    const { menuClick, setMenuClick } = useContext(DataByContext);
    const [menuMouseOver, setMenuMouseOver] = useState(false);
    

    return (

    <div
        onClick={() => {
            setMenuClick((prev) => !prev);
        }}
        onMouseEnter={() => {
            setMenuMouseOver(true);
            console.log("mouse enterd");
        }}
        onMouseOut={() => {
            setMenuMouseOver(false);
        }}
    >

        <Menu 
            className={mode? "left-side-menu-Lins-Icon-DARK" : "left-side-menu-Lins-Icon" }
        />
        {menuClick ? <LDoubleArrow menuClick={menuClick} mode={mode} /> : <RDoubleArrow menuClick={menuClick} mode={mode} />}
    </div>
    );
};
 
export default MenuIcon;
