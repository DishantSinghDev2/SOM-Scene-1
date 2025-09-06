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


// Tooltip for rune text
const plants = document.querySelectorAll('.plant');
const tooltip = document.getElementById('tooltip');

plants.forEach(plant => {
  plant.addEventListener('mouseenter', e => {
    tooltip.innerText = plant.dataset.rune;
    tooltip.style.display = 'block';
  });

  plant.addEventListener('mousemove', e => {
    tooltip.style.left = (e.pageX + 15) + 'px';
    tooltip.style.top = (e.pageY - 20) + 'px';
  });

  plant.addEventListener('mouseleave', e => {
    tooltip.style.display = 'none';
  });
});
