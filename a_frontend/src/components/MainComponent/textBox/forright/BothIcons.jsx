import React from "react";

// Component 
import DownloadIcon from "./DownloadIcon";
import CopyIcon from "./CopyIcon";

const BothIcons =({mode})=>{
    return <div style={{display : "flex", marginLeft:"auto" }} className="right-div-both-icons">

            <DownloadIcon mode={mode}/>
            <CopyIcon mode={mode}/>

    </div>
}


export default BothIcons;