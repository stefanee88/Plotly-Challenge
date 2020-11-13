// Use the D3 library to read in samples.json.
d3.json("/data/samples.json", function(data) {
    console.log(data);
});

// Slice the first 10 objects for plotting
slicedData = sample.slice(0, 10);
console.log(slicedData)

// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");


    // Bar Chart
    var trace1 = {
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        name: "Greek",
        type: "bar",
        orientation: "h"
    };
    var data = [trace1];
    var layout = {
        title: "Top Ten OTUs for Individual Belly Button" +sample,
        margin: {l: 100, r: 100, t: 100, b: 100}
    };
    Plotly.newPlot("bar", dataset, layout);  
    });

  // Bubble Chart
  var trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
      size: sample_values,
      color: otu_ids,
      colorscale:"Hotpink"
      }
  };
  var data = [trace1];
  var layout = {
      title: 'Bacteria Cultures per Sample',
      showlegend: false,
      hovermode: 'closest',
      xaxis: {title:"OTU IDs " +sample},
      margin: {t:30}
  };
  Plotly.newPlot('bubble', dataset, layout); 
  
  
