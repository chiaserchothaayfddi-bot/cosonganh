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
const modal = document.getElementById("modalAuth");
const btnDatLich = document.getElementById("btnDatLich");
const btnHoSo = document.getElementById("btnHoSo");
const closeModal = document.getElementById("closeModal");

const formLogin = document.getElementById("formLogin");
const formRegister = document.getElementById("formRegister");
const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

const headerLogin = document.getElementById("headerLogin");
const headerRegister = document.getElementById("headerRegister");

// Hàm mở modal với loại form
function openModal(type = "login") {
    modal.style.display = "flex";
    if (type === "login") {
        formLogin.style.display = "block";
        formRegister.style.display = "none";
    } else {
        formLogin.style.display = "none";
        formRegister.style.display = "block";
    }
}

// Mở modal khi click
btnDatLich.onclick = () => openModal("login");
btnHoSo.onclick = () => openModal("login");
headerLogin.onclick = () => openModal("login");
headerRegister.onclick = () => openModal("register");

// Đóng modal
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }

// Chuyển form
switchToRegister.onclick = () => openModal("register");
switchToLogin.onclick = () => openModal("login");