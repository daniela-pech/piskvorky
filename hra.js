let currentPlayer = 'circle';

const kdoHraje = document.querySelector('#hrac');
kdoHraje.innerHTML = `
HRAJE: <img src="images/circle.svg" alt="kolečko" class="hrac__bila">
`;

const buttonElements = document.querySelectorAll('.hra__tlacitko');

buttonElements.forEach((button) => {
  button.addEventListener('click', (event) => {
    const button = event.target;
    if (button.disabled) {
      return;
    }
    if (currentPlayer === 'circle') {
      button.classList.add('hra__pole--kolecko');
    } else {
      button.classList.add('hra__pole--krizek');
    }

    button.disabled = true;

    if (currentPlayer === 'circle') {
      currentPlayer = 'cross';
      kdoHraje.innerHTML = `
HRAJE: <img src="images/cross.svg" alt="křížek" class="hrac__bila">
`;
    } else {
      currentPlayer = 'circle';
      kdoHraje.innerHTML = `
HRAJE: <img src="images/circle.svg" alt="kolečko" class="hrac__bila">
`;
    }
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
