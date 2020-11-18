
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




function validation(){

 let nameinput = document.getElementById("name").value ;
 let lnameinput = document.getElementById("lname").value ;
 let emailinput = document.getElementById("email").value ;
 let passwordinput = document.getElementById("password").value ;
 

 if(nameinput === ''){
    document.getElementById("error1").style.display = "inline-block";
    document.getElementById("small1").style.display = "inline-block";
    document.getElementById("name").style.border = "1px solid hsl(0, 100%, 74%)"
    
   
    
 }
 else{
    document.getElementById("small1").style.display = "none";
    document.getElementById("error1").style.display = "none";
    document.getElementById("name").style.border = "1px solid rgb(191, 191, 191)"

 }
//

 if(lnameinput === ''){
    document.getElementById("error2").style.display = "inline-block";
    document.getElementById("small2").style.display = "inline-block";
    document.getElementById("lname").style.border = "1px solid hsl(0, 100%, 74%)"
    
 }
 else{
    document.getElementById("small2").style.display = "none";
    document.getElementById("error2").style.display = "none";
    document.getElementById("lname").style.border = "1px solid rgb(191, 191, 191)"
 }
 //

 if(validateEmail(emailinput)){
    document.getElementById("small3").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)"
    document.getElementById("email").style.border = "1px solid rgb(191, 191, 191)"
 }
 else{
    
    document.getElementById("error3").style.display = "inline-block";
    document.getElementById("small3").style.display = "inline-block";
    document.getElementById("email").style.border = "1px solid hsl(0, 100%, 74%)"
    
 }
 if(passwordinput === ''){
    document.getElementById("error4").style.display = "inline-block";
    document.getElementById("small4").style.display = "inline-block";
    document.getElementById("password").style.border = "1px solid hsl(0, 100%, 74%)"
    
 }
 else{
    document.getElementById("small4").style.display = "none";
    document.getElementById("error4").style.display = "none";
    document.getElementById("password").style.border = "1px solid rgb(191, 191, 191)"
 }

}