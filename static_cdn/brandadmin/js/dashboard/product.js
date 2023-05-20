const jsdata = JSON.parse(JSON.parse(document.getElementById('jsdata').textContent));
var stepSlider = document.getElementById('slider-step');

console.log(jsdata.age)

function barStalkChart(data){
    //bar chart
    Morris.Bar({
        element: 'morris_bar_stalked',
        data: data,
        xkey: 'age',
        ykeys: ['order', 'B'],
        labels: ['this', 'other'],
        barColors: ['#FFA7D7', "#F1F3F7"],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true,
        barSizeRatio: 0.25,
        stacked: true, 
        behaveLikeLine: true,
    });
}

function LineChart(query, xlabel, data) {
    console.log(xlabel)
    var options = {
        series: [
          {
              name: 'Net Profit',
              data: data,
              //radius: 12,	
          }, 				
      ],
          chart: {
          type: 'line',
          height: 300,
          toolbar: {
              show: false,
          },
          
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          endingShape: 'rounded'
        },
      },
      colors:['#886CC0'],
      dataLabels: {
        enabled: false,
      },
      markers: {
          shape: "circle",
      },

      legend: {
          show: false,
      },
      stroke: {
        show: true,
        width: 10,
        curve:'smooth',
        colors:['var(--primary)'],
      },
      
      grid: {
          borderColor: '#eee',
          show: true,
           xaxis: {
              lines: {
                  show: true,
              }
          },  
           yaxis: {
              lines: {
                  show: false,
              }
          },  
      },
      xaxis: {
          
        categories: xlabel,
        labels: {
          style: {
              colors: '#7E7F80',
              fontSize: '13px',
              fontFamily: 'Poppins',
              fontWeight: 100,
              cssClass: 'apexcharts-xaxis-label',
          },
        },
        crosshairs: {
        show: false,
        }
      },
      yaxis: {
      show:true,	
      labels: {
          offsetX: -15,
         style: {
            colors: '#7E7F80',
            fontSize: '14px',
             fontFamily: 'Poppins',
            fontWeight: 100,
            
          },
           formatter: function (y) {
                    return"$ " +  y;
                  }
        },
      },
      fill: {
        opacity: 1,
        colors:'#FAC7B6'
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val
          }
        }
      }
      };

      var chart1 = new ApexCharts(document.querySelector(query), options);

      chart1.render();
   
}

function RevenueGraph (data) {
    LineChart('#revenuegraph1', data.day.label, data.day.value)
    LineChart('#revenuegraph2', data.month.label, data.month.value)
    LineChart('#revenuegraph3', data.year.label, data.year.value)
}

RevenueGraph(jsdata.revenue)
barStalkChart(jsdata.age)
console.log(jsdata.age)