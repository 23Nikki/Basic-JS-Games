let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age=40;
if( age > 18 && registeredEarly ){
   raceNumber += 1000;
}

if( age > 18 && registeredEarly ){
  console.log(`You will race at 9:30am, your race number is: ${raceNumber}.`);
} else if( age>18 && !registeredEarly){
  console.log(`You will race at 11:00am, your race number is: ${raceNumber}`);
} else if( age < 18 ){
  console.log(`you will race at 12:00pm, your race number is: ${raceNumber}`);
} else {
  console.log('Please approach the registration desk');
}
