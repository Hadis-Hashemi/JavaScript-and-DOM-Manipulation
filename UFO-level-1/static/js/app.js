// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
TableMaker(tableData);





// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
   d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime');

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData);
  TableMaker(filteredData);

 };
 

function TableMaker(filteredData) {
var tbody = d3.select("tbody");
tbody.html("");
var inputElement = d3.select('#datetime');
var inputValue = inputElement.property("value");
console.log(inputValue);

if (inputValue== '') {
  tableData.forEach((DataReport) => {
    var row = tbody.append("tr");
    Object.entries(DataReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
  }else{
    filteredData.forEach((DataReport) => {
      var row = tbody.append("tr");
      Object.entries(DataReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);

      })
    })
  };


}
