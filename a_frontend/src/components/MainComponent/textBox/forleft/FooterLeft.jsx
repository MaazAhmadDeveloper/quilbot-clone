import React, { useEffect, useState } from "react";
import { sendTextApi } from "../../../../services/api";
// Component
import UploadIcon from "./UploadIcon";
import ParaphraseButton from "./ParaphraseButton";


const FooterLeft = ({ mode, userTextValue, setUserTextValue, setrecieveTextValue }) => {

    const [paraphraseBtnFlag , setParaphraseBtnFlag ] = useState(false);

    useEffect(()=>{
        const sendText = async ()=>{

            const response = await sendTextApi({userText : userTextValue });
            setrecieveTextValue(response);
        }
        sendText();
    },[paraphraseBtnFlag])

    const countWords = (s) => {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        return s.split(' ').length;
    }
    const textWords = countWords(userTextValue);

    return <div>
        <div style={{ display: "flex", height: "54px" }}>

            {userTextValue ?

                <>
                    <p className={mode ? "right-text-total-words-DARK" : "right-text-total-words"}> {textWords} {textWords === 1 ? "Word" : "Words"}</p>
                    
                    <ParaphraseButton
                      mode={mode} 
                      userTextValue={userTextValue}
                      setUserTextValue={setUserTextValue}
                      setParaphraseBtnFlag={setParaphraseBtnFlag}
                      />
                </>
                :

                <>
                <UploadIcon mode={mode} />
                <ParaphraseButton
                      mode={mode} 
                      userTextValue={userTextValue}
                      setUserTextValue={setUserTextValue}
                      setParaphraseBtnFlag={setParaphraseBtnFlag}
                      />
                </>



            }

        </div>
    </div>
}


export default FooterLeft;