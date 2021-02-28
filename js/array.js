let i = 0;
let array = Array();

// Creating an empty array

function add_bird_to_array()

{

  // Returns the element with the id attribute
 array[i] = document.getElementById("bird").value;
 alert("Bird: " + array[i] + " Added at location " + i);
 i++;
 document.getElementById("bird").value = "";
}

function display_array()
{
   let a = "<hr/>";   
    
   for (let y=0; y<array.length; y++)
   {
     a += "Bird " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = a;
}