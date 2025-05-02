const channels = [
  {
    name: 'TV5',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
    key: '2615129ef2c846a9bbd43a641c7303ef:07c7f996b1734ea288641a68e1cfdc4d',
    drm: 'clearkey',
  },
  {
    name: 'ONE SPORTS',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    key: '53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd',
    drm: 'clearkey',
  },
  {
    name: 'GMA',
    src: 'https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'GTV',
    src: 'https://cdn.ganbaruby23.xyz/stream/restream/gtv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  }
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
