//Get reference of the HTML elements
let itemMenu = document.querySelectorAll('.menu__item'),
    linkMenu = document.querySelectorAll('.link-menu'),
    iconMenu = document.querySelector('#icon-menu'),
    navigation = document.querySelector('#nav'),
    headerSearch = document.querySelector('#header__search'),
    contentMain = document.querySelector('#content-main'),
    editIcon = document.querySelectorAll('.icon-edit'),
    deleteIcon = document.querySelectorAll('.icon-trash'),
    dialog = document.querySelectorAll('#dialog'),
    deleteDialog = document.querySelector('#delete-dialog'),
    editDialog = document.querySelector('#edit-dialog'),
    deleteDialogButton = document.querySelector('#dialog-link--delete'),
    editDialogButton = document.querySelector('#dialog-link--edit'),
    editForm = document.querySelector('#form-edit'),
    orderPurchase = document.querySelectorAll('.order-purchase'),
    addPurchase = document.querySelector("#add-purchase"),
    addPurchaseButton = document.querySelector("#dialog-link--save-changes"),
    addPurchaseForm = document.querySelector('#add-purchase-dialog');

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
let showProductDialog = () => {
    for (let i = 0; i < deleteIcon.length; i++) {
        deleteIcon[i].addEventListener('click', (event) => {
            //Prevent the default action of the 'a' element
            event.preventDefault();

            //Show the class element dialog with index 0 (delete product dialog)
            dialog[0].classList.toggle('dialog--visible');

            //Pass the route with id of the element clicked
            passDeleteLink(deleteIcon[i].getAttribute('href'));

            closeDialog(0);
        });
    }

    for (let i = 0; i < editIcon.length; i++) {
        editIcon[i].addEventListener('click', (event) => {
            //Prevent the default action of the 'a' element
            event.preventDefault();

            //Show the class element dialog with index 1 (edit product dialog)
            dialog[1].classList.toggle('dialog--visible');

            //Pass the route with id of the element clicked
            passEditLink(editIcon[i].getAttribute('href'));
            console.log(editIcon[i].getAttribute('href'));

            closeDialog(1);
        });
    }

    if (addPurchase !== null) {
        addPurchase.addEventListener('click', () => {
            dialog[2].classList.toggle('dialog--visible');
            closeDialog(2);
        });
    }


};

//Call the method
showProductDialog();


/**
 * Close the dialog when the cancel button is clicked or when any part outside the dialog is clicked
 *
 * Solution obtained from Stackoverflow in the following link:
 * https://stackoverflow.com/questions/11606897/get-only-first-class-of-an-html-element
 */
let closeDialog = (position) => {
    document.querySelector('body').addEventListener('click', (event) => {
        if (event.target.id.toLowerCase() === 'dialog-link--cancel' || event.target.id.toLowerCase() === 'dialog') {
            dialog[position].classList.remove('dialog--visible');
        }
    });
};


/*
*  Pass the link to delete for the dialog
*
*  A way to pass the route with the link of the specific product
*  to the dialogue, is to obtain that route from the link of the
*  garbage icon by clicking it and pass it dynamically to the
*  'delete' link in the dialog
* */
let passDeleteLink = (link) => {
    deleteDialogButton.setAttribute('href', link);
};

/*
*  Pass the link to edit for the dialog
*
*  A way to pass the route with the link of the specific product
*  to the dialogue, is to obtain that route from the link of the
*  edit icon by clicking it and pass it dynamically to the
*  'action' attribute in form of the edit dialog
* */
let passEditLink = (link) => {
    editForm.setAttribute('action', link);
};


/**
 * Submit the form when the Save Changes button (editDialogButton) is clicked
 */
editDialogButton.addEventListener('click', (event) => {
    editForm.submit();
});


/*
* Icon order clicked function.
*
* Add a class to the element when a button/icon order is clicked
*
* */
let orderPurchaseClicked = () => {
    console.log("----- Debug -----");
    for (let i = 0; i < orderPurchase.length; i++) {
        orderPurchase[i].addEventListener('click', (event) => {
            if (!event.target.classList[3].toLowerCase() === 'list-order-clicked') {
                orderPurchase[i].classList.toggle('list-order-clicked');
            }
        });
    }
};


orderPurchaseClicked();


/**
 * To submit the form when the add purchase button is clicked
 */
addPurchaseButton.addEventListener('click', (event) => {
    addPurchaseForm.submit();
});


/**
 * Highlight current item in the navigation menu
 */
// let highlightCurrentItem = () => {
//     for (let i = 0; itemMenu.length; i++){
//         linkMenu[i].addEventListener('click', (event) => {
//             if()
//         });
//     }
// };
//
// highlightCurrentItem();









