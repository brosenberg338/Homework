(function () {

    'use strict';

    function Student(firstName, lastName, age, grade) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.grade = grade;

    }

    let studentArray =
        [new Student("Lester", "Thomas", 72, 79),
        new Student("Ari", "Kohn", 38, 99),
        new Student("Chaim", "Landau", 43, 94),
        new Student("Mario", "Hernandez", 36, 94)
        ];

    for (let x = 0; x < studentArray.length; x++) {
        console.log(studentArray[x].age);
    }


    function printStudents(nameChoice, ...students) {
        for (let i = 0; i < students.length; i++) {
            if (nameChoice === "firstName") {
                console.log(students[i].firstName);

            }
            else if (nameChoice === "lastName") {
                console.log(students[i].lastName);

            }


        }
    }
    printStudents("lastName", studentArray[0]);
    console.log(studentArray[0].firstName);
    printStudents("firstName", ...studentArray);




})();




