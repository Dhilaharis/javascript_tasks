function currenttime(){
    let today=new Date();
    let hr=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    console.log("currenthours:",hr,"currentminutes:",min,"currentseconds:",sec);
    
}
currenttime();