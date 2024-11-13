//Functions
//The JavaScript function is a block of code designed to perform a paticular task and is executed when "something"call it.
function sayMyName(name){
    console.log(name)
    
}
sayMyName("Aryan")
//Function arguments are the values received by the function when its is called,they behave as variables,however they only live within the function and cannot be accessed outside

function greeting(name){
    console.log('hi ' +name+ ' ,Nice to meet you')
}
greeting('Mannat')
//Template literals provide an easy way to interpolate variables and expressions into a string
// Interplotion is an efficient way to concatenation
function greeting2(name){
    greet=`hi ${name} ,nice to meet you`
    console.log(greet)
}
greeting2("Mannat")

//The return statement stops the execution of a function and return a value


function sum(a,b){
    return a+b
    console.log("done")
}
let x=10
let y=20
console.log(sum(x,y))

//tip calculater
function calculateFoodTotal(food,tip){
   const tipPercentage=tip/100
    const tipAmount=food*tipPercentage
    const total=sum(food,tipAmount)
    return total
}
console.log(calculateFoodTotal(100,10))

//Arrow function allow us to write shorter function syntax
//IMPORTANT : For impiciy return,remove squigglies
const sumArrow=(a,b)=> a+b
console.log(sumArrow(23,43))


//exercies
const subArrow=(a,b)=> a-b
console.log(subArrow(23,45))

const divArrow=(a,b)=> a/b
console.log(divArrow(6,3))

const multiArrow=(a,b)=> a*b
console.log(multiArrow(88,4))

//random fruit
const randomFruit=(fruits)=>{
   const randomNumber=Math.floor( Math.random()*fruits.length)
    return fruits[randomNumber]

}
let fruits=['banna','apple','orange','papaya']
console.log(randomFruit(fruits))

const weatherScorer=(weather,weather2)=>{
    let scorer
    if(weather==='rainy'&& weather2==='overcast'){
        scorer=2
    }else if(weather==='sunny'){
        scorer=-1
    }else{
        scorer=0
    }
    return scorer
}
console.log(weatherScorer('rainy','overcast'))