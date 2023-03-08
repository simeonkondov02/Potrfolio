function loadSphere() {
  const myTags = [
    "HTML", "JavaScript", "CSS",
    "C#", "Streaming", "JavaScript",
    ".Net", "Lightroom", "HTML",
    "Photoshop", "vMix", "Premiere Pro",
    "Audio Engineering", "CSS",
  ];

  var tagCloud = TagCloud('.sphere_content', myTags,{
  radius: window.innerHeight / 3,
  maxSpeed: 'normal',
  initSpeed: 'normal',
  direction: 135,
  keep: true
  });
}
