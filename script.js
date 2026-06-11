const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

function moveButton(){

const padding = 50;

const maxX = window.innerWidth - noBtn.offsetWidth - padding;
const maxY = window.innerHeight - noBtn.offsetHeight - padding;

const x = Math.random()*maxX;
const y = Math.random()*maxY;

noBtn.style.position = "fixed";
noBtn.style.left = x+"px";
noBtn.style.top = y+"px";
}

noBtn.addEventListener("mouseenter", moveButton);

noBtn.addEventListener("touchstart", e=>{
e.preventDefault();
moveButton();
});

yesBtn.addEventListener("click", ()=>{
page1.classList.add("hidden");
page2.classList.remove("hidden");
});

for(let i=0;i<25;i++){

const h=document.createElement("div");

h.className="heart";
h.innerHTML="💖";

h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(6+Math.random()*8)+"s";

document.querySelector(".hearts").appendChild(h);
}

document
.getElementById("submitBtn")
.addEventListener("click", async()=>{

const day =
document.getElementById("day").value;

const time =
document.getElementById("time").value;

const status =
document.getElementById("status");

if(!day || !time){

status.textContent =
"Pick a day and time ❤️";

return;
}

status.textContent =
"Sending...";

const res = await fetch("/api/submit",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
day,
time
})
});

if(res.ok){

status.textContent =
"Date accepted 💖";

}else{

status.textContent =
"Something went wrong 😢";
}
});
