function addNumbers(number1, number2) 
  {
    return number1 + number2;
  }
  

  const result = addNumbers(10, 5); 
  console.log(result);




  function changeText()
  {
    document.getElementById("submit").innerHTML = "Clicked";
  }


  function changeTextOfButton()
  {
    document.getElementById("submit").onclick = changeText();
  }





  

  document.addEventListener("DOMContentLoaded",function(){

 
    
    const form = document.getElementById("form");

    form.addEventListener("submit",function(){


    var inputName = document.getElementById("name").value;
    

    var inputEmail = document.getElementById("email").value;
 

    if(inputName == "" || inputEmail == "")
    {
        window.alert("Type name and email please");
    }

    else{
        alert("Hello "+inputName+" your email is "+inputEmail);
        form.reset();
    }


    })

  })