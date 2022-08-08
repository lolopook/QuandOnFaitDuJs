
function multTwo(a,b){
    let result = a * b;
    console.log(result); 
}

multTwo(3,2); // => 6
multTwo(5,3); // => 15
multTwo(1,25); // => 25

function isAcceptablePassword(password) {
    if (password.length <= 6) {
        console.log("Le mot de passe " + password + " est trop cour");
    }
}

isAcceptablePassword('short'); // => false
isAcceptablePassword('muchlonger'); // => true
isAcceptablePassword('ashort'); // => false

function firstWord(text){
    let firstWord = text.split(" ");
    // console.log(firstWord);
    // The String.split method splits a string into an array, based on a provided separator.
    console.log(firstWord[0]);
    // The Array.shift method removes and returns the first element from an array.
    console.log(firstWord.shift());
}

firstWord('Hello world'); // => "Hello"
firstWord('a word'); // => 'a'
firstWord('hi'); // => 'hi'

function easyUnpack(array){
	let select = [];
    select.push(array[0]);
    select.push(array[2]);
    let last = ((array.length) - 2);
    select.push(array[last])
    console.log(select);
}

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) // => [1, 3, 7]
easyUnpack([1, 1, 1, 1]) // => [1, 1, 1]
easyUnpack([6, 3, 7]) // => [6, 7, 3]