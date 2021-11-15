(function () {
    'use strict';
    class Vehicle {
        constructor(color) {
            this.color = color;
        }
        go(speed) {
            this.speed = speed;
            console.log(`vehicle is driving ${this.speed}`);
        }
        print() {
            console.log(`${this.color} vehicle is traveling ${this.speed}`);
        }
    }


    let car = new Vehicle('yellow');
    car.go(60);
    car.print();


    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`vehicle is flying ${this.speed}`);
        }
    }
    let plane1 = new Plane("blue");
    plane1.go(70);
    plane1.print();



}());
