  // Toggle details only when clicking the arrow button
  document.querySelectorAll('.arrow-btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      const card = this.closest('.doctor-card');
      const details = card.querySelector('.details');

      // close other open cards
      document.querySelectorAll('.doctor-card').forEach(c=>{
        if(c !== card){
          c.querySelector('.details').style.maxHeight = null;
          c.querySelector('.arrow-btn').classList.remove('open');
          c.querySelector('.arrow-btn').setAttribute('aria-expanded','false');
          c.querySelector('.details').setAttribute('aria-hidden','true');
        }
      });

      const isOpen = this.classList.contains('open');
      if(isOpen){
        // close
        this.classList.remove('open');
        this.setAttribute('aria-expanded','false');
        details.style.maxHeight = null;
        details.setAttribute('aria-hidden','true');
      } else {
        // open
        this.classList.add('open');
        this.setAttribute('aria-expanded','true');
        details.style.maxHeight = details.scrollHeight + "px";
        details.setAttribute('aria-hidden','false');
        // optional: smooth scroll into view
        card.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // make day-card selectable (toggle selected style)
  document.querySelectorAll('.days').forEach(daysWrap=>{
    daysWrap.addEventListener('click', function(e){
      const day = e.target.closest('.day-card');
      if(!day) return;
      // remove selected in this group
      this.querySelectorAll('.day-card').forEach(d=>d.classList.remove('selected'));
      day.classList.add('selected');
    });
  });

  // time button click (example: highlight)
  document.querySelectorAll('.times').forEach(timesWrap=>{
    timesWrap.addEventListener('click', function(e){
      const t = e.target.closest('.time-btn');
      if(!t) return;
      // simple visual feedback
      this.querySelectorAll('.time-btn').forEach(x=>x.style.background='');
      t.style.background = '#cfe5ff';
    });
  });

  // optional: close all when clicking outside
  document.addEventListener('click', function(e){
    if(!e.target.closest('.doctor-card')){
      document.querySelectorAll('.doctor-card').forEach(c=>{
        c.querySelector('.details').style.maxHeight = null;
        c.querySelector('.arrow-btn').classList.remove('open');
        c.querySelector('.arrow-btn').setAttribute('aria-expanded','false');
        c.querySelector('.details').setAttribute('aria-hidden','true');
      });
    }
  });

// chon khoa
const khoaInput = document.getElementById("khoaInput");
  const dropdown = document.getElementById("dropdownKhoa");

  // Khi click vào ô chọn khoa -> mở dropdown
  khoaInput.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // Khi chọn 1 khoa -> gán vào input + ẩn dropdown
  function chonKhoa(tenKhoa) {
    khoaInput.value = tenKhoa;
    dropdown.style.display = "none";
  }

  // Nếu click ra ngoài dropdown -> ẩn nó
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".input-box")) {
      dropdown.style.display = "none";
    }
  });