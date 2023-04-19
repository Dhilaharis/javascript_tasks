let count=0
let a=setInterval(()=>{
   count++
   console.log('name')
   if(count==5){
       clearInterval(a);
   }
},2000)