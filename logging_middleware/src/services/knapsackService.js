function optimizeSchedule(tasks, maxHours) {

    const n = tasks.length;

    const dp = Array(n + 1)
        .fill()
        .map(() => Array(maxHours + 1).fill(0));

    for (let i = 1; i <= n; i++) {

        const duration = tasks[i - 1].duration;
        const impact = tasks[i - 1].impactScore;

        for (let w = 0; w <= maxHours; w++) {

            if (duration <= w) {

                dp[i][w] = Math.max(
                    impact + dp[i - 1][w - duration],
                    dp[i - 1][w]
                );

            } else {

                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    let selectedTasks = [];

    let w = maxHours;

    for (let i = n; i > 0; i--) {

        if (dp[i][w] !== dp[i - 1][w]) {

            selectedTasks.push(tasks[i - 1]);

            w -= tasks[i - 1].duration;
        }
    }

    return {
        maxImpact: dp[n][maxHours],
        selectedTasks
    };
}

module.exports = optimizeSchedule;