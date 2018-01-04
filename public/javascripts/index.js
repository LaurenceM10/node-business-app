//Get reference of the HTML elements
let iconMenu = document.querySelector('#icon-menu'),
    navigation = document.querySelector('#nav'),
    headerSearch = document.querySelector('#header__search'),
    contentMain = document.querySelector('#content-main'),
    editIcon = document.querySelectorAll('.icon-edit'),
    deleteIcon = document.querySelectorAll('.icon-trash'),
    dialog = document.querySelector('#dialog'),
    deleteDialog = document.querySelector('#delete-dialog'),
    editDialog = document.querySelector('#edit-dialog'),
    deleteDialogButton =  document.querySelector('#dialog-link--delete');

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
 * Show the dialog when a button/icon is clicked.
 * Shoot the event when any item with the same class was clicked.
 * */
let showDialog = () => {
    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].addEventListener('click', (event) => {
            //Prevent the default action of the 'a' element
            event.preventDefault();

            //Show the dialog
            dialog.classList.toggle('dialog--visible');

            //Pass the route with id of the element clicked
            passLink(deleteIcon[i].getAttribute('href'));
        });
    }
};

//Call the method
showDialog();

/**
 * Close the dialog when the cancel button is clicked or when any part outside the dialog is clicked
 *
 * Solution obtained from Stackoverflow in the following link:
 * https://stackoverflow.com/questions/11606897/get-only-first-class-of-an-html-element
 */
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target.id.toLowerCase() === 'dialog-link--cancel' || event.target.id.toLowerCase() === 'dialog') {
        dialog.classList.remove('dialog--visible');
    }
});

/*
* Pass the link to delete for the dialog
*
*  A way to pass the route with the link of the specific product
*  to the dialogue, is to obtain that route from the link of the
*  garbage icon by clicking it and pass it dynamically to the
*  'delete' link in the dialog
* */
let passLink = (link) => {
    deleteDialogButton.setAttribute('href', link);
};


