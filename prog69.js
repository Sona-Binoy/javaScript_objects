//hw-student object-get,add,update,delete

student={
    id:24,
    name:'Anu',
    department:'CSE',
    age:20
}

//get name of student
console.log('name of student is ',student['name']);

//add sem

student["sem"]=8
console.log(student);

//update  age
student['age']+=2
console.log(student);

//delete id

delete student.id
console.log(student);