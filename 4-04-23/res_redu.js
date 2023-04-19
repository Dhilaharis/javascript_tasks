//rest and reducer
function add(...res){
    let result=res.reduce((acc,cur)=>{
        return acc+cur
    })
    console.log(result)
    console.log(res)
}
add(1,2,3,4);

console.log(this)