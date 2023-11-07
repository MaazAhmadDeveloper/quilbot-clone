import axios from "axios";

const URL = "http://localhost:8000";


export const addUserApi = async (data) =>{
    try {
        await axios.post(`${URL}/addUser` , data);
    } catch (error) {
        console.log("error while addUser api " + error.message);
    }
};


export const sendTextApi = async(data) =>{

    try {
        const response = await axios.post(`${URL}/sendText` , data);
        return response.data;
    } catch (error) {
        console.log("error while sendTextApi");
    }
}