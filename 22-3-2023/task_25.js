function tdim(row,column){
       let arr=[]
       for(let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < column; j++) {
          arr[i][j] = "*";
        }
      }
      return arr;
     
}
console.log(tdim(4,3));