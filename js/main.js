let theme = document.documentElement.getAttribute('data-theme');
const themeButton = document.getElementById('theme-button');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
if (theme === 'light') {
  themeButton.innerHTML = iconSun.innerHTML;
} else {
  themeButton.innerHTML = iconMoon.innerHTML;
}
themeButton.addEventListener('click', () => {
  if (theme === 'light') {
    theme = 'dark';
    themeButton.innerHTML = iconMoon.innerHTML;
  } else {
    theme = 'light';
    themeButton.innerHTML = iconSun.innerHTML;
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});

function copyToClipboard(button) {
  const targetId = button.getAttribute('data-copy-target');
  const targetField = document.getElementById(targetId);
  const iconCopy = document.getElementById('icon-copy');
  const iconCheck = document.getElementById('icon-check');
  navigator.clipboard.writeText(targetField.textContent.trim())
    .then(() => {
      button.innerHTML = iconCheck.innerHTML;
      button.classList.add('text-success');
      button.disabled = true;
      setTimeout(() => {
        button.innerHTML = iconCopy.innerHTML;
        button.classList.remove('text-success');
        button.disabled = false;
      }, 2000);
    })
    .catch((error) => console.error(error));
}

document.querySelectorAll('button[data-copy-target]').forEach((button) => {
  const iconCopy = document.getElementById('icon-copy');
  button.innerHTML = iconCopy.innerHTML;
  button.addEventListener('click', () => {
    copyToClipboard(button);
  });
});
