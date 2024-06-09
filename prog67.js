//accessing key from an object

//in method
employee={
    id:1000,
    name:'Neel',
    age:30,
    designation:'developer'
}
for(let key in employee)
{
    console.log(key);
}

//w.a.p to check whether 'emplocation' key is present in the given object

if('emplocation' in employee)
{
    console.log('present');
}
else{
    console.log('not present');
}
//or
console.log(`emplocation key is ${'emplocation ' in employee? 'present':'not present'}`);

//how to add a key:value pair into an object
//objectname["key"]=value

//add experience to the employee object

employee["experience"]=3
console.log(employee);

//check gender key in the given object if present 'yes' else add gender key to the given object
if('gender' in employee)
{
    console.log('yes');
}
else
{
    employee['gender']="male"
    console.log(employee);
}

//or

'gender' in employee? console.log('yes'):(employee['gender']="male",console.log(employee))

//update a value in object

employee.age+=5
console.log(employee);

//delete a key from an object

//delete method-return boolean value
delete employee.age
console.log(employee);

//hw-student object-get,add,update,delete