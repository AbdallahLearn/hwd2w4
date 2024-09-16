const userName = localStorage.getItem('userName');
const btnLogout = document.getElementById('btn-logout')

btnLogout.addEventListener('click',function(){
    window.location.href = '../html/index.html';
})


const userNameElement = document.getElementById('userName');
if (userName) {
    userNameElement.textContent = `Hello, ${userName}!`;
} else {
    userNameElement.textContent = 'User not found. Please log in again.';
}