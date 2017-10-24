class Student {
    constructor(_name, _courseOfStudy) {
        this.name = _name;
        this.courseOfStudy = _courseOfStudy;
    }

    getName() {
        return this.name;
    }

    getCourseOfStudy() {
        return this.courseOfStudy;
    }

    /**
     * Abstracted method. 
     * Must be implemented by the subclass or will throw error when called
     */
    writeExam() {
        throw new Error('You have to implement the method to writeExam!');
    }

}

class Undergraduate extends Student {
    constructor(_name, _courseOfStudy) {
        super(_name, _courseOfStudy);
    }

    writeExam() { // Implements writeExam() defined in parent class - Abstraction
        return "My name is " + this.name + ". My course of study is '" + this.courseofStudy + "' and I am writing my exam.";
    }
}

class Postgraduate extends Student {
    constructor(_name, _courseOfStudy) {
        super(_name, _courseOfStudy);
    }

    getCourseOfStudy() { // Overrides method defined in parent class
        return "My course of study is '" + this.courseOfStudy + "'.";
    }
}



let undergrad = new Undergraduate('Adekunbi', 'Javascript');
console.log(undergrad.getName()); // Will print "Adekunbi" - Inherited Method
console.log(undergrad.getCourseOfStudy()); // Will print "Javascript" - Inherited Method
console.log(undergrad.writeExam()); // Will print "My name is Adekunbi. My course of study is 'Javascript' and I am writing my exam."


let postgrad = new Postgraduate('Adeyinka', 'Pivotal');
console.log(postgrad.getName()); // Will print "Adekunbi" - Inherited Method
console.log(postgrad.getCourseOfStudy()); // Will print "My course of study is 'Pivotal'." - Method Overriden in Postgraduate class (Polymorphism)
console.log(postgrad.writeExam()); // Will throw an error because Postgraduate did not implemented the abstracted method "writeExam"