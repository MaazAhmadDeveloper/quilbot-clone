import React, {useContext, useState} from "react";

// Components
import TeaxtComponentLeft from "./forleft/TeaxtComponentLeft";
import FooterLeft from "./forleft/FooterLeft";


const LeftComponent = ({mode, setrecieveTextValue})=>{

    const [ userTextValue , setUserTextValue ] = useState("");

    return <div className="left-text-box-main-div-divider">

            <TeaxtComponentLeft 
            mode={mode} 
            setUserTextValue={setUserTextValue}
            userTextValue={userTextValue}
            />

            <FooterLeft 
            mode={mode}
            userTextValue={userTextValue}
            setUserTextValue={setUserTextValue}
            setrecieveTextValue={setrecieveTextValue}
            />

    </div>
}

export default LeftComponent;