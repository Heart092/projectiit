document.getElementById("send-button").addEventListener("click", () => {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("messages");

    if (!input.value.trim()) return;

    const userMessage = `<div class='message user'>${input.value}</div>`;
    messages.innerHTML += userMessage;

    const botReply = `<div class='message bot'>I'm here to help! What would you like to know?</div>`;
    messages.innerHTML += botReply;

    input.value = "";
});
