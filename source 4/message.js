// function showinfo(){
// var  uname = document.getElementById("username").value; 
// var  mail= document.getElementById("email").value;
// var info = ["+Login Name :  " +uname, "+Email :  " +mail];
//     alert("Register Info \n ********************** \n" +  info.join("\n")); 
// }


// function checklogin(){
//     var logname = document.getElementById("lgname").value;
//     var logpwd = document.getElementById("pwd").value;
//     if((logname=="aptech")&&(logpwd=="123")){
//        alert("welcome to aptech")
//        return true;
//     }else
//         alert("invalid")
//         return false;

// }


// function check(){   



//     var logname=document.getElementById("username").value;
//     var rlogname=/[a-zA-Z]+/;
//     if (!rlogname.test(logname)){
//         alert("login Name invalid")
//         document.getElementById("username").focus();
//         return false;
//     }else if(logname.length==0){
//         alert("login name can not blank")
//         document.getElementById("username").focus();
//         return false;
//     }

//     var semail=document.getElementById("email").value;
//     var remail=/^\w+[@]\w+[.]\w{3}([.]{2})?$/;
//     if(!remail.test(semail)){
//         alert("Email invalid")
//         document.getElementById("email").focus(); 
//         return false;
//     }

//     var spwd=document.getElementById("userpwd").value;
//     var scpwd=document.getElementById("cuserpwd").value;
//     var rpwd=/^[A-Z]+[\w]+$/;
//     var rcpwd=/^[A-Z]+[\w]+$/;
//     if((spwd.length==0) || (scpwd.length==0)){
//             alert("password can not blank")
//             return false;
//         }else if((!rcpwd.test(scpwd)) || (!rpwd.test(spwd)) ){
//             alert("Pass must be begin with Alphabet")
//             return false;
//         }else if(spwd != scpwd){ 
//             alert("password not match")
//             return false;
//         }

//     /////////////////////////////////////////////////////////////////    
//     // function showinfo(){
//     //     var  uname = document.getElementById("username").value; 
//     //     var  mail= document.getElementById("email").value;
//     //     var info = ["+Login Name :  " +uname, "+Email :  " +mail];
//     //         alert("Register Info \n ********************** \n" +  info.join("\n")); 
//     //     }

//     // doc gia tri tu radio
//     // var id = document.getElementById("rdgender");
//     // var sgender = (id.checked)? "male" : "female"

//         // var mes = [];
//         // mes.push("your infomation: ");
//         // mes.push("---------------");
//         // mes.push("+full name :",+ logname);
//         // mes.push("+email :",+ semail);
//         // alert(mes.join("\n"));
//     }      
       


function changeloc(){
    // location.href = document.getElementById("seach").value;
    window.location.href;
     
}