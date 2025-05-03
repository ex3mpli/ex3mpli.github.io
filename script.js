fetch('channels.json')
.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('BisdakTV').textContent = data.title;
    document.getElementById('ex3mpli.github.io is a sleek, web-based live TV player designed for an elegant streaming experience.').textContent = data.description;
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
    document.getElementById('title').textContent = "Error loading content";
    document.getElementById('description').textContent = "Unable to fetch JSON data.";
  });

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

    channelCount.textContent = `📺 All Channels: ${filtered.length}`;
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
