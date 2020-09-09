let userName = 'Fred';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = 'Can you answer my question?';
console.log(`The user asked: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
   case 0:
    eightBall = 'As I see it, yes'
    break;
  case 1:
    eightBall = 'Ask again later'
    break;
  case 2:
    eightBall = 'Better not tell you now'
    break;
  case 3:
   eightBall = 'Cannot predict now'
    break;
  case 4:
    eightBall = 'Do not count on it'
    break;
  case 5:
    eightBall = 'My sources say no'
    break;
  case 6:
    eightBall = 'Reply hazy, try again'
    break;
  case 7:
    eightBall = 'Signs point to yes'
    break;
}

console.log(eightBall);