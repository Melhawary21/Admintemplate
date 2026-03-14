(function(){
  const layout = document.getElementById('abLayout');
  if (!layout) return;

  const toggles = document.querySelectorAll('[data-ab-toggle="sidebar"]');
  const toggleSidebar = () => layout.classList.toggle('is-sidebar-open');
  toggles.forEach((btn) => btn.addEventListener('click', toggleSidebar));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') layout.classList.remove('is-sidebar-open');
  });
})();
