// ========================================
// ORIGINAL PHONE / PASSCODE LOGIC
// ========================================

const lockScreen = document.getElementById("lockScreen");
const passcodeScreen = document.getElementById("passcodeScreen");
const homeScreen = document.getElementById("homeScreen");

const messagesScreen = document.getElementById("messagesScreen");
const chatScreen = document.getElementById("chatScreen");

const numberButtons = document.querySelectorAll(".number");
const dots = document.querySelectorAll(".dot");
const deleteButton = document.getElementById("deleteButton");


// Adrien's passcode
const correctPasscode = "280905";

let enteredPasscode = "";


// ========================================
// OPEN PASSCODE SCREEN
// ========================================

lockScreen.addEventListener("click", function () {

    lockScreen.classList.add("hidden");

    passcodeScreen.classList.remove("hidden");

});


// ========================================
// NUMBER BUTTONS
// ========================================

numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (enteredPasscode.length < 6) {

            enteredPasscode += button.dataset.number;

            updateDots();

        }

        if (enteredPasscode.length === 6) {

            checkPasscode();

        }

    });

});


// ========================================
// UPDATE PASSCODE DOTS
// ========================================

function updateDots() {

    dots.forEach(function (dot, index) {

        if (index < enteredPasscode.length) {

            dot.classList.add("filled");

        }

        else {

            dot.classList.remove("filled");

        }

    });

}


// ========================================
// CHECK PASSCODE
// ========================================

function checkPasscode() {

    if (enteredPasscode === correctPasscode) {

        passcodeScreen.classList.add("hidden");

        homeScreen.classList.remove("hidden");

    }

    else {

        enteredPasscode = "";

        updateDots();

        alert("Incorrect Passcode");

    }

}


// ========================================
// DELETE BUTTON
// ========================================

deleteButton.addEventListener("click", function (event) {

    event.stopPropagation();

    enteredPasscode =
        enteredPasscode.slice(0, -1);

    updateDots();

});



// ========================================
// MESSAGES
// ========================================

const messagesApp =
    document.getElementById("messagesApp");

const messagesBack =
    document.getElementById("messagesBack");

const chatBack =
    document.getElementById("chatBack");

const chatMessages =
    document.getElementById("chatMessages");

const chatName =
    document.getElementById("chatName");

const chatAvatar =
    document.getElementById("chatAvatar");

const chatStatus =
    document.getElementById("chatStatus");

const unknownResponse =
    document.getElementById("unknownResponse");

const replyUnknown =
    document.getElementById("replyUnknown");

const messageBadge =
    document.getElementById("messageBadge");

const unknownPreview =
    document.getElementById("unknownPreview");


let unknownOpened = false;
let unknownBlocked = false;
let currentChat = "";



// ========================================
// CHAT DATA
// ========================================

const chats = {

    emma: {

        name: "Emma",

        avatar: "E",

        status: "Read only",

        messages: [

            date("June 24, 2026"),

            out("Thks little sis🤣", "16:49"),

            incoming("💀", "16:49"),

            out("Tell your mom to call me", "16:50"),

            incoming("Tell her yourself", "16:50"),

            out("She's not picking up", "16:51"),


            date("June 29, 2026"),

            incoming(
                "You took my mom's car?",
                "07:51"
            ),

            out(
                "Yea mine is in repair",
                "08:05"
            ),

            incoming("Again?", "08:05"),

            incoming(
                "You are such a bad driver😌💀",
                "08:05"
            ),

            out(
                "Blame people on the road",
                "08:10"
            ),

            incoming(
                "Yea of course. Come pick me up then",
                "08:15"
            ),

            out(
                "Where and when",
                "08:15"
            ),

            incoming(
                "At the entrance at 2 pm.",
                "08:20"
            ),

            incoming(
                "Don't be late like last time",
                "08:20"
            ),

            out(
                "Yes boss",
                "08:20"
            ),

            out(
                "I'm here",
                "13:57"
            ),

            call(
                "out",
                "Voice call",
                "46 sec",
                "16:58"
            ),


            date("August 05, 2026"),

            out(
                "When you come home call me",
                "14:35"
            ),

            incoming("Ok?", "14:40"),

            call(
                "in",
                "Missed Voice call",
                "Tap to call back",
                "15:10"
            ),

            incoming(
                "You told me to call you now you ain't even picking up!🙄",
                "15:15"
            ),


            date("August 19, 2026"),

            out(
                "Got the tickets",
                "17:04"
            ),

            incoming(
                "Yes!! Thks cousin",
                "17:05"
            ),

            out(
                "Don't tell your mom or ill get scolded again for spoiling you",
                "17:05"
            ),


            date("August 25, 2026"),

            call(
                "out",
                "Video call",
                "1 min 24 sec",
                "16:09"
            ),

            incoming(
                "Thks frat boy",
                "17:09"
            ),

            out(
                "Frat what?",
                "17:09"
            ),


            date("September 03, 2026"),

            call(
                "in",
                "Voice call",
                "2 min 19 sec",
                "09:06"
            ),

            incoming(
                "I'm sitting in it",
                "09:23"
            ),

            out(
                "Dont scratch it",
                "09:25"
            ),


            date("September 15, 2026"),

            incoming(
                "Where the fuck are you!?!",
                "07:05"
            ),

            incoming(
                "You are worrying my mom",
                "07:24"
            ),

            incoming(
                "And me 💀",
                "07:25"
            ),

            incoming(
                "I'm in front of your apartment",
                "07:40"
            ),

            call(
                "in",
                "Missed Voice call",
                "Tap to call back",
                "07:40"
            ),

            incoming(
                "Your car is here. I dont understand",
                "07:45"
            ),

            incoming(
                "I can hear your phone ringing inside",
                "07:50"
            ),

            call(
                "in",
                "Missed Voice call",
                "Tap to call back",
                "08:00"
            ),


            date("September 16, 2026"),

            call(
                "out",
                "Missed video call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed video call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed Voice call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed Voice call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed Voice call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed Voice call",
                "No answer",
                "03:32"
            ),

            call(
                "out",
                "Missed Voice call",
                "No answer",
                "03:32"
            )

        ]

    },


    auntie: {

        name: "Auntie",

        avatar: "A",

        status: "Read only",

        messages: [

            date("July 15, 2026"),

            incoming(
                "Can you come fetch me? I'm at the red section.",
                "15:43"
            ),

            out(
                "Yea, ill leave the office in 20 mins",
                "15:44"
            ),

            incoming(
                "Thks son",
                "15:44"
            ),


            date("August 05, 2026"),

            out(
                "Auntie can you lend me your car, mine broke",
                "14:30"
            ),

            incoming(
                "Emma took it\nShe'll be back from uni in 30 mins\nAsk her",
                "14:30"
            ),

            out(
                "K thks",
                "14:31"
            ),


            date("August 06, 2026"),

            incoming(
                "Don't forget to have dinner. I put it in the fridge",
                "15:50"
            ),


            date("August 18, 2026"),

            incoming(
                "Keys in the pink bag",
                "10:23"
            ),

            out("Thks", "11:00"),

            out("Got it", "11:05"),


            date("August 25, 2026"),

            out(
                "I'll dine with colleagues tonight.",
                "05:27"
            ),

            incoming(
                "Have a nice time. Don't drink too much",
                "06:00"
            ),


            date("August 31, 2026"),

            incoming(
                "Come see me now",
                "16:29"
            ),

            out(
                "Something happened?",
                "16:29"
            ),


            date("September 02, 2026"),

            out(
                "Auntie my new car will be coming tomorrow. Your address is still on my documents.",
                "08:32"
            ),

            incoming(
                "Ok what time?",
                "12:33"
            ),

            out(
                "Around 9 am. I'll be at work",
                "12:33"
            ),

            incoming(
                "Emma will be home see with her",
                "12:33"
            ),


            date("September 14, 2026"),

            call(
                "in",
                "Missed voice call",
                "Tap to call back",
                "22:58"
            ),

            call(
                "in",
                "Missed voice call",
                "Tap to call back",
                "23:01"
            ),

            incoming(
                "Where are you",
                "23:15"
            ),

            incoming(
                "It's past 11 pm",
                "23:16"
            ),


            date("September 15, 2026"),

            call(
                "in",
                "Missed voice call",
                "Tap to call back",
                "06:00"
            ),

            incoming(
                "Are you back home?",
                "06:10"
            ),

            incoming(
                "I'm getting worried Adrien. Can you please call when you get back?",
                "06:42"
            ),

            incoming(
                "Emma is coming to your place to check up on you",
                "07:05"
            ),

            incoming(
                "Adrien where are you?",
                "19:44"
            )

        ]

    },


    ced: {

        name: "CED",

        avatar: "C",

        status: "Read only",

        messages: [

            date("August 19, 2026"),

            incoming(
                "You got the tickets?",
                "17:00"
            ),

            out(
                "Yea thks",
                "17:00"
            ),


            date("August 25, 2026"),

            incoming(
                "Excited for tonight?",
                "05:55"
            ),

            out(
                "Just some drinks nothing ordinary",
                "05:55"
            ),

            incoming(
                "Don't forget to brink the whisky",
                "06:05"
            ),

            out(
                "What does frat boy mean?",
                "17:56"
            ),

            incoming(
                "Who roasted you🤣🤣",
                "17:56"
            ),

            incoming(
                "Where are you",
                "19:57"
            ),

            out(
                "Parking? You?",
                "19:57"
            ),

            incoming(
                "Inside. You'll be surprised who is here tonight",
                "20:00"
            ),

            out(
                "Why who?",
                "20:01"
            ),

            incoming(
                "Just come inside",
                "20:01"
            ),

            incoming(
                "Bro you took him with you?",
                "22:33"
            ),

            incoming(
                "Text me when you get home. Or I'll be worried",
                "22:45"
            ),


            date("August 26, 2026"),

            out(
                "Got wasted. Just woke up",
                "10:02"
            ),

            incoming(
                "Yea I figured.",
                "10:03"
            ),

            out(
                "Good thing I got my aunt's car back in one piece. 💀",
                "10:04"
            ),

            incoming(
                "So what happened after you know who?",
                "18:04"
            ),

            incoming(
                "You are sick bro",
                "18:05"
            ),

            out(
                "Shhh",
                "18:05"
            ),


            date("August 31, 2026"),

            out(
                "My aunt found your pack of cigarettes in the back of her seat. What the fuck is wrong with you bro!? Luckily I brushed it off by telling her it's Steve's. She told me to stop hanging out with them",
                "18:07"
            ),

            incoming(
                "Wait Steve?",
                "18:08"
            ),

            incoming(
                "The chubby guy?",
                "18:08"
            ),

            out(
                "Yea I don't even hang out with them so it's fine",
                "18:08"
            ),

            out(
                "I felt embarrassed and now Emma look at me wierd",
                "18:09"
            ),

            incoming(
                "Really? Playing the devoted big brother?",
                "18:09"
            ),

            out(
                "No? But I don't want her to end up like me",
                "18:09"
            ),

            incoming(
                "Same thing. It's called devotion",
                "18:10"
            ),

            incoming(
                "Your aunt still dont know about....",
                "18:10"
            ),

            out(
                "No they will never know",
                "18:10"
            ),


            date("September 03, 2026"),

            out(
                "Check out my new car",
                "16:12"
            ),

            incoming(
                "Sick man",
                "18:14"
            ),

            incoming(
                "What you do with the old one?",
                "18:14"
            ),

            out(
                "Sold it for this one?",
                "18:14"
            ),

            incoming(
                "What did you do man?",
                "18:15"
            ),

            out(
                "Nothing just business. My job has been paying well lately",
                "18:16"
            ),

            incoming(
                "That's a lie",
                "18:16"
            ),

            incoming(
                "Was it him?",
                "18:16"
            ),

            out(
                "Oh please. It was one time",
                "18:16"
            ),

            incoming(
                "Yea well when you once fall it's hard to get out",
                "18:16"
            ),

            incoming(
                "Be careful man",
                "18:16"
            ),


            date("September 08, 2026"),

            incoming(
                "Bro why are you leaving early again?",
                "16:23"
            ),

            incoming(
                "The boss is filtering employees",
                "16:24"
            ),


            date("September 14, 2026"),

            out(
                "Ced if something happened to me. Look after my aunt and Emma",
                "07:27"
            ),

            incoming(
                "What do you mean?",
                "07:27"
            ),

            incoming(
                "Where are you?",
                "07:27"
            ),

            incoming(
                "Bro where are you?",
                "18:28"
            ),

            incoming(
                "You skipped work today",
                "18:28"
            ),

            incoming(
                "Why?",
                "18:28"
            ),

            incoming(
                "Where are you?",
                "18:28"
            ),

            incoming(
                "Something happened?",
                "18:28"
            ),

            incoming(
                "Is it M?",
                "18:28"
            ),

            incoming(
                "Bro you are scaring me",
                "18:29"
            ),

            incoming(
                "Did they do something to you?",
                "18:29"
            ),


            date("September 15, 2026"),

            incoming(
                "Bro where are you?",
                "08:32"
            ),

            incoming(
                "I'm parked outside your building I'm coming",
                "18:34"
            ),

            incoming(
                "Are you inside?",
                "18:36"
            ),

            incoming(
                "I can hear your phone ringing?",
                "18:36"
            ),

            incoming(
                "Your car is outside too",
                "18:38"
            ),

            incoming(
                "Oh your aunt is here now. Your sister too. They just parked",
                "18:39"
            ),

            incoming(
                "I'm leaving",
                "18:39"
            )

        ]

    },


    timmy: {

        name: "Timmy",

        avatar: "T",

        status: "Encrypted · Read only",

        messages: [

            system("🔒 Encrypted"),

            date("August 25, 2026"),

            call(
                "out",
                "Voice call",
                "5 sec",
                "01:44"
            ),

            out(
                "I left the money in your bag",
                "01:46"
            ),

            incoming(
                "👍",
                "01:46"
            ),

            incoming(
                "Use the other phone",
                "01:55"
            ),

            out(
                "Oh shit sorry",
                "01:55"
            )

        ]

    },


    unknown: {

        name: "Unknown",

        avatar: "?",

        status: "Unknown contact",

        messages: [

            system("🔒 Unknown"),

            date("Today"),

            incoming(
                "You are still here?",
                "19:13"
            ),

            incoming(
                "You still on for the 25th?",
                "19:15"
            )

        ]

    }

};



// ========================================
// MESSAGE HELPERS
// ========================================

function date(text) {

    return {
        type: "date",
        text: text
    };

}


function system(text) {

    return {
        type: "system",
        text: text
    };

}


function incoming(text, time) {

    return {
        type: "message",
        side: "in",
        text: text,
        time: time
    };

}


function out(text, time) {

    return {
        type: "message",
        side: "out",
        text: text,
        time: time
    };

}


function call(side, title, detail, time) {

    return {
        type: "call",
        side: side,
        title: title,
        detail: detail,
        time: time
    };

}



// ========================================
// OPEN MESSAGES APP
// ========================================

messagesApp.addEventListener("click", function () {

    homeScreen.classList.add("hidden");

    messagesScreen.classList.remove("hidden");

});



// ========================================
// BACK TO HOME
// ========================================

messagesBack.addEventListener("click", function () {

    messagesScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

});



// ========================================
// OPEN EACH CHAT
// ========================================

document
    .querySelectorAll(".conversation")
    .forEach(function (conversation) {

        conversation.addEventListener(
            "click",
            function () {

                const chatId =
                    conversation.dataset.chat;

                openChat(chatId);

            }
        );

    });



function openChat(chatId) {

    currentChat = chatId;

    const chat = chats[chatId];


    chatName.textContent =
        chat.name;

    chatAvatar.textContent =
        chat.avatar;

    chatStatus.textContent =
        chat.status;


    renderMessages(chat.messages);


    messagesScreen.classList.add("hidden");

    chatScreen.classList.remove("hidden");


    if (
        chatId === "unknown"
        &&
        !unknownBlocked
    ) {

        unknownOpened = true;

        messageBadge.classList.add("hidden");

        document
            .querySelector('[data-chat="unknown"]')
            .classList.remove("unread");

        unknownResponse.classList.remove("hidden");

        chatMessages.classList.add("with-reply");

    }

    else {

        unknownResponse.classList.add("hidden");

        chatMessages.classList.remove("with-reply");

    }


    setTimeout(function () {

        chatMessages.scrollTop =
            chatMessages.scrollHeight;

    }, 30);

}



// ========================================
// BACK TO MESSAGE LIST
// ========================================

chatBack.addEventListener("click", function () {

    chatScreen.classList.add("hidden");

    messagesScreen.classList.remove("hidden");

});



// ========================================
// RENDER MESSAGES
// ========================================

function renderMessages(messages) {

    chatMessages.innerHTML = "";


    messages.forEach(function (item) {

        chatMessages.appendChild(
            createMessageElement(item)
        );

    });


    if (
        currentChat === "unknown"
        &&
        unknownBlocked
    ) {

        chatMessages.appendChild(
            createMessageElement(
                out("Who is this?", "19:15")
            )
        );

        chatMessages.appendChild(
            createMessageElement(
                system("Blocked")
            )
        );

    }

}



function createMessageElement(item) {


    // DATE

    if (item.type === "date") {

        const element =
            document.createElement("div");

        element.className =
            "date-chip";

        element.textContent =
            item.text;

        return element;

    }



    // SYSTEM

    if (item.type === "system") {

        const element =
            document.createElement("div");

        element.className =
            "system-chip";

        element.textContent =
            item.text;

        return element;

    }



    const row =
        document.createElement("div");


    row.className =
        "message-row "
        +
        (
            item.side === "out"
            ?
            "outgoing"
            :
            "incoming"
        );


    const bubble =
        document.createElement("div");

    bubble.className =
        "message";


    // CALL

    if (item.type === "call") {

        bubble.innerHTML = `

            <div class="call-box">

                <div class="call-symbol">
                    ☎
                </div>

                <div>

                    <div class="call-title">
                        ${item.title}
                    </div>

                    <div class="call-detail">
                        ${item.detail}
                    </div>

                </div>

            </div>

            <div class="message-time">
                ${item.time}
            </div>

        `;

    }


    // NORMAL TEXT

    else {

        const text =
            document.createElement("div");

        text.className =
            "message-text";

        text.textContent =
            item.text;


        const time =
            document.createElement("div");

        time.className =
            "message-time";

        time.textContent =
            item.time;


        bubble.appendChild(text);

        bubble.appendChild(time);

    }


    row.appendChild(bubble);

    return row;

}



// ========================================
// UNKNOWN PRESENT-DAY RESPONSE
// ========================================

replyUnknown.addEventListener("click", function () {

    if (unknownBlocked) {
        return;
    }


    chatMessages.appendChild(

        createMessageElement(

            out(
                "Who is this?",
                "19:15"
            )

        )

    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;


    replyUnknown.disabled = true;


    setTimeout(function () {

        unknownBlocked = true;


        chatMessages.appendChild(

            createMessageElement(

                system("Blocked")

            )

        );


        chatStatus.textContent =
            "Blocked";


        unknownPreview.textContent =
            "Blocked";


        unknownResponse.classList.add(
            "hidden"
        );


        chatMessages.classList.remove(
            "with-reply"
        );


        chatMessages.scrollTop =
            chatMessages.scrollHeight;


    }, 700);

});
