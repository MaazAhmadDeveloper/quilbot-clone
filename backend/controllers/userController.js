import Users from "../database/models/usersData.js";

const addUser = async (req, res)=>{

    const user = req.body.sub;

    try {
        let exist = await Users.findOne({sub: user});

        if (!exist) {
            const userData = req.body;

            const userCollection = new Users(userData);
            await userCollection.save()

            return res.status(200).json({msg: "user added succesfully"})
        }else{
            return res.status(200).json({msg: "user already exist"})
        }

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export default addUser;