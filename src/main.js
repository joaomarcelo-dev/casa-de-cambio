import './style.css';
import { getDataCoins } from './provider/api';
import SwalAlert from './components/sweetalert';

const submitBTN = document.querySelector('.button-submit');
const inputCoin = document.querySelector('.input-coin');
const divCoins = document.querySelector('.values-get');
const nameCoin = document.querySelector('.coin-name');

console.log(submitBTN);

const createEl = (infocoin) => {
  console.log(infocoin);
  const arrayRates = Object.entries(infocoin.rates)
    .map(([name, price]) => {
      return (
        `
          <div class="coin">
            <div class="content-coin">
              <i class="fa-solid fa-coins"></i>
              <span class="name-coin">${name}</span>
            </div>
            <span class="value-coin">${price.toFixed(2)}</span>
          </div>
        `
      );
    });

  divCoins.innerHTML = arrayRates.join('');
};

inputCoin.addEventListener('input', (event) => {
  nameCoin.innerHTML = event.target.value;
});

submitBTN.addEventListener('click', () => {
  const valueInput = inputCoin.value.toUpperCase();

  getDataCoins(valueInput).then(({ data }) => {
    if (!(Object.keys(data.rates).includes(valueInput)) || valueInput === '') {
      throw new Error('Moeda inexistente ou valor não definido');
    }

    createEl(data);
  })
    .catch((err) => {
      SwalAlert(err.message);
    });
});
