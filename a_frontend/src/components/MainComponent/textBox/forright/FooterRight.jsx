import React from "react";

// Component
import BothIcons from "./BothIcons"; 


const FooterRight = ({mode, textWords}) => {
    return <div>
        <div style={{ display: "flex", height:"54px" }}>

        <p className={mode ? "right-text-total-words-DARK" : "right-text-total-words"}> {textWords} {textWords === 1 ? "Word" : "Words"}</p>

            <BothIcons mode={mode}/>

        </div>
    </div>
}


export default FooterRight;