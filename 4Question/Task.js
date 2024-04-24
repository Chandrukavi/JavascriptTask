function myFunction() {
    const x = document.getElementById("fname").value;
  
    document.getElementById("show").innerHTML=x;
    
  }


  function AddElement() {
  
    const newH1 = document.createElement("h1");
    
    newH1.textContent = "Hello World";

    const container = document.getElementById("container");
    
    container.appendChild(newH1);
  }


  function changeColor() {

    const button = document.getElementById("myButton");
    
    button.style.backgroundColor = "#ff0000";
  }


  function showButtonName(buttonName) {

    const h1 = document.getElementById("buttonName");

    h1.textContent = "You clicked: " + buttonName;
  }

