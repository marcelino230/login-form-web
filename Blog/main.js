const loginForm = dokumen . getElementByid ("form-login")
const loginButton = dokumen . getElementByid ("login-form-submit")
const loginButton = dokumen . getElementByid ("login-error-msg")

loginButton . addEventListener ("click" , (e)) ;{
    e . preventDefault();
    const username = loginForm . username . value;
    const password = loginForm . password . value;
    
    if (username === "user" && password === "web_dev"){
        alert("Anda telah berhasil login.");
        location.reload();
    }else{
        loginerrorMsg.style.opacity = 1;
    }
}