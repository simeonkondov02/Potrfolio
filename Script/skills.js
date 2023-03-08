function loadSkills() {
  setInterval(function() {
    for (var i = 1; i <= 40; i++) {
      pickRandomAnimation(i);
    }
  }, 5000);
}

function pickRandomSkill() {
  const skills = [
    "HTML", "JavaScript", "CSS", "C#", "Streaming", "JavaScript", ".Net",
    "Lightroom", "Photoshop", "vMix", "Premiere Pro", "Audio Engineering"
  ];

  var selectedSkill = Math.floor(Math.random() * (12 - 0) + 0);
  var skill = skills[selectedSkill];

  return skill;
}

function pickRandomAnimation(id) {
  const animations = [
    "flipY", "flipX"
  ]

  var card = document.getElementById("card_" + id);

  card.style.animation = animations[Math.floor(Math.random() * (2 - 0) + 0)] + " ." + Math.floor(Math.random() * (10000 - 2000) + 2000) + "s";
  card.innerHTML = pickRandomSkill();
}

function pickRandomBackgraund() {
  const colors = [
    "#eaeffa", "#d6e0f5", "#c1d0f0",
  ];

  var selectedColor = Math.floor(Math.random() * (3 + 1 - 0) + 0);
  var color = colors[selectedColor];

  return color;
}

function pickRandomColor() {
  const colors = [
    "#1c4a47", "#000000", "#220e58"
  ];

  var selectedColor = Math.floor(Math.random() * (3 + 1 - 0) + 0);
  var color = colors[selectedColor];

  return color;
}
