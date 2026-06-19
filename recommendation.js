function isValidBudget(budget) {
    return typeof budget === "number" && !isNaN(budget) && budget >= 0;
}

function validatePreferences(preferences) {
    if (!preferences || typeof preferences !== "object" || Array.isArray(preferences)) {
        return false;
    }

    if (!isValidBudget(preferences.budget)) return false;
    if (typeof preferences.setting !== "string" || preferences.setting.trim() === "") return false;
    if (typeof preferences.groupType !== "string" || preferences.groupType.trim() === "") return false;
    if (typeof preferences.energyLevel !== "string" || preferences.energyLevel.trim() === "") return false;

    return true;
}

function filterByBudget(activities, budget) {
    return activities.filter(activity => activity.cost <= budget);
}

function filterBySetting(activities, setting) {
    if (setting === "either") {
        return activities;
    }

    return activities.filter(activity => activity.setting === setting);
}

function filterByGroupType(activities, groupType) {
    return activities.filter(activity => activity.groupType === groupType);
}

function filterByEnergyLevel(activities, energyLevel) {
    const validLevels = ["low", "medium", "high"];

    if (typeof energyLevel !== "string") return [];

    const pref = energyLevel.trim().toLowerCase();

    if (!validLevels.includes(pref)) return [];

    return activities.filter(activity => {
        if (!activity || typeof activity.energyLevel !== "string") return false;
        return activity.energyLevel.trim().toLowerCase() === pref;
    });
}

function getRecommendations(activities, preferences) {
    if (!Array.isArray(activities)) {
        throw new TypeError("Invalid activities list");
    }

    if (!validatePreferences(preferences)) {
        throw new Error("Invalid preferences");
    }

    let results = activities;

    results = filterByBudget(results, preferences.budget);
    results = filterBySetting(results, preferences.setting);
    results = filterByGroupType(results, preferences.groupType);
    results = filterByEnergyLevel(results, preferences.energyLevel);

    results.sort((a, b) => a.cost - b.cost);

    return results;
}

function getRandomActivity(activities) {
    if (!Array.isArray(activities) || activities.length === 0) {
        return null;
    }

    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
}

function hasMatches(recommendations) {
    if (!Array.isArray(recommendations)) return false;
    return recommendations.length > 0;
}

function formatActivity(activity) {
    return `${activity.name} | Cost: $${activity.cost} | Setting: ${activity.setting} | Group: ${activity.groupType} | Energy: ${activity.energyLevel}`;
}

module.exports = {
    isValidBudget,
    validatePreferences,
    filterByBudget,
    filterBySetting,
    filterByGroupType,
    filterByEnergyLevel,
    getRecommendations,
    getRandomActivity,
    hasMatches,
    formatActivity
};