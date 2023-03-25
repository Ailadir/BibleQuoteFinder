const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');
const promt = document.querySelector('.question-input');
const answer = document.querySelector('.answers');
const createDiv = document.querySelector('.create');
const newDiv = document.createElement('div');
newDiv.textContent = 'lorem ipsum';
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = '-100vh';
      // intro.pointer;
    }, 2300);
  });
});

document.querySelector('.buttons').addEventListener('click', moveAnimation);
function moveAnimation() {
  setTimeout(() => {
    answer.style.top = '0';
  }, 500);
}
document.querySelector('.back').addEventListener('click', goBack);

function goBack() {
  setTimeout(() => {
    answer.style.top = '-100vh';
  }, 500);
}

document.querySelector('.create').addEventListener('click', createNewDiv);

function createNewDiv() {
  sect.appendChild(newDiv);
}
