(function(){
  const root=document.documentElement;
  const c=document.querySelector('.ab-customizer');
  const t=document.querySelector('[data-ab-toggle="customizer"]');
  if(t&&c){t.addEventListener('click',()=>c.classList.toggle('open'));}
  document.querySelectorAll('[data-ab-theme]').forEach(b=>b.addEventListener('click',()=>{root.setAttribute('data-theme',b.dataset.abTheme);ABUtils.setActiveButton('[data-ab-theme]',b);}));
  document.querySelectorAll('[data-ab-direction]').forEach(b=>b.addEventListener('click',()=>{root.setAttribute('dir',b.dataset.abDirection);ABUtils.setActiveButton('[data-ab-direction]',b);}));
  document.querySelectorAll('[data-ab-density]').forEach(b=>b.addEventListener('click',()=>{root.setAttribute('data-density',b.dataset.abDensity);ABUtils.setActiveButton('[data-ab-density]',b);}));
  document.querySelectorAll('[data-ab-width]').forEach(b=>b.addEventListener('click',()=>{root.setAttribute('data-ab-width',b.dataset.abWidth);ABUtils.setActiveButton('[data-ab-width]',b);}));
})();
