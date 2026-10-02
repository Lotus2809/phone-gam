// =========================================
// PHONE / PASSCODE
// =========================================

const lockScreen =
    document.getElementById("lockScreen");

const passcodeScreen =
    document.getElementById("passcodeScreen");

const homeScreen =
    document.getElementById("homeScreen");

const messagesScreen =
    document.getElementById("messagesScreen");

const threadScreen =
    document.getElementById("threadScreen");


const numberButtons =
    document.querySelectorAll(".number");

const dots =
    document.querySelectorAll(".dot");

const deleteButton =
    document.getElementById("deleteButton");


const correctPasscode = "280905";

let enteredPasscode = "";



function showScreen(screen) {

    const screens = [

        lockScreen,

        passcodeScreen,

        homeScreen,

        messagesScreen,

        threadScreen

    ];


    screens.forEach(function(item) {

        item.classList.add("hidden");

    });


    screen.classList.remove("hidden");

}



// OPEN PASSCODE

lockScreen.addEventListener(
    "click",

    function() {

        showScreen(passcodeScreen);

    }
);



// NUMBER BUTTONS

numberButtons.forEach(function(button) {

    button.addEventListener(
        "click",

        function() {

            if (
                enteredPasscode.length
                < 6
            ) {

                enteredPasscode +=
                    button.dataset.number;

                updateDots();

            }


            if (
                enteredPasscode.length
                === 6
            ) {

                checkPasscode();

            }

        }
    );

});



function updateDots() {

    dots.forEach(
        function(dot, index) {

            if (
                index
                < enteredPasscode.length
            ) {

                dot.classList.add(
                    "filled"
                );

            }

            else {

                dot.classList.remove(
                    "filled"
                );

            }

        }
    );

}



function checkPasscode() {

    if (
        enteredPasscode
        === correctPasscode
    ) {

        showScreen(homeScreen);

    }

    else {

        enteredPasscode = "";

        updateDots();

        alert(
            "Incorrect Passcode"
        );

    }

}



deleteButton.addEventListener(
    "click",

    function(event) {

        event.stopPropagation();

        enteredPasscode =
            enteredPasscode.slice(
                0,
                -1
            );

        updateDots();

    }
);



// =========================================
// CHAT DATA
//
// out = Adrien
// in = the other person
//
// All old chats are read-only.
// =========================================

const chats = {


    // =====================================
    // EMMA
    // =====================================

    emma: {

        name: "Emma",

        avatar: "E",

        preview:
            "5 missed calls · 2 video calls",

        time:
            "Sep 16",

        status:
            "past conversation · read only",

        items: [


            {
                type: "date",
                text: "June 24, 2026"
            },

            {
                type: "msg",
                side: "out",
                text: "Thks little sis🤣",
                time: "16:49"
            },

            {
                type: "msg",
                side: "in",
                text: "💀",
                time: "16:49"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Tell your mom to call me",
                time: "16:50"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Tell her yourself",
                time: "16:50"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "She's not picking up",
                time: "16:51"
            },


            {
                type: "date",
                text: "June 29, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You took my mom's car?",
                time: "07:51"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Yea mine is in repair",
                time: "08:05"
            },

            {
                type: "msg",
                side: "in",
                text: "Again?",
                time: "08:05"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You are such a bad driver😌💀",
                time: "08:05"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Blame people on the road",
                time: "08:10"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Yea of course. Come pick me up then",
                time: "08:15"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Where and when",
                time: "08:15"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "At the entrance at 2 pm.",
                time: "08:20"
            },

            {
                type: "msg",
                side: "in",
                text: "👍",
                time: "08:20"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Don't be late like last time",
                time: "08:20"
            },

            {
                type: "msg",
                side: "out",
                text: "Yes boss",
                time: "08:20"
            },

            {
                type: "msg",
                side: "out",
                text: "I'm here",
                time: "13:57"
            },

            {
                type: "call",
                side: "out",
                title: "Voice call",
                subtitle: "46 sec",
                time: "16:58"
            },


            {
                type: "date",
                text: "August 05, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "When you come home call me",
                time: "14:35"
            },

            {
                type: "msg",
                side: "in",
                text: "Ok?",
                time: "14:40"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "15:10"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You told me to call you now you ain't even picking up!🙄",
                time: "15:15"
            },

            {
                type: "call",
                side: "out",
                title: "Voice call",
                subtitle: "32 sec",
                time: "15:30"
            },


            {
                type: "date",
                text: "August 19, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Got the tickets",
                time: "17:04"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Yes!! Thks cousin",
                time: "17:05"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Don't tell your mom or ill get scolded again for spoiling you",
                time: "17:05"
            },

            {
                type: "msg",
                side: "in",
                text: "🥱",
                time: "17:05"
            },


            {
                type: "date",
                text: "August 25, 2026"
            },

            {
                type: "call",
                side: "out",
                title: "Video call",
                subtitle: "1 min24 sec",
                time: "16:09"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Thks frat boy",
                time: "17:09"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Frat what?",
                time: "17:09"
            },


            {
                type: "date",
                text: "August 31, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Why does your mom want to see me?",
                time: "17:15"
            },

            {
                type: "msg",
                side: "in",
                text: "🤣",
                time: "17:16"
            },


            {
                type: "date",
                text: "September 03, 2026"
            },

            {
                type: "call",
                side: "in",
                title: "Voice call",
                subtitle: "2 min19 sec",
                time: "09:06"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I'm sitting in it",
                time: "09:23"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Dont scratch it",
                time: "09:25"
            },


            {
                type: "date",
                text: "September 15, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Where the fuck are you!?!",
                time: "07:05"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You are worrying my mom",
                time: "07:24"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "And me 💀",
                time: "07:25"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I'm in front of your apartment",
                time: "07:40"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "07:40"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Your car is here. I dont understand",
                time: "07:45"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I can hear your phone ringing inside",
                time: "07:50"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "08:00"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "17:29"
            },


            {
                type: "date",
                text: "September 16, 2026"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed video call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed video call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "03:32"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "03:32"
            }

        ]

    },



    // =====================================
    // AUNTIE
    // =====================================

    auntie: {

        name: "Auntie",

        avatar: "A",

        preview:
            "Adrien where are you?",

        time:
            "Sep 15",

        status:
            "past conversation · read only",

        items: [


            {
                type: "date",
                text: "July 15, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Can you come fetch me? I'm at the red section.",
                time: "15:43"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Yea, ill leave the office in 20 mins",
                time: "15:44"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Thks son",
                time: "15:44"
            },


            {
                type: "date",
                text: "August 05, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Auntie can you lend me your car, mine broke",
                time: "14:30"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Emma took it\nShe'll be back from uni in 30 mins\nAsk her",
                time: "14:30"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "K thks",
                time: "14:31"
            },


            {
                type: "date",
                text: "August 06, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Don't forget to have dinner. I put it in the fridge",
                time: "15:50"
            },


            {
                type: "date",
                text: "August 07, 2026"
            },

            {
                type: "call",
                side: "out",
                title: "Video call",
                subtitle: "3 sec",
                time: "15:52"
            },

            {
                type: "call",
                side: "out",
                title: "Video call",
                subtitle: "29 min47 sec",
                time: "16:22"
            },


            {
                type: "date",
                text: "August 18, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Keys in the pink bag",
                time: "10:23"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Thks",
                time: "11:00"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Got it",
                time: "11:05"
            },


            {
                type: "date",
                text: "August 25, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "I'll dine with colleagues tonight.",
                time: "05:27"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Have a nice time. Don't drink too much",
                time: "06:00"
            },


            {
                type: "date",
                text: "August 31, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Come see me now",
                time: "16:29"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Something happened?",
                time: "16:29"
            },


            {
                type: "date",
                text: "September 02, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Auntie my new car will be coming tomorrow. Your address is still on my documents.",
                time: "08:32"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Ok what time?",
                time: "12:33"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Around 9 am. I'll be at work",
                time: "12:33"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Emma will be home see with her",
                time: "12:33"
            },

            {
                type: "msg",
                side: "in",
                text: "👍",
                time: "12:33"
            },


            {
                type: "date",
                text: "September 14, 2026"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed voice call",
                subtitle:
                    "Tap to call back",
                time: "22:58"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed voice call",
                subtitle:
                    "Tap to call back",
                time: "23:01"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Where are you",
                time: "23:15"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "It's past 11 pm",
                time: "23:16"
            },


            {
                type: "date",
                text: "September 15, 2026"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed voice call",
                subtitle:
                    "Tap to call back",
                time: "06:00"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Are you back home?",
                time: "06:10"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I'm getting worried Adrien. Can you please call when you get back?",
                time: "06:42"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Emma is coming to your place to check up on you",
                time: "07:05"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed voice call",
                subtitle:
                    "Tap to call back",
                time: "16:44"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed voice call",
                subtitle:
                    "Tap to call back",
                time: "16:44"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Adrien where are you?",
                time: "19:44"
            }

        ]

    },



    // =====================================
    // CED
    // =====================================

    ced: {

        name: "CED",

        avatar: "C",

        preview:
            "Did they do something to you?",

        time:
            "Sep 15",

        status:
            "past conversation · read only",

        items: [


            {
                type: "date",
                text: "August 18, 2026"
            },

            {
                type: "call",
                side: "out",
                title: "Voice call",
                subtitle: "43 sec",
                time: "01:52"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Let's park on the East Wing",
                time: "01:52"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Red car",
                time: "01:52"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Missed Voice call",
                subtitle:
                    "No answer",
                time: "17:46"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Tell me",
                time: "17:47"
            },


            {
                type: "date",
                text: "August 19, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You got the tickets?",
                time: "17:00"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Yea thks",
                time: "17:00"
            },


            {
                type: "date",
                text: "August 25, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Excited for tonight?",
                time: "05:55"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Just some drinks nothing ordinary",
                time: "05:55"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Don't forget to brink the whisky",
                time: "06:05"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "What does frat boy mean?",
                time: "17:56"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Who roasted you🤣🤣",
                time: "17:56"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Where are you",
                time: "19:57"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Parking? You?",
                time: "19:57"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Inside. You'll be surprised who is here tonight",
                time: "20:00"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Why who?",
                time: "20:01"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Just come inside",
                time: "20:01"
            },

            {
                type: "call",
                side: "in",
                title: "Voice call",
                subtitle: "1 min47 sec",
                time: "22:33"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Bro you took him with you?",
                time: "22:33"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Text me when you get home. Or I'll be worried",
                time: "22:45"
            },


            {
                type: "date",
                text: "August 26, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Got wasted. Just woke up",
                time: "10:02"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Yea I figured.",
                time: "10:03"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Good thing I got my aunt's car back in one piece. 💀",
                time: "10:04"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "So what happened after you know who?",
                time: "18:04"
            },

            {
                type: "call",
                side: "in",
                title: "Video call",
                subtitle: "15 sec",
                time: "18:05"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You are sick bro",
                time: "18:05"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Shhh",
                time: "18:05"
            },


            {
                type: "date",
                text: "August 31, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "My aunt found your pack of cigarettes in the back of her seat. What the fuck is wrong with you bro!? Luckily I brushed it off by telling her it's Steve's. She told me to stop hanging out with them",
                time: "18:07"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Wait Steve?",
                time: "18:08"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "The chubby guy?",
                time: "18:08"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Yea I don't even hang out with them so it's fine",
                time: "18:08"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "I felt embarrassed and now Emma look at me wierd",
                time: "18:09"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Really? Playing the devoted big brother?",
                time: "18:09"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "No? But I don't want her to end up like me",
                time: "18:09"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Same thing. It's called devotion",
                time: "18:10"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Your aunt still dont know about....",
                time: "18:10"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "No they will never know",
                time: "18:10"
            },


            {
                type: "date",
                text: "September 03, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Check out my new car",
                time: "16:12"
            },

            {
                type: "media",
                side: "out",
                title: "Pic of car",
                time: "16:12"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Sick man",
                time: "18:14"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "What you do with the old one?",
                time: "18:14"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Sold it for this one?",
                time: "18:14"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Well...",
                time: "18:15"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "What did you do man?",
                time: "18:15"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Nothing just business. My job has been paying well lately",
                time: "18:16"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "That's a lie",
                time: "18:16"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Was it him?",
                time: "18:16"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Oh please. It was one time",
                time: "18:16"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Yea well when you once fall it's hard to get out",
                time: "18:16"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Be careful man",
                time: "18:16"
            },


            {
                type: "date",
                text: "September 08, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Bro why are you leaving early again?",
                time: "16:23"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "The boss is filtering employees",
                time: "16:24"
            },


            {
                type: "date",
                text: "September 14, 2026"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Ced if something happened to me. Look after my aunt and Emma",
                time: "07:27"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "What do you mean?",
                time: "07:27"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Where are you?",
                time: "07:27"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Bro where are you?",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You skipped work today",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Why?",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Where are you?",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Something happened?",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Is it M?",
                time: "18:28"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Bro you are scaring me",
                time: "18:29"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Did they do something to you?",
                time: "18:29"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Your aunt just called me. I told her idk where you are and that you have been skipping work. Sorry man but I'm worried about you too",
                time: "18:30"
            },


            {
                type: "date",
                text: "September 15, 2026"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Bro where are you?",
                time: "08:32"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "18:32"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "18:34"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I'm parked outside your building I'm coming",
                time: "18:34"
            },

            {
                type: "call",
                side: "in",
                title:
                    "Missed Voice call",
                subtitle:
                    "Tap to call back",
                time: "18:36"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Are you inside?",
                time: "18:36"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I can hear your phone ringing?",
                time: "18:36"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Your car is outside too",
                time: "18:38"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Oh your aunt is here now. Your sister too. They just parked",
                time: "18:39"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "I'm leaving",
                time: "18:39"
            }

        ]

    },



    // =====================================
    // TIMMY
    // =====================================

    timmy: {

        name: "Timmy",

        avatar: "T",

        preview:
            "Use the other phone",

        time:
            "Aug 25",

        status:
            "past conversation · encrypted · read only",

        items: [


            {
                type: "system",
                text:
                    "🔒 Encrypted"
            },

            {
                type: "date",
                text:
                    "August 25, 2026"
            },

            {
                type: "call",
                side: "out",
                title:
                    "Voice call",
                subtitle:
                    "5 sec",
                time:
                    "01:44"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "I left the money in your bag",
                time:
                    "01:46"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "👍",
                time:
                    "01:46"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "Use the other phone",
                time:
                    "01:55"
            },

            {
                type: "msg",
                side: "out",
                text:
                    "Oh shit sorry",
                time:
                    "01:55"
            }

        ]

    },



    // =====================================
    // UNKNOWN / M
    //
    // THIS IS THE ONLY PRESENT-DAY CHAT
    // =====================================

    unknown: {

        name:
            "Unknown",

        avatar:
            "?",

        preview:
            "You still on for the 25th?",

        time:
            "19:15",

        status:
            "unknown contact",

        items: [


            {
                type: "system",
                text:
                    "🔒 Unknown"
            },

            {
                type: "date",
                text:
                    "Today"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You are still here?",
                time:
                    "19:13"
            },

            {
                type: "msg",
                side: "in",
                text:
                    "You still on for the 25th?",
                time:
                    "19:15"
            }

        ]

    }

};



// UNKNOWN FIRST BECAUSE IT IS NEW

const chatOrder = [

    "unknown",

    "emma",

    "auntie",

    "ced",

    "timmy"

];



// =========================================
// MESSAGE ELEMENTS
// =========================================

const chatList =
    document.getElementById(
        "chatList"
    );


const threadBody =
    document.getElementById(
        "threadBody"
    );


const threadName =
    document.getElementById(
        "threadName"
    );


const threadStatus =
    document.getElementById(
        "threadStatus"
    );


const threadAvatar =
    document.getElementById(
        "threadAvatar"
    );


const replyArea =
    document.getElementById(
        "replyArea"
    );


const unknownReplyButton =
    document.getElementById(
        "unknownReplyButton"
    );


const messageBadge =
    document.getElementById(
        "messageBadge"
    );



let currentChatId = null;

let unknownOpened = false;

let unknownBlocked = false;



// =========================================
// CHAT LIST
// =========================================

function renderChatList() {

    chatList.innerHTML = "";


    chatOrder.forEach(
        function(id) {

            const chat =
                chats[id];


            const row =
                document.createElement(
                    "button"
                );


            row.className =
                "chat-row";


            const isUnread =

                id === "unknown"

                &&

                !unknownOpened;


            let preview =
                chat.preview;


            if (
                id === "unknown"

                &&

                unknownBlocked
            ) {

                preview =
                    "Blocked";

            }


            row.innerHTML = `

                <div class="avatar">
                    ${chat.avatar}
                </div>

                <div class="chat-main">

                    <div class="chat-name">

                        ${chat.name}

                        ${
                            isUnread
                            ?
                            '<span class="unread-dot"></span>'
                            :
                            ''
                        }

                    </div>

                    <div class="chat-preview">

                        ${preview}

                    </div>

                </div>

                <div class="chat-time">

                    ${chat.time}

                </div>

            `;


            row.addEventListener(
                "click",

                function() {

                    openChat(id);

                }
            );


            chatList.appendChild(
                row
            );

        }
    );


    if (unknownOpened) {

        messageBadge.classList.add(
            "hidden"
        );

    }

    else {

        messageBadge.classList.remove(
            "hidden"
        );

    }

}



// =========================================
// OPEN CHAT
// =========================================

function openChat(id) {

    currentChatId = id;


    const chat =
        chats[id];


    if (
        id === "unknown"
    ) {

        unknownOpened = true;

    }


    threadName.textContent =
        chat.name;


    threadAvatar.textContent =
        chat.avatar;


    if (
        id === "unknown"

        &&

        unknownBlocked
    ) {

        threadStatus.textContent =
            "blocked";

    }

    else {

        threadStatus.textContent =
            chat.status;

    }


    renderThread(chat);


    // Only Unknown can be answered

    if (
        id === "unknown"

        &&

        !unknownBlocked
    ) {

        replyArea.classList.remove(
            "hidden"
        );

        threadBody.classList.add(
            "has-reply"
        );

    }

    else {

        replyArea.classList.add(
            "hidden"
        );

        threadBody.classList.remove(
            "has-reply"
        );

    }


    renderChatList();


    showScreen(
        threadScreen
    );


    setTimeout(
        function() {

            threadBody.scrollTop =
                threadBody.scrollHeight;

        },

        20
    );

}



// =========================================
// RENDER CONVERSATION
// =========================================

function renderThread(chat) {

    threadBody.innerHTML = "";


    chat.items.forEach(
        function(item) {

            threadBody.appendChild(
                renderItem(item)
            );

        }
    );


    // If the player already got blocked,
    // keep showing it if they reopen the chat.

    if (
        chat === chats.unknown

        &&

        unknownBlocked
    ) {

        threadBody.appendChild(

            renderItem({

                type: "msg",

                side: "out",

                text: "Who is this?",

                time: "19:15"

            })

        );


        threadBody.appendChild(

            renderItem({

                type: "system",

                text: "Blocked"

            })

        );

    }

}



// =========================================
// CREATE CHAT ELEMENT
// =========================================

function renderItem(item) {


    // DATE

    if (
        item.type === "date"
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "date-chip";


        element.textContent =
            item.text;


        return element;

    }



    // SYSTEM MESSAGE

    if (
        item.type === "system"
    ) {

        const element =
            document.createElement(
                "div"
            );


        element.className =
            "system-chip";


        element.textContent =
            item.text;


        return element;

    }



    // NORMAL MESSAGE ROW

    const row =
        document.createElement(
            "div"
        );


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
        document.createElement(
            "div"
        );


    bubble.className =
        "message-bubble";



    // CALL

    if (
        item.type === "call"
    ) {

        const icon =

            item.title
                .toLowerCase()
                .includes("video")

            ?

            "▣"

            :

            "☎";


        bubble.innerHTML = `

            <div class="call-card">

                <div class="call-icon">
                    ${icon}
                </div>

                <div>

                    <div class="call-title">
                        ${item.title}
                    </div>

                    <div class="call-subtitle">
                        ${item.subtitle}
                    </div>

                </div>

            </div>

            <div class="message-meta">
                ${item.time}
            </div>

        `;

    }



    // MEDIA / PHOTO

    else if (
        item.type === "media"
    ) {

        bubble.innerHTML = `

            <div class="media-card">

                <div class="media-icon">
                    📷
                </div>

                <div class="call-title">
                    ${item.title}
                </div>

            </div>

            <div class="message-meta">
                ${item.time}
            </div>

        `;

    }



    // TEXT

    else {

        const messageText =
            document.createElement(
                "div"
            );


        messageText.className =
            "message-text";


        messageText.textContent =
            item.text;



        const meta =
            document.createElement(
                "div"
            );


        meta.className =
            "message-meta";


        meta.textContent =
            item.time || "";


        bubble.appendChild(
            messageText
        );


        bubble.appendChild(
            meta
        );

    }


    row.appendChild(
        bubble
    );


    return row;

}



// =========================================
// UNKNOWN NUMBER INTERACTION
// =========================================

unknownReplyButton.addEventListener(

    "click",

    function() {


        if (
            currentChatId
            !== "unknown"
        ) {

            return;

        }


        if (
            unknownBlocked
        ) {

            return;

        }


        unknownReplyButton.disabled =
            true;



        // Emma asks who it is

        threadBody.appendChild(

            renderItem({

                type:
                    "msg",

                side:
                    "out",

                text:
                    "Who is this?",

                time:
                    "19:15"

            })

        );


        threadBody.scrollTop =
            threadBody.scrollHeight;



        // Small delay before getting blocked

        setTimeout(

            function() {


                unknownBlocked = true;


                threadBody.appendChild(

                    renderItem({

                        type:
                            "system",

                        text:
                            "Blocked"

                    })

                );


                threadStatus.textContent =
                    "blocked";


                replyArea.classList.add(
                    "hidden"
                );


                threadBody.classList.remove(
                    "has-reply"
                );


                renderChatList();


                threadBody.scrollTop =
                    threadBody.scrollHeight;


            },

            700

        );

    }

);



// =========================================
// NAVIGATION
// =========================================

document
    .getElementById(
        "openMessagesButton"
    )
    .addEventListener(

        "click",

        function() {

            renderChatList();

            showScreen(
                messagesScreen
            );

        }

    );



document
    .getElementById(
        "messagesBackButton"
    )
    .addEventListener(

        "click",

        function() {

            showScreen(
                homeScreen
            );

        }

    );



document
    .getElementById(
        "threadBackButton"
    )
    .addEventListener(

        "click",

        function() {

            renderChatList();

            showScreen(
                messagesScreen
            );

        }

    );



// LOAD CHAT LIST

renderChatList();
});
