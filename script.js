const albums = [
  {
    img: "FELA_ZOMBIE",
    title: "Zombie",
    artist: "Fela Kuti & Africa 70",
    year: "1976/77",
    listen: "https://open.spotify.com/album/1TrTwskEOPVdyYfcU5CW3U",
    intro: "A record where political protest speaks through both music and artwork.",
    story: "Fela used “Zombie” to criticise soldiers’ unquestioning obedience through repeated commands and biting satire. Lemi Ghariokwu’s cover places images of Fela alongside Nigerian soldiers, extending the confrontation into the artwork. Together, the music and sleeve show how creative expression can challenge authority."
  },
  {
    img: "EVER_LIKED_MY_PERSON",
    title: "Ever Liked My Person?",
    artist: "Christy Essien-Igbokwe",
    year: "1981",
    listen: "https://music.apple.com/us/album/ever-liked-my-person/1710239513",
    intro: "Meet the voice behind “Seun Rere” and explore a chapter of Nigeria's popular music.",
    story: "This 1981 album includes “Seun Rere,” one of Christy Essien-Igbokwe’s best-known songs. Born in what is now Akwa Ibom State, she sang this song in Yoruba. It offers a way to explore how Nigerian performers express themselves across linguistic and cultural boundaries."
  },
  {
    img: "KING_SUNNY_ADE_JUJU_MUSIC_1982",
    title: "Juju Music",
    artist: "King Sunny Adé",
    year: "1982",
    listen: "https://open.spotify.com/album/4BsMW0J2DUx9R9fP5TAEYs",
    intro: "Interlocking guitars and talking drums carry jùjú to international listeners.",
    story: "Released internationally by Island Records in 1982, Juju Music introduced more listeners to King Sunny Adé and His African Beats. Layered guitars, Demola Adepoju’s steel guitar, and talking drums shape its sound. The record connects a Yoruba musical tradition with an international audience."
  },
  {
    img: "LAGBAJA_IKIRA_1993",
    title: "Ikira",
    artist: "Lagbaja",
    year: "1993",
    listen: "https://music.apple.com/us/album/ikira/371066183",
    intro: "Explore the early recordings of an artist whose masked identity became part of his message.",
    story: "This 1993 collection captures an early chapter of Lagbaja’s recording career. His mask represents the anonymous everyday person, making his visual identity part of his message. Tracks such as “Naija Must Sweet Again” offer an entry into his engagement with Nigerian life."
  },
  {
    img: "Beautiful_Nubia_Jangbalajugbu_album_cover",
    title: "Jangbalajugbu",
    artist: "Beautiful Nubia & the Roots Renaissance Band",
    year: "2002",
    listen: "https://open.spotify.com/album/6iCA0HUd7YKrFRZ3Yde6m9",
    intro: "Roots music and storytelling turn attention towards everyday life and community.",
    story: "Beautiful Nubia and the Roots Renaissance Band bring folk storytelling and community concerns into focus on this 2002 album. Songs including “Owuro L’ojo” and “The Small People’s Anthem” invite listeners to consider everyday experience. It represents a roots-driven strand of Nigerian music alongside the collection’s pop and rap records."
  },
  {
    img: "FACE_2_FACE",
    title: "Face 2 Face",
    artist: "2Face Idibia",
    year: "2004",
    listen: "https://music.apple.com/us/album/face-2-face/1776205794",
    intro: "Revisit the debut album behind “African Queen” and a chapter of 2000s Nigerian pop.",
    story: "Released in 2004, Face 2 Face marked 2Face Idibia’s solo debut after his time with Plantashun Boiz. Featuring “African Queen” and “Nfana Ibaga,” it combines romantic songwriting with the confidence of a new solo voice. It provides a window into Nigerian pop in the early 2000s."
  },
  {
    img: "Asa_album_cover",
    title: "Aṣa",
    artist: "Aṣa",
    year: "2007",
    listen: "https://open.spotify.com/album/11Mk70Q11HsTws6NoV3Lnk",
    intro: "Reflective songs in English and Yoruba bring personal experience and social questions together.",
    story: "Aṣa’s 2007 debut brings together soulful melodies and songwriting in English and Yoruba. “Jailer” and “Fire on the Mountain” raise social questions, while “Bibanke” explores heartbreak. The album shows how personal feelings and public concerns can share the same musical space."
  },
  {
    img: "Olamide_Baddest_Guy_Ever_Liveth_album_cover",
    title: "Baddest Guy Ever Liveth",
    artist: "Olamide",
    year: "2013",
    listen: "https://music.apple.com/us/album/baddest-guy-ever-liveth/1368679333",
    intro: "Yoruba-language rap places local expression at the centre of the record.",
    story: "On this 2013 album, Olamide puts Yoruba-language rap, slang, and everyday expression at the centre of his music. Songs such as “Durosoke” offer an entry into that approach. The record gives our collection a hip-hop chapter rooted in local language and identity."
  },
  {
    img: "Burna_Boy_African_Giant_album_cover",
    title: "African Giant",
    artist: "Burna Boy",
    year: "2019",
    listen: "https://open.spotify.com/album/34vlTd4355ddD4q9pPsoqF",
    intro: "A Nigerian artist explores African identity, ambition, and everyday struggle through Afrofusion.",
    story: "Burna Boy’s 2019 album moves between celebration, ambition, and social commentary. “Dangote” addresses the pressure to earn a living, while “Another Story” looks back at Nigeria’s colonial history. These specific Nigerian experiences sit within the album’s wider expression of African identity."
  },
  {
    img: "TEMS_BORN_IN_THE_WILD",
    title: "Born in the Wild",
    artist: "Tems",
    year: "2024",
    listen: "https://open.spotify.com/album/1FGGv0vvSTerGQ91Mkvf9p",
    intro: "Personal reflection meets musical memory, including a fresh interpretation of “Love Me JeJe.”",
    story: "Tems’ 2024 debut explores self-discovery, relationships, and emotional recovery. On “Love Me JeJe,” she reinterprets Seyi Sodimu’s 1997 song, connecting her work to an earlier Nigerian recording. That link makes the album a fitting example of the past finding new expression."
  }
];

const $ = id => document.getElementById(id);
const getDecade = yr => Math.floor(parseInt(yr) / 10) * 10 + "s";

const reelMarkup = albums.map(a =>
  `<img class="reel-item" src="img/${a.img}.jpg" alt="${a.title} cover">`
).join("");
$("reelTrack").innerHTML = reelMarkup + reelMarkup;

const filterOptions = ["All", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"];
$("filterBar").innerHTML = filterOptions.map((era, i) =>
  `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-era="${era}">${era}</button>`
).join("");

function renderCards(filter = "All") {
  const filtered = albums.filter(a => filter === "All" || getDecade(a.year) === filter);

  $("albumGrid").innerHTML = filtered.map(a => `
    <article class="card-glass" data-title="${a.title}">
      <div class="card-img-wrap">
        <img src="img/${a.img}.jpg" alt="${a.title} cover">
      </div>
      <h3 class="card-title">${a.title}</h3>
      <p class="card-artist">${a.artist}</p>
      <p class="card-intro">${a.intro}</p>
      <div class="card-footer">
        <span class="card-meta-pill">${a.year}</span>
        <span class="card-trigger">Read the story</span>
      </div>
    </article>
  `).join("");
}

renderCards("All");

$("filterBar").addEventListener("click", e => {
  if (!e.target.dataset.era) return;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  renderCards(e.target.dataset.era);
});

const gridEl = document.getElementById("albumGrid") || document.getElementById("grid");

gridEl.addEventListener("click", e => {
  const card = e.target.closest(".card-glass") || e.target.closest(".card");
  if (!card) return;
  
  const targetTitle = card.dataset.title;
  const album = albums.find(a => a.title === targetTitle);
  if (!album) return;

  const coverEl = document.getElementById("mCover") || document.getElementById("mImg");
  if (coverEl) coverEl.src = `img/${album.img}.jpg`;
  
  if (document.getElementById("mYear")) document.getElementById("mYear").textContent = album.year;
  if (document.getElementById("mTitle")) document.getElementById("mTitle").textContent = album.title;
  if (document.getElementById("mArtist")) document.getElementById("mArtist").textContent = album.artist;
  if (document.getElementById("mStory")) document.getElementById("mStory").textContent = album.story;
  
  const listenBtn = document.getElementById("mListen");
  if (listenBtn && album.listen) {
    listenBtn.href = album.listen;
    listenBtn.target = "_blank";
    listenBtn.rel = "noopener noreferrer";
    listenBtn.onclick = (event) => {
      event.stopPropagation();
    };
  }

  const modalEl = document.getElementById("modalBackdrop") || document.getElementById("modal");
  if (modalEl) modalEl.classList.add("open");
  document.body.style.overflow = "hidden";
});

const closeModal = () => {
  $("modalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
};

$("modalClose").onclick = closeModal;
$("modalBackdrop").onclick = e => e.target === $("modalBackdrop") && closeModal();
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

const navLinks = document.querySelectorAll(".nav-item");
const collectionSection = document.getElementById("collection");
const aboutSection = document.getElementById("about");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

function updateActiveNav() {
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const collectionTop = collectionSection ? collectionSection.offsetTop - 200 : 0;
  const aboutTop = aboutSection ? aboutSection.offsetTop - 260 : 0;

  navLinks.forEach(l => l.classList.remove("active"));

  if (aboutSection && scrollY >= aboutTop) {
    const aboutLink = document.querySelector('.nav-item[href="#about"]');
    if (aboutLink) aboutLink.classList.add("active");
  } else if (collectionSection && scrollY >= collectionTop) {
    const colLink = document.querySelector('.nav-item[href="#collection"]');
    if (colLink) colLink.classList.add("active");
  }
}

window.addEventListener("scroll", updateActiveNav, { passive: true });