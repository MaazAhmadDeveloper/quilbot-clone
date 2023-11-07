import React from "react";

// components
import TopHeadedButtons from "./headButtons/TopHeadedButtons";
import HeadButtons from "./headButtons/HeadButtons";

const HeaderButtons = ({mode}) => {
    return <div>

        <TopHeadedButtons mode={mode}/>

        <HeadButtons mode={mode}/>

    </div>
}

export default HeaderButtons;