//Initialize Local Storage Array
let application = JSON.parse(localStorage.getItem("apply_suggestions")) ?? [];

//DOM Elements
let loginbtn = document.querySelector("#login");
let form = document.querySelector(".form");
let apply_now = document.querySelector(".apply-now");
let after_apply = document.querySelector(".after-apply");


// Menu
let menu_name = document.querySelector(".menu-name");
let dropdown_menu = document.querySelector(".dropdown-menu");

menu_name.addEventListener('click', () => {
    menu_name.classList.toggle("hide");
    dropdown_menu.classList.toggle("hide");
});

dropdown_menu.addEventListener('click', () => {
    dropdown_menu.classList.toggle("hide");
    menu_name.classList.toggle("hide");
});

loginbtn.addEventListener('click', () => {
    window.location.href = "login.html";
});

form.addEventListener('submit', (event) => {
    let username = event.target.username.value;
    let FName = event.target.FName.value;
    let Gender = event.target.Gender.value;
    let Faculty = event.target.Faculty.value;
    let Phone = event.target.Phone.value;
    let Email = event.target.Email.value;
    let Shift = event.target.Shift.value;
    let Age = event.target.Age.value;
    let Semester = event.target.Semester.value;
    let Password = event.target.Password.value;
    event.preventDefault();
    //Creat Object for Application
    // let application = JSON.parse(localStorage.getItem("apply_suggestions")) ?? [];
    application.push({
        username: username,
        FName: FName,
        Gender: Gender,
        Faculty: Faculty,
        Phone: Phone,
        Email: Email,
        Shift: Shift,
        Age: Age,
        Semester: Semester,
        Password: Password,
    });
    localStorage.setItem("apply_suggestions", JSON.stringify(application));
    event.target.reset();
    //When Form Submit this Will Show instead of Form
    // form.innerHTML = 
    console.log("Form Submited");
    event.preventDefault();
    apply_now.classList.add("hide");
    after_apply.classList.remove("hide");
});


//Contact DOM Elements
let contact_form = document.querySelector(".right-side .form");
contact_form.addEventListener('submit', (event) =>{
    let name = event.target.name.value.trim();
    let email = event.target.email.value.trim();
    let message = event.target.message.value.trim();
    let link = `https://wa.me/93711717893?text="Name : ${name}\nEmail : ${email}\nMessage : ${message}"`;
    window.open(link, "_blank");
    contact_form.reset();
    event.preventDefault();
});