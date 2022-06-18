function longestsubstring(str){
    let object = {};
    let start = 0;
    let longest = 0;
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(object[char]){
            start = Math.max(start,object[char]);
        }
        longest = Math.max(longest,i-start+1);
        object[char] = i+1;
    }

    return longest;
}

console.log(longestsubstring('abcacbaa'));
console.log(longestsubstring('bbbbbb'));
console.log(longestsubstring('pwwkew'));
console.log(longestsubstring('abcacabcd'));