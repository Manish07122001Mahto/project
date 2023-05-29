// -------------------------------------login popup command starts--------------------------------
function showModel() {
    document.querySelector('.overlay').classList.add('showoverlay');
    document.querySelector('.popup').classList.add('show-popup');
}

function closeModel() {
    document.querySelector('.overlay').classList.remove('showoverlay');
    document.querySelector('.popup').classList.remove('show-popup');

}

// -------------------------------------login popup command ends------------------------------------------

// -------------------------------------Create-account popup command starts--------------------------------

function create_account_showModel() {
    document.querySelector('.create-account-overlay').classList.add('create-account-showoverlay');
    document.querySelector('.create-account-popup').classList.add('create-account-showpopup');
}
function create_account_closeModel() {
    document.querySelector('.create-account-overlay').classList.remove('create-account-showoverlay');
    document.querySelector('.create-account-popup').classList.remove('create-account-showpopup');
}
// -------------------------------------Create-account popup command ends--------------------------------


// -------------------------------------Forget-password popup command starts--------------------------------
function forget_password_showModel() {
    document.querySelector('.forget-password-overlay').classList.add('forget-password-showoverlay');
    document.querySelector('.forget-password-popup').classList.add('forget-password-show-popup');
}

function forget_password_closeModel() {
    document.querySelector('.forget-password-overlay').classList.remove('forget-password-showoverlay');
    document.querySelector('.forget-password-popup').classList.remove('forget-password-show-popup');

}

// -------------------------------------Forget-password popup command ends--------------------------------



// -------------------------------------Profile-page popup under add new subject during profile filling first time starts--------------------------------


function profile_page_showModel() {
    document.querySelector('.profile-page-overlay').classList.add('profile-page-showoverlay');
    document.querySelector('.profile-page-popup').classList.add('profile-page-show-popup');
}

function profile_page_closeModel() {
    document.querySelector('.profile-page-overlay').classList.remove('profile-page-showoverlay');
    document.querySelector('.profile-page-popup').classList.remove('profile-page-show-popup');
}


// -------------------------------------Profile-page popup under add new subject during profile filling first time Ends--------------------------------


// -------------------------------------home-page-right-top-corner-profile-right-to-left-slide-bar Starts--------------------------------


function universal_navigation_showModel() {
    document.querySelector('.universal-navigation-right-top-corner-profile-right-to-left-slide-bar').classList.add('universal-navigation-right-top-corner-profile-right-to-left-show-slide-bar');
}

function universal_navigation_closeModel() {
    document.querySelector('.universal-navigation-right-top-corner-profile-right-to-left-slide-bar').classList.remove('universal-navigation-right-top-corner-profile-right-to-left-show-slide-bar');
}


// -------------------------------------home-page-right-top-corner-profile-right-to-left-slide-bar Ends--------------------------------


// -------------------------------------doubt-solver-profile-view page Ask-me-doubt popup starts here--------------------------


function ask_me_doubt_showModel() {
    document.querySelector('.ask-me-doubt-popup').classList.add('ask-me-doubt-show-popup');
}

function ask_me_doubt_closeModel() {
    document.querySelector('.ask-me-doubt-popup').classList.remove('ask-me-doubt-show-popup');
    
}

// -------------------------------------doubt-solver-profile-view page Ask-me-doubt popup ends here--------------------------


