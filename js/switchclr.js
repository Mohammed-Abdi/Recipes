//checkbox
const checkboxes = document.querySelectorAll(".customCheckbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const label = this.closest("label");
    if (this.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  });
});

//like
const likeButtons = document.querySelectorAll(".recipe .like");

likeButtons.forEach((button, index) => {
  const isLiked = localStorage.getItem(`like-${index}`) === "true";

  if (isLiked) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    const isActive = button.classList.toggle("active");
    localStorage.setItem(`like-${index}`, isActive);
  });
});

//categories
document.querySelectorAll(".categories .choice").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".categories .choice").forEach((choice) => {
      choice.classList.remove("active");
    });
    item.classList.add("active");
  });
});

//categories
document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".categories .choice");
  const recipeCards = document.querySelectorAll(".recipe");

  function filterRecipes(category) {
    recipeCards.forEach((recipe) => {
      if (category === "All" || recipe.classList.contains(category)) {
        recipe.style.display = "block";
      } else {
        recipe.style.display = "none";
      }
    });
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));

      this.classList.add("active");

      const selectedCategory = this.getAttribute("data-category");

      filterRecipes(selectedCategory);
    });
  });

  filterRecipes("All");
});
