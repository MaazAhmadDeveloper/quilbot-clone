import React, { useContext } from "react";

// Components

const TextComponentRight =({mode, recieveTextValue, countWords}) => {



    return <div className="right-div-text-box">
        <textarea 
            className={mode? "right-textArea-DARK" : "right-textArea" } 
            name="" 
            id="right-textField" 
            cols="30" 
            rows="10"
            value={recieveTextValue}
            >

            </textarea>
    </div>
}

export default TextComponentRight;