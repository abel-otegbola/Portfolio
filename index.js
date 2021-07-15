let navLinks = document.querySelectorAll("header .topbar nav ul li a")


for(let i=0; i<navLinks.length; i++) {
    navLinks[i].onclick = () => {
        for(let x=0; x<navLinks.length; x++) {
            navLinks[x].classList.remove("active");
            navLinks[i].classList.add("active");
            menu.classList.toggle("active")
    }
}
}
RegExp("./,.kj%")

let menuButton = document.querySelector(".menu-button");
let menu = document.querySelector("header .topbar nav");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
})

let form = document.getElementById("contact-form");

let username = form.elements["name"];
let email = form.elements["email"];

let msg = document.querySelector(".msg");


form.addEventListener("submit", function(e) {
    
    msgArr = [];
    msg.textContent = "";

    if(username.value === "") {
        msgArr.push("The name field is required")
    }
    if(username.value.length < 4) {
        msgArr.push("Name must be more than 3 characters")
    }
    if(email.value === "") {
        msgArr.push("The email field is required")
    }

    if(msgArr.length !== 0) {
        e.preventDefault()
        msgArr.forEach(messages => {
            let p = document.createElement("p");
            p.textContent = messages;
            msg.appendChild(p)
        })
    }
})
