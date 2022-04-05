let umail =document.getElementById('email');
let error1 = document.getElementById('error');
error1.style.color='red';
error1.style.fontSize='15px'
let mailInvalid='2px solid red';
let mailValid ='2px solid green'

function validmail(){
    
    error1.textContent='';
    let userValue=umail.value;
    let mailStr=userValue.substring(userValue.indexOf('@')+1);
    if(userValue==''){
        
        error1.textContent='*This field is required';
        umail.style.border=mailInvalid;
        return false
    }

    else if(!userValue.includes('@')||mailStr==''){
        error1.textContent='Please provide a valid email';
        umail.style.border=mailInvalid;
        return false
    }

    else{
        umail.style.border=mailValid;
        return true
    
}
}
function validation(){
    return validmail();
}