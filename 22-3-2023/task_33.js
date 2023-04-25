var vowels="aeiou";
function cvowels(word){
    let count=0;
    for(i=0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    console.log(word);
    console.log(count);
}
cvowels("karka");