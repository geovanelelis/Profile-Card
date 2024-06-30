import profilePhotoWhite from '../img/profile-photo-white.png';
import profilePhotoDark from '../img/profile-photo-dark.png';

export const setPhoto = () => {
  const body = document.querySelector('body');
  const profilePhoto = document.querySelector('.photo img');

  body.classList.contains('dark-mode')
    ? profilePhoto.setAttribute('src', profilePhotoDark)
    : profilePhoto.setAttribute('src', profilePhotoWhite);
};
