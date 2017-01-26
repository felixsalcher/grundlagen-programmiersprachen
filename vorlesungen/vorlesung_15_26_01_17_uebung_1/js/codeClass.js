class LV {
    constructor(name, teacher, grade) {
        let _name = "";
        let _teacher = "";
        let _grade = 0;

        this.setName = function (name) {
            _name = name;
        };

        this.getName = function () {
            return _name;
        };

        this.setTeacher = function (teacher) {
            _teacher = teacher;
        };

        this.getTeacher = function () {
            return _teacher;
        };

        this.setGrade = function (grade) {
            _grade = grade;
        };

        this.getGrade = function () {
            return _grade;
        };

        this.setName(name);
        this.setTeacher(teacher);
        this.setGrade(grade);
    };

    printDescription() {
        return this.getName() + ", " + this.getTeacher() + ", Note: " + this.getGrade();
    };
}