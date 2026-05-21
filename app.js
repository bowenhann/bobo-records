const defaultImages = [
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2026/01/ILLGANDER_Q1404557-1-scaled.jpg",
    caption: "room light",
    layer: "layer-a",
    x: "22vw",
    y: "18vh",
    w: "420px",
    r: "-3deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/SR-blue-hazy-1024x684.jpg",
    caption: "blue set",
    layer: "layer-a",
    x: "64vw",
    y: "34vh",
    w: "330px",
    r: "2deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2026/01/atrium-hazy.jpg",
    caption: "late table",
    layer: "layer-a",
    x: "38vw",
    y: "72vh",
    w: "460px",
    r: "1deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/up-table-1024x683.jpg",
    caption: "listening chair",
    layer: "layer-c",
    x: "82vw",
    y: "78vh",
    w: "300px",
    r: "-5deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/nursery-stack-smoke-hat-1.jpg",
    caption: "plant corner",
    layer: "layer-c",
    x: "8vw",
    y: "88vh",
    w: "410px",
    r: "4deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/Artboard-82.svg",
    caption: "",
    layer: "layer-b",
    x: "12vw",
    y: "8vh",
    w: "600px",
    r: "0deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/Artboard-62.svg",
    caption: "",
    layer: "layer-b",
    x: "58vw",
    y: "4vh",
    w: "560px",
    r: "0deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/Artboard-42.svg",
    caption: "",
    layer: "layer-b",
    x: "30vw",
    y: "48vh",
    w: "410px",
    r: "0deg"
  },
  {
    src: "https://publicrecords.nyc/wp-content/uploads/2025/11/Artboard-22.svg",
    caption: "",
    layer: "layer-b",
    x: "74vw",
    y: "62vh",
    w: "360px",
    r: "0deg"
  }
];

const defaultRecipes = [
  {
    category: "citrus",
    style: "Citrus",
    name: "French Blonde",
    build: "2 oz Lillet Blanc, 2 oz grapefruit juice, 1 oz dry gin, 0.5 oz elderflower, 2 dashes bitters.",
    note: "Bright, floral, and grapefruit-forward."
  },
  {
    category: "tropical",
    style: "Tropical",
    name: "Cold Noodle",
    build: "1.5 oz white rum, 0.5 oz coconut cordial, 0.75 oz pineapple juice, 0.5 oz cucumber juice, 5 ml lime juice, 2 dashes sesame oil.",
    note: "Coconut cordial: shredded coconut and rum."
  },
  {
    category: "tropical",
    style: "Tropical",
    name: "Clairvoyant Missionary",
    build: "2 oz rum, 1 oz lime, 1.5 oz pineapple juice, 0.5 oz honey, 10 ml peach liqueur, 1 oz milk.",
    note: "Foam: 3 oz pineapple juice, 10 ml lime, 1 egg white, 5 mint leaves, N2."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "Over the Moon",
    build: "1.5 oz gin, 0.5 oz agave syrup, 0.5 oz lemon, 7.5 ml yuzu, 2 oz grapefruit soda, 3 perilla leaves.",
    note: "Lifted with yuzu, perilla, and grapefruit soda."
  },
  {
    category: "spirit",
    style: "Spirit",
    name: "Tea Ceremony",
    build: "1.5 oz Japanese whisky, 0.5 oz white cacao, 1 oz coconut juice, 1 tbsp matcha.",
    note: "Heat coconut juice to 60C. Stir whisky and cacao; mix matcha with coconut juice, then pour."
  },
  {
    category: "tropical",
    style: "Tropical",
    name: "Painted Paradise",
    build: "1 oz shochu, 1.5 oz vodka, 1 oz honeydew juice, 7.5 ml lemon, 0.75 oz simple syrup, 1 oz pandan jasmine milk.",
    note: "Add pandan extract to heated jasmine milk."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "White Linen",
    build: "1.5 oz dry gin, 1 oz lemon, 0.5 oz simple syrup, 0.5 oz elderflower, 3 cucumber pieces, soda, a little salt.",
    note: "Muddle cucumber and shake. Add salt and soda, then pour."
  },
  {
    category: "tropical",
    style: "Tropical",
    name: "Out of Sight",
    build: "1 oz pineapple, 1.5 oz rum, 3 basil leaves, 10 ml yogurt, 10 ml lemon, 10 ml agave syrup.",
    note: "Creamy tropical build with basil."
  },
  {
    category: "sour",
    style: "Sour",
    name: "Cheek to Cheek",
    build: "1.5 oz rum, 1 oz creme de mure, 0.5 oz lemon juice, 10 ml honey, 2 blackberries.",
    note: "Cheese top: whipping cream, cream cheese, syrup, sea salt."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "Flirtibird",
    build: "1.5 oz shochu, 0.5 oz vodka, 1 oz yuzu, 0.5 oz agave syrup, 1 perilla leaf.",
    note: "Simple yuzu-perilla high-acid profile."
  },
  {
    category: "sour",
    style: "Sour",
    name: "Vanilla Gin Sour",
    build: "2 oz gin, 1 oz lemon, 1 oz vanilla liqueur, 0.5 oz syrup, 1 egg white, 3 dashes bitters.",
    note: "Dry shake, then shake with ice."
  },
  {
    category: "spirit",
    style: "Spirit",
    name: "Speak Low",
    build: "1 oz white rum, 1 oz aged rum, 0.5 oz PX sherry, matcha.",
    note: "Rum, sherry, and matcha."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "Far East Side",
    build: "2 oz sake, 0.75 oz elderflower liqueur, 0.5 oz tequila, 0.25 oz lemon, 2 shiso leaves.",
    note: "Sake and shiso variation."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "Yuzu Salty Dog",
    build: "1.25 oz Japanese gin, 1.5 oz grapefruit juice, 0.5 oz yuzu juice, 0.5 oz simple syrup, 1/4 tsp matcha, salt rim.",
    note: "Mix juice and syrup; top with gin and matcha."
  },
  {
    category: "sour",
    style: "Sour",
    name: "Jasmine Gin Sour",
    build: "2 oz jasmine-infused gin, 0.75 oz lemon juice, 0.75 oz simple syrup, 0.25 oz elderflower liqueur, 0.5 oz egg white.",
    note: "Top with matcha powder."
  },
  {
    category: "martini",
    style: "Martini",
    name: "Melon, Cheese, and Pepper",
    build: "1.5 oz gin, 1 oz Dolin dry vermouth, 2 oz cantaloupe cordial, 0.5 oz simple syrup, 2 dashes Peychaud's bitters, 1 dash saline.",
    note: "Mozzarella foam: 200 g stracciatella, 200 ml milk, 7.5 ml saline, 5 ml white vinegar, 5 ml simple syrup."
  },
  {
    category: "sour",
    style: "Sour",
    name: "Whisky Sour",
    build: "2 oz whisky, 1 oz lemon, 0.5 oz syrup, 1 egg white.",
    note: "Classic sour template."
  },
  {
    category: "martini",
    style: "Martini",
    name: "Lychee Martini",
    build: "1.5 oz gin, 1 oz lychee liqueur, 0.5 oz lemon, 0.5 oz elderflower.",
    note: "Floral and fruit-forward."
  },
  {
    category: "martini",
    style: "Martini",
    name: "Peach / Pear Martini",
    build: "1.5 oz gin, 1 oz peach or pear liqueur, 0.5 oz lemon, 1.5 oz elderflower liqueur.",
    note: "Use either peach or pear liqueur."
  },
  {
    category: "sour",
    style: "Sour",
    name: "Daisy Marie",
    build: "1.5 oz tequila, 1 oz passion fruit liqueur, 1 oz lemon, 0.5 oz syrup, 5 drops Tabasco.",
    note: "Spicy passion fruit sour."
  },
  {
    category: "citrus",
    style: "Citrus",
    name: "Margarita",
    build: "50 ml tequila, 25 ml liqueur, 20 ml lime, 10 ml syrup.",
    note: "Simple margarita spec."
  }
];

const defaultMusicReviews = [
  {
    title: "Floating Points - Cascade",
    artist: "Album",
    review: "Glass-bright motion music. It feels engineered for walking home through humid air."
  },
  {
    title: "Jessica Pratt - Here in the Pitch",
    artist: "Album",
    review: "A small haunted stage, all corners and velvet. The quiet parts keep expanding."
  },
  {
    title: "Charli xcx - BRAT",
    artist: "Album",
    review: "Compressed, funny, brittle, alive. Club music with a cracked phone screen."
  }
];

const ADMIN_PASSWORD = "bobo";

let images = loadImages();
let recipes = loadCollection("bobo-records-recipes", defaultRecipes);
let musicReviews = loadCollection("bobo-records-music", defaultMusicReviews);
let films = loadCollection("bobo-records-films", []);
let pointer = { x: 0, y: 0 };
let pointerReady = false;
let workItems = [];

const cursor = document.querySelector("#cursor");
const recipeList = document.querySelector("#recipeList");
const musicList = document.querySelector("#musicList");
const layers = [...document.querySelectorAll(".image-layer")];
const imageForm = document.querySelector("#imageForm");
const adminLogin = document.querySelector("#adminLogin");
const adminPanel = document.querySelector("#adminPanel");
const filmList = document.querySelector("#filmList");

function loadCollection(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(saved) ? saved : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveCollection(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadImages() {
  try {
    const saved = JSON.parse(localStorage.getItem("bobo-records-images") || "null");
    if (Array.isArray(saved) && saved.length === defaultImages.length) {
      return saved.map((item, index) => ({ ...defaultImages[index], ...item }));
    }
  } catch {
    return structuredClone(defaultImages);
  }
  return structuredClone(defaultImages);
}

function saveImages() {
  localStorage.setItem("bobo-records-images", JSON.stringify(images));
}

function saveFilms() {
  saveCollection("bobo-records-films", films);
}

function mountImages() {
  document.querySelectorAll(".image-layer").forEach((layer) => {
    layer.innerHTML = "";
  });

  images.forEach((item, index) => {
    const el = document.createElement("figure");
    el.className = "work";
    el.style.setProperty("--x", item.x);
    el.style.setProperty("--y", item.y);
    el.style.setProperty("--w", item.w);
    el.style.setProperty("--r", item.r);
    const rotation = Number.parseFloat(item.r) || 0;
    el.dataset.rotate = rotation;
    el.dataset.ampX = String(28 + (index % 4) * 18);
    el.dataset.ampY = String(24 + (index % 5) * 16);
    el.dataset.speed = String(0.22 + (index % 6) * 0.045);
    el.dataset.phase = String(index * 1.17);
    el.dataset.parallax = String(0.08 + (index % 3) * 0.035);
    el.dataset.index = String(index);
    el.dataset.isOverlay = String(item.layer === "layer-b");
    el.innerHTML = `<img src="${item.src}" alt="" draggable="false">${item.caption ? `<figcaption class="caption">${item.caption}</figcaption>` : ""}`;
    document.querySelector(`.${item.layer}`).append(el);
  });

  workItems = [...document.querySelectorAll(".work")];
  renderImageForm();
}

function renderRecipes() {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const row = document.createElement("article");
    row.className = "recipe-row";
    row.innerHTML = `
      <h3>${recipe.name}</h3>
      <div>
        <p>${recipe.build}</p>
        <p>${recipe.note}</p>
      </div>
    `;
    recipeList.append(row);
  });
}

function renderMusic() {
  musicList.innerHTML = musicReviews
    .map(
      (item) => `
        <article class="film-note">
          <h3>${escapeHtml(item.title)}</h3>
          <div>
            <p>${escapeHtml(item.artist)}</p>
            <p>${escapeHtml(item.review)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function bindPanels() {
  document.querySelectorAll(".accordion-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      openPanel(button.closest(".accordion-item").dataset.panel);
    });
  });

  document.querySelectorAll("[data-open-panel]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openPanel(link.dataset.openPanel);
    });
  });

  document.querySelector("#scrim").addEventListener("click", closePanels);
}

function openPanel(panelName) {
  document.querySelectorAll(".accordion-item").forEach((panel) => {
    panel.classList.toggle("open", panel.dataset.panel === panelName);
  });
  document.body.classList.add("panel-open");
  document.body.classList.toggle("panel-music-open", panelName === "music");
  document.body.classList.toggle("panel-cocktails-open", panelName === "cocktails");
  document.body.classList.toggle("panel-film-open", panelName === "film");
}

function closePanels() {
  document.querySelectorAll(".accordion-item").forEach((panel) => panel.classList.remove("open"));
  document.body.classList.remove("panel-open");
  document.body.classList.remove("panel-music-open");
  document.body.classList.remove("panel-cocktails-open");
  document.body.classList.remove("panel-film-open");
}

function bindHeader() {
  const expandButton = document.querySelector("#expandInfo");
  expandButton.addEventListener("click", () => {
    const expanded = document.body.classList.toggle("info-expanded");
    document.body.classList.toggle("images-clustered", expanded);
    expandButton.setAttribute("aria-expanded", String(expanded));
  });

  const mobileToggle = document.querySelector("#mobileToggle");
  mobileToggle.addEventListener("click", () => {
    const expanded = document.body.classList.toggle("mobile-open");
    mobileToggle.setAttribute("aria-expanded", String(expanded));
  });
}

function bindAdmin() {
  window.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.key.toLowerCase() === "a") openAdminLogin();
  });

  if (window.location.hash === "#admin") {
    window.setTimeout(openAdminLogin, 0);
  }

  document.querySelector("#closeAdminLogin").addEventListener("click", closeAdminLogin);
  document.querySelector("#unlockAdmin").addEventListener("click", () => {
    if (document.querySelector("#adminPassword").value === ADMIN_PASSWORD) {
      closeAdminLogin();
      openAdminPanel();
    }
  });

  document.querySelector("#closeAdminPanel").addEventListener("click", closeAdminPanel);
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.addEventListener("click", () => switchAdminTab(button.dataset.adminTab));
  });

  document.querySelector("#saveImages").addEventListener("click", () => {
    const formData = new FormData(imageForm);
    images = images.map((item, index) => ({
      ...item,
      src: String(formData.get(`src-${index}`) || item.src).trim(),
      caption: String(formData.get(`caption-${index}`) || "").trim()
    }));
    saveImages();
    mountImages();
  });

  document.querySelector("#resetImages").addEventListener("click", () => {
    images = structuredClone(defaultImages);
    saveImages();
    mountImages();
  });

  document.querySelector("#cocktailForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#cocktailName").value.trim();
    const build = document.querySelector("#cocktailBuild").value.trim();
    const note = document.querySelector("#cocktailNote").value.trim();
    if (!name && !build && !note) return;
    recipes.unshift({ name: name || "Untitled Cocktail", build, note });
    saveCollection("bobo-records-recipes", recipes);
    renderRecipes();
    event.currentTarget.reset();
  });

  document.querySelector("#musicForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#musicTitle").value.trim();
    const artist = document.querySelector("#musicArtist").value.trim();
    const review = document.querySelector("#musicReview").value.trim();
    if (!title && !artist && !review) return;
    musicReviews.unshift({ title: title || "Untitled Music", artist, review });
    saveCollection("bobo-records-music", musicReviews);
    renderMusic();
    event.currentTarget.reset();
  });
}

function openAdminLogin() {
  adminLogin.classList.add("open");
  adminLogin.setAttribute("aria-hidden", "false");
}

function closeAdminLogin() {
  adminLogin.classList.remove("open");
  adminLogin.setAttribute("aria-hidden", "true");
}

function openAdminPanel() {
  adminPanel.classList.add("open");
  adminPanel.setAttribute("aria-hidden", "false");
}

function closeAdminPanel() {
  adminPanel.classList.remove("open");
  adminPanel.setAttribute("aria-hidden", "true");
}

function switchAdminTab(name) {
  document.querySelectorAll("[data-admin-section]").forEach((section) => {
    section.classList.toggle("open", section.dataset.adminSection === name);
  });
}

function bindFilmForm() {
  document.querySelector("#filmForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#filmTitle").value.trim();
    const director = document.querySelector("#filmDirector").value.trim();
    const feeling = document.querySelector("#filmFeeling").value.trim();
    if (!title && !director && !feeling) return;
    films.unshift({
      id: crypto.randomUUID(),
      title: title || "Untitled Film",
      director: director || "Unknown director",
      feeling,
      date: new Date().toISOString()
    });
    saveFilms();
    renderFilms();
    event.currentTarget.reset();
  });
}

function renderFilms() {
  if (!films.length) {
    filmList.innerHTML = `<article class="film-note"><h3>No Film Notes</h3><p>Save a movie, director, and feeling above.</p></article>`;
    return;
  }
  filmList.innerHTML = films
    .map(
      (film) => `
        <article class="film-note">
          <h3>${escapeHtml(film.title)}</h3>
          <div>
            <p>${escapeHtml(film.director)}</p>
            <p>${escapeHtml(film.feeling)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderImageForm() {
  imageForm.innerHTML = images
    .map(
      (item, index) => `
        <label>
          Image ${index + 1}
          <input name="src-${index}" type="url" value="${escapeAttr(item.src)}" />
        </label>
        <label>
          Caption
          <input name="caption-${index}" type="text" value="${escapeAttr(item.caption)}" />
        </label>
      `
    )
    .join("");
}

function escapeAttr(value = "") {
  return value.replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function bindCursor() {
  window.addEventListener("pointermove", (event) => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    pointer = {
      x: (event.clientX / window.innerWidth - 0.5) * 70,
      y: (event.clientY / window.innerHeight - 0.5) * 70
    };
    pointerReady = true;
  });
}

function animateLayers() {
  const time = performance.now() / 1000;
  const isExpanded = document.body.classList.contains("images-clustered");
  const idleX = Math.sin(time * 0.31) * 24;
  const idleY = Math.cos(time * 0.27) * 18;
  const x = (pointerReady ? pointer.x : 0) + idleX;
  const y = (pointerReady ? pointer.y : 0) + idleY;

  if (isExpanded) {
    layers.forEach((layer) => {
      layer.style.transform = "translate3d(0, 0, 0)";
    });
  } else {
    layers[0].style.transform = `translate3d(${-x * 0.35}px, ${-y * 0.35}px, 0)`;
    layers[1].style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
    layers[2].style.transform = `translate3d(${-x * 0.58}px, ${-y * 0.58}px, 0)`;
  }

  workItems.forEach((item) => {
    const ampX = Number(item.dataset.ampX);
    const ampY = Number(item.dataset.ampY);
    const speed = Number(item.dataset.speed);
    const phase = Number(item.dataset.phase);
    const baseRotate = Number(item.dataset.rotate);
    const parallax = Number(item.dataset.parallax);
    const index = Number(item.dataset.index);
    const isOverlay = item.dataset.isOverlay === "true";
    const floatX = Math.sin(time * speed + phase) * ampX + x * parallax;
    const floatY = Math.cos(time * (speed * 0.91) + phase) * ampY + y * parallax;
    const rotate = baseRotate + Math.sin(time * (speed * 0.7) + phase) * 2.2;

    if (isExpanded) {
      const layerRect = item.parentElement.getBoundingClientRect();
      const centerX = window.innerWidth * 0.5;
      const centerY = window.innerHeight * 0.52;
      const clusterOffsets = [
        [-130, -90],
        [60, -85],
        [-45, 10],
        [120, 45],
        [-95, 95],
        [-150, -120],
        [5, -40],
        [95, -10],
        [-35, 70]
      ];
      const [offsetX, offsetY] = clusterOffsets[index % clusterOffsets.length];
      const targetX = centerX + offsetX + Math.sin(time * speed + phase) * 10;
      const targetY = centerY + offsetY + Math.cos(time * speed + phase) * 8;
      const baseX = layerRect.left + item.offsetLeft + item.offsetWidth / 2;
      const baseY = layerRect.top + item.offsetTop + item.offsetHeight / 2;
      const scale = isOverlay ? 0.46 : 0.36;
      const overlayNudge = isOverlay ? 12 : 0;
      item.style.transform = `translate3d(${targetX - baseX + overlayNudge}px, ${targetY - baseY}px, 0) rotate(${rotate}deg) scale(${scale})`;
    } else {
      item.style.transform = `translate3d(${floatX}px, ${floatY}px, 0) rotate(${rotate}deg) scale(1)`;
    }
  });

  requestAnimationFrame(animateLayers);
}

mountImages();
renderRecipes();
renderMusic();
renderFilms();
bindPanels();
bindHeader();
bindAdmin();
bindFilmForm();
bindCursor();
animateLayers();
