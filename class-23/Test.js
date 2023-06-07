const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.write(fruits);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
document.write(fruit);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return b - a;
});
document.write(points);
console.log(points);

const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){
    return a - b;
});
document.write(point);
console.log(point);

const Points = [40, 100, 1, 5, 25, 10];
Points.sort(function(){
    return 0.5 - Math.random();
});
document.write(Points);
console.log(Points);

// function MyArrayMax (arr) {
//     return Math.max.apply(null [10, 29, 39, 39, 50, 100]);
// };
// document.write(MyArrayMax);

// MyArrayMax();

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  document.getElementById("demo").innerHTML =
  cars[0].type + " " + cars[0].year + "<br>" +
  cars[1].type + " " + cars[1].year + "<br>" +
  cars[2].type + " " + cars[2].year;

 cars.sort(function(a, b){
    return a.year - b.year;
 });


