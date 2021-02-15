const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],



    //1 
    findPerson: function (type, idNum) {
        let temp = this[type];
        if (type === 'students' || type === 'teachers') {
            return temp.find(stud => stud.id === idNum);
        }
    },

    assignStudent(id, subject) {
        const student = this.findPerson('students', id);
        const teacher = this.teachers.find((teacher) =>
            teacher.subjects.includes(subject)
        );
        if (teacher && teacher.capacityLeft) {
            teacher.students.push(student);
            teacher.capacityLeft -= 1;
        } else {
            console.log('Sorry, no available teachers left');
        }
    },

    assignTeachersSubject(teacherId, newSub) {
        const tempTecher = this.findPerson('teachers', teacherId);
        if (!tempTecher.subjects.find(el => el === newSub)) {
            tempTecher.subjects.push(newSub);
        }
    },

    assignNewStudent(id, name, age) {
        this.student.push({ id, name, age, });
    }
}


console.log(school.findPerson('teachers', 2));

school.assignStudent(12, 'biology');
console.log(school);

school.assignTeachersSubject(1, 'js');
console.log(school);

school.assignNewStudent(21917984, 'Moti', 34);