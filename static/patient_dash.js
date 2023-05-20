const jsdata = JSON.parse(document.getElementById('jsdata').textContent);
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
const pi2 = Math.PI * 2;
const radius = 3;
ctx.canvas.height = 400
width = canvas.width
height = canvas.height
scale = (height / .5)
xpad = -60
console.log(jsdata)
$('#canvas').attr("width",$(window).width(width));
$('#canvas').attr("height",$(window).height(height));

vals = JSON.parse(jsdata['river']).map(x => parseFloat(x));

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

function AgriscalePoint(coor) {
  return [height - (coor[1] - 13.5321604836276) * scale + 25, ((coor[0] - 100.2244141393265) * scale) + xpad - 25]
}

function drawAgriPolygon(points){
  // points = [[100, 100], [100, 200], [200, 200], [200, 100]]
  ctx.fillStyle = '#2a5e28';
  ctx.beginPath();
  ctx.moveTo(...AgriscalePoint(points[0]));
  for( let i=0, l=points.length - 1; i < l; i++ ) {
    p = AgriscalePoint(points[i + 1]);
    ctx.lineTo(...p);
  }
  ctx.closePath();
  ctx.fill();
}

function drawAgricultureArea(){
  ctx.fillStyle = '#2a5e28';
  ctx.beginPath();
  console.log("AGRI")
  r = 1
  for( let i=0, l=AGRI_AREA.length; i < l; i++ ) {
    drawAgriPolygon(AGRI_AREA[i]);
      // p = scalePoint(AGRI_AREA[i][0]),
      // ctx.save();
      // ctx.translate( p[0] + r, p[1] );
      // ctx.moveTo( 0, 0 );
      // ctx.arc( 0, 0, r, 0, pi2 );
      // ctx.restore();
  }

  ctx.fill();
}
function LineChart(query, xlabel, series) {
    var options = {
        series: series,
          chart: {
          type: 'line',
          height: 150,
          toolbar: {
              show: false,
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    userCallback: function(label, index, labels) {
                        // when the floored value is the same as the value we have a whole number
                        return Math.floor(label)
   
                    },
                }
            }],
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
                    return Math.round(y * 100) / 100;
                  }
        },
      },
      fill: {
        opacity: 1,
        colors:'#FAC7B6'
      },
      scales: {
        y: {
          ticks: {
            stepSize: 1
          },
        },
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return val;
      //     }
      //   }
      // }
      }

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
function scalePoint(coor) {
  return [((coor[0] - 100.2244141393265) * scale) + xpad, height - (coor[1] - 13.5321604836276) * scale]
}

function drawWhiteRiver(river) {
  ctx.lineWidth = 6;
  point = scalePoint(river[0]);
  ctx.moveTo(...point);
  ctx.strokeStyle = `rgba(255, 255, 255)`; 
  ctx.beginPath();
  let q = 0
  for (let i = 0; i < river.length; i++) {
    ctx.lineTo(...scalePoint(river[i]));
  }
  ctx.stroke();
}

function drawRiver(river, value) {
  ctx.lineWidth = 6;
  point = scalePoint(river[0]);
  ctx.moveTo(...point);
  markpoints = []
  for (let i = 0; i < Math.floor(river.length/10); i++) {
    markpoints.push(river[i * 10])
  }
  markpoints = markpoints.slice(6).slice(0, 6)
  let q = 0
  if (value[q] < 0.25)
    ctx.strokeStyle = `rgba(52, 134, 235)`;
  else if (value[q] < 2)
    ctx.strokeStyle = `rgba(235, 235, 52)`;
  else
    ctx.strokeStyle = `rgba(235, 52, 52)`;
  ctx.beginPath();
  for (let i = 0; i < river.length; i++) {
    ctx.lineTo(...scalePoint(river[i]));
    if (q < markpoints.length) {
      if ((river[i][0] == markpoints[q][0]) & (river[i][1] == markpoints[q][1])) {
        console.log('here')
        ctx.stroke();
        if (value[q] < 0.25)
          ctx.strokeStyle = `rgba(52, 134, 235)`;
        else if (value[q] < 2)
          ctx.strokeStyle = `rgba(235, 235, 52)`;
        else
          ctx.strokeStyle = `rgba(235, 52, 52)`;
        ctx.beginPath();
        ctx.lineTo(...scalePoint(river[i]));
        q += 1
      }
    }
  }
  ctx.stroke();
}

function drawSpread(coors) {
  ctx.fillStyle = 'rgba(52, 134, 235)';
  ctx.beginPath();
  console.log(coors[0])
  for( let i=0, l=coors.length; i < l; i++ )
  {
      p = scalePoint(coors[i]),
      ctx.save();
      ctx.translate( p[0] + radius, p[1] );
      ctx.moveTo( 0, 0 );
      ctx.arc( 0, 0, radius, 0, pi2 );
      ctx.restore();
  }

  ctx.fill();
  
}

function drawSpot(coor, yes) {
  coor1 = scalePoint(coor)
  console.log(coor)
  yes = 1
  if (yes == 0) {
    ctx.strokeStyle = 'rgb(60, 60, 61)';
    ctx.fillStyle = "#48FF00";
    ctx.beginPath();
    ctx.rect(coor1[0] - 6, coor1[1] - 6, 12, 12);
    ctx.fill();
  } else if (yes == 1) {
    ctx.strokeStyle = 'rgb(60, 60, 61)';
    ctx.fillStyle = "#FF5252";
    ctx.beginPath();
    ctx.rect(coor1[0] - 6, coor1[1] - 6, 12, 12);
    ctx.fill();
  }
}

base_image = new Image();
base_image.src = '/static/map.png';
base_image.onload = function(){
  ctx.drawImage(base_image, 0, 0, width, height);
  drawSpread(jsdata['spread_point'])
  drawAgricultureArea()
  drawWhiteRiver(BASE_RIVER);
  drawRiver(BASE_RIVER, vals);
  spots = jsdata.spots
  for (let i = 0; i < spots.length; i++) {
    // drawSpot([spots[i].lon, spots[i].lat], spots[i].flood)
    console.log(spots[i]['salinity'])
    if (i == 0){
    drawSpotGraph(spots[i]);
    }
  }
}

// drawRiver(BASE_RIVER, [2, 2, 1, 0.4, 0.2, 0.1]);
// drawRiver(RIVERS[0], 10);
// drawRiver(RIVERS[1], 20);
// drawRiver(RIVERS[2], 20);


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
  udata = data['salinity']
  var as = [];
  var ps = [];
  var index = [];
  for (let i = 0; i < udata.a.length; i++) {
    index.push(i + 1);
  }
  LineChart(`#${data['name']}1`, index, 
    [{
      name: 'Colected Value',
      data: udata.a
    }, {
      name: 'Predicted Value',
      data: udata.p,
      //radius: 12,	
  }]);
  udata = data['waterlevel']
  console.log(udata)
  var as = [];
  var ps = [];
  var index = [];
  for (let i = 0; i < udata.a.length; i++) {
    index.push(i + 1);
  }
  LineChart(`#${data['name']}2`, index, 
    [{
      name: 'Colected Value',
      data: udata.a
    }, {
        name: 'Predicted Value',
        data: udata.p,
        //radius: 12,	
    }, ]);
}
