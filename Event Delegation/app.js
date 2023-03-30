const inputItems = document.querySelectorAll('input');

for (let i = 0; i < inputItems.length; i++) {
  inputItems[i].addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  });
}
