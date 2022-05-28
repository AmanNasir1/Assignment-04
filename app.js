// ---------------------CHAPTER: 9-11------------------------------


// QUESTION-1

// var city = prompt("Enter Your City: ");
// if (city ==="karachi"){
//     alert("Welcome To The City Of Lights!");
// }

// QUESTION-2
 
// var gender = prompt("Enter Your Gender: ");
// if (gender==="male"){
//     alert("Good Morning Sir!");
// }
// else if(gender ==="female"){
//     alert("Good Morning Mam");
// }
// else{
//     alert("Invalid Gender");
// }

// QUESTION-3

// var color = prompt("Enter any color of traffic signal: ");
// if (color ==="red"){
//     alert("Must Stop");
// }
// else if (color==="yellow"){
//     alert("Ready To Move");
// }
// else{
//     alert("Move Now ");
// }

// QUESTION-4

// var fuel = +prompt("Enter Your Remaining Fuel in litres: ");
// if (fuel < 0.25){
//     alert("Please refill the fuel in your car!");
// }

// QUESTION-6

// var obtMarks1 = +prompt("Enter Marks of subject 1: ");
// var obtMarks2 = +prompt("Enter Marks of subject 2: ");
// var obtMarks3 = +prompt("Enter Marks of subject 3: ");
// var TotalMarks = +prompt("Enter Total Marks: ");
// var tot = obtMarks1+obtMarks2+obtMarks3;
// var per = (tot/TotalMarks)*100;
// if (per >= 80){
//     var grade = "A-one";
//     var remarks = "Excellent";
//     alert("Excellent");
// }
// if(per>=70 && per <80){
//     var grade = "A";
//     var remarks = "Good";
//     alert("Good");

// }
// if(per>=60 && per < 70){
//     var grade = "B";
//     var remarks= "You Need To Improve";
//     alert("You Need To Improve!");
// }
// if(per <60){
//     var grade = "Fail";
//     var remarks = "Sorry";
//     alert("Sorry");
// }

// document.writeln("<h1>Marks Sheet</h1>");
// document.writeln(" ");
// document.writeln("Total Marks: "+TotalMarks+"<br>" );
// document.writeln("Obtained Marks: "+tot+"<br>");
// document.writeln("Percentage: "+per+"% <br>");
// document.writeln("Grade: "+grade+"<br>");
// document.writeln("Remarks: "+remarks+"<br>");



// QUESTION-7

// var SecretNumber = 7;
// var GuessNumber = +prompt("Enter Your Guess Number: ");
// if (GuessNumber===SecretNumber){
//     alert("Bingo! Correct Answer");
// }
// else if(GuessNumber-1 === SecretNumber){
//     alert("Close Enough To The Correct Answer");
// }
// else{
//     alert("Wrong Guess");
// }


// QUESTION-08

// var num = +prompt("Enter Your Number: ");
// if (num%3===0){
//     alert("That Number Is Divisible By 3");
// }
// else{
//     alert("This Number Is not Divisible By 3");
// }

// QUESTION-09

// var num = prompt("Enter Your Number: ");
// if (num%2===0){
//     alert(num+" is Even");
// }
// else{
//     alert(num+" is Odd");
// }


// QUESTION-10 

// var temp = prompt("Enter The Temperature Around You: ");
// if (temp >40){
//     alert("It is Too Hot Outside");
// }
// if (temp >30 && temp< 40){
//     alert("The Weather Today is Normal");
// }
// if (temp >20 && temp < 30){
//     alert("Todays Weather is Cool");
// }
// if (temp >10 && temp<20){
//     alert("OMG! Today's Weather Is So Cool");
// }


// QUESTION-11

// var num1 = +prompt("Enter Your First Number: ");

// var num2 = +prompt("Enter Your Second Number: ");

// var op = prompt("Enter Your Operator: ");

// if(op === "+" ){
//    var res = num1 + num2;
// }
// if(op === "-"){
//    var res =  num1 - num2;
// }
// if(op === "*"){
//    var res =  num1 * num2;
// }
// if(op === "/"){
//    var res =  num1 / num2;
// }
// if(op ==="%"){
//     var res = num1%num2;
// }
// document.write(res);




// -------------------------------Chapter-12-13-------------------------------------------------------------

//  QUESTION-01

// var ch = prompt("Enter Any Character Or Number: ");
//  var dub = ch;
// if (ch== dub.toUpperCase()){
//     alert("Character is uppercase!");
// }
// else if (ch == dub.toLowerCase()){
//     alert("Character is lowerCase!");
// }


// QUESTION-02

// var num1 = +prompt("Enter First Number : ");
// var num2 = +prompt("Enter Second Number : ");

// if(num1>num2){
//     alert(num1+" is greater");
// }
// else if(num1<num2){
//     alert(num2+" is greater");
// }
// else if(num1 === num2){
//     alert("Both Are Equal");
// }

// QUESTION-03

// var num = prompt("Enter Number: ");
// if (num>0){
//     alert("The Number is positive");
// }
// else if(num<0){
//     alert("The number is negative");
// }
// else if (num ==0){
//     alert("The number is zero");
// }

// QUESTION-04

// var ch = prompt("Enter Character: ");
// if (ch.toLowerCase() =="a" || ch.toLowerCase() =="e" || ch.toLowerCase() =="i" || ch.toLowerCase()=="o" || ch.toLowerCase( )=="u" ){
//     alert("It is Vowel!");
// }
// else{
//     alert("It Is Not A Vowel");
// }

// QUESTION-05

// var pass = "pakistan123";
// var user = prompt("Enter Your Password: ");
// if (user == ""){
//     alert("Please enter Your Password!");
// }
// else if(user===pass){
//     alert("Correct!");
// }
// else{
//     alert("Incorrect Password!")
// }

// QUESTION-06

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// QUESTION-07


// ---------------------------------CHAPTER-14-16----------------------------------------------------------


// QUESTION-01

// var StudentNames = [];

// QUESTION-02


// QUESTION-03
// var strArray = ["mango","apple","banana"];

// QUESTION-04
// var intArray = [12,50,2];

// QUESTION-05

// var boolArray = [true, false];

// QUESTION-06

// var mixArray = [1,"three",5,"eight",true];

// QUESTION-07

// var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// document.write("<h1>","1)"+edu[0]+"<br>","2)"+edu[1]+"<br>","3)"+edu[2]+"<br>","4)"+edu[3]+"<br>","5)"+edu[4]+"<br>","6)"+edu[5]+"<br>","7)"+edu[6]+"<br>","8)"+edu[7]+"</h1>");

// QUESTION-08

// var StudentNames = ["Ahmed","Ali","Azan"];
// var StudentMarks = [320,230,480];
// var TotalMarks = 500;
// var per1 = (StudentMarks[0]/TotalMarks)*100;
// var per2 = (StudentMarks[1]/TotalMarks)*100;
// var per3 = (StudentMarks[2]/TotalMarks)*100;

// document.write("<h3>" ,"Score of "+StudentNames[0]+" is "+StudentMarks[0],"</h3>","Percentage is "+per1+"%");
// document.write("<h3>" ,"Score of "+StudentNames[1]+" is "+StudentMarks[1],"</h3>","Percentage is "+per2+"%");
// document.write("<h3>" ,"Score of "+StudentNames[2]+" is "+StudentMarks[2],"</h3>","Percentage is "+per3+"%");

// QUESTION-09

// QUESTION-10

// var score = [320,230,480,120];
// var score1 = score.sort();
// document.write("<h3>Score Of Students: "+score+"</h3>");
// document.write("<h3>Ordered Scores Of Students: "+score.sort()+"</h3>")

// QUESTION-11
 
// var cities =["Karachi","Lahore","Islamabad","peshawar","quetta"];
// var selectedCities = cities.slice(2,4)
// document.write(selectedCities);

// QUESTION-12

// var arr = ["This","is","my","cat"];
// var arr1 = arr.join(" ");
// document.write(arr1);

// QUESTION-13

// var fruits = ["Apple"," mango "," banana"];
// document.write(fruits.shift());
// document.write(fruits);

// QUESTION-14

// var fruits = ["Apple"," mango "," banana"];
// document.write(fruits.pop());
// document.write(fruits.pop());
// document.write(fruits.pop());

// QUESTION-15

