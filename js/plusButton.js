const card = document.querySelector('#card');
const itemCard = document.querySelector('.plus-button i');

const social = document.getElementById('social-media');

export default function plusButton() {
  document.querySelector('.plus-button').addEventListener('click', () => {
    card.classList.toggle('card-on');
    if (itemCard.classList.contains('fa-minus')) {
      itemCard.classList.replace('fa-minus', 'fa-plus');
      card.style.margin = '100px 0 0';
      if (
        social.classList.contains('animation') ||
        social.classList.contains('down-animation')
      ) {
        social.classList.remove('down-animation');
        social.classList.remove('animation');
      }
    } else {
      itemCard.classList.replace('fa-plus', 'fa-minus');
      card.style.margin = '75px 0 0';
    }
  });
}
