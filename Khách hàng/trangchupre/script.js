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




  let otpCode = "123456"; // Giả lập OTP

  // 🔹 Mở form
  function openForm() {
    document.getElementById('overlay').classList.add('active');
    showStep(1);
  }

  // 🔹 Đóng form và reset toàn bộ
  function closeForm() {
    document.getElementById('overlay').classList.remove('active');
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
  }

  // 🔹 Chuyển bước
  function showStep(step) {
    document.querySelectorAll('.container').forEach(c => c.classList.add('hidden'));
    document.getElementById('step' + step).classList.remove('hidden');
  }

  // 🔹 Gửi OTP
  function sendOTP() {
    //const phone = document.getElementById('phone').value;
    const error = document.getElementById('error1');
    /*if (!/^0[0-9]{9}$/.test(phone)) {
      error.textContent = "Số điện thoại không hợp lệ!";
      return;
    }*/
    error.textContent = "";
    showStep(2);
    alert("OTP giả lập được gửi: " + otpCode);
  }

  // 🔹 Xác minh OTP
  function verifyOTP() {
    const otp = document.getElementById('otp').value;
    const error = document.getElementById('error2');
    if (otp !== otpCode) {
      error.textContent = "Mã OTP không đúng hoặc đã hết hạn!";
      return;
    }
    error.textContent = "";
    showStep(3);
  }

  // 🔹 Gửi lại mã
  function resendOTP() {
    alert("Mã OTP mới đã được gửi!");
  }

  // 🔹 Đặt lại mật khẩu
  function resetPassword() {
    const pass1 = document.getElementById('newPass').value;
    const pass2 = document.getElementById('confirmPass').value;
    const error = document.getElementById('error3');
    const success = document.getElementById('successMsg');

    if (pass1.length < 6) {
      error.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
      return;
    }
    if (pass1 !== pass2) {
      error.textContent = "Mật khẩu nhập lại không khớp!";
      return;
    }

    error.textContent = "";
    success.textContent = "Đặt lại mật khẩu thành công! Đang chuyển hướng...";
    setTimeout(() => {
      alert("Chuyển đến trang Tài khoản của bạn");
      closeForm();
    }, 1500);
  }