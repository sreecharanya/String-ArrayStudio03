let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray=food.split(",").sort();
let equipmentArray=equipment.split(",").sort();
let petsArray=pets.split(",").sort();
let sleepAidsArray=sleepAids.split(",").sort();



//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold=[];
cargoHold.push( foodArray,equipmentArray,petsArray,sleepAidsArray);
console.log(cargoHold)


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input=require('readline-sync')
let user =input.question("Select a Cabinet(0-3):")
while(user<0||user>3)
{
  user=input.question("Invalid Selection.Select a Cabinet(0-3):")
}

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(user==0){
  console.log(`You selected cabinet0`,cargoHold[0])
}else if(user==1){
  console.log(`You selected cabinet1`,cargoHold[1])
}else if(user==2){
  console.log(`You selected cabinet2`,cargoHold[2])
}else if(user==3){
  console.log(`You selected cabinet2`,cargoHold[3])
}else{
  console.log("Invalid Selection")
}
//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let favitem =input.question("Enter your item to check:")
if(cargoHold[user].includes(favitem))
{
  console.log(`Cabinet DOES contain ${favitem}.`)
}else{
  console.log(`Cabinet DOES NOT contain ${favitem}.`)
}