
function openTab(evt, tabName) {
   
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });

    
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}


const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


function toggleMenu() {
    const menuList = document.querySelector('.menu ul');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
}
