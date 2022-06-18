 var romanToInt = function(s) {
    const arr = s.split('');
    let num = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 'I'){
            if(arr[i+1] == 'V'){
                num += 4;
                i += 1;
            }else if(arr[i+1]=='X'){
                num +=9;
                i += 1;
            }else{
                num +=1;
            }
        }
        else if(arr[i] =='V'){
            num += 5;
        }else if(arr[i] == 'X'){
            if(arr[i+1] == 'L'){
                num += 40;
                i += 1;
            }else if(arr[i+1]=='C'){
                num +=90;
                i += 1;
            }else{
                num +=10;
            }
        }
        else if(arr[i] == 'L'){
            num += 50;
        }
        else if(arr[i]=='C'){
             if(arr[i+1] == 'D'){
                num += 400;
                i += 1;
            }else if(arr[i+1]=='M'){
                num +=900;
                i += 1;
            }else{
                num +=100;
            }
        }
        else if(arr[i] == 'D'){
            num += 500;
        }
        else{
            num += 1000;
        }
    }
    return num;
};

console.log(romanToInt("MCMXCIV"));