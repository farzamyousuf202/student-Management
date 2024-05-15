#! env/usr/bin - node
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
    }
    School.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (teObj) {
        this.teachers.push(teObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, rollNumber, schoolName) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.SchoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
//school name
var school1 = new School("Shaheen Public School");
var school2 = new School("Metropolitian School");
var school3 = new School("Beacon House School");
//student name
var s1 = new Student("Soomro", 12345, school1.name);
var s2 = new Student("ali", 12345, school1.name);
var s3 = new Student("umer", 12345, school1.name);
//Teacher
var t1 = new Teacher("arfaa", 34, school1.name);
var t2 = new Teacher("sana", 34, school1.name);
var t3 = new Teacher("areeba", 34, school1.name);
// 
school1.addStudent(s1);
school1.addStudent(s2);
school1.addStudent(s3);
//teacher
school1.addTeacher(t1);
school1.addTeacher(t2);
school1.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(school1);
console.log(school2);
console.log(school3);
