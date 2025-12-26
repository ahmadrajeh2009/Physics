function goHome() {
    window.location.href = "index.html";
}

const titles = document.querySelectorAll(".section-title");

titles.forEach(title => {
    title.addEventListener("click", () => {
        const target = document.getElementById(title.dataset.target);

        target.classList.toggle("active");
        title.classList.toggle("open");
    });
});
