window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.skill-bar');
    if (window.scrollY + window.innerHeight >= skillsSection.offsetTop) {
        skills.forEach(skill => {
            const value = skill.dataset.value;
            skill.style.width = value + '%';
        });
    }
});
