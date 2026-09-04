// ===============================
// CURRENT YEAR IN FOOTER
// ===============================
document.getElementById("year").textContent =
    new Date().getFullYear();
// ===============================
// SMOOTH SCROLLING
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target =
            document.querySelector(this.getAttribute("href"));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ===============================
// SCROLL ANIMATION
// ===============================
const elements =
    document.querySelectorAll(
        ".intro, .box, .contact"
    );
const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);
elements.forEach(function(element) {
    observer.observe(element);
});
// ===============================
// CONSOLE MESSAGE
// ===============================
console.log(
    "Welcome to Sejith Nath's Portfolio!"
);