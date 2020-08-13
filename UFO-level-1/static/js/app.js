// from data.js
var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");

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
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime');

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(asdf => asdf.datetime === inputValue);
  //tableData_new = filteredData

 return(filteredData)};
 //console.log(tableData_new);
 //return(filteredData);

//tableData = filteredData;
// Get a reference to the table body
//var tbody = d3.select("tbody");
filteredData = runEnter ();
console.log(filteredData);

function TableMaker() {

var inputElement = d3.select('#datetime');
var inputValue = inputElement.property("value");


if (inputValue== 'Null') {
  tableData.forEach((DataReport) => {
    var row = tbody.append("tr");
    Object.entries(DataReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      console.log(filteredData)
    })
  })
  }else{
    filteredData.forEach((DataReport) => {
      var row1 = tbody.append("tr");
      Object.entries(DataReport).forEach(([key, value]) => {
        var cell1 = row.append("td");
        cell.text(value);
        console.log(filteredData)

      })
    })
  };
return(cell.text(value))

}






 