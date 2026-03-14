(function(){
  const ABUtils = {
    qs: (selector, scope = document) => scope.querySelector(selector),
    qsa: (selector, scope = document) => Array.from(scope.querySelectorAll(selector)),
    setActive(selector, element) {
      this.qsa(selector).forEach((btn) => btn.classList.remove('active'));
      if (element) element.classList.add('active');
    },
    storage: {
      get(key, fallback = null) {
        try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
      },
      set(key, value) {
        try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
      }
    }
  };
  window.ABUtils = ABUtils;
})();
