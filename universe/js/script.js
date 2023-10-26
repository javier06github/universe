document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            this.classList.toggle('enlarged');
        });
    });
});