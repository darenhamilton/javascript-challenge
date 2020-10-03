// from data.js
let tableData = data;
 
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
  
/// Select the button and form entry
let button = d3.select("#filter-btn"),
    form = d3.select("#form");
const runEnter = () => {
    
   // Prevent the page from refreshing
  d3.event.preventDefault();  
  //remove items from table
  tbody.html("");

    // Select the input date get the
    let inputElement = d3.select("#datetime");
    // Get the value property of the input date
    let inputValue = inputElement.property("value");
    
    // Filter Data with datetime equal to input value
    let filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);
    
    filteredData.forEach(function(selections) {

    // Append one table row for each object
    let row = tbody.append("tr");
    // console log  values
    Object.entries(selections).forEach(function([key, value]) {
        // Append a cell to the row for each value
        let cell = row.append("td");
        cell.text(value);
    });
});
};

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

