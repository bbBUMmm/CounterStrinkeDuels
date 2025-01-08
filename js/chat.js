document.addEventListener("DOMContentLoaded", () => {
    const chatPopup = document.getElementById("chat-popup");
    const openChat = document.getElementById("open-chat");
    const closeChat = document.getElementById("close-chat");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.querySelector(".chat-messages");

    let flagged = false;

    // Load saved messages from localStorage
    loadMessages();

    // Open Chat Popup
    openChat.addEventListener("click", () => {
        chatPopup.classList.add("show");
    });

    // Close Chat Popup
    closeChat.addEventListener("click", () => {
        chatPopup.classList.remove("show");
    });

    // Close Popup by Clicking Outside of Chat Container
    chatPopup.addEventListener("click", (e) => {
        if (e.target === chatPopup) {
            chatPopup.classList.remove("show");
        }
    });

    // Send Message
    sendButton.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, "sent");
            chatInput.value = ""; // Clear the input

            if (!flagged) {
                // Respond with professional message
                setTimeout(() => {
                    addMessage(
                        "Wait... Our employee will connect with you shortly. Thank you for your patience.",
                        "received"
                    );
                }, 1000);
                flagged = true;
            }
        }
    });

    // Add Message to Chat and Save to localStorage
    function addMessage(text, type) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", type);
        messageDiv.innerHTML = text; // Allows HTML formatting
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom

        // Save message to localStorage
        saveMessageToLocalStorage(text, type);
    }

    // Save message to localStorage
    function saveMessageToLocalStorage(text, type) {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push({ text, type });
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    // Load messages from localStorage
    function loadMessages() {
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.forEach(message => {
            addMessage(message.text, message.type);
        });
    }

    // Add the dragging functionality with smoother performance
    let offsetX = 0, offsetY = 0, isDragging = false;

    // Detect mouse down event to start dragging
    chatPopup.querySelector('.chat-header').addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - chatPopup.getBoundingClientRect().left;
        offsetY = e.clientY - chatPopup.getBoundingClientRect().top;
        document.body.style.cursor = 'move'; // Change cursor to indicate dragging
    });

    // Detect mouse move to move the popup
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            requestAnimationFrame(() => {
                chatPopup.style.transform = `translate(${e.clientX - offsetX}px, ${e.clientY - offsetY}px)`;
            });
        }
    });

    // Detect mouse up event to stop dragging, but without closing the popup
    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.body.style.cursor = 'default'; // Reset cursor after dragging
    });
});
