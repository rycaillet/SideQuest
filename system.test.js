const {
    validatePreferences,
    getRecommendations,
    hasMatches,
    getRandomActivity
} = require("./recommendation");

const activities = [
    { name: "Coffee Shop", cost: 10, setting: "indoor", groupType: "alone", energyLevel: "low" },
    { name: "Mini Golf", cost: 25, setting: "outdoor", groupType: "friends", energyLevel: "medium" },
    { name: "Hiking", cost: 0, setting: "outdoor", groupType: "friends", energyLevel: "high" },
    { name: "Bowling", cost: 20, setting: "indoor", groupType: "friends", energyLevel: "medium" }
];

test("system: user receives Mini Golf recommendation", () => {
    const preferences = {
        budget: 30,
        setting: "outdoor",
        groupType: "friends",
        energyLevel: "medium"
    };

    expect(validatePreferences(preferences)).toBe(true);

    const results = getRecommendations(activities, preferences);

    expect(results[0].name).toBe("Mini Golf");
});

test("system: user receives Hiking when budget is zero", () => {
    const preferences = {
        budget: 0,
        setting: "outdoor",
        groupType: "friends",
        energyLevel: "high"
    };

    expect(validatePreferences(preferences)).toBe(true);

    const results = getRecommendations(activities, preferences);

    expect(results[0].name).toBe("Hiking");
});

test("system: invalid budget is rejected", () => {
    const preferences = {
        budget: -10,
        setting: "outdoor",
        groupType: "friends",
        energyLevel: "medium"
    };

    expect(validatePreferences(preferences)).toBe(false);
});

test("system: no matching activities returns no matches", () => {
    const preferences = {
        budget: 5,
        setting: "indoor",
        groupType: "friends",
        energyLevel: "high"
    };

    const results = getRecommendations(activities, preferences);

    expect(hasMatches(results)).toBe(false);
    expect(results).toEqual([]);
});

test("system: user can get random activity from recommendations", () => {
    const preferences = {
        budget: 30,
        setting: "indoor",
        groupType: "friends",
        energyLevel: "medium"
    };

    const results = getRecommendations(activities, preferences);
    const randomActivity = getRandomActivity(results);

    expect(results).toContain(randomActivity);
});