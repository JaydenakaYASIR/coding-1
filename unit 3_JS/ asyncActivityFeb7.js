// 1. In your own words, describe the difference between a "FOR" loop and a "WHILE" loop. 
//Please make sure your response is written in a complete sentence.

//For Loop = is a type of loop that iterates through
// a list.


// While Loop is a statement that runs a block of code as long if the code it true








//2.Describe a situation where you would use a WHILE LOOP in a computer program. Then, attempt to create your example in code.
 
//make a timer that countsdown from 60

function timer(){
    var interval = 60
    while (interval > 0){
        console.log('countdown' + interval)
        interval -=1
        }
}
// timer()





//3.You have been hired by temple university to work on a graduation checker program. your program should be able to find the highest grade in a list.
//Create a function that will loop through each number in the list and identify if it is the highest number.
// When your program finds the highest grade, it should return a message telling the user what the highest grade is.




let gradeList = [80,70,74,68,93,92]



let x = 0
for (x; x<gradeList.length; x+=1){
    if (gradeList[x] < 75){
        gradeList[x] + 5;
    }
    console.log(gradeList[x]) 
}