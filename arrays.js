//let arr=[1,2,3,,45,5];
//console.log(arr);
//keep adding numbers to the array until zero is added
// do{
//     a=prompt("enter a number");
//     a=Number.parseInt(a);
//     arr.push(a);
// }while(a!=0);

// let num=[1,35,27,60,35,70];
// let num10=num.filter((x)=>{
//     return x%10==0;
// })

// console.log(num10);
// let arr=[1,2,3,4,5];
// let sq=arr.map((n)=>{
//     return n*n;
// })
// console.log(sq);

// // 
// let num=Math.floor(Math.random()*100)+1;
// let guesses=0;
// let score=100;
// while(true){
//     let user=prompt("enter a valid number between 1 and 100");
//     user=Number.parseInt(user);
//     if(isNaN(user)||user<1||user>100){
//         console.log("please enter a valid number beween 1 and 100");
//         continue;
//     }
//     guesses++;
//     if(user==num){
//         score=100-guesses;
//         console.log(`congratulations! you have guesses it irght. the number was ${num}`);
//         console.log(`your score is :${score}`);
//         break;
//     }else if(user>num){
//         console.log("your guess is greater than the actual number");
//     }else{
//         console.log("your guess is smaller than the actual number");
//     }
// }
prompt("test");
