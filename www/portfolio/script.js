document.querySelectorAll('.hover-image').forEach(img => {
    img.addEventListener('mouseenter', function() {
        let clone = this.cloneNode(true);
        clone.classList.add('image-duplicate'); 
        document.body.appendChild(clone);
    });

    img.addEventListener('mouseleave', function() {
        let clone = document.querySelector('.image-duplicate');
        if (clone) clone.remove(); 
    });
});