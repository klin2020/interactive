var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbx0-0PZfU879o1zOtpkvLj2upQgIkv586rIPultRzWr4G99_Id0OadPmKYOruCJCUCZ/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  var sheetDataElement = document.getElementById("sheetData");

  response.forEach(function(item) {
    // Create a new <li> element
    var listItem = document.createElement("li"); //list item for every row in database
      //listItem.name == "aldskfj"

    // Iterate over the keys of the object 
    Object.keys(item).forEach(function(key) {
      // Create a new <div> element for each key-value pair
      var divKeyValue = document.createElement("div"); //div for each cell
      // Set class name as the key
      divKeyValue.className = key; //class as column header
      // Set innerHTML as the value
      divKeyValue.innerHTML = item[key]; //content of the cell
      // Append the <div> element for the key-value pair to the <li> item
      listItem.appendChild(divKeyValue);
    });

    // Append the <li> element to the "sheetData" element
    sheetDataElement.appendChild(listItem);
  });
}


// Example usage:
getData(AppScriptUrl);


