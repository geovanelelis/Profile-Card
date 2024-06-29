const photo = document.querySelector('.photo');
const photoStyle = getComputedStyle(photo);
const background = document.querySelector('.background');
const plusButton = document.querySelector('.plus-button');
const card = document.querySelector('#card');

export default function sizePhotoAndCard() {
  document.getElementById('drop-button').addEventListener('click', function () {
    if (photoStyle.width === '150px' && photoStyle.height === '150px') {
      photo.style.width = '225px';
      photo.style.height = '225px';
      card.style.margin = '100px 0 0';
      background.style.height = '120px';
      background.style.borderRadius = ' 0 0 70px 0';
      setTimeout(() => {
        plusButton.style.position = 'absolute';
      }, 300);
    } else {
      photo.style.width = '150px';
      photo.style.height = '150px';
      card.style.margin = '75px 0 0';
      background.style.height = '75px';
      background.style.borderRadius = ' 0 0 0 50px';
      plusButton.style.position = 'relative';
    }
  });
  plusButton.addEventListener('click', () => {
    if (photoStyle.width === '225px' && photoStyle.height === '225px') {
      photo.style.width = '150px';
      photo.style.height = '150px';
      background.style.height = '75px';
      background.style.borderRadius = ' 0 0 0 50px';
    } else {
      photo.style.width = '225px';
      photo.style.height = '225px';
      background.style.height = '120px';
      background.style.borderRadius = ' 0 0 70px 0';
    }
  });
}
