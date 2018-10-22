var size = 5;
var i = 0;

// top
for (i = 0; i < size; i++)
    document.write("*");

//middle
for (var j = 0; j < size - 2; j++){
  document.write("\n"); // go to next row
  // middle (2 on sides with size-2 in between)
  document.write("*");
  for (i = 0; i < size-2; i++)
    document.write(" ");
  document.write("*\n"); // goes to new row as well
}

// same as top
for (i = 0; i < size; i++)
    document.write("*");