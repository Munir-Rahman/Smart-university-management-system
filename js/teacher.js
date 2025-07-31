//Receive Data From Local Storage
let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
//Receive Index by Which User Login
let userindex = JSON.parse(localStorage.getItem("userindexTC")) ?? [];
//Login Teacher
let Teacher = Teacherdata[userindex];

// Sidebar Elements
let sidelist = document.querySelectorAll(".side li");
let personal_detailssidebar = document.getElementById("personal-details");
let addresultsidebar = document.getElementById("addresult");
let viewstudentsidebar = document.getElementById("viewstudent");
let chatsidebar = document.getElementById("chats");
let feedbacksidebar = document.getElementById("feedback");
let main = document.querySelector("main");

//Edit Elements
let editformouter = document.querySelector(".edit-form-outer");
const editform = document.querySelector(".edit");
const editquize = document.querySelector("#editquize");
const editexam = document.querySelector("#editexam");
const edittest = document.querySelector("#edittest");
const cross = document.querySelector(".cross");

//DOM Elements
let allstudent = document.querySelector(".all-students .tbody");
let allresult = document.querySelector(".result-body");
let personalbody = document.querySelector("#personalbody");
let top_text = document.querySelector(".result-section .top-text");
let feedbackform = document.querySelector(".feedbackform");
let welcome_msg = document.querySelector(".welcome-msg");

//Count Notifications Messages
let countmsg = 0;

//Notification Elements
let notification = document.querySelector(".menu");
let notifcatlist = document.querySelectorAll(".menu li");
let notificationbtn = document.querySelector("#notification-btn");
let msgnum = document.querySelector(".notification .number");

msgnum.innerText = countmsg;

//Options Elements
let chats = document.querySelector(".chat");
let profile = document.querySelector(".profile");
let result = document.querySelector(".result");
let all_students = document.querySelector(".all-students");
let feedback = document.querySelector(".feedback");

//POPUP Messages
let added_msg = document.querySelector(".added-msg");
let msgbutton = document.querySelector(".cross2");
let popuptext = document.getElementById("popuptext");

//When Student Send Feedback this Message will Show
msgbutton.addEventListener("click", () => {
    added_msg.classList.add("hide");
});
popuptext.innerText = "✔ Student Marks Updated Successfully";
//Popup Message
//Show Popup of Added Student
let popupmsg = () => {
    added_msg.classList.remove("hide");
    setTimeout(() => {
        added_msg.classList.add("hide");
    }, 6000);
};

//Side Bar Events
sidelist.forEach((list) => {
    list.addEventListener("click", () => {
        let id = list.getAttributeNode("id");
        if (id.value === "personal-details") {
            profile.classList.remove("hide");
            chats.classList.add("hide");
            result.classList.add("hide");
            all_students.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "addresult") {
            result.classList.remove("hide");
            profile.classList.add("hide");
            chats.classList.add("hide");
            all_students.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "viewstudent") {
            all_students.classList.remove("hide");
            profile.classList.add("hide");
            chats.classList.add("hide");
            result.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "chats") {
            profile.classList.add("hide");
            chats.classList.remove("hide");
            result.classList.add("hide");
            all_students.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "feedback") {
            feedback.classList.remove("hide");
            profile.classList.add("hide");
            chats.classList.add("hide");
            result.classList.add("hide");
            all_students.classList.add("hide");
        } else if (id.value === "logout") {
            if (confirm("Are You Sure to Logout")) {
                window.location.href = "login.html";
            }
        }
    });
});

//Mobile Side Menu
let mobile_menu = document.querySelector(".mobile-menu")
let side_icon = document.getElementById("side-icon");
side_icon.addEventListener('click', () => {
    mobile_menu.classList.toggle("hide");
});

//Personal Details
let personal = () => {
    let data = `
                        <div class="databox">
                            <span class="firstdata">Name&nbsp;</span>
                            <span class="name">&nbsp;${Teacher.username}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Subject&nbsp;</span>
                            <span class="FName">&nbsp;${Teacher.FName}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Age&nbsp;</span>
                            <span class="Age">&nbsp;${Teacher.Age}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Gender&nbsp;</span>
                            <span class="Gender">&nbsp;${Teacher.Gender}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Faculty&nbsp;</span>
                            <span class="Faculty">&nbsp;${Teacher.Faculty}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Semester&nbsp;</span>
                            <span class="Semester">&nbsp;${Teacher.Semester}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Shift&nbsp;</span>
                            <span class="Shift">&nbsp;${Teacher.Shift}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Phone&nbsp;</span>
                            <span class="Phone">&nbsp;${Teacher.Phone}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Email&nbsp;</span>
                            <span class="Phone">&nbsp;${Teacher.Email}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Password&nbsp;</span>
                            <span class="Password">&nbsp;${Teacher.Password}</span>
                        </div>`;
                        personalbody.innerHTML = data;
}


//Show All Student Results
let showallresult = () => {
    let data = '';
    Studentdata.forEach((Element,index) => {
        //Find Own Students
        if(Teacher.FName === "Data_Structure" && Teacher.Shift === Studentdata[index].Shift && Teacher.Faculty === Studentdata[index].Faculty && Teacher.Semester === Studentdata[index].Semester){
            top_text.innerText = "Add Data_Structure Marks";
            data += `
        <tr>
            <td>${index + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Data_Structurequiz}</td>
            <td>${Element.Data_Structurexam}</td>
            <td>${Element.Data_Structurtest}</td>
            <td id="total">${Number(Element.Data_Structurequiz) + Number(Element.Data_Structurexam) + Number(Element.Data_Structurtest)}</td>
            <td><a href="#" onclick = 'editstudent(${index},"Data_Structure")'>🖊Edit</a></td>
        </tr>
        `;
        } else if(Teacher.FName === "Programming" && Teacher.Shift === Studentdata[index].Shift && Teacher.Faculty === Studentdata[index].Faculty && Teacher.Semester === Studentdata[index].Semester){
            top_text.innerText = "Add Programming Marks";
            data += `
        <tr>
            <td>${index + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Programmingquiz}</td>
            <td>${Element.Programmingexam}</td>
            <td>${Element.Programmingtest}</td>
            <td id="total">${Number(Element.Programmingquiz) + Number(Element.Programmingexam) + Number(Element.Programmingtest)}</td>
            <td><a href="#" onclick = 'editstudent(${index},"Programming")'>🖊Edit</a></td>
        </tr>
        `;
        } else if(Teacher.FName === "Network" && Teacher.Shift === Studentdata[index].Shift && Teacher.Faculty === Studentdata[index].Faculty && Teacher.Semester === Studentdata[index].Semester){
            top_text.innerText = "Add Network Marks";
            data += `
        <tr>
            <td>${index + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Networkquiz}</td>
            <td>${Element.Networkexam}</td>
            <td>${Element.Networktest}</td>
            <td id="total">${Number(Element.Networkquiz) + Number(Element.Networkexam) + Number(Element.Networktest)}</td>
            <td><a href="#" onclick = 'editstudent(${index},"Network")'>🖊Edit</a></td>
        </tr>
        `;
        } else if(Teacher.FName === "Graphics" && Teacher.Shift === Studentdata[index].Shift && Teacher.Faculty === Studentdata[index].Faculty && Teacher.Semester === Studentdata[index].Semester){
            top_text.innerText = "Add Graphics Marks";
            data += `
        <tr>
            <td>${index + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Graphicsquiz}</td>
            <td>${Element.Graphicsexam}</td>
            <td>${Element.Graphicstest}</td>
            <td id="total">${Number(Element.Graphicsquiz) + Number(Element.Graphicsexam) + Number(Element.Graphicstest)}</td>
            <td><a href="#" onclick = 'editstudent(${index},"Graphics")'>🖊Edit</a></td>
        </tr>
        `;
        }
    });
    allresult.innerHTML = data;
}

let oldresult;

//Edit Student Marks
let editstudent = (index,sub) => {
    editformouter.classList.remove("hide");
    editform.classList.remove("hide");
    main.classList.add("hide");
    oldresult = Studentdata[index];
    if(sub === "Data_Structure"){
        editquize.value = oldresult.Data_Structurequiz;
        editexam.value = oldresult.Data_Structurexam;
        edittest.value = oldresult.Data_Structurtest;
    } else if(sub === "Programming"){
        editquize.value = oldresult.Programmingquiz;
        editexam.value = oldresult.Programmingexam;
        edittest.value = oldresult.Programmingtest;
    } else if(sub === "Network"){
        editquize.value = oldresult.Networkquiz;
        editexam.value = oldresult.Networkexam;
        edittest.value = oldresult.Networktest;
    } else if(sub === "Graphics"){
        editquize.value = oldresult.Graphicsquiz;
        editexam.value = oldresult.Graphicsexam;
        edittest.value = oldresult.Graphicstest;
    }
    // oldresult
    submitform(index,sub);
}

//Form Submit of Result Marks Added
let submitform = (index,sub) => {
    editform.addEventListener("submit", (event) => {
        event.preventDefault();
        if(sub === "Data_Structure"){
            const update = {
            username: Studentdata[index].username,
            FName: Studentdata[index].FName,
            Gender: Studentdata[index].Gender,
            Faculty: Studentdata[index].Faculty,
            Phone: Studentdata[index].Phone,
            Email: Studentdata[index].Email,
            Shift: Studentdata[index].Shift,
            Age: Studentdata[index].Age,
            Semester: Studentdata[index].Semester,
            Password: Studentdata[index].Password,    
            Data_Structurequiz:editquize.value,
            Data_Structurexam:editexam.value,
            Data_Structurtest:edittest.value,
            Programmingquiz:oldresult.Programmingquiz,
            Programmingexam:oldresult.Programmingexam,
            Programmingtest:oldresult.Programmingtest,
            Networkquiz:oldresult.Networkquiz,
            Networkexam:oldresult.Networkexam,
            Networktest:oldresult.Networktest,
            Graphicsquiz:oldresult.Graphicsquiz,
            Graphicsexam:oldresult.Graphicsexam,
            Graphicstest:oldresult.Graphicstest,
            }
            updatestudentdata(index,update);
        } else if(sub === "Programming"){
            const update = {
            username: Studentdata[index].username,
            FName: Studentdata[index].FName,
            Gender: Studentdata[index].Gender,
            Faculty: Studentdata[index].Faculty,
            Phone: Studentdata[index].Phone,
            Email: Studentdata[index].Email,
            Shift: Studentdata[index].Shift,
            Age: Studentdata[index].Age,
            Semester: Studentdata[index].Semester,
            Password: Studentdata[index].Password,
            Programmingquiz:editquize.value,
            Programmingexam:editexam.value,
            Programmingtest:edittest.value,
            Data_Structurequiz:oldresult.Data_Structurequiz,
            Data_Structurexam:oldresult.Data_Structurexam,
            Data_Structurtest:oldresult.Data_Structurtest,
            Networkquiz:oldresult.Networkquiz,
            Networkexam:oldresult.Networkexam,
            Networktest:oldresult.Networktest,
            Graphicsquiz:oldresult.Graphicsquiz,
            Graphicsexam:oldresult.Graphicsexam,
            Graphicstest:oldresult.Graphicstest,
            }
            updatestudentdata(index,update);
        } else if(sub === "Network"){
            const update = {
            username: Studentdata[index].username,
            FName: Studentdata[index].FName,
            Gender: Studentdata[index].Gender,
            Faculty: Studentdata[index].Faculty,
            Phone: Studentdata[index].Phone,
            Email: Studentdata[index].Email,
            Shift: Studentdata[index].Shift,
            Age: Studentdata[index].Age,
            Semester: Studentdata[index].Semester,
            Password: Studentdata[index].Password,
            Networkquiz:editquize.value,
            Networkexam:editexam.value,
            Networktest:edittest.value,
            Data_Structurequiz:oldresult.Data_Structurequiz,
            Data_Structurexam:oldresult.Data_Structurexam,
            Data_Structurtest:oldresult.Data_Structurtest,
            Programmingquiz:oldresult.Programmingquiz,
            Programmingexam:oldresult.Programmingexam,
            Programmingtest:oldresult.Programmingtest,
            Graphicsquiz:oldresult.Graphicsquiz,
            Graphicsexam:oldresult.Graphicsexam,
            Graphicstest:oldresult.Graphicstest,
            }
            updatestudentdata(index,update);
        } else if(sub === "Graphics"){
            const update = {
            username: Studentdata[index].username,
            FName: Studentdata[index].FName,
            Gender: Studentdata[index].Gender,
            Faculty: Studentdata[index].Faculty,
            Phone: Studentdata[index].Phone,
            Email: Studentdata[index].Email,
            Shift: Studentdata[index].Shift,
            Age: Studentdata[index].Age,
            Semester: Studentdata[index].Semester,
            Password: Studentdata[index].Password,
            Graphicsquiz:editquize.value,
            Graphicsexam:editexam.value,
            Graphicstest:edittest.value,
            Data_Structurequiz:oldresult.Data_Structurequiz,
            Data_Structurexam:oldresult.Data_Structurexam,
            Data_Structurtest:oldresult.Data_Structurtest,
            Programmingquiz:oldresult.Programmingquiz,
            Programmingexam:oldresult.Programmingexam,
            Programmingtest:oldresult.Programmingtest,
            Networkquiz:oldresult.Networkquiz,
            Networkexam:oldresult.Networkexam,
            Networktest:oldresult.Networktest,
            }
            updatestudentdata(index,update);
        }
        
    });
}

//Send Data to Store in Local Storage
let updatestudentdata = (index,update) => {
    // store data in Local Storage;
    Studentdata[index] = update;
    localStorage.setItem("Studentdetails", JSON.stringify(Studentdata));
    // showallresult();
    addnotification(
        `${Studentdata[index].username} Marks Updated Successfully`
    );
    popupmsg();
}

let closeeditmenu = () => {
    cross.addEventListener("click", () => {
        editformouter.classList.add("hide");
        editform.classList.add("hide");
        main.classList.remove("hide");
    });
}

//Show All Students in Student list
let showallstudent = () => {
    let data = '';
    Studentdata.forEach((Element,index) =>  {
        //Show All This Teacher Students
        if(Teacher.Shift === Studentdata[index].Shift && Teacher.Faculty === Studentdata[index].Faculty && Teacher.Semester === Studentdata[index].Semester){
            data += `
        <tr>
            <td>${index + 1}</td>
            <td>${Element.username}</td>
            <td>${Element.FName}</td>
            <td>${Element.Age}</td>
            <td>${Element.Gender}</td>
            <td>${Element.Faculty}</td>
            <td>${Element.Semester}</td>
            <td>${Element.Shift}</td>
            <td>${Element.Phone}</td>
        </tr>
        `;
        }
    });
    allstudent.innerHTML = data;
}   

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
        if(countmsg>0){
            countmsg--;
        }
        msgnum.innerText = countmsg;
    });
};

notificationbtn.addEventListener("click", () => {
    notification.classList.toggle("hide");
});

//Chat Option
let chat_page = document.querySelector(".chat-page");
let chat_page_body = document.querySelector(".chat-page-body");
let chat_page_body2 = document.querySelector(".chat-page-body2")
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

//Add All Teacher Students Details to Chat Page
let displaystudentschat = () => {
    let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
    let data = "";
    //Show All Student Data
    Studentdata.forEach((Element, ind) => {
     //Show All This Teacher Students
        if(Teacher.Shift === Studentdata[ind].Shift && Teacher.Faculty === Studentdata[ind].Faculty && Teacher.Semester === Studentdata[ind].Semester){
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
        }
    });
    //Add to Web
    chat_page_body2.innerHTML = data;
};

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
                <button id="goback" onclick="go_back()">↩ Back</button>
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

send_btn.addEventListener("click", () => {
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

//Feedback Option
let feedbackoption = () => {
    feedbackform.addEventListener('submit', (event) => {
        let position = event.target.position.value;
        let feedbackmessage = event.target.message.value;
        let rate = event.target.rate.value;

        let feedbackObject = JSON.parse(localStorage.getItem("Feedbacks")) ?? [];
        feedbackObject.push({
            position:position,
            rate:rate,
            feedback:feedbackmessage,
        });        
        popuptext.innerText = "✔ Feedback Send to Admin Successfully";
        popupmsg();
        localStorage.setItem("Feedbacks",JSON.stringify(feedbackObject));
        event.preventDefault();
    });
}

window.onload = () => {
    welcome_msg.innerText = `Welcome Mr. ${Teacher.username} to SUMS(Smart University Management System)`;
    personal();
    showallstudent();
    showallresult();
    closeeditmenu();
    displaystudentschat();
    feedbackoption();
}
