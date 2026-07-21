function renderCourseInfo() {
  document.getElementById("course-title").textContent = COURSE_INFO.title;
  document.getElementById("course-period").textContent = COURSE_INFO.period;

  const instructorEl = document.getElementById("course-instructor");
  instructorEl.textContent = COURSE_INFO.instructor + " ";
  COURSE_INFO.instructorLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    a.rel = "noopener";
    instructorEl.appendChild(a);
  });

}

function renderMaterials() {
  document.getElementById("materials-title").textContent = MATERIALS_SECTION.title;
  document.getElementById("materials-desc").textContent = MATERIALS_SECTION.desc;

  const grid = document.getElementById("materials-grid");
  MATERIALS.forEach((item) => {
    const card = document.createElement("div");
    card.className = "material-card";

    const isPadlet = item.type === "padlet";
    const label = isPadlet ? "패들렛 열기" : "다운로드";
    const target = isPadlet ? ' target="_blank" rel="noopener"' : "";

    card.innerHTML = `
      <div class="material-icon">${item.icon}</div>
      <div class="material-info">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      <a class="material-btn" href="${item.url || "#"}"${target}>${label}</a>
    `;
    grid.appendChild(card);
  });
}

function renderLectureGrid() {
  const grid = document.getElementById("lecture-grid");
  LECTURES.forEach((lecture) => {
    const card = document.createElement("a");
    card.className = "lecture-card";
    card.href = lecture.link;

    card.innerHTML = `
      <span class="no">${lecture.no}차시</span>
      <h3>${lecture.title}</h3>
      <p>${lecture.summary}</p>
      <span class="btn">강의안 보기 →</span>
    `;
    grid.appendChild(card);
  });
}

renderCourseInfo();
renderLectureGrid();
renderMaterials();
