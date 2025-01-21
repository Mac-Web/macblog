function renderUpdates(appName) {
  let newArray = [];
  const updates = document.getElementById("updates");
  fetch("/macblog/posts.json")
    .then((response) => response.json())
    .then((data) => {
      newArray = data;
      newArray
        .reverse()
        .filter((post) => post.app === appName && post.category === "Update")
        .slice(0, 4)
        .forEach((post) => {
          const app = document.createElement("a");
          let processedDate = post.date.split("-");
          app.href = "/macblog/post.html?post=" + post.id;
          app.classList.add("app");
          app.innerHTML = `
        <img src="/${appName == "MacWeb" ? "logo.png" : appName + " Logo.png"}" />
        <p class="text">${post.sidetitle ? post.sidetitle : post.title}</p>
        <p>${processedDate[1]}/${processedDate[2]}/${processedDate[0]}</p>`;
          updates.appendChild(app);
        });
    })
    .catch((error) => console.error("Error fetching data:", error));
}
