function calculateFPS() {

let cpu = document.getElementById("cpu").value;
let ram = document.getElementById("ram").value;
let gpu = document.getElementById("gpu").value;
let emu = document.getElementById("emu").value;
let res = document.getElementById("res").value;
let windows = document.getElementById("windows").value;
let storage = document.getElementById("storage").value;

let cpuScore = cpuDatabase[cpu].score;
let gpuScore = gpuDatabase[gpu].score;

//====================
// RAM SCORE
//====================

let ramScore = 10;

if(ram=="2GB") ramScore=10;
if(ram=="4GB") ramScore=25;
if(ram=="6GB") ramScore=40;
if(ram=="8GB") ramScore=55;
if(ram=="12GB") ramScore=70;
if(ram=="16GB") ramScore=85;
if(ram=="32GB") ramScore=100;

//====================
// EMULATOR BONUS
//====================

let emuScore=0;

if(emu=="MSI 5") emuScore=10;
if(emu=="LDPlayer 9") emuScore=8;
if(emu=="BlueStacks 5") emuScore=6;
if(emu=="MEmu") emuScore=5;

//====================
// RESOLUTION
//====================

let penalty=0;

if(res=="540P") penalty=0;
if(res=="720P") penalty=10;
if(res=="1080P") penalty=25;

//====================
// WINDOWS BONUS
//====================

let windowsBonus=0;

if(windows=="Windows 7") windowsBonus=0;
if(windows=="Windows 10") windowsBonus=2;
if(windows=="Windows 11") windowsBonus=-3;

if(windows=="Atlas OS") windowsBonus=8;
if(windows=="Ghost Spectre") windowsBonus=6;

if(windows=="ReviOS") windowsBonus=7;
if(windows=="XOS") windowsBonus=6;
if(windows=="Shappire OS") windowsBonus=7;

//====================
// STORAGE BONUS
//====================

let storageBonus=0;

if(storage=="HDD") storageBonus=0;
if(storage=="SSD SATA") storageBonus=3;
if(storage=="NVMe SSD") storageBonus=5;
//====================
// GRAPHICS BONUS
//====================

let graphics = document.getElementById("graphics").value;

let graphicsPenalty = 0;

if(graphics=="Smooth") graphicsPenalty = 0;
if(graphics=="Standard") graphicsPenalty = 5;
if(graphics=="Ultra") graphicsPenalty = 10;
//====================
// FPS CALCULATION
//====================

let avg = Math.round(
(cpuScore + gpuScore + ramScore + emuScore + windowsBonus + storageBonus - penalty - graphicsPenalty) / 2.3
);

if(avg > 120) avg = 120;
if(avg < 20) avg = 20;

let lobby = avg + 5;
let br = avg - 5;
let cs = avg;

if(lobby > 120) lobby = 120;
if(br < 15) br = 15;

//====================
// OUTPUT
//====================

document.getElementById("fps").innerHTML = "Average FPS : " + avg;

document.getElementById("lobby").innerHTML = lobby + " FPS";
document.getElementById("br").innerHTML = br + " FPS";
document.getElementById("cs").innerHTML = cs + " FPS";

//====================
// RECOMMENDED SETTINGS
//====================

let settings = "";

if(avg >= 90){

settings =
"Resolution : 720P<br>" +
"DPI : 160<br>" +
"Graphics : Ultra<br>" +
"CPU Core : 4<br>" +
"RAM : 4096 MB";

}

else if(avg >= 70){

settings =
"Resolution : 720P<br>" +
"DPI : 160<br>" +
"Graphics : Smooth<br>" +
"CPU Core : 4<br>" +
"RAM : 3072 MB";

}

else{

settings =
"Resolution : 540P<br>" +
"DPI : 120<br>" +
"Graphics : Smooth<br>" +
"CPU Core : 2<br>" +
"RAM : 2048 MB";

}

document.getElementById("recommend").innerHTML = settings;

//====================
// SCORE
//====================

let score = avg;

if(score > 100) score = 100;

document.getElementById("score").innerHTML = score + " / 100";
//====================
// GRADE
//====================

let grade = "D";

if(score >= 95) grade = "S+";
else if(score >= 90) grade = "S";
else if(score >= 80) grade = "A";
else if(score >= 70) grade = "B";
else if(score >= 60) grade = "C";

document.getElementById("grade").innerHTML = "Grade : " + grade;

//====================
// CPU / GPU / RAM
//====================

document.getElementById("cpuPower").innerHTML =
"CPU Power : " + Math.min(cpuScore,100) + "%";

document.getElementById("gpuPower").innerHTML =
"GPU Power : " + Math.min(gpuScore,100) + "%";

document.getElementById("ramPower").innerHTML =
"RAM Efficiency : " + ramScore + "%";

//====================
// BEST EMULATOR
//====================

let best = "MSI 5";

if(cpu.includes("10th") || cpu.includes("Ryzen"))
    best = "LDPlayer 9";

document.getElementById("bestemu").innerHTML =
best;

//====================
// FPS STATUS
//====================

let status = "🔴 Low";

if(avg >= 90)
    status = "🟢 Ultra Smooth";
else if(avg >= 70)
    status = "🟢 Smooth";
else if(avg >= 50)
    status = "🟡 Playable";

document.getElementById("status").innerHTML = status;

//====================
// PROGRESS BAR
//====================

document.getElementById("bar").style.width = score + "%";

} // calculateFPS শেষ

//====================
// COPY SETTINGS
//====================

function copySettings(){

let text = document.getElementById("recommend").innerText;

navigator.clipboard.writeText(text);

alert("Settings Copied Successfully!");

}