// from data.js
var tableData = data;

// Use D3 to select the table body
let tbody = d3.select("tbody");

// append values to table
data.forEach((ufoSighting) => {
  let row = tbody.append("tr");
  Object.values(ufoSighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});
  
/// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    
  // Prevent the page from refreshing
  d3.event.preventDefault()
    
  tbody.html("");

    // Select the input date get the
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    
    filteredData.forEach(function(selections) {

    // Append one table row for each object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});

