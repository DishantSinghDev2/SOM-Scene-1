// Dragon sighting counter
let count = localStorage.getItem("dragonCount") || 0;
count++;
document.getElementById("counter").innerText = count;
localStorage.setItem("dragonCount", count);

// Easter egg: Konami code = summon hidden dragon
const konami = [38,38,40,40,37,39,37,39,66,65];
let input = [];
window.addEventListener("keydown", (e) => {
  input.push(e.keyCode);
  if (input.toString().indexOf(konami) >= 0) {
    alert("✨ You summoned the Splorgon Dragon! ✨");
    input = [];
  }
});

// Tooltip + sound for hotspots
const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');

hotspots.forEach(spot => {
  const sound = new Audio(spot.dataset.sound);

  spot.addEventListener('mouseenter', () => {
    tooltip.innerText = spot.dataset.rune;
    tooltip.style.display = 'block';
    sound.currentTime = 0;
    sound.play();
  });

  spot.addEventListener('mousemove', e => {
    tooltip.style.left = (e.pageX + 15) + 'px';
    tooltip.style.top = (e.pageY - 20) + 'px';
  });

  spot.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
