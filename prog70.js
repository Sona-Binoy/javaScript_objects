text="hai hello all hello world all"

//print the word count from the given string

words=text.split(' ')
console.log(words);
wordCount={}

for(word of words)
{
    if(word in wordCount)
    {
        wordCount[word]+=1
    }
    else{
        wordCount[word]=1
    }
}
console.log(wordCount);

//using array method

wc={}
text.split(' ').forEach(item =>item in wc?wc[item]+=1:wc[item]=1)
console.log(wc);
