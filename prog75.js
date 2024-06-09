//oops

class Employee{
    //property
    empName
    empDesig
    empLocation
    empsalary
    //constuctor
    constructor(ename,eDesig,empLo,empsal){
        this.empName=ename
        this.empDesig=eDesig
        this.empLocation=empLo
        this.empsalary=empsal
    }
    //methods
    display(){
        console.log(`employee name is ${this.empName}`);
    }
}

//object

const obj=new Employee('neel','developer','kochi',25000)
obj.display()

const obj1=new Employee('max','hr','kochi',30000)
obj1.display()

