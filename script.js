// let userName = prompt("Enter Your Name");
//console.log(userName)
//document.write("Welcome "+ userName);
//const taxes=0.11;
//taxes=0.08;

let myArray = ["string", 10, {}]
let theSameArray = new Array(1, 2, 3);
console.log(myArray[1]); //prints out 2, starts at position 0, so position 1 = 2 from this array
console.log(myArray);

let exampleArray = ["happiness", 42, true];
console.log(exampleArray[1]);

//    let yourName = "Seth";
//    if(confirm("Are you " + yourName + "?")){
//        console.log("Hello " + yourName);
//    }else{
//        console.log("Then what is your name?");
//    }

console.log("1" == 1); //true
console.log("1" === 1); //false

let number = 99
if(number == 99){
    console.log("The number is correct");
}

// let num1= 1;
// let num2 = 2;

// if(num1 < num2){
//     //if you get here, the statement was true
//     console.log("num1 is smaller than num2");
// }else{
//     console.log("num2 is smaller than num1");
// }

//logical operators: if both expressions are true, use the AND operator &&, if at least one is true, use OR operator ||, NOT operator is !

let num1 = 1;
let num2 = 2;
let num3 = 3;
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}
if(num1 == 1 || num2 == 1 || num3 ==1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}
if(!notTrue){
    console.log("not not true is true!");
}

//Exercise
//create a simple login using the prompt
//3) get from the prompt  and store the variable email.
let email = prompt("Enter your email.")
//2) get from the prompt and store the var password.
let password = prompt("Enter your password.")
//3) display on the console the values (email and password)
console.log(email,password);
console.log("Email: " + email);
console.log("Password: " + password);

//create a if statement to know if the email is equals to admin@admin.com
if(email == "admin@admin.com" && password == "Test1234"){
    document.write("Welcome admin@admin.com");
}else{
    document.write("Invalid Credentials");
}

//and the pass should be Test1234
//if the email and pass are correct you should display on the the HTML the next message: Welcome + email
//if the credentials are not correct you should display on the console: Invalid Credentials.

//loops are methods to run code several times