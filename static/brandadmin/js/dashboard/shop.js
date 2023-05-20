const jsdata = JSON.parse(JSON.parse(document.getElementById('jsdata').textContent));
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

function PieChart(queryset, label, data1, data2) {
    var colors = ['#886CC0', '#26E023', '#61CFF1','#FFDA7C','#FF86B1']
    var options = {
      series: data1,
      chart: {
      type: 'donut',
    height:300
      },
    dataLabels:{
      enabled: false,
    },
    stroke: {
        width: 0,
      },
    colors:colors,
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },

    labels: label,
    formatter: function (val) {
      return val + "%"
    },
    legend: {
            position: 'bottom',
      show:false
          },
      responsive: [{
        breakpoint: 1800,
        options: {
        chart: {
      height:200
    },
        }
      },
    {
        breakpoint: 1800,
        options: {
        chart: {
      height:200
    },
        }
      }
    ]
    };
    var chart = new ApexCharts(document.querySelector(queryset), options);
    chart.render();

    label_html = ''
    for (let i = 0; i < label.length; i++) {
      label_html += `
      <div class="d-flex align-items-center justify-content-between mb-4">
          <span class="fs-18 font-w500">
              <svg class="me-3" width="20" height="20" viewBox="0 0 20 20" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="6" fill="${ colors[i] }" />
              </svg>
              ${ label[i] } (${ data1[i] }%)
          </span>
          <span class="fs-18 font-w600">${ data2[i] }</span>
      </div>`
    }
    document.getElementById('label-container').innerHTML = label_html
}
function RevenueGraph (data) {
    LineChart('#revenuegraph1', data.day.label, data.day.value)
    LineChart('#revenuegraph2', data.month.label, data.month.value)
    LineChart('#revenuegraph3', data.year.label, data.year.value)
}
function SizeChart (data) {
    PieChart('#piechart1', data.month.size, data.month.percent, data.month.sales)
}

console.log('pluem')
RevenueGraph(jsdata.revenue)
SizeChart(jsdata.sizecategories[0].size)