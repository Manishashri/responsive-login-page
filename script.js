// SIGN UP

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const password =
        document.getElementById("password").value.trim();

        const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

        const msg =
        document.getElementById("signup-msg");

        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(name === "" ||
           email === "" ||
           password === "" ||
           confirmPassword === ""){

            msg.style.color = "red";

            msg.innerText =
            "All fields are required";

            return;
        }

        if(!emailRegex.test(email)){

            msg.style.color = "red";

            msg.innerText =
            "Invalid Email Format";

            return;
        }

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


if(!passwordRegex.test(password)){

    msg.style.color = "red";

    msg.innerText =
    "Password must contain:\n" +
    "8 characters, uppercase, lowercase,\n" +
    "number and special character";

    return;
}

        if(password !== confirmPassword){

            msg.style.color = "red";

            msg.innerText =
            "Passwords do not match";

            return;
        }


        localStorage.setItem("userName", name);

        localStorage.setItem("userEmail", email);

        localStorage.setItem("userPassword", password);

        msg.style.color = "green";

        msg.innerText =
        "Registration Successful";

        setTimeout(() => {

            window.location.href = "index.html";

        }, 1500);

    });

}



// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
        document.getElementById("loginEmail").value.trim();

        const password =
        document.getElementById("loginPassword").value.trim();

        const msg =
        document.getElementById("login-msg");

        const storedEmail =
        localStorage.getItem("userEmail");

        const storedPassword =
        localStorage.getItem("userPassword");

        if(email === storedEmail &&
           password === storedPassword){

            msg.style.color = "green";

            msg.innerText =
            "Login Successful";

            setTimeout(() => {

                window.location.href = "welcome.html";

            }, 1000);

        } else {

            msg.style.color = "red";

            msg.innerText =
            "Invalid Email or Password";
        }

    });

}