import React from "react";

const HeadButtons = ({mode}) => {

    return <div>
        <div className={mode? "top-text-box-DARK" : "top-text-box" }>

            <div style={{display:"flex"}}>

                <p className={mode? "top-modes-text-DARK" : "top-modes-text"}>
                    Modes:
                </p>
                
                <button className={mode? "top-buttons-DARK" : "top-buttons" } id="standardbtn" >Standard</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Fluency</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Formal</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Academic</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Simple</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Creative</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Expand</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Shorten</button>
                <button className={mode? "top-buttons-DARK" : "top-buttons" }>Custom</button>

            </div>
        </div>
    </div>
}

export default HeadButtons;