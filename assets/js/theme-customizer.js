(function(){
  const root = document.documentElement;
  const panel = document.querySelector('.ab-customizer');
  const trigger = document.querySelector('[data-ab-toggle="customizer"]');
  if (!panel || !trigger || !window.ABUtils) return;

  const apply = (state) => {
    root.setAttribute('data-theme', state.theme || 'light');
    root.setAttribute('dir', state.direction || 'ltr');
    root.setAttribute('data-density', state.density || 'comfortable');
    root.setAttribute('data-layout-width', state.width || 'fluid');

    ABUtils.qsa('[data-ab-theme]').forEach((btn) => btn.classList.toggle('active', btn.dataset.abTheme === root.getAttribute('data-theme')));
    ABUtils.qsa('[data-ab-direction]').forEach((btn) => btn.classList.toggle('active', btn.dataset.abDirection === root.getAttribute('dir')));
    ABUtils.qsa('[data-ab-density]').forEach((btn) => btn.classList.toggle('active', btn.dataset.abDensity === root.getAttribute('data-density')));
    ABUtils.qsa('[data-ab-width]').forEach((btn) => btn.classList.toggle('active', btn.dataset.abWidth === root.getAttribute('data-layout-width')));
  };

  const current = ABUtils.storage.get('ab-theme-settings', { theme: 'light', direction: 'ltr', density: 'comfortable', width: 'fluid' });
  apply(current);

  trigger.addEventListener('click', () => {
    panel.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(panel.classList.contains('is-open')));
  });

  const bind = (selector, key, attr) => ABUtils.qsa(selector).forEach((btn) => btn.addEventListener('click', () => {
    current[key] = btn.getAttribute(attr);
    ABUtils.storage.set('ab-theme-settings', current);
    apply(current);
  }));

  bind('[data-ab-theme]', 'theme', 'data-ab-theme');
  bind('[data-ab-direction]', 'direction', 'data-ab-direction');
  bind('[data-ab-density]', 'density', 'data-ab-density');
  bind('[data-ab-width]', 'width', 'data-ab-width');
})();
