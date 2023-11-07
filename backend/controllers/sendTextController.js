const sendText = (req,res)=>{
    const userText = req.body.userText;
 
    res.send(userText);

}

export default sendText;