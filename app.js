const routes = {
    "/":home,
    '/News' : News,
    '/about' : about,
    '/Feedback' : Feedback,
    '/Material':Material
  };

const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];
  window.history.pushState({}, pathname, window.location.origin + pathname);
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname];
  };

  rootDiv.innerHTML = routes[pathname];
};

const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

// ratingsContainer.addEventListener('click', (e) => {
//     if(e.target.parentNode.classList.contains('rating')) {
//         removeActive()
//         e.target.parentNode.classList.add('active')
//         selectedRating = e.target.nextElementSibling.innerHTML
//     }
//     if(e.target.classList.contains('rating')) {
//         removeActive()
//         e.target.classList.add('active')
//         selectedRating = e.target.nextElementSibling.innerHTML
//     }

// })




