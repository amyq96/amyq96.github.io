document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");

    function showVisibleSteps() {
        const triggerPoint = window.innerHeight * 0.75;

        steps.forEach(step => {
            const rect = step.getBoundingClientRect();
            if (rect.top < triggerPoint) {
                step.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", showVisibleSteps);
    showVisibleSteps(); // Run on load
});

