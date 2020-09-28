## Password generator pseudocode 

==================================================================================
                    Main Idea of functionality 
- when the program starts it shows a menu of options 
- user can select the different options between the 
        number of characters 
        special characters 
        upper case 
        lower case 
- options displayed on a prompt 
- user clicks the button to generate the password
- assign an array length according to the password length 
- populate each address on the array with a Random character according to user selection 
- repeat cycle per each address (ie for )
- when the last address on the array is populate display "concatenated array content"

=====================================================================================
 Pseudo code 
  Display box with label " Option Select" );
  input box with the label " number of characters? "
    create list with options (special characters =SC= true/false, Upper case UC=true/false, Lower case LC=true/false, numbers = true/false);
    list must be created on Decimal 
    create function to populate an array 
    array must be on selected length 8-128
        create functions with the list to populate array 
        for i=0 to length - populate array with random (use range of ascii)
  listen to the buttons and cycle display until button run is pressed ;
  Exit button terminates the code;
        if code is terminated display, " End of code nothing done";
If brew button is pressed then ;
create an array with the password's length ;
 nested function 
 for each i on password length do :
  var x = random number between  Min-Max (call for function )
  add x to array; 
   convert array to sting; 
   password= array to string;
   re-write the place holder with password
   end.


 
  
    


