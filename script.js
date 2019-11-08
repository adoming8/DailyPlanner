
var listElement = document.getElementById("list");
var sbtnElement = document.getElementById("savebtn");
var saveButton = document.querySelector("#keeps");

var hrs = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","10PM","11PM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"]

renderLastRegistered();
    hrs.forEach(function(elem,i){
     let htmlString =` 
     <div id="input-row" class="row"> 
        <div class="col-2 fecha id="datediv"><span> ${hrs[i]} </span></div>
        <div class="col-8" id="task-input">
            <input type="text" id="task" placeholder="Daily Task" text=""> </div>
        <div class="col-2" id="save_sec">
            <button type="button" class="btn btn-light id="keeps" >Save</button> </div>
     </div>
    `
 $("#list").append(htmlString);
});

// click event on save button - sending input to local memory based on "click"

$(document).on("click", 'button', function(event) {
    event.preventDefault();

    var toDo = $("#task").val();


        localStorage.setItem("task", toDo); // toDo type is a string
        console.log(toDo);
    renderLastRegistered();
});


function renderLastRegistered() {
   
    // var Do = $("#task").val();
   var Do = localStorage.getItem("task");
  
    if (Do === null) {
    // console.log("coming back 1", Do );
        return;
    }
    // console.log("coming back 2", Do );

   $('#task').html(`${Do}`);
  };


 // moment.js to set the current date

  let dateNo = moment();

  let currentTime = dateNo.format("HH")
  currentTime = parseInt(currentTime)

  $("#currentDay").text(dateNo.format("dddd, MMMM DD"));
