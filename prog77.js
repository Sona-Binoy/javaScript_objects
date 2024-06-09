//write methods for solving the given questions

class Bank{

    //property
    accountDetails={
        1000:{accno:1000,username:'userone',password:'userone',balance:50000},
        1001:{accno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{accno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{accno:1003,username:'userfour',password:'userfour',balance:6000},
    }

    // validate a given account number

    validate(accno){
        //arguments-data from outside needed to excute a task
        return accno in this.accountDetails?true:false
    }
    //authenticate the given account

    authenticate(accno,pswd){
        if(this.validate(accno)){
           if(this.accountDetails[accno].password==pswd){
            console.log('Authentication successfull');
           }
        }
        else{
            console.log('Invalid account');
        }
    }
    //check the balance
    balance(accno,pswd)
    {
        if(this.validate(accno))
        {
            if(this.accountDetails[accno].password==pswd)
            {
                console.log(`current balance of ${accno} is :${this.accountDetails[accno].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid account number');
        }
    }
    //fund transfer
    fundTransfer(fromAcc,ToAcc,fpswd,amount){
        if(this.validate(fromAcc) && this.validate(ToAcc))
        {
            if(this.accountDetails[fromAcc].password==fpswd)
            {
                if(this.accountDetails[fromAcc].balance>=amount){
                    console.log(`current balance of ${fromAcc} is ${this.accountDetails[fromAcc].balance} and ${ToAcc} is ${this.accountDetails[ToAcc].balance} before transaction`);
                    this.accountDetails[fromAcc].balance-=amount
                    this.accountDetails[ToAcc].balance+=amount
                    console.log(`current balance of ${fromAcc} is ${this.accountDetails[fromAcc].balance} and ${ToAcc} is ${this.accountDetails[ToAcc].balance} after transaction`);
                }
                else{
                    console.log('Insufficient balance');
                }
            }
            else{
                console.log('Invalid password');
            }
        }
        else{
            console.log('Invalid Account number');
        }
    }

}
user1=new Bank()
console.log(user1.validate(1004)?'valid':'invalid');
console.log('----------------------');
user1.authenticate(1000,'userone')
console.log('----------------------');
user1.balance(1003,'userfour')
console.log('-----------------------');
user1.fundTransfer(1000,1001,'userone',100)