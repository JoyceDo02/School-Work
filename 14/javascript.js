var ar = new Array ("Have a nice day", "Today will be great", "The weather is nice", "Hello there", "You look nice");
// This array is created with the items. Instead of doing each item one at a time, everything is created at the same time.

for(var i=0; i<=10; i++){

document.getElementById("msg").innerHTML+=ar[Math.floor(Math.random()*ar.length)] + "<br />";
}

/* The paragraph element with the id of "msg" will be replaced by the array object.
The number of items in the array will be multiplied by the random number that is generated.
That number will determine which item in will be called in the array.
Then, the "+=" will concatenate the outputs of the loop and will keep the messages from overlapping each other while looping. */