const {
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
} = require("./recommendation");

const coffee = { name: "Coffee Shop", cost: 10, setting: "indoor", groupType: "alone", energyLevel: "low" };
const golf = { name: "Mini Golf", cost: 25, setting: "outdoor", groupType: "friends", energyLevel: "medium" };
const hiking = { name: "Hiking", cost: 0, setting: "outdoor", groupType: "friends", energyLevel: "high" };
const arcade = { name: "Arcade", cost: 15, setting: "indoor", groupType: "friends", energyLevel: "medium" };
const bowling = { name: "Bowling", cost: 20, setting: "indoor", groupType: "friends", energyLevel: "medium" };

const all = [coffee, golf, hiking, arcade, bowling];

describe("isValidBudget", () => {
    test("returns true for valid budgets", () => {
        expect(isValidBudget(0)).toBe(true);
        expect(isValidBudget(100)).toBe(true);
        expect(isValidBudget(37.23)).toBe(true);
    });

    test("returns false for invalid budgets", () => {
        expect(isValidBudget(-5)).toBe(false);
        expect(isValidBudget()).toBe(false);
        expect(isValidBudget(null)).toBe(false);
        expect(isValidBudget("100")).toBe(false);
        expect(isValidBudget(NaN)).toBe(false);
    });
});

describe("validatePreferences", () => {
    const validPrefs = {
        budget: 30,
        setting: "outdoor",
        groupType: "friends",
        energyLevel: "medium"
    };

    test("returns true for valid preferences", () => {
        expect(validatePreferences(validPrefs)).toBe(true);
    });

    test("returns false for invalid preferences", () => {
        expect(validatePreferences(null)).toBe(false);
        expect(validatePreferences("preferences")).toBe(false);
        expect(validatePreferences([])).toBe(false);
        expect(validatePreferences({ ...validPrefs, budget: -10 })).toBe(false);
        expect(validatePreferences({ ...validPrefs, setting: "" })).toBe(false);
        expect(validatePreferences({ ...validPrefs, groupType: null })).toBe(false);
        expect(validatePreferences({ ...validPrefs, energyLevel: undefined })).toBe(false);
    });
});

describe("filterByBudget", () => {
    test("returns activities within budget", () => {
        expect(filterByBudget(all, 10.99)).toEqual([coffee, hiking]);
    });

    test("includes activities equal to budget", () => {
        expect(filterByBudget(all, 20)).toEqual([coffee, hiking, arcade, bowling]);
    });

    test("returns empty array when no matches", () => {
        expect(filterByBudget([golf, arcade, bowling], 5)).toEqual([]);
    });
});

describe("filterBySetting", () => {
    test("returns indoor activities", () => {
        expect(filterBySetting(all, "indoor")).toEqual([coffee, arcade, bowling]);
    });

    test("returns outdoor activities", () => {
        expect(filterBySetting(all, "outdoor")).toEqual([golf, hiking]);
    });

    test("returns all activities when setting is either", () => {
        expect(filterBySetting(all, "either")).toEqual(all);
    });
});

describe("filterByGroupType", () => {
    test("returns friends activities", () => {
        const result = filterByGroupType(all, "friends");
        expect(result.length).toBe(4);
        expect(result.every(activity => activity.groupType === "friends")).toBe(true);
    });

    test("returns alone activities", () => {
        expect(filterByGroupType(all, "alone")).toEqual([coffee]);
    });

    test("returns empty array for invalid group type", () => {
        expect(filterByGroupType(all, "random")).toEqual([]);
    });
});

describe("filterByEnergyLevel", () => {
    test("returns low energy activities", () => {
        expect(filterByEnergyLevel(all, "low")).toEqual([coffee]);
    });

    test("returns medium energy activities", () => {
        expect(filterByEnergyLevel(all, "medium")).toEqual([golf, arcade, bowling]);
    });

    test("handles invalid energy input", () => {
        expect(filterByEnergyLevel(all, "extreme")).toEqual([]);
        expect(filterByEnergyLevel(all, null)).toEqual([]);
    });

    test("excludes malformed activities", () => {
        const badActivity = { name: "Mystery", cost: 0 };
        expect(filterByEnergyLevel([coffee, badActivity], "low")).toEqual([coffee]);
    });
});

describe("getRecommendations", () => {
    test("returns matching activity when all preferences match", () => {
        const preferences = {
            budget: 30,
            setting: "outdoor",
            groupType: "friends",
            energyLevel: "medium"
        };

        expect(getRecommendations(all, preferences)).toEqual([golf]);
    });

    test("returns multiple matches sorted by cost", () => {
        const preferences = {
            budget: 25,
            setting: "indoor",
            groupType: "friends",
            energyLevel: "medium"
        };

        expect(getRecommendations(all, preferences)).toEqual([arcade, bowling]);
    });

    test("throws error for invalid input", () => {
        expect(() => getRecommendations("wrong input", {})).toThrow("Invalid activities list");
        expect(() => getRecommendations(all, null)).toThrow("Invalid preferences");
    });
});

describe("getRandomActivity", () => {
    test("returns one activity from the list", () => {
        const result = getRandomActivity(all);
        expect(all).toContain(result);
    });

    test("returns null for empty or invalid input", () => {
        expect(getRandomActivity([])).toBe(null);
        expect(getRandomActivity(null)).toBe(null);
    });
});

describe("hasMatches", () => {
    test("returns true when recommendations exist", () => {
        expect(hasMatches([coffee])).toBe(true);
    });

    test("returns false for empty or invalid input", () => {
        expect(hasMatches([])).toBe(false);
        expect(hasMatches(null)).toBe(false);
    });
});

describe("formatActivity", () => {
    test("formats activity details", () => {
        expect(formatActivity(coffee)).toBe(
            "Coffee Shop | Cost: $10 | Setting: indoor | Group: alone | Energy: low"
        );
    });
});