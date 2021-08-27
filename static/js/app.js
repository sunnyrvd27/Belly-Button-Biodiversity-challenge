// Read the data file

//url = "https://raw.githubusercontent.com/sunnyrvd27/Belly-Button-Biodiversity-challenge/tree/main/data/sample.json"

d3.json("https://raw.githubusercontent.com/sunnyrvd27/Belly-Button-Biodiversity-challenge/blob/main/data/samples.json").then(function(data) {
    console.log(data);
  });
