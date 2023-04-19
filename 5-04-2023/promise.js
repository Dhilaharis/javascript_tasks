const result=new Promise((resolve,reject)=>{
  let resultcoming=false
  if(resultcoming){
    resolve("success")
  }
  else{
    reject("failure")
  }
})
result.then((res)=>console.log(res)).catch((err)=>console.log(err))