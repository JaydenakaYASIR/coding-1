// 2 sophmore
// 3 junior

// 5 ~ 6  master
// 7 or more - doctorATE

function collegeTitleByYear(year){
 if(year == 1){
   console.log("You are a freshman.");
} else if (year == 2){
    console.log("You are a sophmore.");
 } else if (year == 3){
    console.log("You are a junior.");
 } else if (year == 4){
    console.log("You are a senior.");
 } else if (year == 5 || year == 6) {
    console.log("You are in a masters program.);
 }

 } else {
    console.log("Error. data not accepted.")
  }
}


collegeTitleByYear(7);


// A JS list is  data type that use group to one varriable
var groceryList = ['water','apple','ground beef','oranges']
var  RandomData = [' Yasir', 202020,
   202.323,
   'coding class',
   true,
   false,
groceryList
]

console.log(RandomData)

coding1s=['black cw', 'green cw', 'white cw']
coding2s=[ 'red cw', 'blue cw']
codings3s=[]

console.log("These are the coding sneakers we have in stock.")
console.log(coding1s,coding2s,codings3s,)