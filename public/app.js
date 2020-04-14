// DOM Elements
const lightButton = document.getElementById('light');
const darkButton = document.getElementById('dark');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');
if (theme) {
  body.className = theme;
}
if (isSolar) {
  body.classList.add('solar');
  solarButton.style.cssText = `
    --bg-solar: white;
  `
  solarButton.innerText = 'normalize';
}

// Button Event Handlers
lightButton.onclick = () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
  if (!body.classList.contains('solar')) {
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `
  }
}

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
  if (!body.classList.contains('solar')) {
    solarButton.style.cssText = `
      --bg-solar: var(--blue);
    `
  }
}

solarButton.onclick = () => {
  body.classList.toggle('solar');

  if (body.classList.contains('solar')) {
    solarButton.style.cssText = `
      --bg-solar: white;
    `
    solarButton.innerText = 'normalize';
    localStorage.setItem('isSolar', true);
  } else {
    if (body.classList.contains('light')) {
      solarButton.style.cssText = `
        --bg-solar: var(--yellow);
      `
    } else if (body.classList.contains('dark')) {
      solarButton.style.cssText = `
        --bg-solar: var(--blue);
      `
    }
    solarButton.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  }
}
