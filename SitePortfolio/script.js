document.querySelectorAll('.hover-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        let clone = this.cloneNode(true); // Duplicate the image
        clone.classList.add('image-duplicate'); // Add special styling
        document.body.appendChild(clone); // Add to page
    });

    img.addEventListener('mouseleave', function() {
        let clone = document.querySelector('.image-duplicate');
        if (clone) clone.remove(); // Remove duplicate on hover out
    });
});