products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only


console.log('print product name only');
// for(item of products)
// {
//     console.log(item.pName);
// }
products.forEach(pro => {console.log(pro.pName);});
console.log('------------------------------------------');

//2. print all mobile details whose display is lcd
console.log('all mobile details whose display is lcd');
// 
products.filter(pro=>pro.display=='lcd').forEach(itm=>console.log(itm))
console.log('-----------------------------------------');

//3. print 5g mobile phone name
console.log('print 5g mobile phone name');
// for(item of products)
// {
//     if(item.band=='5g')
//     {
//         console.log(item.pName);
//     }
// }
products.filter(itm=>itm.band=='5g').forEach(pro=>console.log(pro.pName))
console.log('-----------------------------------------');

//4. sort mobile based on price
console.log('sort mobile based on price');
products.sort((itm1,itm2)=>itm1.price-itm2.price).forEach(pro=>console.log(pro.pName))
console.log('---------------------------------------');

//5. print costly mobile
console.log('print costly mobile');
costlypro=products.reduce((itm1,itm2)=>itm1.price>itm2.price?itm1:itm2)
console.log(costlypro.pName);
console.log('-------------------------------------------');
//6. print low cost mobile
console.log('low cost mobile');
lowcost=products.reduce((itm1,itm2)=>itm1.price<itm2.price?itm1:itm2)
console.log(lowcost.pName);
