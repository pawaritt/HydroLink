
const jsdata = JSON.parse(document.getElementById('jsdata').textContent);
function BarChart(query, data) {
    console.log(data)

    var options = {
          series: [
            // {
            //     name: 'LastGame',
            //     data: data.lastgame,
            // }, 
            {
              name: 'CurrentGame',
              data: data
            }, 
            
        ],
            chart: {
            type: 'bar',
            height: 400,
            
            toolbar: {
                show: false,
            },
            
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '57%',
            endingShape: "rounded",
            borderRadius: 12,
          },
          
        },
        states: {
          hover: {
            filter: 'none',
          }
        },
        colors:['#FFA26D', '#FF5ED2'],
        dataLabels: {
          enabled: false,
        },
        markers: {
    shape: "circle",
    },
    
    
        legend: {
            show: false,
            fontSize: '12px',
            labels: {
                colors: '#000000',
                
                },
            markers: {
            width: 18,
            height: 18,
            strokeWidth: 10,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,	
            }
        },
        stroke: {
          show: true,
          width: 4,
          curve: 'smooth',
          lineCap: 'round',
          colors: ['transparent']
        },
        grid: {
            borderColor: '#eee',
        },
        xaxis: {
             position: 'bottom',
          categories: ['Rotate', 'HandUpDown', 'TipToe', 'Angry', 'Happy', 'Sad'],
          labels: {
           style: {
              colors: '#787878',
              fontSize: '13px',
              fontFamily: 'poppins',
              fontWeight: 100,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
          crosshairs: {
          show: false,
          }
        },
        yaxis: {
            labels: {
                offsetX:-16,
               style: {
                  colors: '#787878',
                  fontSize: '13px',
                   fontFamily: 'poppins',
                  fontWeight: 100,
                  cssClass: 'apexcharts-xaxis-label',
              },
          },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'white',
                type: "vertical",
                shadeIntensity: 0.2,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 50],
                colorStops: []
            }
        }, 
        tooltip: {
          y: {
            formatter: function (val) {
              return val 
            }
          }
        },
        };

        var chartBar1 = new ApexCharts(document.querySelector(query), options);
        // chartBar1.render();
        setTimeout(chartBar1.render(), 2000); 
        console.log('rendered')
}


function RevenueGraph (data) {
    BarChart('#gamegraph1', data);
}

RevenueGraph(jsdata);