document.addEventListener("DOMContentLoaded", function() {
    // 2 সেকেন্ড পরে লোডার গায়েব হবে এবং মূল কনটেন্ট দেখাবে
    setTimeout(() => {
        const preloader = document.getElementById("preloader");
        const mainContent = document.getElementById("mainContent");

        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
            preloader.style.display = "none";
            mainContent.style.display = "block";
        }, 200); // ফেড আউট হওয়ার সময়
    }, 700);
});