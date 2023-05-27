const car = {

    name: "Fairt",
    model: 500,
    weight: "850kg",
    color: "white",

    start: function () {
        console.log("car has started");
    },
    drive: function () {
        console.log("car has driving");
    },

    breck: function(){
        console.log("car has breck");
    },
};

console.log(car.weight);
console.log(car.model);
console.log(car.color);
car.start();
car.drive();
car.breck();

document.getElementById("demo").innerHTML = "The car type is " + car.type;

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  document.getElementById("demo1").innerHTML = person.fullName();