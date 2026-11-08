import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("#app が index.html に見つかりません");
}

const title = document.createElement("h1");
title.textContent = "Quiet Mixer";

const note = document.createElement("p");
note.textContent = "開発中";

app.append(title, note);
