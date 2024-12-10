var toggleButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills'); // Corrected here

toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none' || skills.style.display === '') {
        skills.style.display = 'block';
        toggleButton.innerHTML = '<b>Hide Skills</b>';
    } else {
        skills.style.display = 'none';
        toggleButton.innerHTML = '<b>Show Skills</b>';
    }
});
