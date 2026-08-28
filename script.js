document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

            });

        });

    }


    // تغییر ظاهر هدر هنگام اسکرول

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.background = "rgba(5, 48, 36, 0.96)";
            header.style.backdropFilter = "blur(12px)";

        } else {

            header.style.background =
                "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)";

            header.style.backdropFilter = "none";

        }

    });

});
