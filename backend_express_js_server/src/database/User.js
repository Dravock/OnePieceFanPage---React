const connDB = require("./conDB");

const getAllUser = () =>{
    return new Promise((resolve, reject) =>{
        connDB.query('SELECT * FROM user;', (err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

const getOneUser =  (data) => {
    try {
        return new Promise((resolve, reject) =>{
            connDB.query('SELECT * FROM user WHERE vorname=?;',[data.user],(err,results) =>{
                if(err){
                    throw {
                        status: 400,
                        message: `Can't find user with the id '${data.user}'`,
                    };
                }
                return resolve(results[0]);
            });
        });
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const insertNewUser = (rawObj) =>{
    const obj =rawObj[0];
    const arrObj =[obj.vorname,obj.nachname, obj.email, obj.passwort]
    
    return new Promise((resolve, reject) =>{
        connDB.query('INSERT INTO `user`( `vorname`, `nachname`, `email`, `passwort`) VALUES (?);',[arrObj],(err,results) =>{
            if(err){
                return reject(err);
            }
            return resolve('hat geklappt');
        });
    });
};

module.exports = {
    getOneUser,
    getAllUser,
    insertNewUser
}