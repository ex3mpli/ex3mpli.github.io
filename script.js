let jwPlayerInstance = null,
  activeIndex = -1
const channels = [
  {
    name: '&FLIX',
    type: 'hls',
    category: 'Movies',
    url: 'https://edge3-moblive.yuppcdn.net/drm/smil:nflixdrm.smil/playlist.m3u8',
  },
  {
    name: 'A2Z',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
    drm: {
      clearkey: {
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
      },
    },
  },
  {
    name: 'ABC AUSTRALIA',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
    drm: {
      clearkey: {
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
      },
    },
  },
  {
    name: 'ADULT SWIM',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/ADULT-SWIM-HD/default.mpd',
    drm: {
      clearkey: {
        keyId: '694fa2e355b31ac2c52d0a56d3d8da59',
        key: '0d7eff2e4dc61d48489555068b0db46a',
      },
    },
  },
  {
    name: 'ALIW CHANNEL 23',
    type: 'hls',
    category: 'News',
    url: 'https://ott.udptv.net/stream/iptv/aliwtv/master.m3u8?u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'ALL TV',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/alltv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'AL JAZEERA',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
    drm: {
      clearkey: {
        keyId: '7f3d900a04d84492b31fe9f79ac614e3',
        key: 'd33ff14f50beac42969385583294b8f2',
      },
    },
  },
  {
    name: 'ANC',
    type: 'mpd',
    category: 'News',
    url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
    drm: {
      clearkey: {
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
      },
    },
  },
  {
    name: 'ANIMAL PLANET',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
    drm: {
      clearkey: {
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
      },
    },
  },
  {
    name: 'ANIMAX',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd_new.mpd',
    drm: {
      clearkey: {
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
      },
    },
  },
  {
    name: 'ANIME X HIDIVE',
    type: 'hls',
    category: 'International',
    url: 'https://amc-anime-x-hidive-1-us.tablo.wurl.tv/playlist.m3u8',
  },
  {
    name: 'ARIRANG',
    type: 'hls',
    category: 'International',
    url: 'https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8',
  },
  {
    name: 'ASIAN FOOD NETWORK',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
    drm: {
      clearkey: {
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
      },
    },
  },
  {
    name: 'ASTRO BOO',
    type: 'mpd',
    category: 'Movies',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2407/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: 'ea4d51ade01bbf3946e0de973051ba10',
        key: 'f3266bec607f25879f48640f30f1c888',
      },
    },
  },
  {
    name: 'ASTRO SHOWCASE',
    type: 'mpd',
    category: 'Movies',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: 'b8090c8361cc5cc5c1aac0ec2710de10',
        key: 'ca0d18538845bae2cb4f4a168036f174',
      },
    },
  },
  {
    name: 'ASTRO SPORTS PLUS',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '81352bc47ec1177b321ee65ac1be7f10',
        key: 'c8b886142005d7e5067c8717777eaac4',
      },
    },
  },
  {
    name: 'ASTRO SPORTS PLUS 2',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5076/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '89c10c7ef0af145be7d6e88dec090b10',
        key: '80558606a13a99d2c543872d8899ced0',
      },
    },
  },
  {
    name: 'AXN',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
    drm: {
      clearkey: {
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
      },
    },
  },
  {
    name: 'AXN MOVIES',
    type: 'mpd',
    category: 'Movies',
    url: 'https://ott.zapitv.com/live/eds_c2/axn_white/dash_live_enc/axn_white.mpd',
    drm: {
      clearkey: {
        keyId: 'f9e4be09926c262effa2b5381ae3553d',
        key: 'd630e04e0c5e3f98dc38840be1c1dd4c',
      },
    },
  },
  {
    name: 'AWSN',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://amg02188-amg02188c2-jungotv-northamerica-5717.playouts.now.amagi.tv/playlist1080p.m3u8',
  },
  {
    name: 'BBC EARTH',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
    drm: {
      clearkey: {
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
      },
    },
  },
  {
    name: 'BBC LIFESTYLE',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd',
    drm: {
      clearkey: {
        keyId: '34880f56627c11ee8c990242ac120002',
        key: 'c23677c829bb244b79a3dc09ffd88ca0',
      },
    },
  },
  {
    name: 'BBC NEWS',
    type: 'hls',
    category: 'News',
    url: 'https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8',
  },
  {
    name: 'BEIN SPORTS 1',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/408/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '1a655189ab5c49eb235308c2b1a9e710',
        key: '3c4508af348844107f5e026a4fd6b16e',
      },
    },
  },
  {
    name: 'BEIN SPORTS 2',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5066/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '39c175581e237eff9559607eb9b23c10',
        key: '5102b12aac7756c65dcb46a101d960d3',
      },
    },
  },
  {
    name: 'BEIN SPORTS 3',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2705/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '20c884ef8ed26b2762f8b1a78f2d1910',
        key: '042a21bf236ca729b1e343ed6e0a6337',
      },
    },
  },
  {
    name: 'BILYONARYO NEWS CHANNEL',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
    drm: {
      clearkey: {
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
      },
    },
  },
  {
    name: 'BLAST SPORTS',
    type: 'hls',
    category: 'Sports',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/blastsportshd/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'BLOOMBERG',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
    drm: {
      clearkey: {
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
      },
    },
  },
  {
    name: 'BS FUJI',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/bsfuji/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'BS NIPPON TV',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/bsntv/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'BUKO CHANNEL',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
    drm: {
      clearkey: {
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
      },
    },
  },
  {
    name: 'CARTOON NETWORK',
    type: 'mpd',
    category: 'Kids',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
    drm: {
      clearkey: {
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
      },
    },
  },
  {
    name: 'CARTOONITO',
    type: 'hls',
    category: 'Kids',
    url: 'https://cdn4.skygo.mn/live/disk1/Boomerang/HLS-FTA/Boomerang.m3u8',
  },
  {
    name: 'CBEEBIES',
    type: 'mpd',
    category: 'Kids',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5093/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '50c699c444e5f80dacafc4c99667d810',
        key: 'de6c5feaae5f6963b4b392ddc8b6a778',
      },
    },
  },
  {
    name: 'CCTV 4',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
    drm: {
      clearkey: {
        keyId: 'b83566836c0d4216b7107bd7b8399366',
        key: '32d50635bfd05fbf8189a0e3f6c8db09',
      },
    },
  },
  {
    name: 'CELESTIAL MOVIES PINOY',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd',
    drm: {
      clearkey: {
        keyId: '0f8537d8412b11edb8780242ac120002',
        key: '2ffd7230416150fd5196fd7ea71c36f3',
      },
    },
  },
  {
    name: 'CGTN',
    type: 'hls',
    category: 'International',
    url: 'https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8',
  },
  {
    name: 'CGTN DOCUMENTARY',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd',
    drm: {
      clearkey: {
        keyId: '0f854ee4412b11edb8780242ac120002',
        key: '9f2c82a74e727deadbda389e18798d55',
      },
    },
  },
  {
    name: 'CINEMA ONE',
    type: 'hls',
    category: 'Local',
    url: 'https://ott.udptv.net/stream/iptv/cinemaoneph/stream.m3u8?uid=536377536&u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'CINEMO',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/cinemoph/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'CINEMAX',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
    drm: {
      clearkey: {
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
      },
    },
  },
  {
    name: 'CNN INTERNATIONAL',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd',
    drm: {
      clearkey: {
        keyId: '900c43f0e02742dd854148b7a75abbec',
        key: 'da315cca7f2902b4de23199718ed7e90',
      },
    },
  },
  {
    name: 'COMBATGO',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://jungotvstream.chanall.tv/jungotv/combatgo/stream.m3u8',
  },
  {
    name: 'CRIME+INVESTIGATION',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '22fc5baf47ae3b6322bc244206bbb210',
        key: 'db1ee2b8994b91aac65049ef3e493787',
      },
    },
  },
  {
    name: 'DA VINCI LEARNING',
    type: 'mpd',
    category: 'Kids',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561305/index.mpd',
    drm: {
      clearkey: {
        keyId: 'ee86cc9df1984d42ab7f4e4b5d4779c6',
        key: 'e7fff34cfa72c9be9de54d0d79d944f9',
      },
    },
  },
  {
    name: 'DEUTSCHE WELLE',
    type: 'hls',
    category: 'News',
    url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8',
  },
  {
    name: 'DISCOVERY ASIA',
    type: 'hls',
    category: 'International',
    url: 'https://cdn4.skygo.mn/live/disk1/Discovery_Asia/HLSv3-FTA/Discovery_Asia.m3u8',
  },
  {
    name: 'DISCOVERY CHANNEL',
    type: 'hls',
    category: 'Documentary',
    url: 'https://cdn4.skygo.mn/live/disk1/SoutheastAsia/HLSv3-FTA/SoutheastAsia.m3u8',
  },
  {
    name: 'DISCOVERY SCIENCE',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '5458f45efedb4d6f8aa6ac76c85b621b',
        key: 'dbf8a0a306a64525ba3012fd225370c0',
      },
    },
  },
  {
    name: 'DISCOVERY TURBO',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryturbo2/default/manifest.mpd',
    drm: {
      clearkey: {
        keyId: 'c011525969e44b99a86059dbb3cdf4e8',
        key: '6700a5d93203417b8585f7de7dd1a09b',
      },
    },
  },
  {
    name: 'DISNEY CHANNEL',
    type: 'mpd',
    category: 'Kids',
    url: 'https://uselector.cdn.intigral-ott.net/DIS/DIS.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '72800c62fcf2bfbedd9af27d79ed35d6',
        key: 'b6ccb9facb2c1c81ebe4dfaab8a45195',
      },
    },
  },
  {
    name: 'DISNEY JR.',
    type: 'mpd',
    category: 'Kids',
    url: 'https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: 'f5df57914a0922d5d5ed6b0a4af6290a',
        key: 'c62b10a180d1770a355b3c4cb6506ca0',
      },
    },
  },
  {
    name: 'DISNEY XD',
    type: 'hls',
    category: 'Kids',
    url: 'https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8',
  },
  {
    name: 'DMAX',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2610/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '0e21da304a29298ceca1fdfd1e71e210',
        key: '87de38cf3ed2bbcd5d89b63e571bfe21',
      },
    },
  },
  {
    name: 'DREAMWORKS CHANNEL',
    type: 'mpd',
    category: 'Kids',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
    drm: {
      clearkey: {
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
      },
    },
  },
  {
    name: 'DREAMWORKS TAGALIZED',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
    drm: {
      clearkey: {
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
      },
    },
  },
  {
    name: 'DZRH TV',
    type: 'hls',
    category: 'News',
    url: 'https://ott.udptv.net/stream/iptv/dzrhtv/master.m3u8?u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'ENGLISH CLUB TV',
    type: 'mpd',
    category: 'Kids',
    url: 'https://live002.cda.pl/enc109/englishclubtvhd/englishclubtvhd.mpd',
    drm: {
      clearkey: {
        keyId: '62396662653361643639336337326338',
        key: '35306664303035323431383738663631',
      },
    },
  },
  {
    name: 'EURONEWS',
    type: 'hls',
    category: 'News',
    url: 'https://amg00882-amg00882c2-samsung-ph-4542.playouts.now.amagi.tv/playlist.m3u8',
  },
  {
    name: 'EUROSPORT',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2100/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '4db23a41babfe9afc222a58c59828310',
        key: 'd0e794e3cff564ed2c720a098eb177c7',
      },
    },
  },
  {
    name: 'EXTREME SPORTS',
    type: 'mpd',
    category: 'Sports',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561206/index.mpd',
    drm: {
      clearkey: {
        keyId: 'fcda490bfd8148179b0e93c5ef0d80e3',
        key: 'e4293507d592df040f2186f1ce82a712',
      },
    },
  },
  {
    name: 'FASHION TV',
    type: 'hls',
    category: 'Lifestyle',
    url: 'https://cdn4.skygo.mn/live/disk1/Fashion_TV/HLSv3-FTA/Fashion_TV.m3u8',
  },
  {
    name: 'FIGHT SPORTS',
    type: 'mpd',
    category: 'Movies',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561205/index.mpd',
    drm: {
      clearkey: {
        keyId: 'a9e3bdb344af427b90e4681174e41c97',
        key: 'de6bcb2bef4f1c7968296c1cde182494',
      },
    },
  },
  {
    name: 'FOOD NETWORK',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
      },
    },
  },
  {
    name: 'FOX NEWS',
    type: 'hls',
    category: 'News',
    url: 'https://v1.thetvapp.to/hls/FoxNewsChannel/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'FRANCE24',
    type: 'hls',
    category: 'News',
    url: 'https://a-cdn.klowdtv.com/live2/france24_720p/chunks.m3u8',
  },
  {
    name: 'FRONT ROW CHANNEL',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://jungotvstream.chanall.tv/jungotv/frontrow/stream.m3u8',
  },
  {
    name: 'FX',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561902/index.mpd',
    drm: {
      clearkey: {
        keyId: '35df612f2a58436d85806c585fcf56ce',
        key: '9dfbd593c235de9843823be314b974cb',
      },
    },
  },
  {
    name: 'FX LIFE',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561301/index.mpd',
    drm: {
      clearkey: {
        keyId: '1a75f9a2300f448089c6cdebeb97bbbd',
        key: '606ae417e0e6cf4b0d353764e3140dbc',
      },
    },
  },
  {
    name: 'GLOBAL TREKKER',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/globaltrekker.mpd',
    drm: {
      clearkey: {
        keyId: '5c26c24bce2942078cf6e35216632c2d',
        key: '445887a1c0832ff457263d8bcadc993f',
      },
    },
  },
  {
    name: 'GMA',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/gma/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'GTV',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/gtv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'HALLYPOP',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://jungotvstream.chanall.tv/jungotv/hallypop/stream.m3u8',
  },
  {
    name: 'HBO',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
    drm: {
      clearkey: {
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
      },
    },
  },
  {
    name: 'HBO 2',
    type: 'mpd',
    category: 'Movies',
    url: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/HBO2-HD/default.mpd',
    drm: {
      clearkey: {
        keyId: '09e84fc7ecb71def143cd7e2771f3b35',
        key: '1a91f2d315fb0593321ba60aa783ec2c',
      },
    },
  },
  {
    name: 'HBO FAMILY',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
    drm: {
      clearkey: {
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
      },
    },
  },
  {
    name: 'HBO HITS',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
    drm: {
      clearkey: {
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
      },
    },
  },
  {
    name: 'HBO POP',
    type: 'mpd',
    category: 'Movies',
    url: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/HBO-POP-HD/default.mpd',
    drm: {
      clearkey: {
        keyId: 'bcf36f412fa3d735cea04f7443fbf77c',
        key: '6ff29fb2d6b7d825eb06004650a0a4ea',
      },
    },
  },
  {
    name: 'HBO SIGNATURE',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
    drm: {
      clearkey: {
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
      },
    },
  },
  {
    name: 'HEART OF ASIA',
    type: 'hls',
    category: 'Local',
    url: 'https://ott.udptv.net/stream/iptv/heartofasia/stream.m3u8?uid=2707574591&u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'HGTV',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/cg_hgtv_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
      },
    },
  },
  {
    name: 'HISTORY',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
    drm: {
      clearkey: {
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
      },
    },
  },
  {
    name: 'HITS',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'dac605bc197e442c93f4f08595a95100',
        key: '975e27ffc1b7949721ee3ccb4b7fd3e5',
      },
    },
  },
  {
    name: 'HITS MOVIES',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd',
    drm: {
      clearkey: {
        keyId: 'f56b57b32d7e4b2cb21748c0b56761a7',
        key: '3df06a89aa01b32655a77d93e09e266f',
      },
    },
  },
  {
    name: 'HITS NOW',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
    drm: {
      clearkey: {
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
      },
    },
  },
  {
    name: 'IBC',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd',
    drm: {
      clearkey: {
        keyId: '16ecd238c0394592b8d3559c06b1faf5',
        key: '05b47ae3be1368912ebe28f87480fc84',
      },
    },
  },
  {
    name: 'I HEART MOVIES',
    type: 'hls',
    category: 'Local',
    url: 'https://ott.udptv.net/stream/iptv/iheartmovies/stream.m3u8?uid=3299216323&u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'INVESTIGATION DISCOVERY',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://uselector.cdn.intigral-ott.net/DCX/DCX.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '2e364252e8341f5b172da9aa813947e7',
        key: '674099ec66ddecbc55a244ce06228188',
      },
    },
  },
  {
    name: 'JEEPNEY TV',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/jeepneytv/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'JIMJAM',
    type: 'mpd',
    category: 'Kids',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561701/index.mpd',
    drm: {
      clearkey: {
        keyId: '6d7d9d2aef84494e94830feebe8c0e3c',
        key: '24bcf3046de823566d8c41b08f633df9',
      },
    },
  },
  {
    name: 'JUNGO PINOY TV',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
  },
  {
    name: 'KAPAMILYA CHANNEL',
    type: 'hls',
    category: 'Local',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/kapamilyachannel/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'KBS WORLD',
    type: 'hls',
    category: 'International',
    url: 'https://cdn4.skygo.mn/live/disk1/KBSWorld/HLSv3-FTA/KBSWorld.m3u8',
  },
  {
    name: 'KBS KOREA',
    type: 'hls',
    category: 'International',
    url: 'https://cdn4.skygo.mn/live/disk1/KBS_World_24/HLSv3-FTA/KBS_World_24.m3u8',
  },
  {
    name: 'KIX',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
      },
    },
  },
  {
    name: 'KNOWLEDGE CHANNEL',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
    drm: {
      clearkey: {
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
      },
    },
  },
  {
    name: 'KPOP TV PLAY',
    type: 'hls',
    category: 'Music',
    url: 'https://giatv.bozztv.com/giatv/giatv-kpoptvplay/kpoptvplay/chunks.m3u8',
  },
  {
    name: 'LIFETIME',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
    drm: {
      clearkey: {
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
      },
    },
  },
  {
    name: 'LOTUS MACAU',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
    drm: {
      clearkey: {
        keyId: '60dc692e64ea443a8fb5ac186c865a9b',
        key: '01bdbe22d59b2a4504b53adc2f606cc1',
      },
    },
  },
  {
    name: 'LOVE NATURE',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5096/default_ott.mpd',
    drm: {
      clearkey: {
        keyId: '168bd815468639fe4528b4bf0141f310',
        key: '775a654c0610811ad022329a68884de1',
      },
    },
  },
  {
    name: 'MBC ACTION',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '5567531458e9c2e93d22935c45fdef52',
        key: 'f2f613fb2132acd019d2a96bf1be15c1',
      },
    },
  },
  {
    name: 'MBC MAX',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '0a414b719bade2acc124e22c042290f3',
        key: 'db84a5afa10a001dd73b094c14638212',
      },
    },
  },
  {
    name: 'METRO CHANNEL',
    type: 'hls',
    category: 'Lifestyle',
    url: 'https://ott.udptv.net/stream/iptv/metrochannel/master.m3u8?u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'MN+',
    type: 'mpd',
    category: 'Movies',
    url: 'https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd',
    drm: {
      clearkey: {
        keyId: '40f019b86241d23ef075633fd7f1e927',
        key: '058dec845bd340178a388edd104a015e',
      },
    },
  },
  {
    name: 'MNX',
    type: 'mpd',
    category: 'Movies',
    url: 'https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd',
    drm: {
      clearkey: {
        keyId: '40f019b86241d23ef075633fd7f1e927',
        key: '058dec845bd340178a388edd104a015e',
      },
    },
  },
  {
    name: 'MOVIES NOW',
    type: 'mpd',
    category: 'Movies',
    url: 'https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd',
    drm: {
      clearkey: {
        keyId: '40f019b86241d23ef075633fd7f1e927',
        key: '058dec845bd340178a388edd104a015e',
      },
    },
  },
  {
    name: 'MOONBUG',
    type: 'hls',
    category: 'Kids',
    url: 'https://moonbug-rokuus.amagi.tv/playlist.m3u8',
  },
  {
    name: 'MTV',
    type: 'mpd',
    category: 'Music',
    url: 'https://ott.zapitv.com/live/eds_c2/mtv_espana/dash_live_enc/mtv_espana.mpd',
    drm: {
      clearkey: {
        keyId: '10f86eedfa603133e035c4c64226dd6b',
        key: '1678761258b8a16d5d5b9241bd647536',
      },
    },
  },
  {
    name: 'MTV HITS',
    type: 'mpd',
    category: 'Music',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/560612/index.mpd',
    drm: {
      clearkey: {
        keyId: '73be9dd0138241bcaced7d4fb3f5a4b1',
        key: 'eebcb531a9deb6ab2de1a342c058afb8',
      },
    },
  },
  {
    name: 'MTV LIVE',
    type: 'mpd',
    category: 'Music',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/560701/index.mpd',
    drm: {
      clearkey: {
        keyId: '1041d72f861c4e60a87a4e828250ded6',
        key: 'c75b1640bc83ec0c653902a775e5bb1a',
      },
    },
  },
  {
    name: 'MYX',
    type: 'hls',
    category: 'Music',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/myx/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'NATIONAL GEOGRAPHIC',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561901/index.mpd',
    drm: {
      clearkey: {
        keyId: '6d647aff767c453daa5fb54a44c783c6',
        key: '2f971e6a1cc58e7085afc761a3f13162',
      },
    },
  },
  {
    name: 'NATIONAL GEOGRAPHIC WILD',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561201/index.mpd',
    drm: {
      clearkey: {
        keyId: 'ffa7c3ca6020428c919e13b817b7e31b',
        key: 'adf163c6c1729e6f77668d4e49f32352',
      },
    },
  },
  {
    name: 'NBA TV PHILIPPINES',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
    drm: {
      clearkey: {
        keyId: 'c5e51f41ceac48709d0bdcd9c13a4d88',
        key: '20b91609967e472c27040716ef6a8b9a',
      },
    },
  },
  {
    name: 'NET25',
    type: 'hls',
    category: 'Local',
    url: 'https://ott.udptv.net/stream/iptv/net25/master.m3u8?u=udpteam@djdoolky76&p=39b88e99dfbf6126a8a8a44072c74e2814222e00ac8b1f380fec00a77902b3b8',
  },
  {
    name: 'NHK BS',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/NHK_BS/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'NHK WORLD JAPAN',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nhk_japan.mpd',
    drm: {
      clearkey: {
        keyId: '3d6e9d4de7d7449aadd846b7a684e564',
        key: '0800fff80980f47f7ac6bc60b361b0cf',
      },
    },
  },
  {
    name: 'NHK WORLD PREMIUM',
    type: 'hls',
    category: 'International',
    url: 'https://cdn4.skygo.mn/live/disk1/NHK_World_Premium/HLSv3-FTA/NHK_World_Premium.m3u8',
  },
  {
    name: 'NICK JR.',
    type: 'mpd',
    category: 'Kids',
    url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
    drm: {
      clearkey: {
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
      },
    },
  },
  {
    name: 'NICKELODEON',
    type: 'mpd',
    category: 'Kids',
    url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
    drm: {
      clearkey: {
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
      },
    },
  },
  {
    name: 'NICKTOONS',
    type: 'mpd',
    category: 'Kids',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561208/index.mpd',
    drm: {
      clearkey: {
        keyId: '3161c6c45076419fbbc333c277a22f65',
        key: '18827aad7e2e79e526f529fd5027cb47',
      },
    },
  },
  {
    name: 'ONE NEWS',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
      },
    },
  },
  {
    name: 'ONE PH',
    type: 'mpd',
    category: 'News',
    url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
    drm: {
      clearkey: {
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
      },
    },
  },
  {
    name: 'ONE SPORTS',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    drm: {
      clearkey: {
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
      },
    },
  },
  {
    name: 'ONE SPORTS +',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
    drm: {
      clearkey: {
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
      },
    },
  },
  {
    name: 'PBA RUSH',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
    drm: {
      clearkey: {
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
      },
    },
  },
  {
    name: "PEOPLE'S TELEVISION",
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
    drm: {
      clearkey: {
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
      },
    },
  },
  {
    name: 'PINOY BOX OFFICE',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
    drm: {
      clearkey: {
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
      },
    },
  },
  {
    name: 'PREMIER SPORTS 1',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
      },
    },
  },
  {
    name: 'PREMIER SPORTS 2',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
    drm: {
      clearkey: {
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
      },
    },
  },
  {
    name: 'ROCK ACTION',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
    drm: {
      clearkey: {
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
      },
    },
  },
  {
    name: 'ROCK ENTERTAINMENT',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockentertainment.mpd',
    drm: {
      clearkey: {
        keyId: 'e4ee0cf8ca9746f99af402ca6eed8dc7',
        key: 'be2a096403346bc1d0bb0f812822bb62',
      },
    },
  },
  {
    name: 'ROMEDY NOW',
    type: 'mpd',
    category: 'Movies',
    url: 'https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd',
    drm: {
      clearkey: {
        keyId: '40f019b86241d23ef075633fd7f1e927',
        key: '058dec845bd340178a388edd104a015e',
      },
    },
  },
  {
    name: 'RPTV',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
    drm: {
      clearkey: {
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
      },
    },
  },
  {
    name: 'RUSSIA TODAY',
    type: 'hls',
    category: 'News',
    url: 'https://1a-1791.com/live/hr6yv36f/slot-4/mxtm-wdfe_360p/chunklist_DVR.m3u8',
  },
  {
    name: 'SARI-SARI',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
    drm: {
      clearkey: {
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
      },
    },
  },
  {
    name: 'SCREAMFLIX',
    type: 'hls',
    category: 'Jungo TV',
    url: 'https://jungotvstream.chanall.tv/jungotv/screamflix/stream.m3u8',
  },
  {
    name: 'SETANTA SPORTS 1',
    type: 'mpd',
    category: 'Sports',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561002/index.mpd',
    drm: {
      clearkey: {
        keyId: '8ab2332442854e62b0018eec3ee58484',
        key: '37fdee8b6eef5c96001e8c6fc47bfc08',
      },
    },
  },
  {
    name: 'SETANTA SPORTS 2',
    type: 'mpd',
    category: 'Sports',
    url: 'https://tr.live.cdn.cgates.lt/live/dash/561504/index.mpd',
    drm: {
      clearkey: {
        keyId: '9552bcbabfbd4ac19744422143bfb875',
        key: 'e6daacaced7eba147d2b667441060a4f',
      },
    },
  },
  {
    name: 'SPOTV',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
    drm: {
      clearkey: {
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
      },
    },
  },
  {
    name: 'SPOTV 2',
    type: 'mpd',
    category: 'Sports',
    url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
    drm: {
      clearkey: {
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
      },
    },
  },
  {
    name: 'STAR CHANNEL',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://aka-live1-ott.izzigo.tv/2/out/u/dash/FOX-HD/default.mpd',
    drm: {
      clearkey: {
        keyId: '3c768a448428f7e87aaf69da2a0662b0',
        key: '7f98805ed862b863d51e93f884161b74',
      },
    },
  },
  {
    name: 'TAGALIZED MOVIE CHANNEL',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
    drm: {
      clearkey: {
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
      },
    },
  },
  {
    name: 'TAP ACTION FLIX',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
    drm: {
      clearkey: {
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
      },
    },
  },
  {
    name: 'TAP EDGE',
    type: 'hls',
    category: 'Entertainment',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/tapedgehd/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'TAP MOVIES',
    type: 'mpd',
    category: 'Movies',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
    drm: {
      clearkey: {
        keyId: '71cbdf02b595468bb77398222e1ade09',
        key: 'c3f2aa420b8908ab8761571c01899460',
      },
    },
  },
  {
    name: 'TAP SPORTS',
    type: 'hls',
    category: 'Sports',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/tapsportshd/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'TAP TV',
    type: 'hls',
    category: 'Entertainment',
    url: 'https://cdn.ganbaruby23.xyz/stream/restream/taptvhd/stream.m3u8?uid=1485345779&u=FiliTV&p=ea3e07a61f5af654b1bc96090db16bf246337738d5fceae3401a1205f2f8a60f',
  },
  {
    name: 'THRILL',
    type: 'mpd',
    category: 'Entertainment',
    url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
    drm: {
      clearkey: {
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
      },
    },
  },
  {
    name: 'TLC',
    type: 'mpd',
    category: 'Lifestyle',
    url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/tlc_sd.mpd',
    drm: {
      clearkey: {
        keyId: '0f853238412b11edb8780242ac120002',
        key: '84909ea5ec7ad3ca93c8b94c083f3116',
      },
    },
  },
  {
    name: 'TRACE URBAN',
    type: 'hls',
    category: 'Music',
    url: 'https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-traceurban-samsungnz/playlist.m3u8',
  },
  {
    name: 'TRACE SPORT STARS',
    type: 'hls',
    category: 'Sports',
    url: 'https://tracetv-sportstarts-vidaa.amagi.tv/playlist.m3u8',
  },
  {
    name: 'TRAVEL CHANNEL',
    type: 'mpd',
    category: 'Documentary',
    url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
    drm: {
      clearkey: {
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
      },
    },
  },
  {
    name: 'TRUE FM TV',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
    drm: {
      clearkey: {
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
      },
    },
  },
  {
    name: 'TURNER CLASSIC MOVIES',
    type: 'mpd',
    category: 'Movies',
    url: 'https://uselector.cdn.intigral-ott.net/TCM/TCM.isml/manifest.mpd',
    drm: {
      clearkey: {
        keyId: '59c626d2eae3ad531022136f1bb4769e',
        key: '5c83465dc798bab650d802725cc26270',
      },
    },
  },
  {
    name: 'TV5',
    type: 'mpd',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
    drm: {
      clearkey: {
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d',
      },
    },
  },
  {
    name: 'TVN PREMIUM',
    type: 'mpd',
    category: 'International',
    url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
    drm: {
      clearkey: {
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
      },
    },
  },
  {
    name: 'TVN MOVIES PINOY',
    type: 'hls',
    category: 'Local',
    url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
    drm: {
      clearkey: {
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
      },
    },
  },
  {
    name: 'W-SPORT',
    type: 'mpd',
    category: 'Sports',
    url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_primary.mpd',
    drm: {
      clearkey: {
        keyId: '010cbb9cf1a01ead38070730d38bc710',
        key: '9cd5c0d1e54c22e035d88dd3c1dfc84c',
      },
    },
  },
  {
    name: 'WARNER TV',
    type: 'hls',
    category: 'Entertainment',
    url: 'https://cdn4.skygo.mn/live/disk1/Warner/HLSv3-FTA/Warner.m3u8',
  },
  {
    name: 'WOWOW CINEMA',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/wcinema/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'WOWOW LIVE',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/wlive/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'WOWOW PRIME',
    type: 'hls',
    category: 'International',
    url: 'https://server.priterytivi.com/wprime/tracks-v1a1/mono.m3u8',
  },
  {
    name: 'ZOOMOO',
    type: 'hls',
    category: 'Kids',
    url: 'https://amg01553-blueantmediaasi-zoomoonz-samsungnz-rdufn.amagi.tv/playlist/amg01553-blueantmediaasi-zoomoonz-samsungnz/playlist.m3u8',
  },
]
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById('clock').textContent = timeString;
}

function populateCategoryDropdown() {
  const dropdown = document.getElementById('categoryFilter');
  const categories = Array.from(
    new Set(channels.map(channel => channel.category))
  ).sort();

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    dropdown.appendChild(option);
  });
}

function setupChannelList() {
  const list = document.getElementById('channelList');
  const countDisplay = document.getElementById('channelCount');
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;

  list.innerHTML = '';
  let visibleCount = 0;

  channels.forEach((channel, index) => {
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery);

    if (matchesCategory && matchesSearch) {
      visibleCount++;
      const listItem = document.createElement('li');
      listItem.textContent = channel.name;
      listItem.tabIndex = 0;
      listItem.onclick = () => loadChannel(index);
      if (index === activeIndex) {
        listItem.classList.add('active');
      }
      list.appendChild(listItem);
    }
  });

  countDisplay.textContent = `Total Channel${visibleCount !== 1 ? 's' : ''}: ${visibleCount}`;
}

function initPlayer() {
  jwPlayerInstance = jwplayer('player').setup({
    width: '100%',
    height: '100%',
    autostart: false,
    stretching: 'exactfit',
    aspectratio: '16:9',
    primary: 'html5',
    hlshtml: true,
    displaytitle: false,
    logo: { hide: true },
  });

  jwPlayerInstance.on('error', (error) => {
    console.error('JWPlayer error:', error);
    showFallbackMessage();
  });

  jwPlayerInstance.on('play', () => {
    hideFallbackMessage();
  });
}

function loadChannel(index) {
  if (activeIndex === index) return;

  activeIndex = index;
  setupChannelList();

  const channel = channels[index];
  const playerConfig = {
    file: channel.url,
    title: channel.name,
    autostart: true,
  };

  if (channel.type === 'mpd' && channel.drm) {
    playerConfig.drm = channel.drm;
  }

  hideFallbackMessage();
  jwPlayerInstance.setup(playerConfig);
}

function showFallbackMessage() {
  document.getElementById('fallbackMessage').style.display = 'block';
}

function hideFallbackMessage() {
  document.getElementById('fallbackMessage').style.display = 'none';
}

window.addEventListener('load', () => {
  initPlayer();
  populateCategoryDropdown();
  setupChannelList();
  showFallbackMessage();
  updateClock();
  setInterval(updateClock, 1000);
});

window.addEventListener('beforeunload', () => {
  if (jwPlayerInstance) {
    jwPlayerInstance.remove();
  }
});

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(event, keyChar) {
  return (
    event.ctrlKey &&
    event.shiftKey &&
    event.keyCode === keyChar.charCodeAt(0)
  );
}

document.onkeydown = (event) => {
  if (
    event.keyCode === 123 || // F12
    ctrlShiftKey(event, 'I') ||
    ctrlShiftKey(event, 'J') ||
    ctrlShiftKey(event, 'C') ||
    (event.ctrlKey && event.keyCode === 'U'.charCodeAt(0))
  ) {
    return false;
  }
};

const toggleBtn = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
  document.body.classList.add('light-theme');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  function updateIcon() {
      toggleBtn.textContent = body.classList.contains('light-theme') ? '🌙' : '☀️';
  }

  if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-theme');
  }
  updateIcon();

  toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-theme');
      const isLight = body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateIcon();
  });
