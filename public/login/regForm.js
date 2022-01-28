const register = document.getElementById("reg-form");

// prevent default form behavior
register.addEventListener("submit", (event) => {
    event.preventDefault();
});

function regForm(userType) {
    const name = document.getElementById("reg-name").value;
    const password = document.getElementById("reg-password").value;
    const email = document.getElementById("reg-email").value;
    const phone = document.getElementById("reg-phone").value;
    const dob = document.getElementById("reg-dob").value;
    const country = document.getElementById("reg-country").value;
    const nationality = document.getElementById("reg-nationality").value;
    const whatsapp = document.getElementById("reg-whatsapp").value;

    if (userType === "student")
        url = "http://127.0.0.1:5500/public/student.html"
    else if (userType === "faculty")
        url = "http://127.0.0.1:5500/public/faculty.html"
    else if (userType === "admin")
        url = "http://127.0.0.1:5500/public/admin.html"

    if (userType === "student") {
        const occupation = document.getElementById("reg-occupation").value;
        const education = document.getElementById("reg-education").value;
        var data = {
            name,
            email,
            password,
            phone,
            dob,
            country,
            nationality,
            whatsapp,
            userType,
            occupation,
            education,
        };
    }

    else if (userType === "faculty" || userType === "admin") {
        var data = {
            name,
            email,
            password,
            phone,
            dob,
            country,
            nationality,
            whatsapp,
            userType,
        }
        console.log(data)
    }

    axios
        .post("http://127.0.0.1:8000/api/v1/register", data)
        .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
            document.querySelector(".err-message-reg").innerHTML = "";
            window.location.href = url;
        })
        .catch((error) => {
            console.log(error);
            const errorData = error.response;
            if (errorData.status === 409)
                document.querySelector(".err-message-reg").innerHTML =
                    "user already exist";
            else if (errorData.status === 400)
                document.querySelector(".err-message-reg").innerHTML =
                    "please fill the mandatory field";
            else if (errorData.status === 500)
                document.querySelector(".err-message-reg").innerHTML =
                    "please enter valid values";
            else document.querySelector(".err-message-reg").innerHTML = "";
        });
}

