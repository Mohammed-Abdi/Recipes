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
