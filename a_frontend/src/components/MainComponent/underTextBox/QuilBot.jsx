import React from "react";


const QuilBot = ({mode}) => {
    return <div className={mode? "quil-bot-main-div-extra-DARK" : "quil-bot-main-div-extra"}>

        <div className="extra-top-text-div">
            <h2 className={mode? "extra-top-h2-DARK" : "extra-top-h2" } >QuillBot's AI-powered paraphrasing tool will enhance your writing</h2>
            <p className={mode? "extra-top-p-DARK" : "extra-top-p" } >Your words matter, and our paraphrasing tool is designed to ensure you use the right ones. With unlimited Custom modes and 8 predefined modes, Paraphraser lets you rephrase text countless ways. Our product will improve your fluency while also ensuring you have the appropriate vocabulary, tone, and style for any occasion. Simply enter your text into the input box, and our AI will work with you to create the best paraphrase.</p>
        </div>
        <div className="extra-2nd-text-div">
            <h2 className={mode? "extra-2nd-h2-DARK" : "extra-2nd-h2" } >Why use QuillBot’s Paraphrasing Tool?</h2>
            <p className={mode? "extra-2nd-p-DARK" : "extra-2nd-p" }>Our Paraphraser has unique features.</p>
            <div className="extra-2nd-image-text-div">
                <img className={mode? "extra-2nd-image-DARK" : "extra-2nd-image" } src="https://assets.quillbot.com/images/landinPage/synonymNew.gif" alt="showImage1" />
                <div className="extra-2nd-div-text-box">
                    <h2 className="extra-2nd-text-h2">CUSTOMIZATION</h2>
                    <h1 className={mode? "extra-2nd-text-h1-DARK" : "extra-2nd-text-h1" }>Decide how much vocabulary change you want</h1>
                    <p className={mode? "extra-2nd-text-p-DARK" : "extra-2nd-text-p" }>Use the Synonym Slider to change more (or less) of your writing. Moving the slider to the left will give you a more accurate rephrase with fewer changes; moving it to the right means you’ll get a more creative output with more cha</p>
                </div>
            </div>
        </div>

        <div className={mode? "extra-3rd-div-DARK" : "extra-3rd-div" }>
            <div className="extra-3rd-text-div">
                <h2 className="extra-3rd-h2">ARTIFICIAL INTELLIGENCE</h2>
                <h1 className={mode? "extra-3rd-h1-DARK" : "extra-3rd-h1" }>Find the best synonym using an AI-powered thesaurus</h1>
                <p className={mode? "extra-3rd-p-DARK" : "extra-3rd-p" }>Click on any word in the paraphrase to see a list of suggested synonyms. Then pick the perfect word or phrase to express your meaning!</p>
            </div>
            <img className={mode? "extra-3rd-image-DARK" : "extra-3rd-image" } src="https://assets.quillbot.com/images/landinPage/synonymImg.gif" alt="showImage2" />
        </div>
    </div>
}

export default QuilBot;