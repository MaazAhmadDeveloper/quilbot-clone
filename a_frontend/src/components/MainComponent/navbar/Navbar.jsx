import React, {useContext} from "react";
import { AppBar, Toolbar, styled } from "@mui/material"
import { DataByContext } from "../../../context/DataByContext";

// Nav components
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import MidSide from "./MidSide";


const QuilHeader = styled(AppBar)`
    height: 55px;
    transition:0.3s;
    ${({mode})=> mode? "background-color:#202020 " : "background-color: #fff"};
    box-shadow: none;
    ${({mode})=> mode? "color: white ": "color:black"};
    ${({mode})=> mode? "border-bottom: 1px solid #3c3e3e ": "border-bottom: 1px solid #dee1e3"};
    width: "100%";
    maxWidth: 600px;
    mx:auto;
` 

const MainNav = () => {

    const { mode} = useContext(DataByContext);

    return <div>
        <QuilHeader mode={mode}>
            <Toolbar>
                <LeftSide mode={ mode}/>
                <MidSide />
                <RightSide mode={ mode}/>
            </Toolbar>
        </QuilHeader>
    </div>
}

export default MainNav;