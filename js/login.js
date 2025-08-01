//Get User Data From Local Storage
let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
//Creat Object and Send Local Storage for ADMIN Details
let admindetails = JSON.parse(localStorage.getItem("admin")) ?? [];
//Creat Object to Store Input User Index to Use in Next Page which will Login and Store in LocalStorage
let storeindexST = JSON.parse(localStorage.getItem("userindexST")) ?? [];
let storeindexTC = JSON.parse(localStorage.getItem("userindexTC")) ?? [];

//DOM Elements
let adminbox = document.getElementById("admin");
let teacherbox = document.getElementById("teacher");
let studentbox = document.getElementById("student");
let loginname = document.querySelector(".top-text #login-name");
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginbtn = document.getElementById("login");
let container = document.querySelector(".container");
let header = document.querySelector("header");
let demo_account= document.getElementById("demo_account");

//User Variable to Store User Details mean Choose ADMIN/TEACHER/STUDENT
let user = "";
//Send ADMIN Deetails to Local Storage
let addadmin = () => {
    if(admindetails.length === 0){
        admindetails.push({
            username:"Munir Rahman",
            Password:"Munir123",
        });
        localStorage.setItem("admin",JSON.stringify(admindetails));
    }
}

//When User Entr it Should Login
password.addEventListener('keypress',(e) => {
    if(e.key === "Enter"){
        loginbtn.click();
    }
});

//Demo Account Created
let demoaccount = (number) =>{
    //Student Demo Account
    if(number === 1){
        Studentdata.unshift({
            username:"Khalil Rahman",
            FName:"Rahman",
            Age:"20",
            Gender: "Male",
            Faculty:"Computer Science",
            Semester:"3",
            Shift:"PM",
            Phone:"+93700000000",
            Email:"name@gmail.com",
            Password:"123",
        });
        localStorage.setItem("Studentdetails",JSON.stringify(Studentdata));
    }
    //Teacher Demo Account
    if(number === 2){
        Teacherdata.unshift({
            username:"Aziz Rahman",
            FName:"Programming",
            Age:"20",
            Gender: "Male",
            Faculty:"Computer Science",
            Semester:"3",
            Shift:"PM",
            Phone:"+93700000000",
            Email:"name@gmail.com",
            Password:"123",
        }); 
        localStorage.setItem("Teacherdetails",JSON.stringify(Teacherdata));
    }
}

//When User Click By Demo Account
let demo = () => {
    demo_account.addEventListener('click', () => {
        if(user === "ADMIN"){
            window.location.href = "Admin.html";
        } else if(user === "TEACHER"){
                demoaddedST = true;
                demoaccount(2);
                storeindexTC = 0;
                localStorage.setItem("userindexTC", JSON.stringify(storeindexTC));
                window.location.href = "Teacher.html";
        } else if(user === "STUDENT"){
            demoaccount(1);
            storeindexST = 0;
            localStorage.setItem("userindexST", JSON.stringify(storeindexST));
            window.location.href = "Student.html";
        }
    });
}

//Event When Change User
adminbox.addEventListener("click" , () => {
    user = "ADMIN";
    login(user);
});
teacherbox.addEventListener("click" , () => {
    user = "TEACHER";
    login(user);
});
studentbox.addEventListener("click" , () => {
    user = "STUDENT";
    login(user);
});

//When User Login
let login = (name) => {
    if(name === "ADMIN"){
        adminfun();
    }else if(name === "TEACHER"){
        teacherfun();
    }else if(name === "STUDENT"){
        studentfun();
    }
}

let adminfun = () => {
        loginname.style.color = "#1A1C2B";
        loginname.innerText = "Admin Login";
        console.log(username.value)
        loginbtn.addEventListener("click" , () => {
                if(username.value === admindetails[0].username &&  password.value === admindetails[0].Password){
                    loginname.style.color = "green";
                    loginname.innerText = `Welcome to SUMS`;
                    window.location.href = "Admin.html";
                }else if(username.value !== admindetails[0].username && password.value !== admindetails[0].Password){
                    loginname.style.color = "yellow";
                    loginname.innerText = `Account is Not Ragistered Yet!`;
                }else if(password.value !== admindetails[0].Password){
                    loginname.style.color = "red";
                    loginname.innerText = `Password is Incorrect!`;
                }else if(username.value !== admindetails[0].username){
                    loginname.style.color = "red";
                    loginname.innerText = `Username is Incorrect!`;
                }else{
                    loginname.style.color = "red";
                    loginname.innerText = "Something Going Wrong";
                }
        });
}

let teacherfun = () => {
        loginname.style.color = "#1A1C2B";
        loginname.innerText = "Teacher Login";
        loginbtn.addEventListener("click" , () => {
        let tcnum = Teacherdata.length;
            for(let i=0;i<tcnum;i++){
                if(username.value === Teacherdata[i].username &&  password.value === Teacherdata[i].Password){
                        loginname.style.color = "green";
                        loginname.innerText = `Welcome to SUMS`;
                        storeindexTC = i;
                        localStorage.setItem("userindexTC", JSON.stringify(storeindexTC));
                        window.location.href = "Teacher.html";
                }
            }
            if(username.value !== Teacherdata[storeindexTC].username && password.value !== Teacherdata[storeindexTC].Password){
                loginname.style.color = "yellow";
                loginname.innerText = `Account is Not Ragistered Yet!`;
            }
            else if(username.value !== Teacherdata[storeindexTC].username || password.value !== Teacherdata[storeindexTC].Password){
                loginname.style.color = "red";
                loginname.innerText = `Password or Username is incorrect`;
            }
    });
}

let studentfun = () => {
        loginname.style.color = "#1A1C2B";
        loginname.innerText = "Student Login";
        loginbtn.addEventListener("click" , () => {
            let stnum = Studentdata.length;
            for(let i=0;i<stnum;i++){
                    if(username.value === Studentdata[i].username &&  password.value === Studentdata[i].Password){
                        loginname.style.color = "green";
                        loginname.innerText = `Welcome to SUMS`;
                        storeindexST = i;
                        localStorage.setItem("userindexST", JSON.stringify(storeindexST));
                        window.location.href = "Student.html";
                    }
            }
            if(username.value !== Studentdata[storeindexST].username && password.value !== Studentdata[storeindexST].Password){
                loginname.style.color = "yellow";
                loginname.innerText = `Account is Not Ragistered Yet!`;
            }
            else if(username.value !== Teacherdata[storeindexTC].username || password.value !== Teacherdata[storeindexTC].Password){
                loginname.style.color = "red";
                loginname.innerText = `Password or Username is incorrect`;
            }
        });
}

window.onload = () => {
    user = "ADMIN";
    addadmin();
    demo();
}
