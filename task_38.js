function validate(email){
    let mail_format=/^\S+@\S+\.+\S/;
    if(mail_format.test(email)){
        console.log("The email address is valid");
    }
    else{
        console.log("The email address is invalid");
    }
}
validate("haris48@gmail.com")
validate("haris48gmail.com")
validate("haris48@gmailcom")