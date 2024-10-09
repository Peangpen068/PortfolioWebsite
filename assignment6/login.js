// window.onload = loginLoad;
// function loginLoad(){
	
// }

// function checkLogin(){
// 	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
// }

// document.getElementById('myLogin').addEventListener('submit', function (e) {
// 	e.preventDefault();
  
// 	const loginUsername = document.getElementById('loginUsername').value;
// 	const loginPassword = document.getElementById('loginPassword').value;
  
// 	// ดึงข้อมูลผู้ใช้จาก localStorage
// 	const userData = JSON.parse(localStorage.getItem('userData'));
  
// 	// ตรวจสอบข้อมูลการล็อกอิน
// 	if (userData && loginUsername === userData.username && loginPassword === userData.password) {
// 	  document.getElementById('loginResult').innerHTML = 'เข้าสู่ระบบสำเร็จ!';
// 	} else {
// 	  document.getElementById('loginResult').innerHTML = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
// 	}
//   });
			  
// --------------------------------------

// document.getElementById("myLogin").onsubmit = function(event) {
//     event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ
    
//     let usernameInput = document.getElementById("loginUsername").value;
//     let passwordInput = document.getElementById("loginPassword").value;
//     let loginResult = document.getElementById("loginResult");
    
//     // ดึงข้อมูลจาก localStorage
//     let storedUsername = localStorage.getItem("username");
//     let storedPassword = localStorage.getItem("password");
    
//     // ตรวจสอบ username และ password
//     if (usernameInput === storedUsername && passwordInput === storedPassword) {
//         loginResult.innerHTML = "เข้าสู่ระบบสำเร็จ!";
//     } else {
//         loginResult.innerHTML = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!";
//     }
// };

// -----------------------------------------
// document.getElementById("myLogin").onsubmit = function(event) {
//     event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ
    
//     let usernameInput = document.getElementById("loginUsername").value;
//     let passwordInput = document.getElementById("loginPassword").value;
    
//     // ดึงข้อมูลจาก localStorage
//     let storedUsername = localStorage.getItem("username");
//     let storedPassword = localStorage.getItem("password");
    
//     // ตรวจสอบ username และ password
//     if (usernameInput === storedUsername && passwordInput === storedPassword) {
//         alert("Login Success!"); 
//     } else {
//         alert("UsernameหรือPasswordไม่ถูกต้อง!"); 
//     }
// };

// -----------------------------------------

window.onload = loginLoad;
function loginLoad(){
    var form = document.getElementById("myLogin");
    form.onsubmit = myLoginfunction;
}

// document.getElementById("myLogin").onsubmit = function(event) {
//     event.preventDefault(); // ป้องกันการส่งฟอร์มก่อนตรวจสอบ
    
    // let usernameInput = document.getElementById("loginUsername").value;
    // let passwordInput = document.getElementById("loginPassword").value;
    
    // // ดึงข้อมูลจาก localStorage
    // let storedUsername = localStorage.getItem("username");
    // let storedPassword = localStorage.getItem("password");
function myLoginfunction(){

    const queryString = window.location.search;
    const urlParams =  new URLSearchParams(queryString);
    const registerUsername = urlParams.get('username'); 
    const registerPassword = urlParams.get('password'); 

    var loginUsername = document.forms["myLogin"]["username"].value;
    var loginPassword = document.forms["myLogin"]["password"].value;
    
    // ตรวจสอบ username และ password
    if (loginUsername === registerUsername && loginPassword === registerPassword) {
        alert("Login Success!"); 
    } else {
        alert("UsernameหรือPasswordไม่ถูกต้อง!"); 
        return false;
    }
}
// };

