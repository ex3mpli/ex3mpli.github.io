const channelList = document.getElementById("channelList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const channelCount = document.getElementById("channelCount");
const fallbackMessage = document.getElementById("fallbackMessage");
let channels = [];

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
function populateCategoryFilter() {
  const categories = ["all", ...new Set(channels.map(c => c.category))];
  categoryFilter.innerHTML = categories.map(cat => 
    `<option value="${cat}">${cat}</option>`
  ).join('');
}
function setupChannelList() {
  const search = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  const filtered = channels.filter(channel =>
    (selectedCategory === "all" || channel.category === selectedCategory) &&
    channel.name.toLowerCase().includes(search)
  );
  channelList.innerHTML = "";
  filtered.forEach((channel, index) => {
    const li = document.createElement("li");
    li.textContent = channel.name;
    li.addEventListener("click", () => playChannel(channel, index));
    channelList.appendChild(li);
  });
  channelCount.textContent = `${filtered.length} channel${filtered.length !== 1 ? "s" : ""}`;
}
function playChannel(channel, index) {
  jwplayer("player").setup({
    file: channel.url,
    width: "100%",
    height: "100%",
    autostart: true
  });
  document.querySelectorAll("#channelList li").forEach(li => li.classList.remove("active"));
  if (channelList.children[index]) {
    channelList.children[index].classList.add("active");
  }
  fallbackMessage.style.display = "none";
}
function startClock() {
  const clock = document.getElementById("clock");
  setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    clock.textContent = time;
  }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
  loadChannels();
  startClock();
  searchInput.addEventListener("input", setupChannelList);
  categoryFilter.addEventListener("change", setupChannelList);
});
