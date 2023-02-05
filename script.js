

function Function() {
   var y  = document.querySelector(".newtasks input").value;
   if(y.length == 0) {
    window.alert("please enter something")
   } else {
    document.querySelector(".taskslist").innerHTML +=
    ` <div class="task" >
    <span name="${y}">
    ${y}          
    </span>
    <button class="delete">Delete</button>
   </div>`;
   }
   
  for(var i = 0 ; i <   )
}



