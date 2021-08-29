 // BONUS: GAUGE CHART

 // Gauge Chart to plot weekly washing frequency 
 const guageDisplay = d3.select("#gauge");
 guageDisplay.html(""); 
 const washFreq = idMetadata[0].wfreq;
 
 const guageData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: washFreq,
      title: { text: "<b>Belly Button Washing Frequency </b><br> Scrubs Per Week" },
      type: "indicator",
      mode: "gauge+number",     
       gauge: {
       axis: { range: [0,9] },
       bar: { color: "#1919FF" },
       steps: [
        { range: [0, 1], color: "#FF0000" },
        { range: [1, 2], color: "#FF5533" },
        { range: [2, 3], color: "#FF9933" },
        { range: [3, 4], color: "#FFDD33" },
        { range: [4, 5], color: "#FFFF33" },
        { range: [5, 6], color: "#DDFF33" },
        { range: [6, 7], color: "#99FF33" },
        { range: [7, 8], color: "#77FF33" },
        { range: [8, 9], color: "#33FF33" }
              
      ],
       threshold: {
          value: washFreq
        }
      }
    }
  ]; 
  const gaugeLayout = {  width: 600, 
                   height: 400, 
                   margin: { t: 0, b: 0 }, 
                    };
 
 // Plot using Plotly
  Plotly.newPlot('gauge', guageData, gaugeLayout); 
 
 });
 }