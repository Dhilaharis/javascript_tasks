function performArithmeticOperation(num1,num2,operator){
    if(operator=="+"){
        //add=num1+num2;
        //console.log(add);
        console.log(num1+num2);
    }
    else if(operator=="-"){
        console.log(num1-num2);
    }
    else if(operator=="*"){
        console.log(num1*num2);
    }
    else if(operator=="/"){
        console.log(num1/num2);
    }
    else{
        console.log("invalid");
    }
    
}
performArithmeticOperation(10,5,"/");