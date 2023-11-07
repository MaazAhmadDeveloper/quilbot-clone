import React, {useContext} from "react";
import { styled } from "@mui/material";
import { DataByContext } from "../../../context/DataByContext";


const MidSide = ()=>{

    const {clickedOption} = useContext(DataByContext);

    return <div style={{margin: "auto"}}>

        <p style={{fontWeight:800}}>
            
            {clickedOption}
            
        </p>

    </div>
}

export default MidSide;