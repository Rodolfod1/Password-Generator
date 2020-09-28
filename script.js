// My approach to a password generator -- Rodolfo Diaz Sep-25-2020
// Declaration of Global variables. 
var generateBtn = document.querySelector("#generate");
var a,b,c,d,e;  // where a - string  and bcde are boolean
var mtx;  // Mtx will be an array 
// function to populate an array of numbers  
function myascii(min,max){
      mtx=[];
      for (i=min;i<=max; i++) {
        mtx.push(i)
          }
          return mtx
}
// Write password to the #password input
function writePassword() {
                                    // var password = generatePassword();                               
                                      //use "Number" to convert the string out of the prompt into a number 
                                      a=Number(prompt("How many characters do you need ?", "Type number between 8 & 128"));
                                      if (a<8 || a>128){
                                        alert("Your password length must be between 8 and 128");}
                                        else{
                                                  // series of prompts to confirm password criteria 
                                                b=confirm("Can your password include numbers?   Use Cancel for NO");  
                                                c=confirm("Can your password include Upper-case letters?  Use Cancel for NO");
                                                d=confirm("Can your password include Special Characters?  Use Cancel for NO");
                                                  /// calling my function of characters 
                                                  // using concatenate "concat" to link different sets of special characters 
                                                  var isNumber=myascii(48,57);
                                                  var isSpecial=myascii(33,47).concat(myascii(58,64)).concat(myascii(91,96));
                                                  var isUpper=myascii(65,90);
                                                  var isLower=myascii(97,122);
                                                  var charlist=isLower;  // i'm using a local variable and will initiate it assuming all passwords will have lower characters 
                                                  if(b) {charlist=charlist.concat(isNumber)};  
                                                  if(c) {charlist=charlist.concat(isUpper)};
                                                  if(d) {charlist=charlist.concat(isSpecial)};
                                                  var passcode=[];
                                                   for (i=0; i<a; i++) {
                                                                        // creating a variable to select random number from our arrays length a
                                                                          var char=charlist[Math.floor(Math.random()*charlist.length)];
                                                                        // pushing the random number to the array passcode including transforming decimal to ascii characters
                                                                        passcode.push(String.fromCharCode(char));
                                                                        }
                                               
                                             } ; 
                                                 // re writing on the text area and transforming the array into string              
                    document.querySelector("#password").textContent=passcode.join('');
                                          }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
