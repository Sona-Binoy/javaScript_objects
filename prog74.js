accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('total number of accounts');
totalAcc=accounts.length
console.log(totalAcc);

console.log('---------------------------------------------');

//2. print account number whose ac_type is savings
console.log('print account number whose ac_type is savings');
accounts.filter(item=>item.ac_type=='savings').forEach(ele => {console.log(ele.acno)});

console.log('---------------------------------------------');


//3.print the balance of accnount number 1000
console.log('print the balance of accnount number 1000');
balance=accounts.find(item=>item.acno==1000).balance
console.log(balance);

console.log('-----------------------------------------------------');

//4. print all gpay transactions
console.log('print all gpay transactions');
accounts.map(data=>data.transaction).flat().filter(item=>item.mode=='gpay').forEach(trans=>{console.log(trans)})

console.log('-------------------------------------------------------');

//5. print all transaction whose amount > 5000
console.log('print all transaction whose amount > 5000');
accounts.map(item=>item.transaction).flat().filter(itm=>itm.amount>5000).forEach(pro=>console.log(pro))

console.log('------------------------------------------------------');

//6. print credit transaction of account 1002
console.log('print credit transaction of account 1002');
credit=accounts.map(item=>item.transaction).flat().filter(itm=>itm.to==1002)
console.log(credit);
console.log('-----------------------------------------------------------');

//7. print debit transaction of account 1002
console.log('print debit transaction of account 1002');
debit=accounts.find(data=>data.acno==1002).transaction
console.log(debit);

console.log('-------------------------------------------------------');

//8. print transaction history of 1002
console.log('print transaction history of 1002');
history={}
history["credit"]=credit
history["debit"]=debit
console.log(history);

//spread(....)=>to combine two array
/*transHistory=[...credit,...debit]
console.log(transHistory);*/

console.log('--------------------------------------------------------');

//9. print highest balance account details
console.log('print highest balance account details');
highestBalance=accounts.reduce((itm1,itm2)=>itm1.balance>itm2.balance?itm1:itm2)
console.log(highestBalance);