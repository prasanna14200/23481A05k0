const optimizeSchedule = require("../services/knapsackService");

const Log = require("../middleware/logger");

const getOptimizedSchedule = async (req, res) => {

    try {

        await Log(
            "backend",
            "info",
            "controller",
            "Optimization started"
        );

        const tasks = [

            {
                id: 1,
                duration: 2,
                impactScore: 40
            },

            {
                id: 2,
                duration: 3,
                impactScore: 50
            },

            {
                id: 3,
                duration: 5,
                impactScore: 100
            },

            {
                id: 4,
                duration: 1,
                impactScore: 20
            }
        ];

        const maxHours = 5;

        const result = optimizeSchedule(tasks, maxHours);

        await Log(
            "backend",
            "info",
            "controller",
            "Optimization completed"
        );

        res.status(200).json({

            success: true,

            availableHours: maxHours,

            optimizedImpact: result.maxImpact,

            selectedTasks: result.selectedTasks
        });

    } catch (error) {

        await Log(
            "backend",
            "error",
            "controller",
            "Optimization failed"
        );

        res.status(500).json({

            success: false,
            message: "Optimization failed"
        });
    }
};

module.exports = {
    getOptimizedSchedule
};