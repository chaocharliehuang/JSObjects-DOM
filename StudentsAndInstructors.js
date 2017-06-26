var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
];

function printFullName(studentArr) {
    students.forEach(function(student) {
        console.log(student.first_name + " " + student.last_name);
    });
}

printFullName(students);

var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}

function printStudentsAndInstructors(userObj) {
    Object.keys(userObj).forEach(function(user) {
        console.log(user);
        var num = 1;
        userObj[user].forEach(function(student) {
            console.log(num + " - " + student.first_name + " " + student.last_name + 
                " - " + (student.first_name.length + student.last_name.length));
            num++;
        });
    });
}

printStudentsAndInstructors(users);