//Anatomy of function

// curly brackets = this is
// called a parameter. we pass  data
// inside of the functions parameters

// parameter = placeholder for data 

// data = just means data types

function pizzaParty(name,topping){
console.log('congrats' + name + "you have been invited to the pizza party")
console.log("Your custom pizza will have " + topping + "on it")
}

pizzaParty('Mike','veggies')


 // Condtional Statements in JS

 // Conditional statements are written using 
 // the 'IF' and 'ELSE' keywords. This allows
 // use to make decisions based on data 
 // our function recieves.

 function pizzaPartyInvitation(name){
let guest = 'Mike' 
if (name != guest ){
    console.log("this name is not on the list");
} else{
    console.log ("welcome to the party")
}
}
pizzaPartyInvitation('Yasir')