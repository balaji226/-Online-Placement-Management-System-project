function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    // Demo login

    if(email=="balaji@gmail.com" && password=="123456"){

        alert("Login Successful");

        window.location.href="dashboard.html";

    }
    else{

        alert("Wrong Email or Password");

    }

}