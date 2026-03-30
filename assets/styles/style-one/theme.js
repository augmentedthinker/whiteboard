(() => {
  const STORAGE_KEY = 'rv-style-one-theme';
  const root = document.body;
  if (!root || !root.classList.contains('rv-style-one')) return;

  const getPreferred = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'dark';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.querySelector('[data-rv-theme-toggle]');
    if (btn) {
      btn.textContent = theme === 'dark' ? '☀️ Light' : '😎 Dark';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  };

  const ensureButton = () => {
    const topbar = document.querySelector('.rv-topbar');
    if (!topbar || document.querySelector('[data-rv-theme-toggle]')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rv-theme-toggle';
    btn.setAttribute('data-rv-theme-toggle', 'true');
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
    topbar.appendChild(btn);
  };

  ensureButton();
  applyTheme(getPreferred());
})();
