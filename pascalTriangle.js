function pascalTraingle(rowCount){
    let traingle = [];
    traingle.push([1]);
    for(let i=1; i<rowCount; i++){
        let prevArr = traingle[i-1];
        let arr = [];
        arr.push(1);
        for(let j=1; j<i; j++){
            arr.push(prevArr[j-1]+prevArr[j]);
            console.log(i,j,arr)
        }
        arr.push(1);
        traingle.push(arr);
    }

    return traingle;
}

console.log(pascalTraingle(4));