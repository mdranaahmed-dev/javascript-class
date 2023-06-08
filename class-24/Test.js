const Numbers = [45, 4, 9, 16, 25];

function MyFunction (value, index,array ) {
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-----------");
};

Numbers.forEach(MyFunction);

const numbers = [45, 4, 9, 16, 25];
function count (value) {
    return value * 2;
};

const NewNumbers = numbers.map(count);
console.log(NewNumbers);
document.write(numbers + "<br>");
document.write(NewNumbers  + "<br>");

const filter = [45, 4, 9, 16, 25];

function MyFilter (value, index,array) {
    return value > 10;
};

const Newfilter = filter.filter(MyFilter);

document.write(filter + "<br>");
document.write(Newfilter);

console.log(filter);
console.log(Newfilter);

const redus = [45, 4, 9, 16, 25];

function MyRrdus (total,value, index,array) {
    console.log(total);
    console.log("------------");
    return total + value;
};

const Newredus = redus.reduce(MyRrdus);
document.write(redus + "<br>");
document.write(Newredus + "<br>");
console.log(redus);
console.log(Newredus);

 

