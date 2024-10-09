window.onload = pageLoad;

function pageLoad(){

	document.getElementById("start").onclick = startGame; 

}

function startGame(){
	alert("Ready"); 
    addBox(); 
    timeStart(); 
}

function timeStart(){
	var TIMER_TICK = 1000; // หน่วยเป็นมิลลิวินาที 
    var timer = null;
    var min = 0.5; // 0.5 นาที
    var second = min * 60; // เปลี่ยนเป็นวินาที
    var x = document.getElementById('clock'); // ส่วนที่แสดงเวลาบนหน้าจอ
    x.innerHTML = second; // แสดงเวลาบนหน้าจอ

    // ใช้ setInterval เพื่อเรียกฟังก์ชัน timeCount ทุกๆ 1 วินาที
    timer = setInterval(timeCount, TIMER_TICK);

    function timeCount(){
        var allbox = document.querySelectorAll("#layer div"); // ค้นหากล่องที่อยู่ใน layer
        second--; // ลดเวลาลง
		x.innerHTML = second; // อัปเดตเวลาในหน้าเว็บ

		// จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
		// ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
		// ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen

        if (allbox.length == 0 && second > 0) {
            alert("You win!"); // ถ้าไม่มีกล่องและเวลายังเหลืออยู่ จะชนะ
            clearInterval(timer); // หยุดจับเวลา
            clearScreen(); 
        } 
		else if (second == 0) {
            if (allbox.length > 0) {
                alert("Game over!"); // ถ้าเวลาหมดแต่ยังมีกล่องอยู่จะแพ้
            }
            clearInterval(timer); // หยุดจับเวลา
            clearScreen(); 
        }
    }
}

function addBox(){
	var numbox = document.getElementById("numbox").value; // จำนวนกล่องที่กรอก
    var gameLayer = document.getElementById("layer"); // พื้นที่ที่ใช้วางกล่อง
    var colorDrop = document.getElementById("color").value; // เลือกสีจาก drop-down

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div"); // สร้างกล่องใหม่
        tempbox.className = "square"; // เพิ่ม class ให้กล่อง
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px"; 
        tempbox.style.top = Math.random() * (500 - 25) + "px"; 
        tempbox.style.backgroundColor = colorDrop; // กำหนดสีที่เลือก
        gameLayer.appendChild(tempbox); // เพิ่มกล่องไปยังพื้นที่เกม
        bindBox(tempbox); // ผูกฟังก์ชันเมื่อคลิกกล่อง
    }
}

function bindBox(box){
	box.onclick = function() {
        box.parentNode.removeChild(box); // ลบกล่องที่ถูกคลิก
    }
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div"); // ค้นหากล่องทั้งหมดใน layer

    // ลบทุกกล่องออกจาก layer
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]); // ลบกล่อง
    }
}




