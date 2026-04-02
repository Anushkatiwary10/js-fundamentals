// let marks={
//     harry:90,
//     shubham:9,
//     lovish:56,
//     monika:4
// }
// //problem 1
// for(let i=0;i<Object.keys(marks).length;i++){

//const { use } = require("react");

//    // console.log("the marks of "+ Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
// }

// //problem 2
// for(let i in marks){
//    // console.log("The marks of "+i+" are "+marks[i]);
// }

// let cn=4;
// //let i=prompt("Enter a number");
// //while(i!=cn){
//     //i=prompt("Enter a number");
// //

// const mean=(a,b,c,d)=>{
//    return(a+b+c+d)/4;
// }

// //console.log(mean(1,2,3,4));
// let name="hello";
// //console.log(name[0]);
// //console.log(name[1]);
// //console.log(name.length);

// //template literals
// let boy1="pramod";
// let boy2="nikhil";
// //nikhil is a friend of pramod
// let sentence=`${boy1} is a friend of ${boy2}`;
// //console.log(sentence);

// //escape seuqence characters
// let fruit='ban\'ana';
// //console.log(fruit);

// //console.log("harr\"".length);
// let text="hello anushka";
// //console.log(text.includes("anushka"));
// //console.log(text.includes("Anu"));
// //console.log(text.startsWith("anushka"));
// //console.log(text.startsWith("hello"));
// //console.log(text.endsWith("anushka"));
// //console.log(text.endsWith("hello"));
// //console.log(text.toLowerCase());

// //let amt="please give rs 1000";
// //let amount=amt.slice("please give rs".length);
// //console.log(amount);
// //let marks12=[90,92,492,42];
// //for(let i=0;i<marks12.length;i++){
//    // console.log(marks12[i]);
// //}
// let compare=(a,b)=>{
//     return a-b;//sorts in ascending order
// }
// //let num=[1,22,32,53,63,324,8,95,4];
// //num.sort(compare);
// //console.log(num);
// //num.reverse();
// //console.log(num);
// //num.splice(2,3,473,643,64335);
// //console.log(num);

// let num=[1,2,3,4,5];
// num.forEach((j) => {
//    // console.log(j*j);
// })//to find squares of each element using foreach loop 


// //for-of loop
// for(let i of num){
//    // console.log(i);
// }

// //for-in loop
// for(let item in num){
//    // console.log(num[item]);
// }
// //map method
// let a=num.map((value)=>{
//     return value+2;
// })
// //console.log(a);
// //filter method
// let a2=num.filter((a)=>{
//     return a>2;
// })
// //console.log(a2);
// let n1=num.reduce((b,c)=>{
//     return b+c;
// })
// //console.log(n1);
//snake,water and gun game
alert("connected");
let play=true;
while(play){
   let userChoice=prompt("enter your choice between snake,water and gun");
   if (userChoice === null) {
    alert("Game cancelled");
    break; // exit the loop
}
   userChoice=userChoice.toLowerCase().trim();
   let choices=["snake","water","gun"];
   let randomIndex=Math.floor(Math.random()*choices.length);
   let compChoice=choices[randomIndex];
   alert("Computer chose: " + compChoice);
   while(userChoice!=="snake" && userChoice!=="water" && userChoice!=="gun"){
      userChoice=prompt("please enter your choice again");
      if (userChoice === null) {
        alert("Game cancelled");
        break; // exit the loop
}
      userChoice=userChoice.toLowerCase().trim();
   }
   if(compChoice===userChoice){
     alert("its a tie");

   }
   else if(compChoice==="snake"){
      if(userChoice==="water"){
         alert("loss");

      }else{
         alert("win");

      }
   }
   else if(compChoice==="water"){
      if(userChoice==="snake"){
         alert("win");

      }else{
         alert("loss");
    
      }
   }
   else if(compChoice==="gun"){
      if(userChoice==="snake"){
         alert("loss");
      
      }else{
         alert("win");
            
      }
   }
   play=confirm("do you want to play again");

}
