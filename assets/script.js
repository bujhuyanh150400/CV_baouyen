// Modal menu
const showBtn = document.querySelector('.js_nav-menu')
const modal = document.querySelector('.js-nav_modal')
const modalContainer = document.querySelector('.js-nav_modal-container')
const modalMenu =document.querySelector('.modal_nav-menu-link')
function show () {
    modal.classList.add('open')
}

function hide () {
    modal.classList.remove('open')
}

showBtn.addEventListener('click', show )

modal.addEventListener('click', hide)
     
for (const modalMenu of modalMenus) {
    modalMenus.addEventListener('click', hide )
}
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// End: modal menu

// Scroll reveal anmation
ScrollReveal().reveal('.info_content');
// End: Scroll reveal anmation