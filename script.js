// dragon sighting counter
let count = localStorage.getItem("dragonCount") || 0;
count++;
document.getElementById("counter").innerText = count;
localStorage.setItem("dragonCount", count);

// Easter egg: Konami code = summon hidden dragon
const konami = [38,38,40,40,37,39,37,39,66,65]; // up up down down left right left right b a
let input = [];
window.addEventListener("keydown", (e) => {
  input.push(e.keyCode);
  if (input.toString().indexOf(konami) >= 0) {
    alert("✨ You summoned the Splorgon Dragon! ✨");
    document.querySelector(".dragon").style.opacity = "1";
    input = [];
  }
});
