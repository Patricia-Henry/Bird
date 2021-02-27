let x = 0;
let array = Array();

// Creating an empty array

function add_bird_to_array()

{

  // Returns the element with the id attriubte
 array[x] = document.getElementById("bird").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("bird").value = "";
}

function display_array()
{
   let e = "<hr/>";   
    
   for (var y=0; y<array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}