class Student{
    // studentName
    // studentId
    // studentAge
    // studentSem

    constructor(sname,sid,sage,sem){  //constructor will call automatically 
        this.studentName=sname
        this.studentId=sid
        this.studentAge=sage
        this.studentSem=sem
        this.display()
    }

    display(){
        console.log(`${this.studentName} is in ${this.studentSem} sem`);
    }
}

const student1=new Student('Athira',1001,20,7)
// student1.display()

const student2=new Student('Asha',1002,21,8)
// student2.display()