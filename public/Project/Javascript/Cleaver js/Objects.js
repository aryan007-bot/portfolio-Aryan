//Objects
//Objects are the type of variable,quite similar to arrays but they have something called key-value pair
const person={
    name:'Aryan',
    shirt:'white'
}
//dot notation
console.log(person.shirt)
//baracket notation
console.log(person['name'])

//assign object
person.phone='9213960958'
console.log(person)

const person1={
    name:"Qazi",
    shirt:"black",
    phoneNo:"9213228436"
}
console.log(person1.name)
console.log(person1['shirt'])


//Method is a property conataining a function definition
const introducer =(name,shirt)=>{
    const person2={
        name:name,
        shirt:shirt, 
        assests:100000,
        liabilities:5000,
        networth:function(){
            return this.assests-this.liabilities
        }
    }

    const intro=`hi, my name is ${person2.name} and the colour of my shirt is ${person2.shirt} and my net worth is ${person2.networth()}`
    return intro
}
console.log(introducer('Aryan','White'))