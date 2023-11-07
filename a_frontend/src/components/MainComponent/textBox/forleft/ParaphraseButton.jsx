import React from "react";

const ParaphraseButton =({userTextValue, setUserTextValue, setParaphraseBtnFlag})=>{

    const clickHandleLeftText = ()=>{
        setParaphraseBtnFlag(prev => !prev)
        
    }


    return <div className="left-div-paraphrase-button">

            <button 
            className="left-green-paraphrase-button"
            onClick={clickHandleLeftText}
            >
                Paraphrase
            </button>

    </div>
}


export default ParaphraseButton;