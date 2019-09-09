var pie;
var xhr2 = new XMLHttpRequest();
xhr2.open('GET','graphics_Pie.php');
xhr2.onload = function(){
if (xhr.status===200) {
    pie = JSON.parse(xhr2.responseText);
    console.log(pie);

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Vargas","Suarez","Lino","Sanchez","Arteaga","Solar"],
    datasets: [{
      data: [parseInt(pie.jvargas),parseInt(pie.msuarez),parseInt(pie.mlino),parseInt(pie.dsanchez),parseInt(pie.parteaga),parseInt(pie.esolar)],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f7ab13', '#f56a2e', '#f858e9'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#ec9e03', '#f74f07', '#fa13e4'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 50,
  },
});
}else{
  console.log("EXISTE UN ERROR DE TIPO: "+xhr.status);
}
}
xhr2.send();