var currentProject;

function closeDetailsWindow() {
  document.getElementById("project_details").style.transform = "scale(0%)";
}

function openDetailsWindow(i) {
  document.getElementById("project_details").style.transform = "scale(100%)";
  loadProjects(i);
}

function loadProjects(i) {
  hideProjects();
  currentProject = i;
  document.getElementById("video_" + currentProject).style.opacity = 1;
  document.getElementById("video_" + currentProject).classList.add("go_from_right");
  validateProjectIndex();

  showSkills(currentProject);

  changeProjectTitle(currentProject);
  changeLinks(currentProject);

  changeScreenshots(currentProject);
}

function prevProject() {
  currentProject--;
  validateProjectIndex();
  hideProjects();
  document.getElementById("video_" + currentProject).style.opacity = 0.9;

  document.getElementById("video_" + currentProject).classList.add("go_from_left");
  document.getElementById("video_" + (currentProject + 1)).classList.add("go_right");

  showSkills(currentProject);

  changeProjectTitle(currentProject);
  changeLinks(currentProject);

  changeScreenshots(currentProject);
}

function nextProject() {
  currentProject++;
  validateProjectIndex();
  hideProjects();
  document.getElementById("video_" + currentProject).style.opacity = 1;

  document.getElementById("video_" + currentProject).classList.add("go_from_right");
  document.getElementById("video_" + (currentProject - 1)).classList.add("go_left");

  showSkills(currentProject);

  changeProjectTitle(currentProject);
  changeLinks(currentProject);

  changeScreenshots(currentProject);
}

function changeProjectTitle(index) {
  const titles = [ "SP Business Lab",
                   "See PropTech",
                   "Seventh-day Adventist Church",
                   "PropTech Bulgaria YouTube Chanel" ];

  document.getElementById("project_title").innerHTML = titles[index - 1];
}

function changeLinks(index) {
  const visitLinks = [ "http://spbusinesslab.com/",
                       "http://seeproptech.eu/",
                       "https://pld-center.sdabg.net/",
                       "https://www.youtube.com/@proptechbulgaria"];

  document.getElementById("visit_link").href = visitLinks[index - 1];
}

function changeGitHubLinks(index) {
  const gitHubLinks = [ "https://github.com/simeonkondov02/SP-Business-Lab",
                        "https://github.com/simeonkondov02/CSEE-Proptech-Platform",
                        "https://pld-center.sdabg.net/",
                        "https://www.youtube.com/@proptechbulgaria"];

  document.getElementById("visit_link").href = visitLinks[index - 1];
}

function changeScreenshots(index) {
  const screenshots = [ "SP Busines Lab.png",
                        "CSEE Prop Tech Pladform.png",
                        "Seventh Day Adventist Church.png",
                        "PropTech YouTube Chanel.png"];

  document.getElementById("project_screenshots").style.backgroundImage = "url('Resurces/Screenshots/" + screenshots[index - 1] + "')";
}

function hideProjects() {
  for (var i = 1; i <= 4; i++) {
    document.getElementById("video_" + i).style.opacity = 0;
  }
}

function validateProjectIndex() {
  if (currentProject <= 0) {
    currentProject = 4;
  } else if (currentProject >= 5) {
      currentProject = 1;
  }

  if (currentProject == 1) document.getElementById("prev_btn").style.display = "none";
  else document.getElementById("prev_btn").style.display = "inline-grid";

  if (currentProject == 4) document.getElementById("next_btn").style.display = "none";
  else  document.getElementById("next_btn").style.display = "inline-grid";

  if (currentProject == 1) document.getElementById("prev_btn").style.display = "none";
  else document.getElementById("prev_btn").style.display = "inline-grid";

  if (currentProject == 4) document.getElementById("next_btn").style.display = "none";
  else  document.getElementById("next_btn").style.display = "inline-grid";
}

function showSkills(index) {
  for (var i = 1; i <= 4; i++) {
    if (i != index) {
      document.getElementById("skills_" + i).classList.remove("show_skill");
    } else
      document.getElementById("skills_" + i).classList.add("show_skill");
  }
}
