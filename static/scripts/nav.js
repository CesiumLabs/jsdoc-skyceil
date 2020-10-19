const init = async () => {
    window.addEventListener("DOMContentLoaded", function () {
        const body = document.querySelector("body");

        // Burger
        const burger = document.querySelector(".burger"),
            nav = document.querySelector(".navbar"),
            navLinks = nav.querySelectorAll("a");
        
        burger.addEventListener("click", function () {
            toggleClass(burger, "is-active");
            toggleClass(nav, "is-active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                if (burger.classList.contains("is-active")) {
                    toggleClass(burger, "is-active");
                    toggleClass(nav, "is-active");
                }
            });
        });

        // Utilities
        const utilitiesDiv = document.querySelector(".utilities");

        // Theme
        const themeBtn = utilitiesDiv.querySelector(".theme");
        updateTheme();

        themeBtn.addEventListener("click", function () {
            const DBTheme = localStorage.getItem("theme") || "light";
            if (DBTheme === "light") localStorage.setItem("theme", "dark");
            else localStorage.setItem("theme", "light");
            updateTheme();
        });

        function updateTheme () {
            const bodyTheme = body.getAttribute("data-theme") || "light";
            const DBTheme = localStorage.getItem("theme") || "light";

            if (DBTheme === "dark" && bodyTheme !== "dark") {
                body.setAttribute("data-theme", "dark");
                themeBtn.innerHTML = "<i class=\"fas fa-sun\"></i>";
            } else if (DBTheme === "light" && bodyTheme !== "light") {
                body.setAttribute("data-theme", "light");
                themeBtn.innerHTML = "<i class=\"fas fa-moon\"></i>";
            }
        }

    });

    function toggleClass(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }
}

init();