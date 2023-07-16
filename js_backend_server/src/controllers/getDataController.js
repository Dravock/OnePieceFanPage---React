const getDataService = require("../services/workoutService");

const getAllData = async (req, res) => {
    try {
        const allWorkouts =await getDataService.getAllWorkouts();
        res.send({ status: "OK", data: allWorkouts });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneData = async (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        res
        .status(400)
        .send({
            status: "FAILED",
            data: { error: "Parameter ':workoutId' can not be empty" },
        });
    }
    try {
        const workout = await getDataService.getOneWorkout(workoutId);
        res.send({ status: "OK", data: workout });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllData,
    getOneData,
}