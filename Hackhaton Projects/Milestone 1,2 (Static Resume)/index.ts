const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
        toggleButton.innerHTML = '<b>Hide Skills</b>';
    } else {
        skills.style.display = 'none';
        toggleButton.innerHTML = '<b>Show Skills</b>';
    }
});
