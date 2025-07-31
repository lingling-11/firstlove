const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
};
document.body.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
toggle.textContent = (localStorage.getItem('theme') === 'dark') ? '☀️' : '🌙';
