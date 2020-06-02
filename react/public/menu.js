const menuItems = document.querySelectorAll('.liMenu');
const tabContent = document.querySelectorAll('.tabContent');

const updateMenu = function(e) {
    hide();
}

const hide = function() {
    tabContent.forEach(item => {item.classList.add('hidden')})
}



menuItems.forEach(item => {document.addEventListener("click", updateMenu)});