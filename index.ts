#! env/usr/bin - node
class School {
    name!: string;
    students: Student[] = [];
    teachers: Teacher[] = [];

    addStudent(stdObj: Student){
        this.students.push(stdObj)
    }
    addTeacher(teObj:Teacher){
        this.teachers.push(teObj)
    } 

    constructor(name:String){

    }
}

class Student {
    name!: string;
    rollNumber:number;
    SchoolName:string;

    constructor(name:string, rollNumber:number, schoolName:string){
    this.name=name;
    this.rollNumber=rollNumber;
    this.SchoolName = schoolName
    }

}

class Teacher extends Student{}
    //school name
    let school1 = new School("Shaheen Public School");
    let school2 = new School("Metropolitian School");
    let school3 = new School("Beacon House School");

    //student name
    let s1 = new Student("Soomro", 12345, school1.name!)
    let s2 = new Student("ali", 12345, school1.name!)
    let s3 = new Student("umer", 12345, school1.name!)

//Teacher

let t1 = new Teacher("arfaa", 34, school1.name!)
let t2 = new Teacher("sana", 34, school1.name!)
let t3 = new Teacher("areeba", 34, school1.name!)


// 
school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)

//teacher
school1.addTeacher(t1)
school2.addTeacher(t2)
school3.addTeacher(t3)

console.log(t1)
console.log(t2)
console.log(t3)

console.log(school1)
console.log(school2)
console.log(school3)

















