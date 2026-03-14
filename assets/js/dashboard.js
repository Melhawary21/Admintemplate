(function(){
  const table = document.getElementById('demoTable');
  if (!table) return;

  if (window.jQuery && window.jQuery.fn && window.jQuery.fn.DataTable) {
    window.jQuery(table).DataTable();
  }
})();
