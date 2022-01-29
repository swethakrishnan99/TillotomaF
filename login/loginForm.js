const login = document.getElementById("login-form");

// prevent Default form behavior
login.addEventListener("submit", (event) => {
    event.preventDefault();
});


function loginForm(userType) {

    const password = document.getElementById("log-password").value;
    const email = document.getElementById("log-email").value;

    if (userType === "student")
        url = "http://127.0.0.1:5500/public/student.html"
    else if (userType === "faculty")
        url = "http://127.0.0.1:5500/public/faculty.html"
    else
        url = "http://127.0.0.1:5500/public/admin.html"

    const data = { email, password, userType };

    axios
        .post("https://tillotomaback.herokuapp.com/api/v1/login", data)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            document.querySelector(".err-message-login").innerHTML = "";
            window.location.href = url;
        })
        .catch((error) => {
            console.log(error);
            const errorData = error.response;
            if (errorData.status === 409)
                document.querySelector(".err-message-login").innerHTML =
                    "Incorrect password. Please try again";
            else if (errorData.status === 400)
                document.querySelector(".err-message-login").innerHTML =
                    "User doesn't exist";
            else document.querySelector(".err-message-login").innerHTML = "";
        });
}