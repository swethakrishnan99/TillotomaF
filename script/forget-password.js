const reset = document.getElementById("reset-form");
const params = new URL(document.location).searchParams;
const user = params.get("user");

// prevent Default form behavior
reset.addEventListener("submit", (event) => {
    event.preventDefault();
});
const handleSubmit = () => {
    const email = document.getElementById("email").value;
    const err = document.getElementById("err-message");
    axios
        .put("https://tillotomaback.herokuapp.com/api/v1/forget-password", { email, user })
        .then((response) => {
            err.innerText = response.data.message;
        })
        .catch((error) => {
            // err.innerText = error.response.data.message;
            console.log(error)
        });
};