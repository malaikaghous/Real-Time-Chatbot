document.addEventListener("DOMContentLoaded", function () {

    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatBox = document.getElementById("chatBox");
    const clearBtn = document.getElementById("clearBtn");

    const STORAGE_KEY = "chatMessages";


    // ==========================================
    // Load Messages From localStorage
    // ==========================================

    function loadMessages() {

        const savedMessages = localStorage.getItem(STORAGE_KEY);

        if (savedMessages) {

            const messages = JSON.parse(savedMessages);

            messages.forEach(function (message) {

                displayMessage(
                    message.text,
                    message.type,
                    message.time
                );

            });

        } else {

            // First time welcome message

            displayMessage(
                "Hello! 👋 How can I help you?",
                "received",
                getCurrentTime()
            );

        }

    }


    // ==========================================
    // Get Current Time
    // ==========================================

    function getCurrentTime() {

        const now = new Date();

        return now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    }


    // ==========================================
    // Display Message
    // ==========================================

    function displayMessage(text, type, time) {

        const messageDiv = document.createElement("div");

        messageDiv.classList.add("message");
        messageDiv.classList.add(type);


        const contentDiv = document.createElement("div");

        contentDiv.classList.add("message-content");


        const textElement = document.createElement("p");

        textElement.classList.add("message-text");

        textElement.textContent = text;


        const timeElement = document.createElement("span");

        timeElement.classList.add("message-time");

        timeElement.textContent = time;


        contentDiv.appendChild(textElement);

        contentDiv.appendChild(timeElement);

        messageDiv.appendChild(contentDiv);

        chatBox.appendChild(messageDiv);


        // Smooth scroll

        chatBox.scrollTo({
            top: chatBox.scrollHeight,
            behavior: "smooth"
        });

    }


    // ==========================================
    // Save Message
    // ==========================================

    function saveMessage(text, type, time) {

        let messages = JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];


        messages.push({
            text: text,
            type: type,
            time: time
        });


        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(messages)
        );

    }


    // ==========================================
    // Send Message
    // ==========================================

    function sendMessage() {

        const message = messageInput.value.trim();


        // Empty input check

        if (message === "") {

            alert("Please type a message!");

            messageInput.focus();

            return;

        }


        const time = getCurrentTime();


        // Display user's message

        displayMessage(
            message,
            "sent",
            time
        );


        // Save user's message

        saveMessage(
            message,
            "sent",
            time
        );


        // Clear input

        messageInput.value = "";

        messageInput.focus();


        // Chatbot response

        setTimeout(function () {

            chatbotResponse(message);

        }, 700);

    }


    // ==========================================
    // Simple Chatbot
    // ==========================================

    function chatbotResponse(userMessage) {

        const message = userMessage.toLowerCase();

        let response;


        if (
            message.includes("hello") ||
            message.includes("salam") ||
            message.includes("hey") ||
            message.includes("salam") ||
            message.includes("assalam")
        ) {

            response = "Hello Malaika! 😊.";

          }
        else if (
             message.includes("how are you") ||
             message.includes("how r you") ||
             message.includes("whats up") 
         ) {
        response = "I'm good, thank you! 😊 How are you?";

        }
        // Name
    else if (
        message.includes("your name") ||
        message.includes("what is your name")
    ) {
        response = "My name is ChatBot 🤖. Nice to meet you!";

    }


    // Who are you
    else if (
        message.includes("who are you")
    ) {
        response = "I'm a simple chatbot created using HTML, CSS and JavaScript.";

    }


    // What are you doing
    else if (
        message.includes("what are you doing")
    ) {
        response = "I'm here chatting with you! 😄";

    }
    else if (
        message.includes("ok")
    ) {
        response = "ok😄";

    }
    else if (
        message.includes("yes")
    ) {
        response = "ok😄";

    }

    // User's name
    else if (
        message.includes("my name is")
    ) {
        response = "Nice to meet you! 😊";

    }


    // Thanks
    else if (
        message.includes("thank you") ||
        message.includes("thanks")
    ) {
        response = "You're welcome! 😊";

    }


    // Good morning
    else if (
        message.includes("good morning")
    ) {
        response = "Good morning Malaika! ☀️ Have a wonderful day!";

    }


    // Good afternoon
    else if (
        message.includes("good afternoon")
    ) {
        response = "Good afternoon Malaika! 😊 Hope you're having a great day.";

    }


    // Good evening
    else if (
        message.includes("good evening")
    ) {
        response = "Good evening Malaika! 🌆 How was your day?";

    }


    // Good night
    else if (
        message.includes("good night")
    ) {
        response = "Good night Malaika! 🌙 Sleep well and take care!";

    }


    // Day
    else if (
        message.includes("what day") ||
        message.includes("which day")
    ) {
        response = "Today is a good day to learn something new!,what about you 😊";

    }


    // Weather
    else if (
        message.includes("weather")
    ) {
        response = "I can't check live weather, but I hope the weather is nice where you are! 🌤️";

    }


    // Food
    else if (
        message.includes("food") ||
        message.includes("hungry") ||
        message.includes("eat")
    ) {
        response = "If you're hungry, you should definitely get something delicious to eat!  and i know a little that you like noodles vey much🍕😋";

    }


    // Favorite food
    else if (
        message.includes("favorite food")
    ) {
        response = "I don't eat, but pizza sounds like a great choice! 🍕";

    }


    // Help
    else if (
        message.includes("help")
    ) {
        response = "Sure! 😊 Ask me something and I'll try my best to answer.";

    }


    // How can you help
    else if (
        message.includes("how can you help")
    ) {
        response = "I can chat with you and answer common questions using my predefined responses. 🤖";

    }


    // Study
    else if (
        message.includes("study") ||
        message.includes("studying")
    ) {
        response = "That's great! 📚 Keep learning and don't give up.";

    }


    // Programming
    else if (
        message.includes("programming") ||
        message.includes("coding") ||
        message.includes("code")
    ) {
        response = "Coding is fun! 💻 Practice regularly and you'll improve quickly.";

    }


    // HTML
    else if (
        message.includes("html")
    ) {
        response = "HTML is used to create the structure of a web page. 🌐";

    }


    // CSS
    else if (
        message.includes("css")
    ) {
        response = "CSS is used to style and design web pages. 🎨";

    }


    // JavaScript
    else if (
        message.includes("javascript") ||
        message.includes("js")
    ) {
        response = "JavaScript makes websites interactive and dynamic. ⚡";

    }


    // Project
    else if (
        message.includes("project")
    ) {
        response = "That's interesting! Tell me more about your project. 💻";

    }


    // Happy
    else if (
        message.includes("happy")
    ) {
        response = "That's wonderful! 😊 Keep smiling ,you smile is soo cute ,Malaika!";

    }


    // Sad
    else if (
        message.includes("sad") ||
        message.includes("upset")
    ) {
        response = "I'm sorry to hear that. 😔 I hope things get better soon, Don't worry Malaika.";

    }


    // Joke
    else if (
        message.includes("joke")
    ) {
        response = "Why do programmers prefer dark mode? Because light attracts bugs! 😂🐛";

    }


    // Love
    else if (
        message.includes("love")
    ) {
        response = "Love makes the world a little brighter! ❤️";

    }


    // Bye
    else if (
        message.includes("bye") ||
        message.includes("goodbye")
    ) {
        response = "Goodbye! 👋 It was nice chatting with you, Malaika.";

    }


    // Default response
    else {
        response = "Ok,That's interesting! 😊 Tell me more about it, Malaika.";
     }
    


        const time = getCurrentTime();


        // Display chatbot response

        displayMessage(
            response,
            "received",
            time
        );


        // Save chatbot response

        saveMessage(
            response,
            "received",
            time
        );

    }


    // ==========================================
    // Send Button
    // ==========================================

    sendBtn.addEventListener("click", function () {

        sendMessage();

    });


    // ==========================================
    // Enter Key
    // ==========================================

    messageInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    });


    // ==========================================
    // Clear Chat
    // ==========================================

    clearBtn.addEventListener("click", function () {

        const confirmClear = confirm(
            "Are you sure you want to clear the chat?"
        );


        if (confirmClear) {

            localStorage.removeItem(STORAGE_KEY);

            chatBox.innerHTML = "";

            displayMessage(
                "Chat cleared! 👋 Start a new conversation.",
                "received",
                getCurrentTime()
            );

        }

    });


    // ==========================================
    // Start Application
    // ==========================================

    loadMessages();

});