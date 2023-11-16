// Tooggle aktiv
const navbarNav = document.querySelector('.navbar-nav');

// ketikan icon menu diklik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};
// ketikan icon menu diklik

// Klik dimana saja untuk menutup
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
// Klik dimana saja untuk menutup

// Tooggle aktiv