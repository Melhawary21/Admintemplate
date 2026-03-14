window.ABUtils={
  qs:(s,c=document)=>c.querySelector(s),
  qsa:(s,c=document)=>Array.from(c.querySelectorAll(s)),
  setActiveButton(groupSelector,btn){this.qsa(groupSelector).forEach(b=>b.classList.remove('active'));btn.classList.add('active');}
};
