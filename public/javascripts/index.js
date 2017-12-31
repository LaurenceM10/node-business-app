//Get reference of the HTML elements
let iconMenu = document.querySelector('#icon-menu'),
    navigation = document.querySelector('#nav'),
    headerSearch = document.querySelector('#header__search'),
    contentMain = document.querySelector('#content-main'),
    editIcon = document.querySelector('.icon-edit'),
    deleteIcon = document.querySelector('.icon-trash'),
    dialog = document.querySelector('#dialog'),
    deleteDialog = document.querySelector('#delete-dialog'),
    editDialog = document.querySelector('#edit-dialog');

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


/**
 * Show the dialog when a button/icon is clicked
 *
 * Solution obtained from Stackoverflow in the following link:
 * https://stackoverflow.com/questions/11606897/get-only-first-class-of-an-html-element
 * */

document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.className.toLowerCase() === 'icon-trash') {
        dialog.classList.toggle('dialog--visible');
    }
});

//Close the dialog when the cancel button is clicked or when any part outside the dialog is clicked
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.id.toLowerCase() === 'dialog-link--cancel' || event.target.id.toLowerCase() === 'dialog') {
        dialog.classList.remove('dialog--visible');
    }
});





