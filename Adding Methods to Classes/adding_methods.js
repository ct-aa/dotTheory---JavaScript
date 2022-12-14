class Student {
	constructor(gpa) {
		this.gpa = gpa;
	}

	stringGPA() {
		return `${this.gpa}`;
	};
}

const student = new Student(3.9);
