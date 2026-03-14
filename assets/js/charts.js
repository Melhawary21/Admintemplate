(function(){
  if (window.ApexCharts) {
    const area = document.getElementById('apexArea');
    if (area) {
      new ApexCharts(area, {
        chart: { type: 'area', height: 320, toolbar: { show: false } },
        series: [{ name: 'Revenue', data: [26, 33, 31, 49, 42, 58, 61, 74] }],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
        stroke: { curve: 'smooth', width: 3 },
        fill: { opacity: 0.12 },
        colors: ['#4f46e5']
      }).render();
    }

    const bar = document.getElementById('apexBar');
    if (bar) {
      new ApexCharts(bar, {
        chart: { type: 'bar', height: 320, toolbar: { show: false } },
        series: [{ name: 'Qualified Leads', data: [44, 52, 38, 68, 54, 61] }],
        xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'] },
        plotOptions: { bar: { borderRadius: 6, columnWidth: '52%' } },
        colors: ['#0ea5e9']
      }).render();
    }
  }

  if (window.Chart) {
    const doughnut = document.getElementById('chartJsDoughnut');
    if (doughnut) {
      new Chart(doughnut, {
        type: 'doughnut',
        data: {
          labels: ['Enterprise', 'Mid-Market', 'SMB'],
          datasets: [{ data: [52, 31, 17], backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981'], borderWidth: 0 }]
        },
        options: { cutout: '65%', plugins: { legend: { position: 'bottom' } } }
      });
    }
  }
})();
