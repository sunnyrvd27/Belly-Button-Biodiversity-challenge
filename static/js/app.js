// Read the data file

url = "https://raw.githubusercontent.com/sunnyrvd27/Belly-Button-Biodiversity-challenge/tree/main/data/samples.json"
url2 = "https://github.com/sunnyrvd27/Belly-Button-Biodiversity-challenge/blob/main/data/samples.json"
file = "samples.json"

d3.json(file, function(data) {
    console.log(data);
  });
