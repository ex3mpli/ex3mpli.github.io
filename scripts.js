const channels = [
    {
        name: 'A2Z',
        src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        key: 'f703e4c8ec9041eeb5028ab4248fa094:c22f2162e176eee6273a5d0b68d19530',
        drm: 'clearkey',
    },
    {
        name: 'ABC AUSTRALIA',
        src: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        key: '389497f9f8584a57b234e27e430e04b7:3b85594c7f88604adf004e45c03511c0',
        drm: 'clearkey',
    },
];

document.addEventListener('DOMContentLoaded', () => {
  const playerElement = document.getElementById('player');
  const fallbackMessage = document.getElementById('fallbackMessage');
  const channelList = document.getElementById('channelList');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const channelCount = document.getElementById('channelCount');

  function playChannel(channel) {
    fallbackMessage.style.display = 'none';

    jwplayer('player').setup({
      file: channel.src,
      type: channel.src.endsWith('.mpd') ? 'dash' : 'hls',
      drm: channel.drm === 'clearkey' ? {
        clearkey: {
          keyId: channel.key?.split(':')[0],
          key: channel.key?.split(':')[1],
        }
      } : undefined,
      width: '100%',
      aspectratio: '16:9',
      autostart: true,
    });
  }

  function setupChannelList() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    channelList.innerHTML = '';

    const filtered = channels.filter(channel => {
      const matchSearch = channel.name.toLowerCase().includes(searchTerm);
      const matchCategory = selectedCategory === 'all' || !selectedCategory;
      return matchSearch && matchCategory;
    });

    filtered.forEach(channel => {
      const li = document.createElement('li');
      li.textContent = channel.name;
      li.onclick = () => {
        document.querySelectorAll('.channel-list li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
        playChannel(channel);
      };
      channelList.appendChild(li);
    });

    channelCount.textContent = `Total: ${filtered.length}`;
  }

  // Setup
  setupChannelList();
  searchInput.addEventListener('input', setupChannelList);
  categoryFilter.addEventListener('change', setupChannelList);

  // Clock
  function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayHour = h % 12 || 12;
    document.getElementById('clock').textContent = `${displayHour}:${m}:${s} ${ampm}`;
  }

  setInterval(updateClock, 1000);
  updateClock();
});

const toggleBtn = document.getElementById('themeToggle');
const icon = document.getElementById('themeIcon');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    icon.textContent = theme === 'dark' ? '☀︎' : '☼';
}

// Load stored theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});
