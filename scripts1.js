document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("nav ul li button");
    const sections = document.querySelectorAll(".content-section");
    const cockFigures = document.querySelectorAll(".cock-figure");
    const descriptions = document.querySelectorAll(".description");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const sectionId = this.getAttribute("data-section");

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.style.display = section.style.display === "none" || section.style.display === "" ? "block" : "none";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });

    cockFigures.forEach(figure => {
        figure.addEventListener("click", function() {
            const isCurrentlyShown = this.classList.contains('show');

            // Reset all figures and descriptions
            cockFigures.forEach(f => {
                f.classList.remove('show');
                f.classList.remove('hidden-figure');
            });
            descriptions.forEach(description => {
                description.style.display = 'none';
            });

            if (!isCurrentlyShown) {
                // Hide all figures except the clicked one
                cockFigures.forEach(f => {
                    if (f !== this) {
                        f.classList.add('hidden-figure');
                    }
                });

                // Show the clicked figure and its description
                this.classList.add('show');
                const descriptionId = this.querySelector('.cock-img').getAttribute('data-description');
                const descriptionElement = document.getElementById(descriptionId);
                descriptionElement.style.display = 'block';

                // Scroll into view smoothly
                this.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
});
