const iconMenu = document.getElementById('menuToggle');      // icon trong menu
const iconMenuBar = document.getElementById('menuToggleBar'); // icon trên thanh bar
const menu = document.querySelector('.Menu');
const body = document.body;
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const toggle = document.getElementById('menu-toggle');
const noteSetting = document.getElementById('noteSetting');
const settingPanel = document.getElementById('settingPanel');
const noteNotification = document.getElementById('noteNotification');
const notificationPanel = document.getElementById('notificationPanel');

document.querySelectorAll('.task-actions .material-icons:first-child')
    .forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('starred');
            icon.textContent = icon.classList.contains('starred') ? 'star' : 'star_border';
        });
    });

// Add null check for toggle
if (toggle && sidebar && main) {
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
        main.classList.toggle('full-width');
    });
}

function scaleLayout() {
    const wrapper = document.getElementById('wrapper');
    if (wrapper) {
        const scaleX = window.innerWidth / 1920;
        const scaleY = window.innerHeight / 1080;
        const scale = Math.min(scaleX, scaleY);
        wrapper.style.transform = `scale(${scale})`;
    }
}

window.addEventListener('resize', scaleLayout);
window.addEventListener('load', scaleLayout);

// Add null checks for navigation buttons
function setupNavigationButtons() {
    const buttons = [
        { id: 'btnHome', url: 'Home.html' },
        { id: 'btnIncomplete', url: 'Incomplete.html' },
        { id: 'btnGroup', url: 'Group.html' },
        { id: 'btnCalendar', url: 'Calendar.html' },
        { id: 'btnMywork', url: 'Mywork.html' },
        { id: 'btnImportant', url: 'Important.html' }
    ];

    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            element.onclick = function () {
                window.location.href = button.url;
            };
        }
    });
}

setupNavigationButtons();

/* Phần setting */
if (noteSetting && settingPanel) {
    noteSetting.addEventListener('click', (e) => {
        e.stopPropagation();
        settingPanel.style.display = (settingPanel.style.display === 'block') ? 'none' : 'block';
        // Hide notification panel when opening settings
        if (notificationPanel) {
            notificationPanel.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!noteSetting.contains(e.target) && !settingPanel.contains(e.target)) {
            settingPanel.style.display = 'none';
        }
    });
}

/* Phần notification */
if (noteNotification && notificationPanel) {
    noteNotification.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationPanel.style.display = (notificationPanel.style.display === 'block') ? 'none' : 'block';
        // Hide settings panel when opening notifications
        if (settingPanel) {
            settingPanel.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!noteNotification.contains(e.target) && !notificationPanel.contains(e.target)) {
            notificationPanel.style.display = 'none';
        }
    });
}

// Add null checks for menu icons
if (iconMenu && iconMenuBar) {
    iconMenu.addEventListener('click', () => {
        body.classList.add('menu-hidden');
        iconMenuBar.classList.remove('hidden');
    });

    iconMenuBar.addEventListener('click', () => {
        body.classList.remove('menu-hidden');
        iconMenuBar.classList.add('hidden');
    });
}

// Đồng hồ thời gian thực (12h, AM/PM)
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes} ${ampm}`;

    const clockElement = document.getElementById('realTimeClock');
    const dateElement = document.getElementById('realDate');

    if (clockElement) {
        clockElement.textContent = timeString;
    }

    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
    }
}

updateClock();
setInterval(updateClock, 1000);

// Thời gian mục tiêu (ví dụ: 1 ngày từ hiện tại)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);

function updateCountdown() {
    const now = new Date(); // Remove unnecessary async/await
    let diff = targetDate - now;

    if (diff < 0) {
        diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Add null checks for countdown elements
    const daysElement = document.querySelector('.overlap-2 .text-wrapper-2');
    const hoursElement = document.querySelector('.overlap-4 .text-wrapper-3');
    const minutesElement = document.querySelector('.overlap-3 .text-wrapper-3');
    const secondsElement = document.querySelector('.overlap .text-wrapper');

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();