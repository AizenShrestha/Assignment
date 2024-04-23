//Q1 create two constants, add them assign to a new constants
const a=10
const b=20
const c=a+b
console.log(c)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'

console.log(a===b)

// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"
const a = Math.random()*6
const b = Math.floor(a)
console.log(b)
if(b<3)
  {
    console.log(b +" is less than 3")
  }
else if(b===3)
  {
    console.log(b + " is equals to 3")
  }
else
  {
    console.log(b + " is greater than 3")
  }