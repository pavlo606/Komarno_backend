const userEmailSpan = document.getElementById("userEmailSpan")

const logout = () => {
    fetch("/user/logout", {method: "GET"})
        .then(() => {
            location.reload();
        })
}

fetch("/user").then((res) => res.json())
    .then((data) => {
        console.log(data)
        userEmailSpan.innerText = data.email
    })