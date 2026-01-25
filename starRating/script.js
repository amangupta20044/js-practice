const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("ratingValue");

// Load saved rating
let currentRating = localStorage.getItem("rating") || 0;

// show saved rating on page load
updateStars(currentRating);
ratingValue.innerText = currentRating;

stars.forEach(star => {

    star.addEventListener("click", () => {
        currentRating = star.dataset.value;

        // save to localStorage
        localStorage.setItem("rating", currentRating);

        updateStars(currentRating);
    });

    star.addEventListener("mouseover", () => {
        updateStars(star.dataset.value);
    });

    star.addEventListener("mouseleave", () => {
        updateStars(currentRating);
    });
});

function updateStars(value) {
    stars.forEach(star => {
        star.classList.toggle(
            "active",
            star.dataset.value <= value
        );
    });

    ratingValue.innerText = value;
}
// THEME TOGGLE
const themeBtn = document.getElementById("themeBtn");

// load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(savedTheme);
updateThemeText(savedTheme);

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");

    document.body.classList.remove("dark", "light");

    const newTheme = isDark ? "light" : "dark";
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
    updateThemeText(newTheme);
});

function updateThemeText(theme) {
    themeBtn.innerText =
        theme === "dark" ? "☀ Light Mode" : "🌙 Dark Mode";
}
