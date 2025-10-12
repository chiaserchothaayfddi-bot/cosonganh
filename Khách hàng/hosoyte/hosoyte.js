function showDetail(text) {
  const detail = document.getElementById("detailText");
  detail.textContent = text;
}

function searchPatient() {
  const input = document.getElementById("searchInput").value.trim();
  if (input === "") {
    alert("Vui lòng nhập tên hoặc mã hồ sơ để tìm kiếm!");
    return;
  }
  // Demo: có thể kết nối API ở đây
  alert(`Đang tìm kiếm hồ sơ của: ${input}`);
}
