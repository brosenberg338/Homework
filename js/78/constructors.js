(function () {
    'use strict';


    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`vehicle is driving ${this.speed}`);
    };
    Vehicle.prototype.print = function () {
        console.log(`${this.color} vehicle is traveling ${this.speed}`);
    };


    let car = new Vehicle('yellow');
    car.go(60);
    car.print();


    function Plane(color) {

        this.color = color;
    }
    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`vehicle is flying ${this.speed}`);





    };
    let plane1 = new Plane("blue");
    plane1.go(70);
    plane1.print();



}());



