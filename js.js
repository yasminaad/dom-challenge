function validateForm(){
    var nameRegex = /^[a-zA-Z\-]+$/;
    var validfirstUsername = document.f1.name.value.match(nameRegex);
    if(validfirstUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.f1.name.focus();
        return false;
      
    }
}

var pwInput = document.getElementById('pwInput')
var emailInput = document.getElementById('emailInput')
var bts = document.getElementById('bts')
bts.addEventListener('click',function(e){
    e.preventDefault()
    validateEmail()
    validatePw()
})
function validatePw(){
    var pw=pwInput.value;
    var regexpw = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/);
    if(pw==""|| !regexpw.test(pw)){
        alert("please entrer a valid password")
         pw.focus();
         return false;
    }
    else alert('valid pw')
}
function validateEmail() 
    {
        var email = emailInput.value
        var re = /\S+@\S+\.\S+/;
        if(re.test(email)) alert('valid email')
        else  alert('unvalid email')
    }