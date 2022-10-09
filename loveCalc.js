// Take the name of each participating party

prompt("What is your name?");
prompt("What is your name?");


// Generate a random number and apply basic math to place the number between 1 and 100

var n = Math.random();
n = Math.floor(n * 100) + 1;
console.log(n);


// Use if/else statements to classify the score and alert the user with the appropriate response

if (n > 75) {
    alert("Your love score is " + n + "% You love eachother like Prince loves purple!");
}

if (n >= 40 && n <= 75) {
    alert("Your love score is " + n + "% There are a lot of people in the world. It couldn't hurt keeping your eyes open!");
}
    
else {
    alert("Your love score is " + n + "% There is no use keeping up this charade any longer!");
}
