const activities = [
  {
    name: "Burke Lake Park",
    place: "Burke Lake Park",
    city: "Fairfax Station, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~20 minutes from Fairfax",
    image: "🌲",
    description: "A relaxing park with lake views, trails, picnic areas, and open space. Great for a calm outdoor reset.",
    goodFor: "Walking, relaxing, picnics, easy solo time",
    matchReason: "This matches because it is free, outdoor, solo-friendly, and low energy."
  },
  {
    name: "Green Spring Gardens",
    place: "Green Spring Gardens",
    city: "Alexandria, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🌿",
    description: "A peaceful public garden with walking paths, flowers, historic buildings, and quiet scenery.",
    goodFor: "Relaxing walks, photos, peaceful afternoons",
    matchReason: "This is a calm outdoor option that works well alone and does not require much energy."
  },
  {
    name: "Old Town Fairfax Walk",
    place: "Old Town Fairfax",
    city: "Fairfax, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "🏛️",
    description: "Walk around Old Town Fairfax, explore local shops, historic buildings, and nearby cafes.",
    goodFor: "Simple local exploring, walking, casual afternoons",
    matchReason: "This is local, free, outdoor, and easy to do without a group."
  },
  {
    name: "Fairfax Ice Arena",
    place: "Fairfax Ice Arena",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$15-$25",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "In Fairfax",
    image: "⛸️",
    description: "A local indoor ice skating rink that works well for friends, dates, or casual weekend plans.",
    goodFor: "Friends, casual activity, something active but not exhausting",
    matchReason: "This fits because it is indoor, group-friendly, and medium energy."
  },
  {
    name: "Cinema Arts Theatre",
    place: "Cinema Arts Theatre",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$12-$20",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "🎬",
    description: "A relaxed local movie theater option that is good when you want to go out but keep the energy low.",
    goodFor: "Movies, low-energy hangouts, rainy days",
    matchReason: "This is indoor, group-friendly, and low energy."
  },
  {
    name: "De Clieu Coffee",
    place: "De Clieu Coffee & Sandwiches",
    city: "Fairfax, VA",
    cost: 15,
    costLabel: "$10-$20",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "In Fairfax",
    image: "☕",
    description: "A cozy coffee shop in Fairfax that works well for reading, studying, or having a relaxed solo outing.",
    goodFor: "Coffee, studying, reading, low-energy solo time",
    matchReason: "This matches because it is indoor, affordable, solo-friendly, and low energy."
  },
  {
    name: "Bowlero Centreville",
    place: "Bowlero Centreville",
    city: "Centreville, VA",
    cost: 25,
    costLabel: "$20-$40",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~20 minutes from Fairfax",
    image: "🎳",
    description: "A modern bowling alley with arcade games, food, and a fun group atmosphere.",
    goodFor: "Friend groups, birthdays, casual weekend plans",
    matchReason: "This is indoor, group-focused, and medium energy."
  },
  {
    name: "Tysons Corner Center",
    place: "Tysons Corner Center",
    city: "Tysons, VA",
    cost: 20,
    costLabel: "$0-$50",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🛍️",
    description: "A large mall with shopping, food, desserts, and plenty of space to walk around with friends.",
    goodFor: "Shopping, food, casual group plans",
    matchReason: "This is an indoor friend activity with a flexible budget and medium energy."
  },
  {
    name: "Monster Mini Golf",
    place: "Monster Mini Golf",
    city: "Chantilly, VA",
    cost: 15,
    costLabel: "$12-$20",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~15 minutes from Fairfax",
    image: "⛳",
    description: "A glow-in-the-dark indoor mini golf spot that is simple, fun, and easy for a group.",
    goodFor: "Friends, casual competition, low-pressure plans",
    matchReason: "This fits because it is affordable, indoor, friend-friendly, and medium energy."
  },
  {
    name: "Meadowlark Botanical Gardens",
    place: "Meadowlark Botanical Gardens",
    city: "Vienna, VA",
    cost: 10,
    costLabel: "$5-$10",
    setting: "outdoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🌸",
    description: "A scenic garden with walking paths, water features, and peaceful outdoor views.",
    goodFor: "Photos, peaceful walks, solo reset",
    matchReason: "This is outdoor, calm, affordable, and solo-friendly."
  },
  {
    name: "Great Falls Park",
    place: "Great Falls Park",
    city: "McLean, VA",
    cost: 20,
    costLabel: "$20 vehicle pass",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "high",
    distance: "~35 minutes from Fairfax",
    image: "🥾",
    description: "A beautiful park with waterfall overlooks and hiking trails. Best for people who want a more active outdoor plan.",
    goodFor: "Hiking, views, active friend groups",
    matchReason: "This is outdoor, group-friendly, and high energy."
  },
  {
    name: "Lake Accotink Park",
    place: "Lake Accotink Park",
    city: "Springfield, VA",
    cost: 0,
    costLabel: "Free",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~20 minutes from Fairfax",
    image: "🚶",
    description: "A local park with trails, lake views, picnic areas, and space for a casual group walk.",
    goodFor: "Walking, friends, easy outdoor plans",
    matchReason: "This is free, outdoor, friend-friendly, and medium energy."
  },
  {
    name: "Udvar-Hazy Center",
    place: "Steven F. Udvar-Hazy Center",
    city: "Chantilly, VA",
    cost: 15,
    costLabel: "Parking fee",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~20 minutes from Fairfax",
    image: "✈️",
    description: "A large aviation and space museum with aircraft, exhibits, and plenty to explore indoors.",
    goodFor: "Museums, aviation, solo exploring, rainy days",
    matchReason: "This is indoor, low energy, and works well alone."
  },
  {
    name: "Escape Room Herndon",
    place: "Escape Room Herndon",
    city: "Herndon, VA",
    cost: 35,
    costLabel: "$30-$40",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🧩",
    description: "A team puzzle experience where your group solves clues together before time runs out.",
    goodFor: "Friend groups, teamwork, something different",
    matchReason: "This is indoor, designed for groups, and medium energy."
  },
  {
    name: "Topgolf Loudoun",
    place: "Topgolf Loudoun",
    city: "Ashburn, VA",
    cost: 45,
    costLabel: "$30-$60",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "medium",
    distance: "~35 minutes from Fairfax",
    image: "🏌️",
    description: "A social golf range with food, music, and games. Good for groups even if not everyone plays golf.",
    goodFor: "Groups, casual sports, food, weekend plans",
    matchReason: "This is outdoor, friend-friendly, and medium energy."
  },
  {
    name: "Wolf Trap Show",
    place: "Wolf Trap National Park for the Performing Arts",
    city: "Vienna, VA",
    cost: 60,
    costLabel: "$40+",
    setting: "outdoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🎵",
    description: "An outdoor concert and performance venue that is great for a relaxed evening with friends.",
    goodFor: "Concerts, performances, relaxed group nights",
    matchReason: "This is outdoor, group-friendly, and low energy."
  },
  {
    name: "Capital One Hall",
    place: "Capital One Hall",
    city: "Tysons, VA",
    cost: 70,
    costLabel: "$50+",
    setting: "indoor",
    groupType: "friends",
    energyLevel: "low",
    distance: "~25 minutes from Fairfax",
    image: "🎭",
    description: "An indoor performance venue with concerts, comedy, theater, and live events.",
    goodFor: "Shows, concerts, indoor group plans",
    matchReason: "This is indoor, group-friendly, and low energy."
  },
  {
    name: "Workhouse Arts Center",
    place: "Workhouse Arts Center",
    city: "Lorton, VA",
    cost: 20,
    costLabel: "$0-$30",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~30 minutes from Fairfax",
    image: "🎨",
    description: "An arts center with galleries, classes, performances, and creative events.",
    goodFor: "Art, solo exploring, creative inspiration",
    matchReason: "This is indoor, low energy, and works well as a solo activity."
  },
  {
    name: "Cooking Class",
    place: "Sur La Table Cooking Class",
    city: "Tysons, VA",
    cost: 90,
    costLabel: "$80+",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "medium",
    distance: "~25 minutes from Fairfax",
    image: "🍳",
    description: "A hands-on cooking class where you learn new recipes and techniques in a structured setting.",
    goodFor: "Trying something new, solo learning, food lovers",
    matchReason: "This is indoor, solo-friendly, and medium energy."
  },
  {
    name: "Salamander Spa Day",
    place: "Salamander Middleburg",
    city: "Middleburg, VA",
    cost: 120,
    costLabel: "$100+",
    setting: "indoor",
    groupType: "alone",
    energyLevel: "low",
    distance: "~45 minutes from Fairfax",
    image: "🧖",
    description: "A premium spa experience for relaxing, resetting, and taking a slower day.",
    goodFor: "Relaxation, self-care, quiet solo time",
    matchReason: "This is indoor, solo-friendly, and low energy."
  }
];

const form = document.getElementById("quest-form");
const budgetInput = document.getElementById("budget");
const settingInput = document.getElementById("setting");
const groupInput = document.getElementById("groupType");
const energyInput = document.getElementById("energyLevel");
const message = document.getElementById("form-message");
const resultsSection = document.getElementById("results-section");
const resultsGrid = document.getElementById("results-grid");
const resultsTitle = document.getElementById("results-title");
const randomBtn = document.getElementById("random-btn");
const randomPick = document.getElementById("random-pick");
const resetBtn = document.getElementById("reset-btn");

let currentMatches = [];

function isValidBudget(budget) {
  return typeof budget === "number" && !Number.isNaN(budget) && budget >= 0;
}

function getPreferences() {
  return {
    budget: Number(budgetInput.value),
    setting: settingInput.value,
    groupType: groupInput.value,
    energyLevel: energyInput.value
  };
}

function validatePreferences(preferences) {
  return (
    isValidBudget(preferences.budget) &&
    preferences.setting !== "" &&
    preferences.groupType !== "" &&
    preferences.energyLevel !== ""
  );
}

function getRecommendations(activityList, preferences) {
  return activityList
    .filter(activity => activity.cost <= preferences.budget)
    .filter(activity => activity.setting === preferences.setting)
    .filter(activity => activity.groupType === preferences.groupType)
    .filter(activity => activity.energyLevel === preferences.energyLevel)
    .sort((a, b) => a.cost - b.cost);
}

function getRandomActivity(activityList) {
  if (activityList.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * activityList.length);
  return activityList[randomIndex];
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function createActivityCard(activity) {
  const card = document.createElement("article");
  card.className = "activity-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="card-image">${activity.image}</div>
    <div class="card-body">
      <p class="location">${activity.city}</p>
      <h3>${activity.name}</h3>
      <p class="description">${activity.description}</p>

      <div class="tag-row">
        <span class="tag ${activity.cost === 0 ? "free" : "cost"}">${activity.costLabel}</span>
        <span class="tag">${capitalize(activity.setting)}</span>
        <span class="tag">${activity.groupType === "alone" ? "Solo" : "Friends"}</span>
        <span class="tag energy">${capitalize(activity.energyLevel)} Energy</span>
      </div>

      <button type="button" class="details-btn">View Details</button>
    </div>
  `;

  card.addEventListener("click", () => openModal(activity));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter") openModal(activity);
  });

  return card;
}

function renderResults(matches) {
  resultsGrid.innerHTML = "";
  randomPick.classList.add("hidden");
  resultsSection.classList.remove("hidden");

  if (matches.length === 0) {
    resultsTitle.textContent = "No Matching Quests";
    randomBtn.classList.add("hidden");

    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.innerHTML = `
      <h3>No activities matched those preferences.</h3>
      <p>Try increasing your budget or changing one of your filters.</p>
    `;

    resultsGrid.appendChild(emptyState);
    return;
  }

  resultsTitle.textContent = `${matches.length} Quest${matches.length === 1 ? "" : "s"} Found`;
  randomBtn.classList.remove("hidden");

  matches.forEach(activity => {
    resultsGrid.appendChild(createActivityCard(activity));
  });

  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRandomPick() {
  const pick = getRandomActivity(currentMatches);
  if (!pick) return;

  randomPick.classList.remove("hidden");
  randomPick.innerHTML = `
    <p class="eyebrow">Random Pick</p>
    <h3>${pick.image} ${pick.name}</h3>
    <p>${pick.description}</p>
    <div class="tag-row">
      <span class="tag ${pick.cost === 0 ? "free" : "cost"}">${pick.costLabel}</span>
      <span class="tag">${pick.city}</span>
      <span class="tag">${pick.distance}</span>
    </div>
  `;

  randomPick.addEventListener("click", () => openModal(pick), { once: true });
}

function openModal(activity) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";

  modal.innerHTML = `
    <div class="modal-card">
      <button type="button" class="modal-close">×</button>

      <div class="modal-hero">${activity.image}</div>

      <p class="eyebrow">Quest Details</p>
      <h2>${activity.name}</h2>
      <p class="modal-location">📍 ${activity.place} — ${activity.city}</p>

      <div class="modal-tags">
        <span class="tag ${activity.cost === 0 ? "free" : "cost"}">${activity.costLabel}</span>
        <span class="tag">${capitalize(activity.setting)}</span>
        <span class="tag">${activity.groupType === "alone" ? "Solo" : "Friends"}</span>
        <span class="tag energy">${capitalize(activity.energyLevel)} Energy</span>
      </div>

      <div class="modal-section">
        <h3>What it entails</h3>
        <p>${activity.description}</p>
      </div>

      <div class="modal-section">
        <h3>Good for</h3>
        <p>${activity.goodFor}</p>
      </div>

      <div class="modal-section">
        <h3>Distance</h3>
        <p>${activity.distance}</p>
      </div>

      <div class="modal-section match-box">
        <h3>Why this matches</h3>
        <p>${activity.matchReason}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  const closeBtn = modal.querySelector(".modal-close");

  function closeModal() {
    modal.remove();
    document.body.classList.remove("modal-open");
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener("keydown", function escapeClose(event) {
    if (event.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escapeClose);
    }
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const preferences = getPreferences();

  if (!validatePreferences(preferences)) {
    message.textContent = "Please fill out every field before searching.";
    resultsSection.classList.add("hidden");
    return;
  }

  message.textContent = "";
  currentMatches = getRecommendations(activities, preferences);
  renderResults(currentMatches);
});

randomBtn.addEventListener("click", renderRandomPick);

resetBtn.addEventListener("click", () => {
  form.reset();
  message.textContent = "";
  currentMatches = [];
  resultsGrid.innerHTML = "";
  randomPick.innerHTML = "";
  randomPick.classList.add("hidden");
  resultsSection.classList.add("hidden");
  budgetInput.focus();
});