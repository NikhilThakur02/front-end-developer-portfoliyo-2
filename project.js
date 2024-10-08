document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.project-modal');
        modal.classList.add('active');
        // Populate modal with project details
    });
});

document.querySelector('.modal-close').addEventListener('click', () => {
    const modal = document.querySelector('.project-modal');
    modal.classList.remove('active');
});
