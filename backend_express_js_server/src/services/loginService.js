const user = require("../database/User")

const verifyLogin = async (data) => {
    try {
        const getUserData = await user.getOneUser(data);
        if(data.password === getUserData.passwort){
            return true;
        }else{
            throw {
            status: 401,
            message: `Unauthorzied User: '${data.user} ${data.password}'`,
            };
        }
    } catch (error) {
        throw error;
    }
};

const createNewUser = async (data) => {
    try {
        const createNewUser = await user.createNewUser(data);
        return createNewUser;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    verifyLogin,
    createNewUser
};