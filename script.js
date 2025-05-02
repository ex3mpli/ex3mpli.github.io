// ===== Channel Data =====
const channels = [
  {
    name: "CNN Philippines",
    url: "https://your-stream-url.com/stream.m3u8"
  },
  {
    name: "TV5",
    url: "https://your-stream-url.com/tv5.m3u8"
  },
  {
    name: "GMA News TV",
    url: "https://your-stream-url.com/gma.m3u8"
  }
];

// ===== DOM Elements =====
const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const channelCount = document.getElementById("channelCount");
const playerContainer = document.getElementById("player");
const fallbackMessage = document.getElementById("fallbackMessage");

// ===== Setup Channel List =====
function setupChannelList() {
  const search = searchInput.value.toLowerCase();
  const filtered = channels.filter((channel) =>
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
  channelList.children[index].classList.add("active");

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
  setupChannelList();
  startClock();
});
