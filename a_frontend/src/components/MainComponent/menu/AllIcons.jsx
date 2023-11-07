import React from "react";
import { styled } from "@mui/material";

import { 
Subject,
TextRotationNoneOutlined,
PageviewOutlined,
HistoryEduOutlined,
SegmentOutlined,
FormatQuoteOutlined,
TranslateOutlined,
DiamondOutlined,
OpenInNewOutlined,
HelpOutline,
EmailOutlined
} from "@mui/icons-material";

export const ParaphraseIcon = styled(Subject)`
    color: #fff;
    background-color: #499557;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const GrammerCheker = styled(TextRotationNoneOutlined)`
    color: #fff;
    background-color: #ef414c;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const PlagiarismCheker = styled(PageviewOutlined)`
    color: #fff;
    background-color: #f27d0f;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const CoWriter = styled(HistoryEduOutlined)`
    color: #fff;
    background-color: #319dff;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const Summarizer = styled(SegmentOutlined)`
    color: #fff;
    background-color: #8051ff;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const CitationGenerator = styled(FormatQuoteOutlined)`
    color: #fff;
    background-color: #0067c5;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const Translator = styled(TranslateOutlined)`
    ${({mode})=> mode? null : "color: #fff"};
    ${({mode})=> mode? "background-color:#f4f4f4" : "background-color:#252525"};
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const DiamondIcon = styled(DiamondOutlined)`
    color: #dc9e00;
    border-radius: 50%;
    font-size: 24px;
    padding: 4px;
    margin:5px;
    align-items: center;
`
export const QuestionMark = styled(HelpOutline)`
    ${({mode})=> mode? "color: #b3b5b7" : "color: #5f6368" };
    border-radius: 50%;
    font-size: 26px;
    padding: 4px;
    margin: auto 10px;
    align-items: center;
`
export const MailIcon = styled(EmailOutlined)`
    ${({mode})=> mode? "color: #b3b5b7" : "color: #5f6368" };
    border-radius: 50%;
    font-size: 26px;
    padding: 4px;
    margin: auto 10px;
    align-items: center;
`
export const ExtensionIcon = styled(OpenInNewOutlined)`
    color: #212121;
    border-radius: 50%;
    font-size: 18px;
    padding: 4px;
    margin: auto;
    margin-right: 10px;
    align-items: center;
`

const Chrome = styled("img")({
    margin:"12px 5px 12px 12px",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
})

const MicroWord = styled("img")({
    margin:"10px 5px 10px 10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%"
})

const QuilBotLogo = styled("img")({
    margin:"10px 5px 10px 10px",
    width: "30px",
    height: "30px",
    borderRadius: "50%"
})

const ChromeImage = ()=>{
    return <Chrome src="data:image/jpeg;base64,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" alt="chrome" />
}

const MicroWordImage = ()=>{
    return <MicroWord src="https://cdn.icon-icons.com/icons2/3053/PNG/512/microsoft_word_alt_macos_bigsur_icon_189946.png" alt="microsoft-Word" />
}

const QuilBotLogoImage = ()=>{
    return <QuilBotLogo src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/hohs8swq3kxoldxg0crz" alt="quilbot-logo" />
}


export {ChromeImage,QuilBotLogoImage ,MicroWordImage  };
