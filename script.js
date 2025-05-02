const channels = [
  {
    name: 'TV5',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
    key: '2615129ef2c846a9bbd43a641c7303ef:07c7f996b1734ea288641a68e1cfdc4d',
    drm: 'clearkey',
    category: "News"
  },
  {
    name: 'ONE SPORTS',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    key: '53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd',
    drm: 'clearkey',
    category: "Sports"
  },
  {
    name: 'GMA',
    src: 'https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
    category: "Movies"
  },
  {
    name: 'GTV',
    src: 'https://cdn.ganbaruby23.xyz/stream/restream/gtv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
    category: "Movies"
  },
];
// ===== DOM Elements =====
const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const channelCount = document.getElementById("channelCount");
const playerContainer = document.getElementById("player");
const fallbackMessage = document.getElementById("fallbackMessage");

let channels = [];

// ===== Load Channels from JSON =====
async function loadChannels() {
  try {
    const res = await fetch("channels.json");
    channels = await res.json();
    populateCategoryFilter();
    setupChannelList();
  } catch (error) {
    console.error("Failed to load channels:", error);
  }
}

// ===== Populate Category Filter =====
function populateCategoryFilter() {
  const categories = ["all", ...new Set(channels.map(c => c.category))];
  categoryFilter.innerHTML = categories.map(cat => 
    `<option value="${cat}">${cat}</option>`
  ).join('');
}

// ===== Setup Channel List =====
function setupChannelList() {
  const search = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = channels.filter(channel =>
    (selectedCategory === "all" || channel.category === selectedCategory) &&
    channel.name.toLowerCase().includes(search)
  );

  // Clear and populate list
  channelList.innerHTML = "";

  filtered.forEach((channel, index) => {
    const li = document.createElement("li");
    li.textContent = channel.name;
    li.addEventListener("click", () => playChannel(channel, index));
    channelList.appendChild(li);
  });

  channelCount.textContent = `${filtered.length} channel${filtered.length !== 1 ? "s" : ""}`;
}

// ===== Play Channel =====
function playChannel(channel, index) {
  jwplayer("player").setup({
    file: channel.url,
    width: "100%",
    height: "100%",
    autostart: true
  });

  // Remove active class from all items
  document.querySelectorAll("#channelList li").forEach(li => li.classList.remove("active"));

  // Highlight current
  if (channelList.children[index]) {
    channelList.children[index].classList.add("active");
  }

  fallbackMessage.style.display = "none";
}

// ===== Clock Display =====
function startClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    clock.textContent = time;
  }, 1000);
}

// ===== Initialize on DOM Ready =====
document.addEventListener("DOMContentLoaded", () => {
  loadChannels();
  startClock();
  searchInput.addEventListener("input", setupChannelList);
  categoryFilter.addEventListener("change", setupChannelList);
});

