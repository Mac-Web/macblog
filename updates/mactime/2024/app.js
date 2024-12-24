document.addEventListener("DOMContentLoaded", function () {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.innerHTML = `<a href="/macblog/" class="logo">
        <img src="/macblog/macblog-logo.png" alt="MacBlog Logo" />
      </a>
      <a href="/macblog/apps/" class="nav-link">Apps</a>
      <a href="/macblog/posts/" class="nav-link">Posts</a>
      <a href="/macblog/roadmap/" class="nav-link">Roadmap</a>
      <a href="/macblog/updates/" class="nav-link">Updates</a>
      <div class="right">
        <div class="select help-menu" id="help-menu">
          <span id="header123" class="help-menu">Help</span>
          <img src="/caret.svg" class="caret help-menu" id="caret" />
          <ul id="cats" class="help-menu">
            <a href="/macblog/apps/macblog/">About</a>
            <a href="/macblog/updates/macblog/">Updates</a>
            <a href="/macblog/apps/macblog/">Docs</a>
            <a href="https://forms.gle/8ATGPGkr7mqKrJ1e9" target="_blank">
              Feedback
            </a>
          </ul>
        </div>
        <img src="/profile.svg" class="profile" id="profile" />
      </div>`;
  const sidebarmain = document.createElement("div");
  sidebarmain.classList.add("macsidebar");
  sidebarmain.setAttribute("id", "sidebar");

  sidebarmain.innerHTML = `<a href="/"><img src="/logo.png" alt="" /></a>
  <a href="/macideas/"><img src="/MacIdeas Logo.png" alt="" /></a>
<a href="/maclearn/"><img src="/MacLearn Logo.png" alt="" /></a>
<a href="/mactime/"><img src="/MacTime Logo.png" alt="" /></a>
<a href="/macvg/"><img src="/MacVG Logo.png" alt="" /></a>
<a href="/macblog/"><img src="/MacBlog Logo.png" alt="" /></a>`;
  document.addEventListener("mousemove", function (event) {
    if (
      event.clientX <= 5 &&
      sidebarmain.classList.contains("movingbar") !== true
    ) {
      sidebarmain.classList.add("movingbar");
    }
  });
  document.addEventListener("click", function () {
    sidebarmain.classList.remove("movingbar");
  });
  document.body.appendChild(sidebarmain);
  const wrappermain = document.createElement("div");
  wrappermain.classList.add("wrapp");
  wrappermain.innerHTML = `
  <ul class="sidebar">
    <h2 class="sidebar-title">MacTime Updates</h2>
    <li class="syear">2024</li>
    <div class="sidelinks">
    <a href="/macblog/updates/mactime/2024/january.html"><li>January Update</li></a><a href="/macblog/updates/mactime/2024/february.html"><li>February Update</li></a><a href="/macblog/updates/mactime/2024/march.html"><li>March Update</li></a><a href="/macblog/updates/mactime/2024/april.html"><li>April Update</li></a><a href="/macblog/updates/mactime/2024/july.html"><li>July Update</li></a><a href="/macblog/updates/mactime/2024/november.html"><li>November Update</li></a>
    </div>
  </ul>
  <div class="content">
    <article class="article">
      <h1 class="article-title" id="title"></h1>
      <h3 class="author"><span class="date" id="date"></span></h3>
      <hr />
      <p class="main-art" style="margin-top: 40px" id="description"></p>
      <div class="table-contents">
        <h2 class="stitle">Table of Contents</h2>
        <div id="menulinks">
        </div>
      </div>
      <div id="articlewrapper">
      </div>
      <b class="bold">Other Improvements, Changes, and Fixes include:</b>
      <ul style="margin-bottom: 50px" id="otherslist">
      </ul>
      <footer style="text-align: center; padding-block: 30px;">
        &copy; 2024 <a href="/" style="color: rgb(215,215,215)">MacWeb</a>
      </footer>
    </article>
  </div>`;
  document.body.appendChild(nav);
  document.body.appendChild(wrappermain);
  const helpMenuItems = document.getElementById("cats");
  const helpMenu = document.getElementById("help-menu");
  const helpCaret = document.getElementById("caret");
  let helpOpen = false;
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("help-menu")) {
      helpMenuItems.style.transform = "scaleY(0)";
      helpMenu.removeAttribute("style");
      helpCaret.removeAttribute("style");
      helpOpen = false;
    }
  });
  helpMenu.addEventListener("click", () => {
    if (helpOpen === false) {
      helpMenuItems.style.transform = "scaleY(1)";
      helpMenu.style.backgroundColor = "rgba(15, 15, 15, 0.8)";
      helpCaret.style.transform = "rotate(0deg)";
      helpOpen = true;
    } else {
      helpMenuItems.style.transform = "scaleY(0)";
      helpMenu.removeAttribute("style");
      helpCaret.removeAttribute("style");
      helpOpen = false;
    }
  });
  const syear = document.querySelectorAll(".syear");
  const syearr = document.querySelectorAll(".sidelinks");
  syear.forEach((year) => {
    let index = Array.from(syear).indexOf(year);
    syearr.forEach((yearr) => {
      let indexx = Array.from(syearr).indexOf(yearr);
      year.addEventListener("click", (e) => {
        if (indexx == index) {
          yearr.classList.toggle("yearclose");
        }
      });
    });
  });
  const currentPage = window.location.pathname.split("/").pop();
  const dataFile = "data/" + currentPage.split(".")[0] + ".json";
  fetch(dataFile)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("date").textContent = data.date;
      document.getElementById("description").textContent = data.description;
      for (let i = 1; i <= parseInt(data.mainarticles.count); i++) {
        let subheading = document.createElement("b");
        let paragraph = document.createElement("p");
        paragraph.classList.add("main-art");
        subheading.classList.add("bold");
        subheading.setAttribute("id", "sh" + i);
        paragraph.setAttribute("id", "p" + i);
        let propName = "sh" + i;
        let parname = "p" + i;
        subheading.textContent = data.mainarticles[propName];
        paragraph.textContent = data.mainarticles[parname];
        document.getElementById("articlewrapper").appendChild(subheading);
        document.getElementById("articlewrapper").appendChild(paragraph);
      }
      for (let i = 1; i <= parseInt(data.others.count); i++) {
        let item = document.createElement("li");
        item.setAttribute("id", "other" + i);
        let propName = "other" + i;
        item.textContent = data.others[propName];
        document.getElementById("otherslist").appendChild(item);
      }
      for (let i = 1; i <= parseInt(data.menulinks.count); i++) {
        let link = document.createElement("a");
        link.setAttribute("id", "menu" + i);
        let propName = "menu" + i;
        link.textContent = data.menulinks[propName];
        let proName = "menu" + i + "link";
        link.setAttribute("href", data.menulinks[proName]);
        document.getElementById("menulinks").appendChild(link);
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});
