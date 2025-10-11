const chatBtn = document.getElementById("chatBtn");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn"); // Bấm vào nút -> mở hộp chat 
chatBtn.onclick = () => { chatWindow.style.display = "flex"; }
closeChat.onclick = () => { chatWindow.style.display = "none"; }
sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });
function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.textContent = msg;
    chatBody.appendChild(userMsg);
    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "chat-message bot";
        botMsg.textContent = "ICare: Tôi đã nhận được tin nhắn của bạn!";
        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
}
    const updateBtn = document.getElementById('updateBtn');
    const overlay = document.getElementById('overlay');
    const cancelBtn = document.getElementById('cancelBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const form = document.getElementById('infoForm');

    updateBtn.addEventListener('click', () => {
      overlay.style.display = 'flex';
    });

    cancelBtn.addEventListener('click', () => {
      overlay.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thông tin đã được lưu!');
      overlay.style.display = 'none';
    });