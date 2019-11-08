
var listElement = document.getElementById("list");
var sbtnElement = document.getElementById("savebtn");

var saveButton = document.querySelector("#keeps");

var date = document.querySelector("#currentDay");



var hrs = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","10PM","11PM","12AM","1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM"]

renderLastRegistered();
    hrs.forEach(function(elem,i){

     let htmlString =` 
     <div id="input-row" class="row"> 
        <div class="col-3 id="datediv"> ${hrs[i]} </div>
        <div class="col-6" id="task-input">
            <input type="text" id="task" placeholder="Daily Task" text=""> </div>
        <div class="col-3" id="save_sec">
            <button type="button" class="btn btn-light id="keeps" >Save</button> </div>
     </div>
    `
    
    //'<div id="input-row" class="row">' 
    // + '<div class="col-3 id="datediv">' + hrs[i] 
    // + '</div>'
    // + '<div class="col-6" id="task-input">'
    // + '<input type="text" id="task" placeholder="Daily        Task" text="">'
    // + '</div>'
    // + '<div class="col-3" id="save_sec">'
    // + '<button type="button" class="btn btn-light id="keeps" >Save</button>' 
    // + '</div>'
    // + '</div>'

 $("#list").append(htmlString);
});


$(document).on("click", 'button', function(event) {
    event.preventDefault();

    var toDo = $("#task").val();
    localStorage.setItem("task", toDo);
    
    console.log(toDo);
    renderLastRegistered();
});


function renderLastRegistered() {
   
    // var Do = $("#task").val();
   var Do = localStorage.getItem("task");
  
    if (Do === null) {
        console.log("coming back 1", Do );
        return;
    }
    console.log("coming back 2", Do );

   $('#task').text(Do);
  };


