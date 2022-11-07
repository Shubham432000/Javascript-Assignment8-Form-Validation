let userData = document.getElementById("UserName")
let emailData=document.getElementById("email");
let passData=document.getElementById("password");
let confpassData=document.getElementById("confpassword");



function submitForm(){

    if(!userData.value){
        document.getElementById("userError").innerHTML="user name empty";
        
        
    }else{
        document.getElementById("userError").innerHTML="";
        
    }
    if(!emailData.value ){
        document.getElementById("emailError").innerHTML="user email empty";
        
       
    }else{
        document.getElementById("emailError").innerHTML="";
        
    }
    if(!passData.value ){
        document.getElementById("passError").innerHTML="user password empty";
        
        
    }else{
        document.getElementById("passError").innerHTML="";
        
    }
    if(!confpassData.value){
        document.getElementById("passError").innerHTML="user password empty";
        
        
    }else{
        document.getElementById("passError").innerHTML="";
        
    }
    if(confpassData.value == passData.value){
        document.getElementById("confpassError").innerHTML="match password required";
        
        
    }
    else if(confpassData.value !== passData.value){
        document.getElementById("confpassError").innerHTML="user password not match";
        return false;
        
    }
    else{
        document.getElementById("confpassError").innerHTML="";

    }

    
    if(userData.value && emailData.value && passData.value ){
      alert("form submit succesfully")
        return true;
        
    }else {
        return false
    }
}