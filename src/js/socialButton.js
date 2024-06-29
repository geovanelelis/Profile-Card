export const socialButton = () => {
  const toggle = document.getElementById('social-toggle'),
    social = document.getElementById('social-media');

  toggle.addEventListener('click', () => {
    social.classList.contains('animation')
      ? social.classList.add('down-animation')
      : social.classList.remove('down-animation');

    social.classList.toggle('animation');
  });
};
