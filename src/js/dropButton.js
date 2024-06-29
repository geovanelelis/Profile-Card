export default function dropButton() {
  document.getElementById('drop-button').addEventListener('click', function () {
    const dropButton = document.querySelector('#drop-button');
    dropButton.style.rotate === ''
      ? (dropButton.style.rotate = '-180deg')
      : (dropButton.style.rotate = '');

    const card = document.querySelector('#card');
    if (card.style.height === '') {
      card.style.height = '450px';
      card.style.margin = '100px 0 0';
    } else {
      card.style.height = '';
      card.style.margin = '75px 0 0';
    }

    const details = document.querySelector('.details');
    details.style.padding === ''
      ? (details.style.padding = '50px 0 10px 0')
      : (details.style.padding = '');
  });
}
