const canvas = document.getElementById("whiteboard");
const context = canvas.getContext("2d");

let drawing = false;

canvas.addEventListener("mousedown", () => {
  drawing = true;
  context.beginPath();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  context.closePath();
});

canvas.addEventListener("mousemove", draw);
function draw(e) {
  if (!drawing) return;

  context.lineCap = "round";

  context.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  context.stroke();
  context.beginPath();
  context.moveTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
}

const clearButton = document.getElementById("clear-btn");


clearButton.addEventListener("click", () => {
 context.clearRect(0, 0, canvas.width, canvas.height);
});

//form data from page 1 to page 2 //
    function getData()
{
    //gettting the values
    var fullName = document.getElementById("fullName").value;
    var address= document.getElementById("address").value; 
    var address2= document.getElementById("address2").value; 
    var phone= document.getElementById("phone").value; 
    var altphone= document.getElementById("altphone").value;
    var slcnumber= document.getElementById("slcnumber").value;

    //saving the values in local storage
    localStorage.setItem("txtValue", fullName);
    localStorage.setItem("txtValue1", address);
    localStorage.setItem("txtValue2", address2);
    localStorage.setItem("txtValue3", phone);
    localStorage.setItem("txtValue4", altphone);
    localStorage.setItem("txtValue5", slcnumber);    
}


//page 2
//displaying the value from local storage to another page by their respective Ids
document.getElementById("data").innerHTML=localStorage.getItem("txtValue");
document.getElementById("data1").innerHTML=localStorage.getItem("txtValue1");
document.getElementById("data2").innerHTML=localStorage.getItem("txtValue2");
document.getElementById("data3").innerHTML=localStorage.getItem("txtValue3");
document.getElementById("data4").innerHTML=localStorage.getItem("txtValue4");
document.getElementById("data5").innerHTML=localStorage.getItem("txtValue5");

