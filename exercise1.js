alert("game connected");
let play=true;
let guesses=0;
let score=100;
while(play){
    let correct=Math.floor(Math.random()*100)+1;
    let guesses=0;
    let score=100;
    while(true) 
    {
    let guess=prompt("enter a number between 1 and 100");
    if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a valid number between 1 and 100!");
            continue;
    }

    guesses++;
    guess=Number(guess);
    if(correct==guess){
        alert("its a win! correct guess");
        alert(`score is ${score-guesses}`);
        break;
    }
    else if(correct>guess){
        alert("the correct number is higher");
    }else{
        alert("the correct number is lower! guess again");
    }}
    play=confirm("want to play again");
}
alert("thanks for playing!");