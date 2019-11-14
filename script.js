
 // moment.js to set the current date

  let dateNo = moment();

  let currentTime = dateNo.format("Hr")
  currentTime = parseInt(currentTime)

  $("#currentDay").text(dateNo.format("dddd, MMMM DD"));



// click event on save button - sending input to local memory based on "click"
          // selecting hourly task inputs from HTML elements
var firstuserinput_9AM = document.getElementById("first_toDo");
var seconduserinput_10AM = document.getElementById("second_toDo");
var thirduserinput_11AM = document.getElementById("third_toDo");
var fourthuserinput_12PM = document.getElementById("fourth_toDo");
var fifthuserinput_1PM = document.getElementById("fifth_toDo");
var sixthuserinput_2PM = document.getElementById("sixth_toDo");
var seventhuserinput_3PM = document.getElementById("seventh_toDo");
var eighthuserinput_4PM = document.getElementById("eighth_toDo");
var ninethuserinput_5PM = document.getElementById("nineth_toDo");


$("button").on("click", function() {
var toDo_obj = {                        // obj with user hourly input values
     key_9AM: firstuserinput_9AM.value, 
     key_10AM: seconduserinput_10AM.value,
     key_11AM: thirduserinput_11AM.value,
     key_12PM: fourthuserinput_12PM.value,
     key_1PM: fifthuserinput_1PM.value,
     key_2PM: sixthuserinput_2PM.value,
     key_3PM: seventhuserinput_3PM.value,
     key_4PM: eighthuserinput_4PM.value,
     key_5PM: ninethuserinput_5PM.value,
}
//setting the input to a key value pair to save under local storage
localStorage.setItem("toDo_9AM", toDo_obj.key_9AM);
localStorage.setItem("toDo_10AM", toDo_obj.key_10AM); 
localStorage.setItem("toDo_11AM", toDo_obj.key_11AM); 
localStorage.setItem("toDo_12PM", toDo_obj.key_12PM);
localStorage.setItem("toDo_1PM", toDo_obj.key_1PM); 
localStorage.setItem("toDo_2PM", toDo_obj.key_2PM); 
localStorage.setItem("toDo_3PM", toDo_obj.key_3PM); 
localStorage.setItem("toDo_4PM", toDo_obj.key_4PM); 
localStorage.setItem("toDo_5PM", toDo_obj.key_5PM); 
})

 var toDo_9amlocalstorage = localStorage.getItem("toDo_9AM");
 var toDo_10amlocalstorage = localStorage.getItem("toDo_10AM");
 var toDo_11amlocalstorage = localStorage.getItem("toDo_11AM");
 var toDo_12pmlocalstorage = localStorage.getItem("toDo_12PM");
 var toDo_1pmlocalstorage = localStorage.getItem("toDo_1PM");
 var toDo_2pmlocalstorage = localStorage.getItem("toDo_2PM");
 var toDo_3pmlocalstorage = localStorage.getItem("toDo_3PM");
 var toDo_4pmlocalstorage = localStorage.getItem("toDo_4PM");
 var toDo_5pmlocalstorage = localStorage.getItem("toDo_5PM");


firstuserinput_9AM.value = toDo_9amlocalstorage; // show store data on page
console.log(toDo_9amlocalstorage)
seconduserinput_10AM.value = toDo_10amlocalstorage; 
thirduserinput_11AM.value = toDo_11amlocalstorage; 
fourthuserinput_12PM.value = toDo_12pmlocalstorage; 
fifthuserinput_1PM.value = toDo_1pmlocalstorage; 
sixthuserinput_2PM.value = toDo_2pmlocalstorage; 
seventhuserinput_3PM.value = toDo_3pmlocalstorage; 
eighthuserinput_4PM.value = toDo_4pmlocalstorage; 
ninethuserinput_5PM.value = toDo_5pmlocalstorage; 

