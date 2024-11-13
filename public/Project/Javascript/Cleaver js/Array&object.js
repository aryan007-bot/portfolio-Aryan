const howManyLetter=(phrase)=>{
    
    let result=0;
    for (const index in phrase){
        console.log(Number(index)+1)
        result=Number(index)+1
    }
    return {result}
        
}
const phrase=prompt("Write your phrase")
console.log(howManyLetter(phrase))

//using string.length
const howManyLetter1=(phrase)=>{
    return{result:phrase.length}
}
const phrase1=prompt("write a phrase")
console.log(howManyLetter1(phrase1))

// Create a function that adds all the numbers in the array
const sumArray=(numbers)=>{
    let result=0;
    for(const number of numbers){
        console.log(number)
        result=result+number
    }
    return{result}
}
// num=[1,2,3,4,5,5,6]
// console.log(sumArray(num))

//Sum up all number in array
const max=(numbers)=>{
    let result1=numbers[0]
    for(let number of numbers){
        if(number>result1){
            result1=number
        }

    }
    return result1
}
console.log(max([1,2,4,5,6,718]))

//calaculate frequency
const letterFrequency=(phrase)=>{
    //letterFrequency('hahahahah')={'h:5,a:4}
    console.log(phrase)
    //make a frequency object {}
    let frequency={}
    for(const letter of phrase){
        //check if letter exist in frequency
        if(letter in frequency){
            //increment the value by+1
            frequency[letter]=frequency[letter]+1  
            //otherwise set the value to 1  
            
        }else{
            frequency[letter]=1
        }
    }
    return frequency

}
console.log(letterFrequency('hahahhahahah'))
//Word frequency 
const wordFrequency=(phrase)=>{
    let frequency={}
    console.log(phrase)
    words=phrase.split(' ')
    for(const word of words){
        if(word in frequency){
            frequency[word]+=1            
        }else{
            frequency[word]=1
        }
    }
    return frequency

}
console.log(wordFrequency('lol what lol is going on there on'))
//shortest way
const wordFrequency1=(phrase)=>{
    const words=phrase.split(' ')
    return letterFrequency(words)
}
const userInput=prompt('Write your search')
console.log(wordFrequency(userInput))

//Write a function that takes a paramerter (hours)and coverts it to seconds
const howMannySecond=(hours)=>{
   
    
    return hours*3600;
}
console.log(howMannySecond(24))


//higher order function 
//map=loops and return an array
//filter=loops anf retrun an array with matching condition
//reduce

//map
const doubleMap=(numbers)=>{
    return numbers.map(number=>number*2)
}
console.log(doubleMap([1,2,3,4,5]))

//filter
const filter=(numbers,greaterThan)=>{
    return numbers.filter(number=>number>greaterThan)
}
console.log(filter([1,2,3,4,5,6],3))

//rish people
const actors=[
    {name:"johnny",networth:200000},
    {name:'amber', networth:10},
    {name:'matt', networth:137799090},
    {name:'amber',networth:3000000},
    {name:'amber',networth:10}    
]
// let result2=actors.filter(actor=>actor.networth>10)
// console.log(result2)

let result1=actors.reduce((a,b)=>a+b.networth,0)
console.log(result1)


const num1=[1,2,3,4,5,6,7,8]
const result=num1.reduce((prev,curr)=> prev*curr)
console.log(result)

// Write a function that takes in an array and sort the numbers inside from least to greatest
num1=[1,2,3,4,5,7,6]
const result10=num1.sort((a,b)=>a-b)
console.log(result)


//Create a function that takes the month and year (as integers) and returns the number of DAYS in that month


const daysInMonth = (month,year) => {
    return new Date(year,month,0).getDate();
    

}
console.log(daysInMonth(1,2024))//jan month 31 days
console.log(daysInMonth(2,2024))//feb
console.log(daysInMonth(3,2024))//march

//Write a function that takes in an array of numbers and returns the largest number

function findMax (array1) {
    let result=0;
    for(let number of array1 ){
        if(array1[number]>result){
            result=array1[number]
        }
    }
    return result
  
}
num1=[1,2,3,4,4,5]
console.log(findMax(num1))
//or
function findMax1(array){
    array.sort((a,b)=>a-b)
    return array[array.length-1]
}
console.log(findMax1([1,2,3,4,4,5,5,]))


// Write a function that takes in string and checks if it is a Palindrome
function isPalindrome(str){
    let len = str.length;
    for(let letter in str){
        if(str[letter]!==str[len-1-letter]){
            return false
        }else{
            return true
        }
    }
}
console.log(isPalindrome("lol whats that lol"))


