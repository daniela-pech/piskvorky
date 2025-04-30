import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle'; // zacina kolecko

//vpisovaci kolecko a krizek
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

    //vyhodnoceni
    const zjednodusenaPolicka = Array.from(buttonElements).map((policko) => {
      if (policko.classList.contains('hra__tlacitko--krizek')) {
        return 'x';
      }
      if (policko.classList.contains('hra__tlacitko--kolecko')) {
        return 'o';
      }
      return '_';
    });

    const vitez = findWinner(zjednodusenaPolicka);

    if (vitez === 'o') {
      setTimeout(() => {
        alert('Vyhrálo kolečko!');
        location.reload();
      }, 500);
    } else if (vitez === 'x') {
      setTimeout(() => {
        alert('Vyhrál křížek!');
        location.reload();
      }, 500);
    } else if (vitez === 'tie') {
      setTimeout(() => {
        alert('Hra skončila nerozhodně.');
        location.reload();
      }, 500);
    }
  });
});

// tlacitko restart - nacist znovu nebo pokracovat
const restartElement = document.querySelector('.restart');
restartElement.addEventListener('click', (event) => {
  const nacistZnovu = confirm('Opravdu chceš začít znovu?');
  if (nacistZnovu === true) {
  } else {
    event.preventDefault();
  }
});
