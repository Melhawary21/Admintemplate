(function(){
  if(window.ApexCharts){
    const area=document.querySelector('#apexArea');
    if(area) new ApexCharts(area,{chart:{type:'area',height:300,toolbar:{show:false}},series:[{name:'Revenue',data:[32,40,28,51,42,82,56]}],xaxis:{categories:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']},stroke:{curve:'smooth'},colors:['#4f46e5']}).render();
    const bar=document.querySelector('#apexBar');
    if(bar) new ApexCharts(bar,{chart:{type:'bar',height:300,toolbar:{show:false}},series:[{name:'Leads',data:[44,55,41,67,22,43]}],xaxis:{categories:['Jan','Feb','Mar','Apr','May','Jun']},colors:['#0ea5e9']}).render();
  }
  if(window.Chart){
    const el=document.getElementById('chartJsDoughnut');
    if(el) new Chart(el,{type:'doughnut',data:{labels:['Enterprise','SMB','Trial'],datasets:[{data:[54,31,15],backgroundColor:['#4f46e5','#0ea5e9','#10b981']}]},options:{plugins:{legend:{position:'bottom'}}}});
  }
})();
