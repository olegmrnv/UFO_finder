// from data.js
var tableData = data;

// YOUR CODE HERE!

// Creating a button object
var my_button = d3.select("#filter-btn");

// Defining function and all operations that need to be performed when button been clicked
function filtering_function(){
    d3.event.preventDefault();
    var entered_date = d3.select("#datetime").property("value");
    var table = d3.select("tbody");
    table.html("");
    var filtered_data = tableData.filter(event => event.datetime == entered_date);
    console.log(filtered_data);
    filtered_data.forEach(event => {
        var row = table.append("tr");        
        Object.values(event).forEach((value) => {
            row.append("td").text(value);
        });
    });
};

// Creating listener for button
my_button.on("click", filtering_function);