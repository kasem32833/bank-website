document.getElementById('login-btn').addEventListener('click', function(){
    const inputMail = document.getElementById('input-mail')
    const mail = inputMail.value;
    const inputPassword = document.getElementById('input-password');
    const password = inputPassword.value;


    // check mail and password and redirect to bank page(not recomended)
    if(mail === 'kasem', password === 'sec'){
        window.document.location.href = 'bank.html'

    }else{
        alert('Please enter valid user Id and Password');
    }

    console.log(mail, password);
})