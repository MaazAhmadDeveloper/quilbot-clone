import React, { useState } from "react";

// Components
import TeaxtComponentRight from "./forright/TeaxtComponentRight";
import FooterRight from "./forright/FooterRight";

const RightComponent = ({mode,recieveTextValue})=>{

    const countWords = (s) => {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        return s.split(' ').length;
    }
    const textWords = countWords(recieveTextValue);

    return <div>
            <TeaxtComponentRight 
                mode={mode}
                recieveTextValue={recieveTextValue}
                countWords={countWords}
                />

            <FooterRight 
                mode={mode}
                textWords={textWords}
                />

    </div>
}


export default RightComponent;