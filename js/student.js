//Receive Data From Local Storage
let Studentdata = JSON.parse(localStorage.getItem("Studentdetails")) ?? [];
let Teacherdata = JSON.parse(localStorage.getItem("Teacherdetails")) ?? [];
//Receive Index by Which User Login
let userindex = JSON.parse(localStorage.getItem("userindexST")) ?? [];
//When Specific Student Login TO System His Details Will Send to Student
let student = Studentdata[userindex];

// Sidebar Elements
let sidelistt = document.querySelectorAll(".side li");
let personal_detailssidebar = document.getElementById("personal-details");
let personalbody = document.getElementById("personal-body");
let addresultsidebar = document.getElementById("addresult");
let result_body = document.querySelector(".result-body");
let viewstudentsidebar = document.getElementById("viewstudent");
let chatsidebar = document.getElementById("chats");
let feedbacksidebar = document.getElementById("feedback");

//DOM Elements
let feedbackform = document.querySelector(".feedbackform");
let welcome_msg = document.querySelector(".welcome-msg");

//POPUP Message
let addedmsg = document.querySelector(".added-msg");
let msgbutton = document.querySelector(".cross");

//Options Elements
let chats = document.querySelector(".chat");
let profile = document.querySelector(".profile");
let result = document.querySelector(".result");
let feedback = document.querySelector(".feedback");

//Side Bar Events
sidelistt.forEach((list) => {
    list.addEventListener("click", () => {
        let id = list.getAttributeNode("id");
        if (id.value === "personal-details") {
            profile.classList.remove("hide");
            chats.classList.add("hide");
            result.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "addresult") {
            result.classList.remove("hide");
            profile.classList.add("hide");
            chats.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "chats") {
            profile.classList.add("hide");
            chats.classList.remove("hide");
            result.classList.add("hide");
            feedback.classList.add("hide");
        } else if (id.value === "feedback") {
            feedback.classList.remove("hide");
            profile.classList.add("hide");
            chats.classList.add("hide");
            result.classList.add("hide");
        } else if (id.value === "logout") {
            if (confirm("Are You Sure to Logout")) {
                window.location.href = "login.html";
            }
        }
    });
});

//When Student Send Feedback this Message will Show
msgbutton.addEventListener("click", () => {
    addedmsg.classList.add("hide");
});

//Popup Message
//Show Popup of Added Student
let popupmsg = () => {
    addedmsg.classList.remove("hide");
    setTimeout(() => {
        addedmsg.classList.add("hide");
    }, 6000);
};

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
                            <span class="name">&nbsp;${student.username}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">FName&nbsp;</span>
                            <span class="FName">&nbsp;${student.FName}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Age&nbsp;</span>
                            <span class="Age">&nbsp;${student.Age}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Gender&nbsp;</span>
                            <span class="Gender">&nbsp;${student.Gender}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Faculty&nbsp;</span>
                            <span class="Faculty">&nbsp;${student.Faculty}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Semester&nbsp;</span>
                            <span class="Semester">&nbsp;${student.Semester}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Shift&nbsp;</span>
                            <span class="Shift">&nbsp;${student.Shift}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Phone&nbsp;</span>
                            <span class="Phone">&nbsp;${student.Phone}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Email&nbsp;</span>
                            <span class="Phone">&nbsp;${student.Email}</span>
                        </div>
                        <div class="databox">
                            <span class="firstdata">Password&nbsp;</span>
                            <span class="Password">&nbsp;${student.Password}</span>
                        </div>`;
    personalbody.innerHTML = data;
};

//Find Subject Grade
let grade = (mark) => {
    if(mark>=90 && mark <=100){
        return 'A';
    } else if(mark<90 && mark>=80){
        return 'B';
    } else if(mark<80 && mark>=70){
        return 'C';
    } else if(mark < 70 && mark >= 60){
        return 'D';
    } else if(mark < 60 && mark >=55){
        return 'E';
    } else if(mark < 55 && mark >=0){
        return 'F';
    }  else{
        return 'N';
    }
}

//Show All Result
let showallresult = () => {
    let totalmark = Number(student.Data_Structurequiz) + Number(student.Data_Structurexam) + Number(student.Data_Structurtest) + Number(student.Programmingquiz) + Number(student.Programmingexam) + Number(student.Programmingtest) + Number(student.Networkquiz) + Number(student.Networkexam) + Number(student.Networktest) + Number(student.Graphicsquiz) + Number(student.Graphicsexam) + Number(student.Graphicstest);
    let data = "";
        data = `
                            <tr>
                                <td id="subject">Data_Structure</td>
                                <td id="sub1quize">${student.Data_Structurequiz}</td>
                                <td id="sub1exam">${student.Data_Structurexam}</td>
                                <td id="sub1test">${student.Data_Structurtest}</td>
                                <td id="sub1grade">${grade(Number(student.Data_Structurequiz) + Number(student.Data_Structurexam) + Number(student.Data_Structurtest))}</td>
                                <th id="sub1percentage">${Number(student.Data_Structurequiz) + Number(student.Data_Structurexam) + Number(student.Data_Structurtest)}%</th>
                                <td id="sub1total">${Number(student.Data_Structurequiz) + Number(student.Data_Structurexam) + Number(student.Data_Structurtest)}</td>
                            </tr>
                            <tr>
                                <td id="subject">Programming</td>
                                <td id="sub2quize">${student.Programmingquiz}</td>
                                <td id="sub2exam">${student.Programmingexam}</td>
                                <td id="sub2test">${student.Programmingtest}</td>
                                <td id="sub2grade">${grade(Number(student.Programmingquiz) + Number(student.Programmingexam) + Number(student.Programmingtest))}</td>
                                <th id="sub2percentage">${Number(student.Programmingquiz) + Number(student.Programmingexam) + Number(student.Programmingtest)}%</th>
                                <td id="sub2total">${Number(student.Programmingquiz) + Number(student.Programmingexam) + Number(student.Programmingtest)}</td>
                            </tr>
                            <tr>
                                <td id="subject">Network</td>
                                <td id="sub3quize">${student.Networkquiz}</td>
                                <td id="sub3exam">${student.Networkexam}</td>
                                <td id="sub3test">${student.Networktest}</td>
                                <td id="sub3grade">${grade(Number(student.Networkquiz) + Number(student.Networkexam) + Number(student.Networktest))}</td>
                                <th id="sub3percentage">${Number(student.Networkquiz) + Number(student.Networkexam) + Number(student.Networktest)}%</th>
                                <td id="sub3total">${Number(student.Networkquiz) + Number(student.Networkexam) + Number(student.Networktest)}</td>
                            </tr>
                            <tr>
                                <td id="subject">Graphics</td>
                                <td id="sub4quize">${student.Graphicsquiz}</td>
                                <td id="sub4exam">${student.Graphicsexam}</td>
                                <td id="sub4test">${student.Graphicstest}</td>
                                <td id="sub4grade">${grade(Number(student.Graphicsquiz) + Number(student.Graphicsexam) + Number(student.Graphicstest))}</td>
                                <th id="sub4percentage">${Number(student.Graphicsquiz) + Number(student.Graphicsexam) + Number(student.Graphicstest)}%</th>
                                <td id="sub4total">${Number(student.Graphicsquiz) + Number(student.Graphicsexam) + Number(student.Graphicstest)}</td>
                            </tr>
                            <tr>
                                <th colspan="2" class="title">Overal Grade</th>
                                <th class="data">${grade(totalmark*100/400)}</th>
                                <th colspan="2" class="title">Total</th>
                                <th colspan="2" class="data">${totalmark}</th>
                            </tr>
                            <tr>
                                <th colspan="2" class="title title3">Overal Percentage</th>
                                <th colspan="1" class="data">${totalmark*100/400}%</th>
                                <th colspan="2" class="title">Grade Point Average</th>
                                <th colspan="2" class="data">${totalmark * 4 / 400}</th>
                            </tr>
        `;
    result_body.innerHTML = data;
};

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
    if(Element.Faculty === student.Faculty && Element.Semester === student.Semester && Element.Shift === student.Shift){
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
        }
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
    if(Element.Faculty === student.Faculty && Element.Semester === student.Semester && Element.Shift === student.Shift){
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
                <button id="goback" onclick="go_back()">↩ Back</button>
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
    <div class="receive-messages">
        <div class="span">
        <span id="message-text">
        Hello How Are You I am ${Teacherdata[ind].username} SUMS Teacher!.Thanks</span>
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
    msg_input.value.reset();
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
        localStorage.setItem("Feedbacks",JSON.stringify(feedbackObject));
        popupmsg();
        feedbackform.reset();
        event.preventDefault();
    });
}

window.onload = () => {
    personal();
    showallresult();
    displaystudentschat();
    displayteacherschat();
    feedbackoption();
    welcome_msg.innerText = `Welcome Mr. ${student.username} to SUMS(Smart University Management System)`;
};
