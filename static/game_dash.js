const jsdata = JSON.parse(document.getElementById('jsdata').textContent);

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
function LineChart(query, xlabel, series) {
    var options = {
        series: series,
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
      colors:['#886CC0', '#FFEC4B', '#61CFF1', '#19C4FF'],
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
        colors:['var(--primary)', '#FFEC4B', '#61CFF1', '#19C4FF'],
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
                    return y;
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
            return val
          }
        }
      }
      };

      var chart1 = new ApexCharts(document.querySelector(query), options);
      setTimeout(chart1.render(), 2000); 
   
}

function RevenueGraph (data) {
    var rotate = [];
    var und = [];
    var angry = [];
    var sad = [];
    var smile = [];
    var tiptoe = [];
    var index = [];
    for (let i = 0; i < data.length; i++) {
        rotate.push(data[i].rotate);
        und.push(data[i].hand);
        angry.push(data[i].angry);
        sad.push(data[i].sad);
        smile.push(data[i].smile);
        tiptoe.push(data[i].tiptoe);
        index.push(i + 1);
      }
    LineChart('#gamegraph1', index, 
    [{
        name: 'Rotate',
        data: rotate,
        //radius: 12,	
    }, {
        name: 'Up And Down',
        data: und,
        //radius: 12,	
    }]);
    LineChart('#gamegraph2', index, 
    [{
        name: 'Angry',
        data: angry,
        //radius: 12,	
    }, {
        name: 'Smile',
        data: smile,
        //radius: 12,	
    },  {
        ndame: 'Sad',
        data: sad,
        //raius: 12,	
    }]);
    LineChart('#gamegraph3', index, 
    [{
        name: 'Tip Toe',
        data: tiptoe,
        //radius: 12,	
    }],
    )
}

function LineChart(query, xlabel, series) {
  var options = {
      series: series,
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
    colors:['#886CC0', '#FFEC4B', '#61CFF1', '#19C4FF'],
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
      width: 5,
      curve:'smooth',
      colors:['var(--primary)', '#FFEC4B', '#61CFF1', '#19C4FF'],
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
                  return y;
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
          return val
        }
      }
    }
    };

    var chart1 = new ApexCharts(document.querySelector(query), options);
    setTimeout(chart1.render(), 2000); 
 
}

function drawSpotGraph(data) {
  udata = JSON.parse(data['daily'])
  console.log(udata)
  var salinity = [];
  var waterlevel = [];
  var watervelocity = [];
  var tempreture = [];
  var index = [];
  for (let i = 0; i < udata.length; i++) {
    salinity.push(udata[i].salinity);
    waterlevel.push(udata[i].waterlevel);
    watervelocity.push(udata[i].watervelocity);
    tempreture.push(udata[i].tempreture);
    index.push(i + 1);
  }
  LineChart(`#${data['srnumber']}1`, index, 
    [{
        name: 'Salinity',
        data: salinity.slice(0, 7),
        //radius: 12,	
    }, {
      name: 'Water Level',
      data: waterlevel.slice(0, 7)
    }, {
      name: 'Water Velocity',
      data: watervelocity.slice(0, 7)
    }, {
      name: 'Tempreture',
      data: tempreture.slice(0, 7)
    }]);
  udata = JSON.parse(data['monthly'])
  var salinity = [];
  var waterlevel = [];
  var watervelocity = [];
  var tempreture = [];
  var index = [];
  for (let i = 0; i < udata.length; i++) {
    salinity.push(udata[i].salinity);
    waterlevel.push(udata[i].waterlevel);
    watervelocity.push(udata[i].watervelocity);
    tempreture.push(udata[i].tempreture);
    index.push(i + 1);
  }
  LineChart(`#${data['srnumber']}2`, index, 
    [{
        name: 'Salinity',
        data: salinity,
        //radius: 12,	
    }, {
      name: 'Water Level',
      data: waterlevel
    }, {
      name: 'Water Velocity',
      data: watervelocity
    }, {
      name: 'Tempreture',
      data: tempreture
    }]);
}

bouys = jsdata.bouys
for (let i = 0; i < bouys.length; i++) {
  drawSpotGraph(bouys[i]);
}