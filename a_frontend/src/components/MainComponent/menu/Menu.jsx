import React, { useState, useContext } from "react";
import { Menu, MenuItem, styled, Box, Typography } from "@mui/material";
import { DataByContext } from "../../../context/DataByContext";

// All Icons
import {
    ParaphraseIcon,
    GrammerCheker,
    PlagiarismCheker,
    CoWriter,
    Summarizer,
    CitationGenerator,
    Translator,
    DiamondIcon,
    ChromeImage,
    QuilBotLogoImage,
    MicroWordImage,
    ExtensionIcon,
    MailIcon,
    QuestionMark
} from "./AllIcons";
 
const MenuComponent = () => {

    const {setClickedOption , menuClick, mode} = useContext(DataByContext);

    return <div className={mode? "class-for-scroll-bar-style-DARK" : "class-for-scroll-bar-style-BRIGHT"}>
        
        <div className={mode? menuClick? "main-resources-div-small-width-DARK for-media-query-main-resources": "main-resources-div-DARK for-media-query-main-resources" : menuClick ? "main-resources-div-small-width for-media-query-main-resources" : "main-resources-div for-media-query-main-resources" }>

            <ul className="main-unOrderlist for-media-query-unOrderlist">

                <li autoFocus className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Paraphraser")}}>

                    <ParaphraseIcon/>
                    <p className= {mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Paraphraser </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Grammer Cheker")}}>

                    <GrammerCheker />
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Grammer Cheker </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Plagiarism Checker")}}>

                    <PlagiarismCheker />
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Plagiarism Checker </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Co-Writer")}}>

                    <CoWriter />
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Co-Writer </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Sumarizer")}}>

                    <Summarizer />
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Sumarizer </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Citation Generator")}}>

                    <CitationGenerator />
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Citation Generator </p>

                </li>
                <li className={mode? "menu-listitem-DARK for-media-query-listItem" : "menu-listitem for-media-query-listItem"} onClick={()=>{setClickedOption("Translator")}}>

                    <Translator mode={mode}/> 
                    <p className={mode? "listitem-text-DARK for-media-query-listItem-text" : "listitem-text for-media-query-listItem-text"}> Translator </p>

                </li>


                {/* Yellow */}

                <li className={mode? "menu-listitem-yellow-DARK for-media-query-extra" : "menu-listitem-yellow for-media-query-extra"} onClick={()=>{setClickedOption("Premium Paraphraser")}}>

                    <DiamondIcon />
                    <p className="listitem-text-Paraphraser"> QuilBot Paraphraser </p>

                </li>


                {/* Extensions */}

                <li className={mode? "menu-listitem-extensions-DARK for-media-query-extra" : "menu-listitem-extensions for-media-query-extra"} onClick={()=>{setClickedOption("For Chrome")}}>

                    <ChromeImage />
                    <p className={mode? "listitem-text-extension-DARK for-media-query-extra" : "listitem-text-extension for-media-query-extra"}> QuilBot for Chrome </p>
                    <ExtensionIcon />

                </li>

                <li className={mode? "menu-listitem-extensions-DARK for-media-query-extra" : "menu-listitem-extensions for-media-query-extra"} onClick={()=>{setClickedOption("For Word")}}>

                    <MicroWordImage />
                    <p className={mode? "listitem-text-extension-DARK for-media-query-extra" : "listitem-text-extension for-media-query-extra"}> QuilBot for Word </p>
                    <ExtensionIcon />

                </li>
                <li className={mode? "menu-listitem-extensions-DARK last-menu-listitem-extensions-DARK for-media-query-extra" : "menu-listitem-extensions last-menu-listitem-extensions for-media-query-extra"} onClick={()=>{setClickedOption("For macOS")}}>

                    <QuilBotLogoImage />
                    <p className={mode? "listitem-text-extension-DARK for-media-query-extra" : "listitem-text-extension for-media-query-extra"}> QuilBot for macOS </p>
                    <ExtensionIcon />

                </li>


                {/* Two Items */}

                <li className={mode? "menu-listitem-info-DARK for-media-query-extra" : "menu-listitem-info for-media-query-extra"} onClick={()=>{setClickedOption("To Help Center")}}>

                    <QuestionMark mode={mode}/>
                    <p className={mode? "menu-listitem-Info-text-DARK help" : "menu-listitem-Info-text help"}> Help Center </p>


                </li>

                <li className={mode? "menu-listitem-info-DARK for-media-query-extra" : "menu-listitem-info for-media-query-extra"} onClick={()=>{setClickedOption("To Contact Us")}}>

                    <MailIcon mode={mode}/>
                    <p className={mode? "menu-listitem-Info-text-DARK mail" : "menu-listitem-Info-text mail"}> Contact Us </p>


                </li>

                <li className="for-media-query-extra">
                    <p className={mode? "quilbot-version-DARK" : "quilbot-version-DARK"} style={{paddingBottom: "30px", width: "100%", textAlign:"center"}}>v14.496.0</p>
                </li>

            </ul>
        </div>
    </div>
}


export default MenuComponent;