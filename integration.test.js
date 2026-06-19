const {
    filterByBudget,
    filterBySetting,
    filterByGroupType,
    getRecommendations,
    getRandomActivity,
    hasMatches,
    formatActivity,
    validatePreferences
} = require("./recommendation");

const activities = [
    { name: "Coffee Shop", cost: 10, setting: "indoor", groupType: "alone", energyLevel: "low" },
    { name: "Mini Golf", cost: 25, setting: "outdoor", groupType: "friends", energyLevel: "medium" },
    { name: "Hiking", cost: 0, setting: "outdoor", groupType: "friends", energyLevel: "high" },
    { name: "Bowling", cost: 20, setting: "indoor", groupType: "friends", energyLevel: "medium" }
];

test("integration: budget and setting filters work together", () => {
    let results = filterByBudget(activities, 20);
    results = filterBySetting(results, "indoor");

    expect(results).toEqual([
        activities[0],
        activities[3]
    ]);
});

test("integration: multiple filters work together", () => {
    let results = filterByBudget(activities, 30);
    results = filterBySetting(results, "indoor");
    results = filterByGroupType(results, "friends");

    expect(results).toEqual([activities[3]]);
});

test("integration: recommendation results can be checked, randomly selected, and formatted", () => {
    const preferences = {
        budget: 30,
        setting: "indoor",
        groupType: "friends",
        energyLevel: "medium"
    };

    expect(validatePreferences(preferences)).toBe(true);

    const results = getRecommendations(activities, preferences);
    expect(hasMatches(results)).toBe(true);

    const randomActivity = getRandomActivity(results);
    expect(results).toContain(randomActivity);

    const formatted = formatActivity(randomActivity);
    expect(formatted).toContain("Bowling");
});