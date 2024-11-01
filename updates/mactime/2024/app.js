document.addEventListener("DOMContentLoaded", function () {
  const styles = document.createElement("style");
  styles.innerHTML = `
  .time {
    text-align: left !important;
    width: 100%;
  }

  hr {
    background-color: white;
    border: none;
    height: 2px;
    width: 100%;
  }

  .bold {
    padding-block: 30px;
    display: block;
    font-size: 28px;
  }

  .main-art {
    width: 70%;
    margin-inline: 15%;
    font-size: 18px;
  }`;
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  nav.innerHTML = `<a href="/macblog" class="logo">
  <img src="/macblog/macblog-logo.png" alt="MacBlog Logo" />
</a>
<a href="/macblog/posts/" class="nav-link">Posts</a>
<a href="/macblog/projects/" class="nav-link">Projects</a>
<a href="/macblog/roadmap/" class="nav-link">Roadmap</a>
<a href="/macblog/updates/" class="nav-link">Updates</a>
<div class="select">
  <span id="header123">Help</span>
  <ul id="cats">
    <a href="/macblog/projects/macblog/">About</a>
    <a href="/macblog/updates/macblog/">Updates</a>
    <a href="/macblog/projects/macblog/">Docs</a>
    <a href="https://forms.gle/8ATGPGkr7mqKrJ1e9" target="_blank"
      >Feedback</a
    >
  </ul>
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
<div class="side">
  <ul class="sidebar">
    <h2 class="stitle">MacTime Updates</h2>
    <h3 class="syear" id="year"></h3>
    <div class="sidelinks">
    <a href="/macblog/updates/mactime/2024/january.html"><li>January Update</li></a><a href="/macblog/updates/mactime/2024/february.html"><li>February Update</li></a><a href="/macblog/updates/mactime/2024/march.html"><li>March Update</li></a><a href="/macblog/updates/mactime/2024/april.html"><li>April Update</li></a><a href="/macblog/updates/mactime/2024/july.html"><li>July Update</li></a><a href="/macblog/updates/mactime/2024/november.html"><li>November Update</li></a>
    </div>
  </ul>
</div>
<div class="mainp">
  <div class="homeheader" id="home">
    <h1 class="title" id="title" style="margin-block: 50px; font-size: 35px"></h1>
    <p class="time" id="date"></p>
    <hr />
  </div>
  <p class="main-art" style="margin-top: 40px" id="description"></p>
  <div id="articlewrapper">
  </div>
  <b class="bold">Other Improvements, Changes, and Fixes include:</b>
  <ul style="margin-bottom: 50px" id="otherslist">
  </ul>
  <footer>
    <span>© 2024 MacWeb</span>
  </footer>
</div>
<div class="side">
  <ul class="sidebar">
    <h2 class="stitle">On this page</h2>
    <div id="menulinks">
    </div>
  </ul>
</div>
`;
  document.body.appendChild(styles);
  document.body.appendChild(nav);
  document.body.appendChild(wrappermain);
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
        let item = document.createElement("li");
        item.setAttribute("id", "menu" + i);
        let propName = "menu" + i;
        item.textContent = data.menulinks[propName];
        let proName = "menu" + i + "link";
        link.setAttribute("href", data.menulinks[proName]);
        document.getElementById("menulinks").appendChild(link);
        link.appendChild(item);
      }
      document.getElementById("year").textContent = data.year;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
