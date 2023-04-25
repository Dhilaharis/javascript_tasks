function validate(value){
    
if (value === undefined||value===null){
  console.log("The variable is undefined or null");
}
else {
  console.log("The variable is neither undefined or null");
}
}
var a;
validate(a);
validate(null)
validate(5)
