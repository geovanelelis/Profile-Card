import profilePhotoWhite from '../img/profile-photo-white.png';
import profilePhotoDark from '../img/profile-photo-dark.png';

const toggle = document.getElementById('toggle'),
  body = document.querySelector('body'),
  profilePhoto = document.querySelector('.photo img');

export default function toggleMode() {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');

    body.classList.contains('dark-mode')
      ? profilePhoto.setAttribute('src', profilePhotoDark)
      : profilePhoto.setAttribute('src', profilePhotoWhite);
  });
}
