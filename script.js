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
    {
        name: 'ASIAN FOOD NETWORK',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        key: '1619db30b9ed42019abb760a0a3b5e7f:5921e47fb290ae263291b851c0b4b6e4',
        drm: 'clearkey',
    },
    {
        name: 'BBC EARTH',
        src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        key: '34ce95b60c424e169619816c5181aded:0e2a2117d705613542618f58bf26fc8e',
        drm: 'clearkey',
    },
    {
        name: 'BBC LIFESTYLE',
        src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd',
        key: '34880f56627c11ee8c990242ac120002:c23677c829bb244b79a3dc09ffd88ca0',
        drm: 'clearkey',
    },
    {
        name: 'BILYONARYO NEWS CHANNEL',
        src: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        key: '227ffaf09bec4a889e0e0988704d52a2:b2d0dce5c486891997c1c92ddaca2cd2',
        drm: 'clearkey',
    },
    {
        name: 'BUKO CHANNEL',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        key: 'd273c085f2ab4a248e7bfc375229007d:7932354c3a84f7fc1b80efa6bcea0615',
        drm: 'clearkey',
    },
    {
        name: 'CCTV4',
        src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        key: 'b83566836c0d4216b7107bd7b8399366:32d50635bfd05fbf8189a0e3f6c8db09',
        drm: 'clearkey',
    },
    {
        name: 'CGTN DOCUMENTARY',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd',
        key: '0f854ee4412b11edb8780242ac120002:9f2c82a74e727deadbda389e18798d55',
        drm: 'clearkey',
    },
    {
        name: 'CELESTIAL MOVIES PINOY',
        src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd',
        key: '0f8537d8412b11edb8780242ac120002:2ffd7230416150fd5196fd7ea71c36f3',
        drm: 'clearkey',
    },
    {
        name: 'CNN',
        src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd',
        key: '900c43f0e02742dd854148b7a75abbec:da315cca7f2902b4de23199718ed7e90',
        drm: 'clearkey',
    },
    {
        name: 'CARTOON NETWORK',
        src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        key: 'a2d1f552ff9541558b3296b5a932136b:cdd48fa884dc0c3a3f85aeebca13d444',
        drm: 'clearkey',
    },
    {
        name: 'CINEMAX',
        src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        key: 'b207c44332844523a3a3b0469e5652d7:fe71aea346db08f8c6fbf0592209f955',
        drm: 'clearkey',
    },
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
        name: 'PTV',
        src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        key: '71a130a851b9484bb47141c8966fb4a3:ad1f003b4f0b31b75ea4593844435600',
        drm: 'clearkey',
    },
    {
        name: 'IBC 13',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd',
        key: '16ecd238c0394592b8d3559c06b1faf5:05b47ae3be1368912ebe28f87480fc84',
        drm: 'clearkey',
    },
    {
        name: 'RPTV',
        src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        key: '1917f4caf2364e6d9b1507326a85ead6:a1340a251a5aa63a9b0ea5d9d7f67595',
        drm: 'clearkey',
    },
    {
        name: 'ONE NEWS',
        src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        key: 'd39eb201ae494a0b98583df4d110e8dd:6797066880d344422abd3f5eda41f45f',
        drm: 'clearkey',
    },
    {
        name: 'ONE PH',
        src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        key: '92834ab4a7e1499b90886c5d49220e46:a7108d9a6cfcc1b7939eb111daf09ab3',
        drm: 'clearkey',
    },
    {
        name: 'TRUE FM TV',
        src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        key: '0559c95496d44fadb94105b9176c3579:40d8bb2a46ffd03540e0c6210ece57ce',
        drm: 'clearkey',
    },
    {
        name: 'DREAMWORKS (TAG)',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        key: '564b3b1c781043c19242c66e348699c5:d3ad27d7fe1f14fb1a2cd5688549fbab',
        drm: 'clearkey',
    },
    {
        name: 'TVUP',
        src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
        key: '83e813ccd4ca4837afd611037af02f63:a97c515dbcb5dcbc432bbd09d15afd41',
        drm: 'clearkey',
    },
    {
        name: 'UAAP VARSITY',
        src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        key: '95588338ee37423e99358a6d431324b9:6e0f50a12f36599a55073868f814e81e',
        drm: 'clearkey',
    },
    {
        name: 'SARI-SARI',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        key: '0a7ab3612f434335aa6e895016d8cd2d:b21654621230ae21714a5cab52daeb9d',
        drm: 'clearkey',
    },
    {
        name: 'PBO',
        src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        key: 'dcbdaaa6662d4188bdf97f9f0ca5e830:31e752b441bd2972f2b98a4b1bc1c7a1',
        drm: 'clearkey',
    },
    {
        name: 'VIVA CINEMA',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        key: '07aa813bf2c147748046edd930f7736e:3bd6688b8b44e96201e753224adfc8fb',
        drm: 'clearkey',
    },
    {
        name: 'TAGALIZED MOVIE CHANNEL',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        key: '96701d297d1241e492d41c397631d857:ca2931211c1a261f082a3a2c4fd9f91b',
        drm: 'clearkey',
    },
    {
        name: 'TVN MOVIES PINOY',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        key: '2e53f8d8a5e94bca8f9a1e16ce67df33:3471b2464b5c7b033a03bb8307d9fa35',
        drm: 'clearkey',
    },
    {
        name: 'KIX',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        key: 'a8d5712967cd495ca80fdc425bc61d6b:f248c29525ed4c40cc39baeee9634735',
        drm: 'clearkey',
    },
    {
        name: 'THRILL',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        key: '928114ffb2394d14b5585258f70ed183:a82edc340bc73447bac16cdfed0a4c62',
        drm: 'clearkey',
    },
    {
        name: 'HITS',
        src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
        key: 'dac605bc197e442c93f4f08595a95100:975e27ffc1b7949721ee3ccb4b7fd3e5',
        drm: 'clearkey',
    },
    {
        name: 'HBO HITS',
        src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        key: 'b04ae8017b5b4601a5a0c9060f6d5b7d:a8795f3bdb8a4778b7e888ee484cc7a1',
        drm: 'clearkey',
    },
    {
        name: 'HBO SIGNATURE',
        src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        key: 'a06ca6c275744151895762e0346380f5:559da1b63eec77b5a942018f14d3f56f',
        drm: 'clearkey',
    },
    {
        name: 'HBO FAMILY',
        src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        key: '872910c843294319800d85f9a0940607:f79fd895b79c590708cf5e8b5c6263be',
        drm: 'clearkey',
    },
    {
        name: 'TAP TV',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        key: 'f6804251e90b4966889b7df94fdc621e:55c3c014f2bd12d6bd62349658f24566',
        drm: 'clearkey',
    },
    {
        name: 'TAP MOVIES',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
        key: '71cbdf02b595468bb77398222e1ade09:c3f2aa420b8908ab8761571c01899460',
        drm: 'clearkey',
    },
    {
        name: 'TAP ACTION FLIX',
        src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        key: 'bee1066160c0424696d9bf99ca0645e3:f5b72bf3b89b9848de5616f37de040b7',
        drm: 'clearkey',
    },
    {
        name: 'LOTUS MACAU',
        src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
        key: '60dc692e64ea443a8fb5ac186c865a9b:01bdbe22d59b2a4504b53adc2f606cc1',
        drm: 'clearkey',
    },
    {
        name: 'DREAMWORKS',
        src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        key: '4ab9645a2a0a47edbd65e8479c2b9669:8cb209f1828431ce9b50b593d1f44079',
        drm: 'clearkey',
    },
    {
        name: 'TVN',
        src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        key: 'e1bde543e8a140b38d3f84ace746553e:b712c4ec307300043333a6899a402c10',
        drm: 'clearkey',
    },
    {
        name: 'TV5MONDE ASIE',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd',
        key: 'fba5a720b4a541b286552899ba86e38b:f63fa50423148bfcbaa58c91dfcffd0e',
        drm: 'clearkey',
    },
    {
        name: 'FOOD NETWORK',
        src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        key: 'b7299ea0af8945479cd2f287ee7d530e:b8ae7679cf18e7261303313b18ba7a14',
        drm: 'clearkey',
    },
    {
        name: 'HGTV',
        src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/cg_hgtv_hd1.mpd',
        key: 'f0e3ab943318471abc8b47027f384f5a:13802a79b19cc3485d2257165a7ef62a',
        drm: 'clearkey',
    },
    {
        name: 'TRAVEL CHANNEL',
        src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        key: 'f3047fc13d454dacb6db4207ee79d3d3:bdbd38748f51fc26932e96c9a2020839',
        drm: 'clearkey',
    },
    {
        name: 'HISTORY',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        key: 'a7724b7ca2604c33bb2e963a0319968a:6f97e3e2eb2bade626e0281ec01d3675',
        drm: 'clearkey',
    },
    {
        name: 'FASHION TV',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        key: '971ebbe2d887476398e97c37e0c5c591:472aa631b1e671070a4bf198f43da0c7',
        drm: 'clearkey',
    },
    {
        name: 'PBA RUSH',
        src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        key: '76dc29dd87a244aeab9e8b7c5da1e5f3:95b2f2ffd4e14073620506213b62ac82',
        drm: 'clearkey',
    },
    {
        name: 'ONE SPORTS PLUS',
        src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        key: '322d06e9326f4753a7ec0908030c13d8:1e3e0ca32d421fbfec86feced0efefda',
        drm: 'clearkey',
    },
    {
        name: 'NBA TV PHILIPPINES',
        src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
        key: 'c5e51f41ceac48709d0bdcd9c13a4d88:20b91609967e472c27040716ef6a8b9a',
        drm: 'clearkey',
    },
    {
        name: 'TAP SPORTS',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        key: 'eabd2d95c89e42f2b0b0b40ce4179ea0:0e7e35a07e2c12822316c0dc4873903f',
        drm: 'clearkey',
    },
    {
        name: 'PREMIER SPORTS',
        src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        key: 'fc19c98cb9504a0fb78b22fea0a4b814:ea683112a96d4ae6c32d4ea13923e8c7',
        drm: 'clearkey',
    },
    {
        name: 'PREMIER SPORTS 2',
        src: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        key: '59454adb530b4e0784eae62735f9d850:61100d0b8c4dd13e4eb8b4851ba192cc',
        drm: 'clearkey',
    },
    {
        name: 'SPOTV',
        src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        key: 'ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e',
        drm: 'clearkey',
    },
    {
        name: 'SPOTV2',
        src: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        key: '7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed',
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

    channelCount.textContent = `Cignal: ${filtered.length}`;
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
