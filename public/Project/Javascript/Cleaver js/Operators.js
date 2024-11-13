//Operators
//Operators are used to assign values,compare values,perform arithmetic operation,Basically,stuff you see in math class...(+,-,=,*,/etc.)
//Prompt()is a built-in javascript functionality that helps you get input from a user through the browser.
food=Number(prompt("how much was the food?"))
tipPercentage=Number(prompt("tip%?")/100)
tipAmount=food*tipPercentage
total=food+tipAmount
console.log("Tip Amount:",tipAmount)
console.log("Total:",total)

//JavaScript variable can hold different data types:number,string,objectand more.

//In this case, we handled number as text which caused this weird outcome.More on this later
