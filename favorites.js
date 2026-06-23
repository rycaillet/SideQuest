const favorites =
  JSON.parse(localStorage.getItem("sideQuestFavorites")) || [];

const favoritesGrid = document.getElementById("favorites-grid");

function renderFavorites() {
  favoritesGrid.innerHTML = "";

  if (favorites.length === 0) {
    favoritesGrid.innerHTML = `
      <div class="empty-state">
        <h3>No saved favorites yet.</h3>
        <p>Go back to Explore and save some activities.</p>
      </div>
    `;
    return;
  }

  favorites.forEach(activity => {
    const card = document.createElement("article");

    card.className = "activity-card";

    card.innerHTML = `
      <div class="card-image">${activity.image}</div>

      <div class="card-body">
        <p class="location">${activity.city}</p>

        <h3>${activity.name}</h3>

        <p class="description">
          ${activity.description}
        </p>

        <div class="tag-row">
          <span class="tag ${activity.cost === 0 ? "free" : "cost"}">
            ${activity.costLabel}
          </span>

          <span class="tag">
            ${activity.setting.charAt(0).toUpperCase() + activity.setting.slice(1)}
          </span>

          <span class="tag">
            ${activity.groupType === "alone" ? "Solo" : "Friends"}
          </span>

          <span class="tag energy">
            ${activity.energyLevel.charAt(0).toUpperCase() + activity.energyLevel.slice(1)} Energy
          </span>
        </div>

        <button
          class="favorite-btn"
          data-name="${activity.name}">
          Remove Favorite
        </button>
      </div>
    `;

    favoritesGrid.appendChild(card);
  });

  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", () => {
      removeFavorite(button.dataset.name);
    });
  });
}

function removeFavorite(activityName) {
  const updatedFavorites = favorites.filter(
    activity => activity.name !== activityName
  );

  localStorage.setItem(
    "sideQuestFavorites",
    JSON.stringify(updatedFavorites)
  );

  location.reload();
}

renderFavorites();