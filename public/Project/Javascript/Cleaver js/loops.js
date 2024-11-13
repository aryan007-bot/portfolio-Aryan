//loops
const fruits=['banan','apple','orange','papaya']
for(const fruit of fruits){
    console.log(fruit)
}
//double the number
const numbers=[1,3,45,6,6,2]
let result=[]
for(const number of numbers){   
    result.push(number*2)
}
console.log(result)

//double by function
const double=(numbers)=>{
    let result=[]
    for(const number of numbers){
        result.push(number*2)
    }
    return result
}
console.log(double([1,2,3,4,5,6]))

//Square by function
const squ=(numbers)=>{
    let result=[]
    for(const number of numbers){
        result.push(number**2)
    }
    return result
}
console.log(squ([1,2,3,4,56,7]))

