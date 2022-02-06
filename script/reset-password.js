let params = new URL(document.location).searchParams;
let resetLink = params.get("token");
let user = params.get("user");
const reset = document.getElementById("reset-form");
const err = document.getElementById("err-message");

// prevent Default form behavior
reset.addEventListener("submit", (event) => {
    event.preventDefault();
});
const handleSubmit = () => {
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("re-password").value;
    const isPasswordSecure = (password) => {
        const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        return re.test(password);
    };
    if (!isPasswordSecure(password))
        return res.status(400).json({ message: "enter valid password" });
    if (password !== rePassword)
        return (err.innerText = "passwords don't match");

    else {
        axios
            .put("http://localhost:8000/api/v1/reset-password", {
                resetLink,
                password,
                user
            })
            .then((response) => {
                err.innerText = response.data.message;
            })
            .catch((error) => {
                err.innerText = error.response.data.message;
            });
    }
};