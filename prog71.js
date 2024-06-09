
array=[10,20,30,40,30,20,50,30,60,70,10,40,80]

//find the number count and display in object

numCount={}
array.forEach(item => item in numCount?numCount[item]+=1:numCount[item]=1);
console.log(numCount);


//find first recursive letter(fist repeated letter)

pattern='ABCBBCAACB'
count={}
character=Array.from(pattern)
for(char of character)
{
    if(char in count)
    {
        console.log('first recursive letter :',char);
        break
    }
    else
    {
        count[char]=1
    }
}