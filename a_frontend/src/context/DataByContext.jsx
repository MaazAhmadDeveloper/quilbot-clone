import React , {createContext, useState} from "react";

export const DataByContext = createContext();


const DataContext = ({children})=>{

    const [loginUserData , setLoginUserData] = useState();
    const [profileClick , setProfileClick] = useState(true);
    const [clickedOption , setClickedOption] = useState("Paraphraser");
    const [menuClick, setMenuClick] = useState(false);
    const [mode , setMode] = useState(false);

    return <DataByContext.Provider 
        value={{
            loginUserData,
            setLoginUserData,
            profileClick,
            setProfileClick,
            clickedOption,
            setClickedOption,
            menuClick,
            setMenuClick,
            mode,
            setMode

        }}
    >
        {children}
    </DataByContext.Provider>
}

export default DataContext;