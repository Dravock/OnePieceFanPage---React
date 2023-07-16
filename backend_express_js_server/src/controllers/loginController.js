const loginService = require("../services/loginService");


const postUserLogin =async (req, res) => {
    const { body } = req;
    if ( !body.user || !body.password ){
        return res.status(400).send({
                status: "FAILED",
                data: {
                    error:
                        "One of the following keys is missing or is empty in request body: 'name', 'password'",
                    },
            });
        
    }
    
    const loginData = {
        user: body.user,
        password: body.password,
    };

    try {
        const login = await loginService.verifyLogin(loginData);
        if(login){
            return res.status(200).send({ status: "OK" });
        }
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


const createNewUser =async (req, res) => {
    const { body } = req;
    if ( !body.user || !body.password || !body.email ){
        return res.status(400).send({
                status: "FAILED",
                data: {
                    error:
                        "One of the following keys is missing or is empty in request body: 'name', 'password'",
                    },
            });
        
    }
    
    const loginData = {
        user: body.user,
        password: body.password,
        email:body.email
    };

    try {
        const login = await loginService.createNewUser(loginData);
        if(login){
            return res.status(200).send({ status: "OK" });
        }
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};







module.exports = {
    postUserLogin,
    createNewUser
};