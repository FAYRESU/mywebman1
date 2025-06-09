// ตัวอย่าง: ตรวจจับการคลิกไอคอน Instagram ของแมน
document.addEventListener("DOMContentLoaded", function () {
  const manInstagram = document.querySelector('a[href*="SEEDEE7755"]');
  if (manInstagram) {
    manInstagram.addEventListener("click", function () {
      alert("กำลังเปิด Instagram ของ แมน");
    });
  }
});
