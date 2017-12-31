//Get reference of the HTML elements
let iconMenu = document.querySelector('#icon-menu'),
    navigation = document.querySelector('#nav'),
    headerSearch = document.querySelector('#header__search'),
    contentMain = document.querySelector('#content-main');

/**
 * Added click a listener to the icon menu and add or delete
 * a class is this is opened or closed
 */
iconMenu.addEventListener('click', (event) => {
    navigation.classList.toggle('open-menu');
});

/*** Close the navigation menu when any other element is clicked ***/
headerSearch.addEventListener('click', (event) => {
    navigation.classList.remove('open-menu');
});

contentMain.addEventListener('click', (event) => {
   navigation.classList.remove('open-menu');
});


