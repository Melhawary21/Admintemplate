(function(){
  const app=document.getElementById('abApp');
  const toggle=document.querySelector('[data-ab-toggle="sidebar"]');
  if(!app||!toggle) return;
  toggle.addEventListener('click',()=>{
    if(window.innerWidth<992) app.classList.toggle('is-sidebar-open');
    else app.classList.toggle('is-sidebar-collapsed');
  });
})();
