let isMenuVisible = false;

/**
 * Toggles the visibility of the navigation menu.
 * If the menu is visible, it hides the menu and sets the 'isMenuVisible' variable to false.
 * If the menu is not visible, it shows the menu by adding the 'responsive' class and sets the 'isMenuVisible' variable to true.
 */
function toggleMenu() {
    let nav = document.getElementById('nav');
    if (isMenuVisible) {
        nav.classList = '';
        isMenuVisible = false;
    } else {
        nav.classList = 'responsive';
        isMenuVisible = true;
    }
}

/**
 * Hides the navigation menu and sets the 'isMenuVisible' variable to false.
 * This function is typically used when a menu option is selected.
 */
function selectOption() {
    document.getElementById('nav').classList = '';
    isMenuVisible = false;
}

/**
 * Applies an animation to the skills when the user scrolls on the page.
 * When the distance between the top of the window and the 'skills' element is greater or equal to 300,
 * a corresponding CSS class is added to each skill in the 'progreso' element.
 */
function skillsEffect() {
    let skills = document.getElementById('skills');
    let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skillsDistance >= 300) {
        let abilities = document.getElementsByClassName('progreso');
        let abilitiesClasses = [
            'javascript',
            'htmlcss',
            'python',
            'php',
            'linux',
            'docker',
            'git',
            'comunicacion',
            'trabajo',
            'creatividad',
            'dedicacion',
            'proyect',
        ];
        for (let i = 0; i < abilities.length; i++) {
            abilities[i].classList.add(abilitiesClasses[i]);
        }
    }
}

/**
 * Calls the 'skillsEffect' function when the user scrolls on the page.
 * This is used to apply the skills animations based on the scroll position.
 */
window.onscroll = function () {
    skillsEffect();
};
