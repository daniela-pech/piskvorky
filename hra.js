let currentPlayer = 'circle';

const kdoHraje = document.querySelector('#hrac');
kdoHraje.innerHTML = `
HRAJE: <img src="images/circle.svg" alt="kolečko" class="hrac__bila">
`;

const buttonElements = document.querySelectorAll('.hra__tlacitko');

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    const clickedButton = event.target;

    if (currentPlayer === 'circle') {
      clickedButton.classList.add('hra__tlacitko--kolecko');
      currentPlayer = 'cross';
      kdoHraje.innerHTML = `HRAJE: <img src="images/cross.svg" alt="křížek" class="hrac__bila">`;
    } else {
      clickedButton.classList.add('hra__tlacitko--krizek');
      currentPlayer = 'circle';
      kdoHraje.innerHTML = `HRAJE: <img src="images/circle.svg" alt="kolečko" class="hrac__bila">`;
    }
    clickedButton.disabled = true;
  });
});

const restartElement = document.querySelector('.restart');
restartElement.addEventListener('click', (event) => {
  const nacistZnovu = confirm('Opravdu chceš začít znovu?');
  if (nacistZnovu === true) {
  } else {
    event.preventDefault();
  }
});
