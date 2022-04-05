//loops
let i;
for(i=0;i<5;i=i+1){ //i+1 is the same as i++
    //for statement has 3 parts, initialization, condition, increment
    console.log(i);
}

let myArray = ["A","B","C"];
for(let i=0; i < myArray.length; i++){
    console.log("The member of myArray in index " + i + "is" + myArray[i]);
}

//while statement
//turn off autosave when using a while statement

let j=99;
while (j > 0){
    console.log(j + "bottles of beer on the wall");
    j -=1;
}