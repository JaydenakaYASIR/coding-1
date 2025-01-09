function reveseWorld(word){
    var originalStr = "word";
    var reversedStr = "";

    for ( i = 0; i < originalStr.length; i++ ){
        reversedStr = originalStr.charAt(i) + reversedStr;
    }
    console.log ("Reversed string:"+ reversedStr)
}

reveseWorld('Yasir Headen')

const word = "Banana"
const newWord = word.split("")
const reveseWorld= newWord.reverse()
console.log(reveseWorld)