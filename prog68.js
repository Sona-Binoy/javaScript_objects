var car={
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10lack'
}

//print model and manufacturer of the car

console.log(`model is ${car['model']} and maufacturer is ${car['manufacturer']}`);

//add varient key to the car object with value as mauel

car['varient']=['manual']
console.log(car);

//add  a new value 'automatic' to the  key varient

car.varient.push('automatic')
console.log(car);

//add new key color and add values red,blue and white

car['color']=['red','blue','white']
console.log(car);

//or
// car['color']=['red']
// car.color.push('blue','white')
// console.log(car);