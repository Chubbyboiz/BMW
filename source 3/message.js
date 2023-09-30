

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

    //  check birth day
    var day = document.getElementById("birthday").value
    if(day.length==0){
        alert("Input your Birth Day !!")
        document.getElementById("birthday").focus();
        return false;
    }
        //check adreess

        var saddress = document.getElementById("address").value;
        var raddress = /^\w\d$/;
            if(raddress.test(saddress)){
                alert("address invalid !")
                document.getElementById("address").focus;
                return false;
            }else if(saddress.length==0){
                alert("address can not blank !")
                document.getElementById("address").focus;
                return false;
            }
    // check email
    var semail=document.getElementById("email").value;
    var remail=/^\w+[@]\w+[.]\w{3}([.]{2})?$/;
    if(!remail.test(semail)){
        document.getElementById("email").focus();
        alert("Email can not blank ")
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

   var name=document.getElementById("fname").value;
   var day=document.getElementById("birthday").value;
   var selCountry = document.getElementById("country")
   var i = selCountry.selectedIndex
   var ctry = selCountry.options[i].value
   var address=document.getElementById("address").value;
   var mail=document.getElementById("email").value;
   var num=document.getElementById("phone").value;
   var ID = document.getElementById("gender")
   var gen = ID.checked? "Male":"Female"
   var info = [
        "Name :"+name,
        "Country :"+ctry,
        "Birthday :" +day,
        "Address :" +address,
        "Email :"+mail,
        "Phone :"+num,
        "Gender :"+gen,
   ];
   alert("Register Info \n ********************** \n" +  info.join("\n")); 
}






