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
