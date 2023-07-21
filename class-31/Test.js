function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(getRandomNumber(1, 6));

const student  = ["Akash", "Niloy","Rana","Abir", "Mihad", "Shahabuddin",];
console.log(student.sort());

const roll_number = [4,2,1,6,8,40,30,22,9];

console.log(roll_number.sort(function(a, b){
    return a-b;
}));

console.log(roll_number.sort(function(a, b){
    return b-a;
}));

function isLepiYear (year) {
    if((year % 400 === 0) || ((year % 4 === 0 )&&(year % 100 !== 0 ))) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
isLepiYear(2028);

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel (sentence) {
    let count = 0;

    const letters = Array.from(sentence);
    letters.forEach(function(valu){
        if(vowels.includes(valu)){
            count++;
        }
    });

    return count;
}

console.log(countVowel("I Love Bangladesh"));

const number = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

const duplicat = number.filter(function(valu, index, array){
  return array.indexOf(valu) === index 
})

console.log(duplicat);