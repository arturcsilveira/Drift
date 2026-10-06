const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const plus = item.querySelector(".faq-plus");

  question.addEventListener("click", () => {
    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      plus.classList.remove("fa-plus");
      plus.classList.add("fa-minus");
    } else {
      plus.classList.remove("fa-minus");
      plus.classList.add("fa-plus");
    }
  });
});
