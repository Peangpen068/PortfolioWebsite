// window.onload = pageLoad;
// function pageLoad(){
	
// }

// function validateForm() {
//     //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
// }

// document.getElementById('myRegister').addEventListener('submit', function (e) {
//     e.preventDefault();
  
//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const bday = document.getElementById('bday').value;
//     const email = document.getElementById('email').value;
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;
  
//     // ตรวจสอบรหัสผ่าน
//     if (password !== confirmPassword) {
//       document.getElementById('errormsg').textContent = 'password ไม่ตรงกัน';
//       return;
//     }
  
//     // เก็บข้อมูลผู้ใช้ลงใน localStorage
//     localStorage.setItem('userData', JSON.stringify({
//       firstname,
//       lastname,
//       gender,
//       bday,
//       email,
//       username,
//       password
//     }));
  
//     document.getElementById('registerResult').innerHTML = 'ลงทะเบียนสำเร็จ! ไปที่ <a href="login.html">หน้าล็อกอิน</a>';
//   });
  
// ----------------------------------------------------

// document.getElementById("myRegister").onsubmit = function(event) {
//   event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ
  
//   let firstname = document.getElementById("firstname").value;
//   let lastname = document.getElementById("lastname").value;
//   let email = document.getElementById("email").value;
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let confirmPassword = document.getElementById("confirmPassword").value;
//   let errorMsg = document.getElementById("errormsg");
  
//   // ตรวจสอบว่ากรอกข้อมูลครบทุกช่องหรือไม่
//   if (!firstname || !lastname || !email || !username || !password || !confirmPassword) {
//       errorMsg.innerHTML = "กรุณากรอกข้อมูลให้ครบทุกช่อง!";
//       return;
//   }
  
//   // ตรวจสอบว่ารหัสผ่านและการยืนยันรหัสผ่านตรงกันหรือไม่
//   if (password !== confirmPassword) {
//       errorMsg.innerHTML = "รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน!";
//       return;
//   }

//   // ถ้าทุกอย่างถูกต้อง เก็บข้อมูลลง localStorage
//   localStorage.setItem("username", username);
//   localStorage.setItem("password", password);

//   // ไปยังหน้า login
//   window.location.href = "login.html";
// };

// ------------------------------------------------------------------

// document.getElementById("myRegister").onsubmit = function(event) {
//   event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ

window.onload = registerLoad;
function registerLoad(){
    var form = document.getElementById("myRegister");
    form.onsubmit = myRegisterfunction;
}
  
function myRegisterfunction(){
    
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let errorMsg = document.getElementById("errormsg");
  
  // ตรวจว่ากรอกข้อมูลครบทุกช่อง
  if (!firstname || !lastname || !email || !username || !password || !confirmPassword) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง!"); 
      return false;
  }
  
  // ตรวจสอบรหัสผ่าน
  // if (password !== confirmPassword) {
  //     alert("Passwordไม่ตรงกัน!"); 
  //     return;
  // }
  if (password !== confirmPassword) {
          errorMsg.innerHTML = "Passwordไม่ตรงกัน!";
          return false;
      }

  // ถ้าถูกหมด เก็บข้อมูลลง localStorage
  // localStorage.setItem("username", username);
  // localStorage.setItem("password", password);

  // ไปยังหน้า login
  // alert("ลงทะเบียนสำเร็จ! กำลังเปลี่ยนหน้าไปยังการเข้าสู่ระบบ."); 
  // window.location.href = "login.html";
}

