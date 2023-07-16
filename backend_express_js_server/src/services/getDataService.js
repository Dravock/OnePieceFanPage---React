const user = require("../database/User")

const getAllData = async () => {
    try {
        const allWorkouts = await user.getAllUser();
        return allWorkouts;
    } catch (error) {
        throw error;
    }
};

const getOneData = async (workoutId) => {
    try {
        const workout = await user.getOneUser(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllData,
    getOneData,
};
