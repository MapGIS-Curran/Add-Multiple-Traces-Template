function Get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json_obj = JSON.parse(Get("https://raw.githubusercontent.com/bcdunbar/datasets/master/airfoil_data.json"));

var trace1 = {
      a: json_obj[0].a,
      b: json_obj[0].b,
      baxis: {
        startline: false,
        endline: false,
        showticklabels: "none",
        smoothing: 0,
        showgrid: false
      },
      x: json_obj[0].x,
      y: json_obj[0].y,
      type: "carpet",
      aaxis:{
        startlinewidth: 2,
        startline: true,
        showticklabels: "none",
        endline: true,
        showgrid: false,
        endlinewidth: 2,
        smoothing: 0
      }
    }

 var trace2 = {
      autocolorscale: false,
      zmax: 1,
      name: "Pressure",
      colorscale: "Viridis",
      zmin: -8,
      colorbar: {
        y: 0,
        yanchor: "bottom",
        titleside: "right",
        len: 0.75,
        title: "Pressure coefficient, c<sub>p</sub>"
      },
      contours: {
        start: -1,
        size: 0.025,
        end: 1.000,
        showlines: false
      },
      line: {
        smoothing: 0
      },
      z: json_obj[1].z,
      type: "contourcarpet",
      autocontour: false,
      zauto: false
    }

 var trace3 = {
      opacity: 0.300,
      showlegend: true,
      name: "Streamlines",
      autocontour: true,
      ncontours: 50,
      contours: {
        coloring: "none"
      },
      line: {
        color: "white",
        width: 1
      },
      z: json_obj[2].z,
      type: "contourcarpet"
    }

 var trace4 = {
      showlegend: true,
      name: "Pressure<br>contours",
      autocontour: false,
      z: json_obj[3].z,
      type: "contourcarpet",
      line: {
        color: "rgba(0, 0, 0, 0.5)",
        smoothing: 1
      },
      contours: {
        size: 0.250,
        start: -4,
        coloring: "none",
        end: 1.000,
        showlines: true
      }
    }

 var trace5 = {
      legendgroup: "g1",
      name: "Surface<br>pressure",
      mode: "lines",
      hoverinfo: "skip",
      x: json_obj[4].x,
      y: json_obj[4].y,
      line: {
        color: "rgba(255, 0, 0, 0.5)",
        width: 1,
        shape: "spline",
        smoothing: 1
      },
      fill: "toself",
      type: "scatter",
      fillcolor: "rgba(255, 0, 0, 0.2)"
    }

 var trace6 = {
      showlegend: false,
      legendgroup: "g1",
      mode: "lines",
      hoverinfo: "skip",
      x: json_obj[5].x,
      y: json_obj[5].y,
      line: {
        color: "rgba(255, 0, 0, 0.3)",
        width: 1
      },
      type: "scatter"
    }

 var trace7 = {
      showlegend: false,
      legendgroup: "g1",
      name: "cp",
      text: json_obj[6].text,
      mode: "lines",
      hoverinfo: "text",
      x: json_obj[6].x,
      y: json_obj[6].y,
      line: {
        color: "rgba(255, 0, 0, 0.2)",
        width: 0
      },
      type: "scatter"
    }

data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7]

var layout = {
    yaxis: {
      zeroline: false,
      range: [-1.800,1.800],
      showgrid: false
    },
    dragmode: "pan",
    height: 700,
    xaxis: {
      zeroline: false,
      scaleratio: 1,
      scaleanchor: "y",
      range: [-3.800,3.800],
      showgrid: false
    },
    title: "Flow over a Karman-Trefftz airfoil",
    hovermode: "closest",
    margin: {
      r: 60,
      b: 40,
      l: 40,
      t: 80
    },
    width: 900
  }

Plotly.plot('myDiv', data, layout);
