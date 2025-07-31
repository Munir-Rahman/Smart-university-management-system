//Initialize Array From Local Storage or []
let admindetails = JSON.parse(localStorage.getItem("admin")) ?? [];
let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];

//Admin Name Will Add
admindetails.username = "Munir Rahman";
let Admin = admindetails.username;

//Dashboard
let dashboardbar = document.querySelector(".dashboard");
//When Click By View Details on Dashboard
let TCdetails = document.getElementById("TCdetails");
let STdetails = document.getElementById("STdetails");

//Which Persons Want to Add mean Creat Account in SUMS
//Apply Suggestion Option 
let apply = document.getElementById("apply");
let applysuggestion = document.querySelector(".applysuggestion");

//Admission DOM Elements
let main = document.querySelector("main");
let formsubmitbtn = document.querySelector("#submitbtn");
let sidelist = document.querySelectorAll(".side li");
let admissionbar = document.querySelector(".Admission");
let choosingformbtns = document.querySelector(".choosingbtns");
let formbtnouter = document.querySelectorAll(".btnouter");
let studentformbtn = document.getElementById("studentform");
let teacherformbtn = document.getElementById("teacherform");
let admicontainer = document.querySelector(".Admission .container");
let admicontainer2 = document.querySelector(".Admission .container2");
let Teacherpage = document.querySelector(".Teachers");
let Studentpage = document.querySelector(".students");
let studentinside = document.querySelector(".student");
let Chatpage = document.querySelector(".chat");
let Feedbackpage = document.querySelector(".feedback");
let form = document.querySelector(".form");
let teacherform = document.querySelector(".teacherform");
let tablebody = document.querySelector(".tbody");
let teachertbody = document.querySelector(".teachertbody");
let toptext = document.querySelector(".welcome-msg");
let menu_icon = document.querySelector(".menu-icon");

let notibtn = false;
let countmsg = 0;

//POPUP Message
let addedmsg = document.querySelector(".added-msg");
let addedmsgtxt = document.querySelector(".added-msg h2");
let msgbutton = document.querySelectorAll(".cross");

//Notification Elements
let notification = document.querySelector(".menu");
let notifcatlist = document.querySelectorAll(".menu li");
let notificationbtn = document.querySelector("#notification-btn");
let msgnum = document.querySelector(".notification .number");

msgnum.innerText = countmsg;

//Modal Edit Elements
const formouter = document.querySelector(".edit-form-outer");
const editform = document.querySelector(".edit");
const editusername = document.getElementById("editusername");
const editFName = document.getElementById("editFName");
const editGender = document.getElementById("editGender");
const editFaculty = document.getElementById("editFaculty");
const editPhone = document.getElementById("editPhone");
const editEmail = document.getElementById("editEmail");
const editShift = document.getElementById("editShift");
const editAge = document.getElementById("editAge");
const editSemester = document.getElementById("editSemester");
const editPassword = document.getElementById("editPassword");
let editmode = null; //This Mode Will Change When Student Edit Model Open and Teacher Edit Model Open

// To Store Marks and Shouldn't be Remove After Edit
let Data_Structurequiz = 0;
let Data_Structurexam = 0;
let Data_Structurtest = 0;
let Programmingquiz = 0;
let Programmingexam = 0;
let Programmingtest = 0;
let Networkquiz = 0;
let Networkexam = 0;
let Networktest = 0;
let Graphicsquiz = 0;
let Graphicsexam = 0;
let Graphicstest = 0;

//Current Editing Index
let editingindex = null;

//Profile Picture
const profilePic = document.querySelector("#profile-pic");
const inputfile = document.querySelector("#imageupload");
inputfile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputfile.files[0]);
};
//ProfilePicture of Teacher
const profilePic2 = document.querySelector("#profile-pic2");
const inputfile2 = document.querySelector("#imageupload2");
inputfile2.onchange = function () {
    profilePic2.src = URL.createObjectURL(inputfile2.files[0]);
};

//When Click by View Details on Dashboard
let viewdetails = () => {
    TCdetails.addEventListener('click', () => {
        dashboardbar.classList.add("hide");
        admissionbar.classList.add("hide");
        choosingformbtns.classList.add("hide");
        Teacherpage.classList.remove("hide");
        Studentpage.classList.add("hide");
        Chatpage.classList.add("hide");
        Feedbackpage.classList.add("hide");
        studentinside.classList.add("hide");
    });
    STdetails.addEventListener('click', () => {
        dashboardbar.classList.add("hide");
        admissionbar.classList.add("hide");
        choosingformbtns.classList.add("hide");
        Teacherpage.classList.add("hide");
        Studentpage.classList.remove("hide");
        studentinside.classList.remove("hide");
        Chatpage.classList.add("hide");
        Feedbackpage.classList.add("hide");
    });
}

//Mobile Side Menu
let mobile_menu = document.querySelector(".mobile-menu")
let side_icon = document.getElementById("side-icon");
side_icon.addEventListener('click', () => {
    mobile_menu.classList.toggle("hide");
});


//When Student Added or Edit Student Details this Message will Show and When user click edit form will remove mean go back
msgbutton.forEach((cross) => {
    cross.addEventListener("click", () => {
        let id = cross.getAttributeNode("id");
        if (id.value == "editform") {
            formouter.classList.add("hide");
            main.classList.remove("hide");
            menu_icon.classList.remove("hide");
        } else if (id.value == "popup") {
            addedmsg.classList.add("hide");
        }
    });
});

//Popup Message
//Show Popup of Added Student
let popupmsg = () => {
    addedmsg.classList.remove("hide");
    setTimeout(() => {
        addedmsg.classList.add("hide");
    }, 8000);
};

//Side Bar Events
sidelist.forEach((list) => {
    list.addEventListener("click", () => {
        let id = list.getAttributeNode("id");
        if(id.value === "dashboard"){
            dashboardbar.classList.remove("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.add("hide");
            applysuggestion.classList.add("hide");
            studentinside.classList.add("hide");
            Feedbackpage.classList.add("hide");
        } else if (id.value === "admission") {
            admissionbar.classList.remove("hide");
            choosingformbtns.classList.remove("hide");
            dashboardbar.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.add("hide");
            applysuggestion.classList.add("hide");
            studentinside.classList.add("hide");
            Feedbackpage.classList.add("hide");
        } else if (id.value === "teacher") {
            dashboardbar.classList.add("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.remove("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.add("hide");
            applysuggestion.classList.add("hide");
            Feedbackpage.classList.add("hide");
            studentinside.classList.add("hide");
        } else if (id.value === "student") {
            dashboardbar.classList.add("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.remove("hide");
            studentinside.classList.remove("hide");
            Chatpage.classList.add("hide");
            applysuggestion.classList.add("hide");
            Feedbackpage.classList.add("hide");
        } else if (id.value === "chats") {
            dashboardbar.classList.add("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.remove("hide");
            applysuggestion.classList.add("hide");
            Feedbackpage.classList.add("hide");
            studentinside.classList.add("hide");
        } else if (id.value === "apply") {
            applysuggestion.classList.remove("hide");
            dashboardbar.classList.add("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.add("hide");
            Feedbackpage.classList.add("hide");
            studentinside.classList.add("hide");
        } else if (id.value === "feedback") {
            dashboardbar.classList.add("hide");
            admissionbar.classList.add("hide");
            choosingformbtns.classList.add("hide");
            Teacherpage.classList.add("hide");
            Studentpage.classList.add("hide");
            Chatpage.classList.add("hide");
            applysuggestion.classList.add("hide");
            Feedbackpage.classList.remove("hide");
            studentinside.classList.add("hide");
        } else if (id.value === "logout") {
            if (confirm("Are You Sure to Logout")) {
                window.location.href = "login.html";
            }
        }
    });
});

//When Clicked by Admission Btn there will show two option of studenform and teacherform
sidelist.forEach((list) => {
    list.addEventListener("click", () => {
        let listid = list.getAttributeNode("id");
        if (listid.value === "admission") {
            choosingformbtns.classList.remove("hide");
            studentformbtn.addEventListener("click", () => {
                choosingformbtns.classList.add("hide");
                formbtnouter.forEach((btnouter) => {
                    btnouter.classList.add("hide");
                });
                admicontainer.classList.remove("hide");
                admicontainer2.classList.add("hide");
            });
            teacherformbtn.addEventListener("click", () => {
                choosingformbtns.classList.add("hide");
                formbtnouter.forEach((btnouter) => {
                    btnouter.classList.add("hide");
                });
                admicontainer.classList.add("hide");
                admicontainer2.classList.remove("hide");
            });
        }
    });
});

//When Form Opened but the User Click by Go Back This Function Will Call
let go_back_form = () => {
    choosingformbtns.classList.remove("hide");
    admicontainer.classList.add("hide");
    admicontainer2.classList.add("hide");
    formbtnouter.forEach((btnouter) => {
        btnouter.classList.remove("hide");
    });
}

//Save Student Form Data in Local Storage
form.addEventListener("submit", (Event) => {
    let username = Event.target.username.value;
    let FName = Event.target.FName.value;
    let Gender = Event.target.Gender.value;
    let Faculty = Event.target.Faculty.value;
    let Phone = Event.target.Phone.value;
    let Email = Event.target.Email.value;
    let Shift = Event.target.Shift.value;
    let Age = Event.target.Age.value;
    let Semester = Event.target.Semester.value;
    let Password = Event.target.Password.value;
    Event.preventDefault();
    //Creat Object for Every Student
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    Studentdata.push({
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
        Data_Structurequiz:0,
        Data_Structurexam:0,
        Data_Structurtest:0,
        Programmingquiz:0,
        Programmingexam:0,
        Programmingtest:0,
        Networkquiz:0,
        Networkexam:0,
        Networktest:0,
        Graphicsquiz:0,
        Graphicsexam:0,
        Graphicstest:0,
    });
    localStorage.setItem("Studentdetails", JSON.stringify(Studentdata));
    //POpup message
    addedmsgtxt.innerText = "✔ Student Added Successfully";
    popupmsg();
    //Auto Clear Form When Submit
    Event.target.reset();
    //Show Data of Website from Local Storage
    displaystudents();
    //Add Notification
    addnotification(`New Student Added ${username}.`);
    //When Form Submit web should go back to to choose admission person student or Teacher
    choosingformbtns.classList.remove("hide");
    formbtnouter.forEach((btnouter) => {
        btnouter.classList.remove("hide");
    });
    admicontainer.classList.add("hide");
    //Don't Refresh Web when submit
    Event.preventDefault();
});

//Display and Add Data to Website from Local Storage of Students
let displaystudents = () => {
    editmode = "Student";
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    let data = "";
    //Show All Student Data
    Studentdata.forEach((Element, ind) => {
        Data_Structurequiz = Element.Data_Structurequiz;
        Data_Structurexam = Element.Data_Structurexam;
        Data_Structurtest = Element.Data_Structurtest;
        Programmingquiz = Element.Programmingquiz;
        Programmingexam = Element.Programmingexam;
        Programmingtest = Element.Programmingtest;
        Networkquiz = Element.Networkquiz;
        Networkexam = Element.Networkexam;
        Networktest = Element.Networktest;
        Graphicsquiz = Element.Graphicsquiz;
        Graphicsexam = Element.Graphicsexam;
        Graphicstest = Element.Graphicstest;
        data += `<tr>
            <td class="numbertd">${ind + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Age}</td>
            <td>${Element.Gender}</td>
            <td>${Element.Faculty}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Shift}</td>
            <td>${Element.Phone}</td>
            <td class="password">${Element.Password}</td>
            <td><a onclick = 'editstudent(${ind})' class="edit"><img src="icons/edit.svg" alt="Edit"></a></td>
            <td><a onclick = 'remove(${ind})' class="delete edit">✖</a></td>
        </tr>`;
    });
    //Add to Web
    tablebody.innerHTML = data;
};

//Save Teacher Form Data in Local Storage
teacherform.addEventListener("submit", (Event) => {
    let username = Event.target.username.value;
    let FName = Event.target.FName.value;
    let Gender = Event.target.Gender.value;
    let Faculty = Event.target.Faculty.value;
    let Phone = Event.target.Phone.value;
    let Email = Event.target.Email.value;
    let Shift = Event.target.Shift.value;
    let Age = Event.target.Age.value;
    let Semester = Event.target.Semester.value;
    let Password = Event.target.Password.value;
    Event.preventDefault();
    //Creat Object for Every Teacher
    let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
    Teacherdata.push({
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
    localStorage.setItem("Teacherdetails", JSON.stringify(Teacherdata));
    //POpup message
    addedmsgtxt.innerText = "✔ Teacher Added Successfully";
    popupmsg();
    //Auto Clear Form When Submit
    Event.target.reset();
    //Show Data of Website from Local Storage
    displayteachers();
    //Add Notification
    addnotification(`New Teachers Added ${username}.`);
    //Don't Refresh Web when submit
    //When Form Submit web should go back to to choose admission person student or Teacher
    choosingformbtns.classList.remove("hide");
    formbtnouter.forEach((btnouter) => {
        btnouter.classList.remove("hide");
    });
    admicontainer2.classList.add("hide");
    Event.preventDefault();
});

//Display Teacher Details add To Website Table from Local Storage
let displayteachers = () => {
    let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
    let data = "";
    editmode = "Teacher";
    //Show All Student Data
    Teacherdata.forEach((Element, ind) => {
        data += `<tr>
            <td class="numbertd">${ind + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Age}</td>
            <td>${Element.Gender}</td>
            <td>${Element.Faculty}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Shift}</td>
            <td>${Element.Phone}</td>
            <td class="password">${Element.Password}</td>
            <td><a onclick = 'editteacher(${ind})' class="edit"><img src="icons/edit.svg" alt="Edit"></a></td>
            <td><a onclick = 'removeteacher(${ind})' class="delete edit">✖</a></td>
        </tr>`;
    });
    //Add to Web
    teachertbody.innerHTML = data;
};
// Remove Teacher
let removeteacher = (ind) => {
    let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
    //Confirmation
    if (confirm(`Are you Sure to Delete ${Teacherdata[ind].username} Student`)) {
        Teacherdata.splice(ind, 1);
        localStorage.setItem("Teacherdetails", JSON.stringify(Teacherdata));
        displayteachers();
    }
}

//Remove Student
let remove = (ind) => {
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    //Confirmation
    if (confirm(`Are you Sure to Delete ${Studentdata[ind].username} Student`)) {
        Studentdata.splice(ind, 1);
        localStorage.setItem("Studentdetails", JSON.stringify(Studentdata));
        displaystudents();
    }
};

// edit Student Details
let editstudent = (index) => {
    main.classList.add("hide");
    menu_icon.classList.add("hide");
    formouter.classList.remove("hide");
    editform.classList.remove("hide");
    if (confirm("Are You Sure to Edit?")) {
            const studentdata = Studentdata[index];
            editusername.value = studentdata.username;
            editFName.value = studentdata.FName;
            editAge.value = studentdata.Age;
            editGender.value = studentdata.Gender;
            editFaculty.value = studentdata.Faculty;
            editSemester.value = studentdata.Semester;
            editEmail.value = studentdata.Email;
            editPhone.value = studentdata.Phone;
            editShift.value = studentdata.Shift;
            editPassword.value = studentdata.Password;
            editingindex = index;
            formsubmitstudent();
    } 
}

//Edit Teacher Details
let editteacher = (index) => {
    main.classList.add("hide");
    menu_icon.classList.add("hide");
    formouter.classList.remove("hide");
    editform.classList.remove("hide");
    if (confirm("Are You Sure to Edit?")) {
            let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
            const teacherdata = Teacherdata[index];
            editusername.value = teacherdata.username;
            editFName.value = teacherdata.FName;
            editAge.value = teacherdata.Age;
            editGender.value = teacherdata.Gender;
            editFaculty.value = teacherdata.Faculty;
            editSemester.value = teacherdata.Semester;
            editEmail.value = teacherdata.Email;
            editPhone.value = teacherdata.Phone;
            editShift.value = teacherdata.Shift;
            editPassword.value = teacherdata.Password;
            editingindex = index;
            formsubmitteacher();
    }
};

//Handle Student Edit from Submition
let formsubmitstudent = () => {
    editform.addEventListener("submit", (event) => {
        event.preventDefault();
        const updatedstudent = {
            username: editusername.value,
            FName: editFName.value,
            Gender: editGender.value,
            Faculty: editFaculty.value,
            Phone: editPhone.value,
            Email: editEmail.value,
            Shift: editShift.value,
            Age: editAge.value,
            Semester: editSemester.value,
            Password: editPassword.value,
            Data_Structurequiz:Data_Structurequiz,
            Data_Structurexam:Data_Structurexam,
            Data_Structurtest:Data_Structurtest,
            Programmingquiz:Programmingquiz,
            Programmingexam:Programmingexam,
            Programmingtest:Programmingtest,
            Networkquiz:Networkquiz,
            Networkexam:Networkexam,
            Networktest:Networktest,
            Graphicsquiz:Graphicsquiz,
            Graphicsexam:Graphicsexam,
            Graphicstest:Graphicstest,
        };
        //send data to store
        updatestudentdata(editingindex, updatedstudent);
    });
};

//Handle Student Edit from Submition of Teacher
let formsubmitteacher = () => {
    editform.addEventListener("submit", (event) => {
        event.preventDefault();
        const updatedteacher = {
            username: editusername.value,
            FName: editFName.value,
            Gender: editGender.value,
            Faculty: editFaculty.value,
            Phone: editPhone.value,
            Email: editEmail.value,
            Shift: editShift.value,
            Age: editAge.value,
            Semester: editSemester.value,
            Password: editPassword.value,
        };
        //send data to store
        updatedteacherdata(editingindex, updatedteacher);
    });
};

//Store data in Local Storage and Table of Studnet
let updatestudentdata = (index, updatedstudent) => {
    //store data in Local Storage 101/
    Studentdata[index] = updatedstudent;
    localStorage.setItem("Studentdetails", JSON.stringify(Studentdata));
    //popup message
    addedmsgtxt.innerText = "✔ Student Details Updated Successfully";
    addedmsgtxt.style.fontSize = "1.3rem";
    popupmsg();
    displaystudents();
    addnotification(
        `${Studentdata[index].username} Details Updated Successfully`
    );
};

//Store data in Local Storage and Table of Teacher
let updatedteacherdata = (index, updatedstudent) => {
    //store data in Local Storage
    Teacherdata[index] = updatedstudent;
    localStorage.setItem("Teacherdetails", JSON.stringify(Teacherdata));
    //popup message
    addedmsgtxt.innerText = "✔ Teacher Details Updated Successfully";
    addedmsgtxt.style.fontSize = "1.3rem";
    popupmsg();
    displayteachers();
    addnotification(
        `${Studentdata[index].username} Details Updated Successfully`
    );
};

//Add Notification
let addnotification = (message) => {
    //Creat List Item
    let notifcat = document.createElement("li");
    notifcat.classList.add("unread");
    notifcat.innerText = `${message}`;
    //Add to List of Notification
    notification.prepend(notifcat);
    //Notification Number Will Update
    countmsg++;
    msgnum.innerText = countmsg;
    
    // Mark as read when clicked
    notifcat.addEventListener("click", () => {
        notifcat.classList.remove("unread");
        notifcat.classList.add("read");
        // Update Message Count and Send
        if(countmsg >= 1){
        countmsg--;
        msgnum.innerText = countmsg;
        }
    });
};

notificationbtn.addEventListener("click", () => {
    if (!notibtn) {
        notification.classList.remove("hide");
        notibtn = true;
    } else if (notibtn) {
        notification.classList.add("hide");
        notibtn = false;
    }
});



// Chat Option
// DOM Elements
let chat_page = document.querySelector(".chat-page");
let chat_page_body = document.querySelector(".chat-page-body");
let chat_page_body2 = document.querySelector(".chat-page-body2");
let chat_inside = document.querySelector(".chat-inside");
// Chat Head
let chat_head = document.querySelector(".chat-inside .chat-head");
let chat_name = document.querySelector(".chat-head .name");
let first_letter = document.querySelector("#first-letter");
let goback_btn = document.querySelector(".gobackbtn #goback");
// Body of Chat
let chat_message_body = document.querySelector(".chat-body .chat-messages");
// Write message bar
let write_message = document.querySelector(".write-message");
let msg_input = document.querySelector("#msg-input");
let send_btn = document.querySelector("#send-btn");

// Add All Users to Chat and Display
//Teacher Details
let displayteacherschat = () => {
    let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
    let data = "";
    //Show All Teachers Data
    Teacherdata.forEach((Element, ind) => {
        data += `<div class="chat-row" onclick="teacherchatpage(${ind})">
            <div class="chatnamelogo">
            <div class="logo" id="first-letter">${Teacherdata[ind].username.charAt(0)}</div>
                <div class="namediv">
                    <h2 class="name">${Teacherdata[ind].username}</h2>
                </div>
            </div>
            <div class="messagenum">
            <span id="msgnumber">1</span>
            </div>
        </div>`;
    });
    //Add to Web
    chat_page_body.innerHTML = data;
};
//Student Details
let displaystudentschat = () => {
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    let data = "";
    //Show All Student Data
    Studentdata.forEach((Element, ind) => {
    data += `
        <div class="chat-row" onclick="studentchatpage(${ind})">
            <div class="chatnamelogo">
            <div class="logo" id="first-letter">${Studentdata[ind].username.charAt(0)}</div>
                <div class="namediv">
                    <h2 class="name">${Studentdata[ind].username}</h2>
                </div>
            </div>
            <div class="messagenum">
            <span id="msgnumber">1</span>
            </div>
        </div>`;
    });
    //Add to Web
    chat_page_body2.innerHTML = data;
};

// Teacher User Event When Click Chat Page Should Open
let teacherchatpage = (ind) => {
    
    chat_page.classList.add("hide");
    chat_inside.classList.remove("hide");
    let head = `
        <div class="chat-row">
            <div class="chatnamelogo">
                <div class="logo" id="first-letter">${Teacherdata[ind].username.charAt(0)}</div>
                    <div class="namediv">
                        <h2 class="name">${Teacherdata[ind].username}</h2>
                    </div>
                </div>
            <div class="gobackbtn">
                <button id="goback" onclick="go_back()"><img src="icons/corner-down-left.svg" alt="Go back">Back</button>
            </div>
        </div>`;
    chat_head.innerHTML = head;

    //Chat Body
    let chatbody = `
    <div class="auto-message">
        <div class="span">
            <span id="message-text">Now You Can Easly Chat in SUMS with ${Teacherdata[ind].username}</span>
        </div>
    </div>    
    <div class="send-messages">
        <div class="span">
        <span id="message-text">
            Hello How Are You I am ${Admin} SUMS Admin If You any Kind of
            Help I can Help with You!.Thanks
        </span>
        <div class="copy" onclick="copy()"><img src="icons/clipboard.svg" alt="copy"></div>
        </div>
    </div>
    <div class="receive-messages">
        <div class="span">
        <span id="message-text">
        Hello How Are You I am ${Teacherdata[ind].username} SUMS Student!.Thanks</span>
        <div class="copy" onclick="copy()"><img src="icons/clipboard.svg" alt="copy"></div>
        </div>
    </div>`;
    chat_message_body.innerHTML = chatbody;
}

// Student User Event When Click Chat Page Should Open
let studentchatpage = (ind) => {
    chat_page.classList.add("hide");
    chat_inside.classList.remove("hide");

    //Chat Header
    let head = `
    <div class="chat-head">
        <div class="chat-row">
            <div class="chatnamelogo">
                <div class="logo" id="first-letter">${Studentdata[ind].username.charAt(0)}</div>
                    <div class="namediv">
                        <h2 class="name">${Studentdata[ind].username}</h2>
                    </div>
                </div>
            <div class="gobackbtn">
                <button id="goback" onclick="go_back()"><img src="icons/corner-down-left.svg" alt="Go back">Back</button>
            </div>
        </div>
    </div>`;
    chat_head.innerHTML = head;

    //Chat Body
    let chatbody = `
    <div class="auto-message">
        <div class="span">
            <span id="message-text">Now You Can Easly Chat in SUMS with ${Studentdata[ind].username}</span>
        </div>
    </div>    
    <div class="receive-messages">
        <div class="span">
        <span id="message-text">
        Hello How Are You I am ${Studentdata[ind].username} SUMS Student!.Thanks</span>
        <div class="copy" onclick="copy()"><img src="icons/clipboard.svg" alt="copy"></div>
        </div>
    </div>`;
    chat_message_body.innerHTML = chatbody;
}

// When Chat Opened And User Want Go Back This Function Will Call
let go_back = () => {
    chat_page.classList.remove("hide");
    chat_inside.classList.add("hide");
}

//When User Write Message and Click by Enter Message Should Send 
msg_input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        send_btn.click();
    }
});

send_btn.addEventListener('click', () => {
    let message = msg_input.value;
    let sendmessage = `
    <div class="send-messages">
        <div class="span">
        <span id="message-text">${message}</span>
        <div class="copy" onclick="copy()"><img src="icons/clipboard.svg" alt="copy"></div>
        </div>
    </div>`;
    chat_message_body.innerHTML += sendmessage;
}); 

//Copy Message
let copy = () => {
    const text = document.querySelector("#message-text").innerText;
    navigator.clipboard.writeText(text).then(() => alert("copied Successfully"))
        .catch((err) => alert("filed to Copy"));
};

//Apply Suggestions 
let apply_table_body = document.querySelector(".apply_body");

//Creat Function to Show All Applications
let displayapplications = () => {
    // Receive Data From Local Storage for FeedBack
    let Apply_Details = JSON.parse(localStorage.getItem("apply_suggestions")) ?? [];
    let data = '';
    Apply_Details.forEach((element, index) => {
        data += `<tr>
            <td class="numbertd">${index + 1}</td>
            <td>${element.username}</td>
            <td>${element.FName}</td>
            <td>${element.Age}</td>
            <td>${element.Gender}</td>
            <td>${element.Faculty}</td>
            <td>${element.Semester}</td>
            <td>${element.Shift}</td>
            <td>${element.Phone}</td>
            <td class="password">${element.Password}</td>
        </tr>`;
    });
    apply_table_body.innerHTML = data;
}

// FeedBack Option
let feedback_body = document.querySelector(".feedback-body");

// Creat Function to Show All Feedbacks
let displayfeedbacks = () => {
    // Receive Data From Local Storage for FeedBack
    FeedBack = JSON.parse(localStorage.getItem("Feedbacks")) ?? [];
    let data = '';
    FeedBack.forEach((element, index) => {
        data += 
            `<tr>
            <td>${index+1}</td>
            <td>${FeedBack[index].rate}</td>
            <td>${FeedBack[index].position}</td>
            <td>${FeedBack[index].feedback}</td>
            </tr>`;
    });
    feedback_body.innerHTML = data;
}

// Dashbooard
//DOM Elements
let recent_teachers_body = document.querySelector("#recent-teachers");
let recent_students_body = document.querySelector("#recent-students");
let total_applicants = document.getElementById("total-applicants");
let total_teachers = document.getElementById("total_teachers");
let total_students = document.getElementById("total_students"); 

// Number
let applicants = 0;
let teachersapplicant = 0;
let studentsapplicant = 0;

let dashboard = () => {
    //Add 5 Users to Recent
    recent_students();
    recent_teachers();
}

//Add 5 Students to Recent Appicants
let recent_students = () => {
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    let data = "";
    let num=1;
    //size
    let size = [];
    if(Studentdata.length >= 5){
        size = Studentdata.slice(-5);
    }
    
    //Show All Student Data
    if(size.length > 4){
        for(let i=0;i<5;i++){
            applicants++;
            total_applicants.innerText = applicants;
            studentsapplicant++;
            total_students.innerText = studentsapplicant;
            //Just Add 5 Users
            data += `<tr>
                <td class="numbertd">${num}</td>
                <td>${size[i].username}</td>
                <td>${size[i].FName}</td>
                <td>${size[i].Age}</td>
                <td>${size[i].Gender}</td>
                <td>${size[i].Faculty}</td>
                <td>${size[i].Semester}</td>
                <td>${size[i].Shift}</td>
                <td>${size[i].Phone}</td>
                <td class="password">${size[i].Password}</td>
            </tr>`;
            num++;
        }
        recent_students_body.innerHTML = data;
    }
    else {
    //Add to Web
    Studentdata.forEach((Element, ind) => {
        applicants++;
        total_applicants.innerText = applicants;
        studentsapplicant++;
        total_students.innerText = studentsapplicant;
        data += `<tr>
            <td class="numbertd">${ind + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Age}</td>
            <td>${Element.Gender}</td>
            <td>${Element.Faculty}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Shift}</td>
            <td>${Element.Phone}</td>
            <td class="password">${Element.Password}</td>
        </tr>`;
    });
    //Add to Web
    recent_students_body.innerHTML = data;
    }
}

//Add 5 Teachers to Recent Appicants
let recent_teachers = () => {
    let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
    let data = "";
    let num=1;
    //size
    let size = [];
    if(Teacherdata.length >= 5){
        size = Teacherdata.slice(-5);
    }
    //Show All Student Data
    if(size.length > 4){
        for(let i=0;i<5;i++){
            applicants++;
            total_applicants.innerText = applicants;
            teachersapplicant++;
            total_teachers.innerText = teachersapplicant;
            //Just Add 5 Users
            data += `<tr>
                <td class="numbertd">${num}</td>
                <td>${size[i].username}</td>
                <td>${size[i].FName}</td>
                <td>${size[i].Age}</td>
                <td>${size[i].Gender}</td>
                <td>${size[i].Faculty}</td>
                <td>${size[i].Semester}</td>
                <td>${size[i].Shift}</td>
                <td>${size[i].Phone}</td>
                <td class="password">${size[i].Password}</td>
            </tr>`;
            num++;
        }
        recent_teachers_body.innerHTML = data;
    }
    else {
    Teacherdata.forEach((Element, ind) => {
        applicants++;
        total_applicants.innerText = applicants;
        teachersapplicant++;
        total_teachers.innerText = teachersapplicant;
        data += `<tr>
            <td class="numbertd">${ind + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Age}</td>
            <td>${Element.Gender}</td>
            <td>${Element.Faculty}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Shift}</td>
            <td>${Element.Phone}</td>
            <td class="password">${Element.Password}</td>
        </tr>`;
    });
    //Add to Web
    recent_teachers_body.innerHTML = data;
    }
}

//When Website Load Student Data Should be Load
window.onload = () => {
    toptext.innerText = `Welcome Mr. ${Admin} to SUMS(Smart University Management System)`;
    displaystudents();
    displayteachers();
    displaystudentschat();
    displayteacherschat();
    displayfeedbacks();
    dashboard();
    viewdetails();
    displayapplications();
};