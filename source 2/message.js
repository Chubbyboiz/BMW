

function checklogin(){
    var logname = document.getElementById("login").value;
    var logpwd = document.getElementById("pwd").value;
    if((logname=="aptech")&&(logpwd=="123")){
       alert("Welcome to aptech, login successfully")
       return true;
    }else
        alert("Login name or Password invalid")
        return false;

}


function check(){   

    var logname=document.getElementById("login").value;
    var rlogname=/[a-zA-Z]+/;
    if (!rlogname.test(logname)){
        alert("Login Name invalid")
        document.getElementById("login").focus();
        return false;
    }else if(logname.length==0){
        alert("login name can not blank")
        document.getElementById("login").focus();
        return false;
    }

    var spwd=document.getElementById("userpwd").value;
    var scpwd=document.getElementById("cuserpwd").value;
    var rpwd=/^[A-Z]+[\w]+$/;
    var rcpwd=/^[A-Z]+[\w]+$/;
    if((spwd.length==0) || (scpwd.length==0)){
            alert("password can not blank")
            return false;
        }else if((!rcpwd.test(scpwd)) || (!rpwd.test(spwd)) ){
            alert("Pass must be begin with Alphabet")
            return false;
        }else if(spwd != scpwd){ 
            alert("password not match")
            return false;
        }
    }   


function checkinfo(){
    // check first name
    var Sfname=document.getElementById("fname").value;
    var Rfname=/^[a-zA-Z]+$/;
    if(!Rfname.test(Sfname)){
        document.getElementById("fname").focus();
        alert("First Name can not blank !")
        return false;
    }
    //check last name
    var Slname=document.getElementById("lname").value;
    var Rlname=/^[a-zA-Z]+$/;
    if(!Rlname.test(Slname)){
        document.getElementById("lname").focus();
        alert("Last Name can not blank !")
        return false;
    }
    // check email
    var semail=document.getElementById("email").value;
    var remail=/^\w+[@]\w+[.]\w{3}([.]{2})?$/;
    if(!remail.test(semail)){
        document.getElementById("email").focus();
        alert("Email is incorrect!")
        return false;
    }
    // check phone
    var sphone = document.getElementById("phone").value;
    var rphone = /^[0-9]{8,12}$/;
    if(!rphone.test(sphone)){
        alert(sphone + "\nPhone is incorrect!");
        document.getElementById("phone").focus();
        return false;
    }

        alert("Congratulaion\nYour Infomation has been succesfully !")
}



