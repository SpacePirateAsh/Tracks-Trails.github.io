document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    }

    window.addEventListener("wheel", function(event) {
        window.scrollBy(0, event.deltaY);
    });
});
