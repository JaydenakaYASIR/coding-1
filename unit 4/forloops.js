//For Loop = is a type of loop that iterates through
// a list.
// A list has a finite loop;

groceryList = ['apple','mango','water','cereal','beef']
let i =0
for ( i; i < groceryList.length; i+=1){
    console.log("this is a" + groceryList[i])
}


let gradeBooklist = [80,70,74,68,93,92]
let x = 0
for (x; x<gradeBooklist.length; x+=1){
    if (gradeBooklist[x] < 75){
        gradeBooklist[x] + 5;
    }
    console.log(gradeBooklist[x])
    //console.log(gradeBooklist[x]);

}