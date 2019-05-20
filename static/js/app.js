// from data.js
var tableData = data;

// YOUR CODE HERE!

// Creating a button object
var my_button = d3.select("#filter-btn");

// Defining function and all operations that need to be performed when button been clicked
function filtering_function(){
    
    // prevent page from refrashing and clearing table
    d3.event.preventDefault();
    var table = d3.select("tbody");
    table.html("");

    // defining fields we will be filtering by
    var my_fields = ["datetime", "city", "state", "country", "shape"];    
    
    // if no filter will be entered I will return full data set 
    var filtered_data = tableData;

    // filtering data by entered criteria, if criteria is not entered, no filter will be applyed
    my_fields.forEach((filter_field) => {
        //reading curent filter value and converting it to lowercase letters
        var filter_input = d3.select(`#${filter_field}`).property("value").toLowerCase();
        //if value been entered we filter data by that value
        if (filter_input){
            filtered_data = filtered_data.filter(event => event[filter_field] == filter_input);
        }
    });
    
    // printing filtered data
    filtered_data.forEach(event => {
        var row = table.append("tr");        
        Object.values(event).forEach((value) => {
            row.append("td").text(value);
        });
    });
};

// Creating listener for button
my_button.on("click", filtering_function);