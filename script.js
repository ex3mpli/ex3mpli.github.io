const channels = [
  { 
    name: 'TV5', 
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd', 
    key: '2615129ef2c846a9bbd43a641c7303ef:07c7f996b1734ea288641a68e1cfdc4d', 
    drm: 'clearkey' 
  },
  { 
    name: 'ONE SPORTS', 
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd', 
    key: '53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd', 
    drm: 'clearkey' 
  },
  {
    name: 'TV5',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
    key: '2615129ef2c846a9bbd43a641c7303ef:07c7f996b1734ea288641a68e1cfdc4d',
    drm: 'clearkey'
  },
  {
    name: 'ONE SPORTS',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
    key: '53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd',
    drm: 'clearkey'
  },
  {
    name: 'A2Z',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
    key: 'f703e4c8ec9041eeb5028ab4248fa094:c22f2162e176eee6273a5d0b68d19530',
    drm: 'clearkey'
  },
  {
    name: 'PTV',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
    key: '71a130a851b9484bb47141c8966fb4a3:ad1f003b4f0b31b75ea4593844435600',
    drm: 'clearkey'
  },
  {
    name: 'IBC 13',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd_new.mpd',
    key: '16ecd238c0394592b8d3559c06b1faf5:05b47ae3be1368912ebe28f87480fc84',
    drm: 'clearkey'
  },
  {
    name: 'RPTV',
    src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
    key: '1917f4caf2364e6d9b1507326a85ead6:a1340a251a5aa63a9b0ea5d9d7f67595',
    drm: 'clearkey'
  },
  {
    name: 'ANC',
    src: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
    key: '4bbdc78024a54662854b412d01fafa16:6039ec9b213aca913821677a28bd78ae',
    drm: 'clearkey'
  },
  {
    name: 'TELERADYO SERBISYO',
    src: 'https://d14c00opfjb50c.cloudfront.net/out/v1/0fa4eb67579d41cca4ed146c93aa855f/index.mpd',
    key: '47c093e0c9fd4f80839a0337da3dd876:50547394045b3d047dc7d92f57b5fb33',
    drm: 'clearkey'
  },
  {
    name: 'ONE NEWS',
    src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
    key: 'd39eb201ae494a0b98583df4d110e8dd:6797066880d344422abd3f5eda41f45f',
    drm: 'clearkey'
  },
  {
    name: 'ONE PH',
    src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
    key: '92834ab4a7e1499b90886c5d49220e46:a7108d9a6cfcc1b7939eb111daf09ab3',
    drm: 'clearkey'
  },
  {
    name: 'TRUE FM TV',
    src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
    key: '0559c95496d44fadb94105b9176c3579:40d8bb2a46ffd03540e0c6210ece57ce',
    drm: 'clearkey'
  },
  {
    name: 'BILYONARYO NEWS CHANNEL',
    src: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
    key: '227ffaf09bec4a889e0e0988704d52a2:b2d0dce5c486891997c1c92ddaca2cd2',
    drm: 'clearkey'
  },
  {
    name: 'KAPAMILYA CHANNEL (TFC)',
    src: 'https://d1uf7s78uqso1e.cloudfront.net/out/v1/efa01372657648be830e7c23ff68bea2/index.mpd',
    key: 'bd17afb5dc9648a39be79ee3634dd4b8:3ecf305d54a7729299b93a3d69c02ea5',
    drm: 'clearkey'
  },
  {
    name: 'GMA PINOY TV',
    src: 'https://amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono-dzsx9.amagi.tv/index.mpd',
    key: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1:47635b8e885e19f2ccbdff078c207058',
    drm: 'clearkey'
  },
  {
    name: 'DREAMWORKS (TAG)',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
    key: '564b3b1c781043c19242c66e348699c5:d3ad27d7fe1f14fb1a2cd5688549fbab',
    drm: 'clearkey'
  },
  {
    name: 'TVUP',
    src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
    key: '83e813ccd4ca4837afd611037af02f63:a97c515dbcb5dcbc432bbd09d15afd41',
    drm: 'clearkey'
  },
  {
    name: 'UAAP VARSITY',
    src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
    key: '95588338ee37423e99358a6d431324b9:6e0f50a12f36599a55073868f814e81e',
    drm: 'clearkey'
  },
  {
    name: 'SARI-SARI',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
    key: '0a7ab3612f434335aa6e895016d8cd2d:b21654621230ae21714a5cab52daeb9d',
    drm: 'clearkey'
  },
  {
    name: 'BUKO CHANNEL',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
    key: 'd273c085f2ab4a248e7bfc375229007d:7932354c3a84f7fc1b80efa6bcea0615',
    drm: 'clearkey'
  },
  {
    name: 'PBO',
    src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
    key: 'dcbdaaa6662d4188bdf97f9f0ca5e830:31e752b441bd2972f2b98a4b1bc1c7a1',
    drm: 'clearkey'
  },
  {
    name: 'VIVA CINEMA',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
    key: '07aa813bf2c147748046edd930f7736e:3bd6688b8b44e96201e753224adfc8fb',
    drm: 'clearkey'
  },
  {
    name: 'CELESTIAL MOVIES PINOY',
    src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/celmovie_pinoy_sd.mpd',
    key: '0f8537d8412b11edb8780242ac120002:2ffd7230416150fd5196fd7ea71c36f3',
    drm: 'clearkey'
  },
  {
    name: 'TAGALIZED MOVIE CHANNEL',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
    key: '96701d297d1241e492d41c397631d857:ca2931211c1a261f082a3a2c4fd9f91b',
    drm: 'clearkey'
  },
  {
    name: 'TVN MOVIES PINOY',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
    key: '2e53f8d8a5e94bca8f9a1e16ce67df33:3471b2464b5c7b033a03bb8307d9fa35',
    drm: 'clearkey'
  },
  {
    name: 'CNN',
    src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cnnhd.mpd',
    key: '900c43f0e02742dd854148b7a75abbec:da315cca7f2902b4de23199718ed7e90',
    drm: 'clearkey'
  },
  {
    name: 'BLOOMBERG',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5020/default_ott.mpd',
    key: 'db1343545ae25ddecf8dfa4422f35410:79a044b30d64f5c37e6d45d503cbb280',
    drm: 'clearkey'
  },
  {
    name: 'AL JAZEERA',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2110/default_ott.mpd',
    key: 'b1fbd0874e7923f5b05929a042aa0610:6c3c498113abffdf454dc935319a794d',
    drm: 'clearkey'
  },
  {
    name: 'CNBC',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/900/default_ott.mpd',
    key: 'c3a38f1340531759a1ca97bc5d80c810:602827a870d49862d1a23f2912957b4c',
    drm: 'clearkey'
  },
  {
    name: 'CHANNEL NEWS ASIA',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/605/default_ott.mpd',
    key: 'f812aeae6be5b924a8181b512d5d7910:44275884ee394d05081fde395ff6e415',
    drm: 'clearkey'
  },
  {
    name: 'KIX',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
    key: 'a8d5712967cd495ca80fdc425bc61d6b:f248c29525ed4c40cc39baeee9634735',
    drm: 'clearkey'
  },
  {
    name: 'THRILL',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
    key: '928114ffb2394d14b5585258f70ed183:a82edc340bc73447bac16cdfed0a4c62',
    drm: 'clearkey'
  },
  {
    name: 'STAR CHANNEL',
    src: 'https://aka-live1-ott.izzigo.tv/2/out/u/dash/FOX-HD/default.mpd',
    key: '3c768a448428f7e87aaf69da2a0662b0:7f98805ed862b863d51e93f884161b74',
    drm: 'clearkey'
  },
  {
    name: 'STAR WORLD',
    src: 'https://uselector.cdn.intigral-ott.net/STW/STW.isml/manifest.mpd',
    key: '19cf49b59d662baf0359682aa503749f:af573556d33ef2f094b98c7d22e9ffce',
    drm: 'clearkey'
  },
  {
    name: 'STAR MOVIES',
    src: 'https://uselector.cdn.intigral-ott.net/STM/STM.isml/manifest.mpd',
    key: '4b7a662d7132679630f3a3f1862a859c:0651bc37e705349a2848278ae3ad7bf4',
    drm: 'clearkey'
  },
  {
    name: 'STAR ACTION',
    src: 'https://uselector.cdn.intigral-ott.net/FMA/FMA.isml/manifest.mpd',
    key: '230af93fc61c0c170067c9d1b6538402:49a9bf0cfba1cb4e52de3d458f6fb3a2',
    drm: 'clearkey'
  },
  {
    name: 'FX',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561902/index.mpd',
    key: '35df612f2a58436d85806c585fcf56ce:9dfbd593c235de9843823be314b974cb',
    drm: 'clearkey'
  },
  {
    name: 'FX LIFE',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561301/index.mpd',
    key: '1a75f9a2300f448089c6cdebeb97bbbd:606ae417e0e6cf4b0d353764e3140dbc',
    drm: 'clearkey'
  },
  {
    name: 'HITS',
    src: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
    key: 'dac605bc197e442c93f4f08595a95100:975e27ffc1b7949721ee3ccb4b7fd3e5',
    drm: 'clearkey'
  },
  {
    name: 'HITS MOVIES',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2305/default_ott.mpd',
    key: 'ff1febd7018d0dd711601e795e0d6210:38fbfb3a56e40ff92c9df8acbcba9ef6',
    drm: 'clearkey'
  },
  {
    name: 'HITS NOW',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5110/default_ott.mpd',
    key: '4307def6a29bec082f8c93f1f98e5910:a4d49bda8cd29ba2888c732b4e7d9d63',
    drm: 'clearkey'
  },
  {
    name: 'AXN',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2303/default_ott.mpd',
    key: 'c24a7811d9ab46b48b746a0e7e269210:c321afe1689b07d5b7e55bd025c483ce',
    drm: 'clearkey'
  },
  {
    name: 'AXN MOVIES',
    src: 'https://ott.zapitv.com/live/eds_c2/axn_white/dash_live_enc/axn_white.mpd',
    key: 'f9e4be09926c262effa2b5381ae3553d:d630e04e0c5e3f98dc38840be1c1dd4c',
    drm: 'clearkey'
  },
  {
    name: 'ROCK ENTERTAINMENT',
    src: 'https://streaming.indihometv.com/atm/DASH/rock_entertainment/manifest.mpd',
  },
  {
    name: 'ROCK ACTION',
    src: 'https://streaming.indihometv.com/atm/DASH//ROCK_ACTION/manifest.mpd',
  },
  {
    name: 'WARNER TV',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2605/default_ott.mpd',
    key: '6093e12639b24cd651ee6b3c13446d10:f8326f668c7bee309e5302b513e5bdf7',
    drm: 'clearkey'
  },
  {
    name: 'ADULT SWIM',
    src: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/ADULT-SWIM-HD/default.mpd',
    key: '694fa2e355b31ac2c52d0a56d3d8da59:0d7eff2e4dc61d48489555068b0db46a',
    drm: 'clearkey'
  },
  {
    name: 'ASTRO SHOWCASE',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5054/default_ott.mpd',
    key: 'b8090c8361cc5cc5c1aac0ec2710de10:ca0d18538845bae2cb4f4a168036f174',
    drm: 'clearkey'
  },
  {
    name: 'ASTRO BOO',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2407/default_ott.mpd',
    key: 'ea4d51ade01bbf3946e0de973051ba10:f3266bec607f25879f48640f30f1c888',
    drm: 'clearkey'
  },
  {
    name: 'HBO',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2304/default_ott.mpd',
    key: 'a098896d2b11c5f3906a993c3ba5c610:f3f842c54cc96cbbd0bcb96a4cb8a813',
    drm: 'clearkey'
  },
  {
    name: 'CINEMAX',
    src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
    key: 'b207c44332844523a3a3b0469e5652d7:fe71aea346db08f8c6fbf0592209f955',
    drm: 'clearkey'
  },
  {
    name: 'HBO HITS',
    src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
    key: 'b04ae8017b5b4601a5a0c9060f6d5b7d:a8795f3bdb8a4778b7e888ee484cc7a1',
    drm: 'clearkey'
  },
  {
    name: 'HBO SIGNATURE',
    src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
    key: 'a06ca6c275744151895762e0346380f5:559da1b63eec77b5a942018f14d3f56f',
    drm: 'clearkey'
  },
  {
    name: 'HBO FAMILY',
    src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
    key: '872910c843294319800d85f9a0940607:f79fd895b79c590708cf5e8b5c6263be',
    drm: 'clearkey'
  },
  {
    name: 'HBO PLUS',
    src: 'https://cdn.trimi.com.ar/live/sm-live/HBO_PLUS/sa_live_dash/HBO_PLUS.mpd',
    key: '58ded572926940b19e275d4956deda3c:a8018610386328f46738aa830453a6e2',
    drm: 'clearkey'
  },
  {
    name: 'HBO XTREME',
    src: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/HBO-XTREME-HD/default.mpd',
    key: 'bc8d4369fcff86db765db82356b4797c:8a7e801dbc275e3f4e1f43cba648906a',
    drm: 'clearkey'
  },
  {
    name: 'HBO POP',
    src: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/HBO-POP-HD/default.mpd',
    key: 'bcf36f412fa3d735cea04f7443fbf77c:6ff29fb2d6b7d825eb06004650a0a4ea',
    drm: 'clearkey'
  },
  {
    name: 'HBO 2',
    src: 'https://aka-live1-ott.izzigo.tv/5/out/u/dash/HBO2-HD/default.mpd',
    key: '09e84fc7ecb71def143cd7e2771f3b35:1a91f2d315fb0593321ba60aa783ec2c',
    drm: 'clearkey'
  },
  {
    name: 'CINEMAX 2',
    src: 'https://dash2.antik.sk/stream/hisi_cinemax_2/playlist_cbcs.mpd',
    key: '11223344556677889900112233445566:4b80724d0ef86bcb2c21f7999d67739d',
    drm: 'clearkey'
  },
  {
    name: 'TURNER CLASSIC MOVIES',
    src: 'https://uselector.cdn.intigral-ott.net/TCM/TCM.isml/manifest.mpd',
    key: '59c626d2eae3ad531022136f1bb4769e:5c83465dc798bab650d802725cc26270',
    drm: 'clearkey'
  },
  {
    name: 'MOVIES NOW',
    src: 'https://times-ott-live.akamaized.net/moviesnow_wv_drm/index.mpd',
    key: '40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e',
    drm: 'clearkey'
  },
  {
    name: 'MNX',
    src: 'https://times-ott-live.akamaized.net/mnxhd_wv_drm/index.mpd',
    key: '40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e',
    drm: 'clearkey'
  },
  {
    name: 'MN+',
    src: 'https://times-ott-live.akamaized.net/mnplus_wv_drm/index.mpd',
    key: '40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e',
    drm: 'clearkey'
  },
  {
    name: 'ROMEDY NOW',
    src: 'https://times-ott-live.akamaized.net/romedynow_wv_drm/index.mpd',
    key: '40f019b86241d23ef075633fd7f1e927:058dec845bd340178a388edd104a015e',
    drm: 'clearkey'
  },
  {
    name: 'TAP TV',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
    key: 'f6804251e90b4966889b7df94fdc621e:55c3c014f2bd12d6bd62349658f24566',
    drm: 'clearkey'
  },
  {
    name: 'TAP MOVIES',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapmovies_hd1.mpd',
    key: '71cbdf02b595468bb77398222e1ade09:c3f2aa420b8908ab8761571c01899460',
    drm: 'clearkey'
  },
  {
    name: 'TAP ACTION FLIX',
    src: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
    key: 'bee1066160c0424696d9bf99ca0645e3:f5b72bf3b89b9848de5616f37de040b7',
    drm: 'clearkey'
  },
  {
    name: 'MBC ACTION',
    src: 'https://uselector.cdn.intigral-ott.net/MBAH/MBAH.isml/manifest.mpd',
    key: '5567531458e9c2e93d22935c45fdef52:f2f613fb2132acd019d2a96bf1be15c1',
    drm: 'clearkey'
  },
  {
    name: 'MBC MAX',
    src: 'https://uselector.cdn.intigral-ott.net/MBMH/MBMH.isml/manifest.mpd',
    key: '0a414b719bade2acc124e22c042290f3:db84a5afa10a001dd73b094c14638212',
    drm: 'clearkey'
  },
  {
    name: 'LOTUS MACAU',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
    key: '60dc692e64ea443a8fb5ac186c865a9b:01bdbe22d59b2a4504b53adc2f606cc1',
    drm: 'clearkey'
  },
  {
    name: 'DISNEY CHANNEL',
    src: 'https://uselector.cdn.intigral-ott.net/DIS/DIS.isml/manifest.mpd',
    key: '72800c62fcf2bfbedd9af27d79ed35d6:b6ccb9facb2c1c81ebe4dfaab8a45195',
    drm: 'clearkey'
  },
  {
    name: 'DISNEY JR.',
    src: 'https://uselector.cdn.intigral-ott.net/DJR/DJR.isml/manifest.mpd',
    key: 'f5df57914a0922d5d5ed6b0a4af6290a:c62b10a180d1770a355b3c4cb6506ca0',
    drm: 'clearkey'
  },
  {
    name: 'CARTOON NETWORK',
    src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
    key: 'a2d1f552ff9541558b3296b5a932136b:cdd48fa884dc0c3a3f85aeebca13d444',
    drm: 'clearkey'
  },
  {
    name: 'NICKELODEON',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_ott.mpd',
    key: 'd8520e96a1283ab6e5be538474bfa810:bda5f7bbc1e44096f779a0619fe9881f',
    drm: 'clearkey'
  },
  {
    name: 'NICK JR',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2702/default_ott.mpd',
    key: 'fa65220c9f76e424173899df533a6d10:b4abbee95b69b3e80a0d141272c870db',
    drm: 'clearkey'
  },
  {
    name: 'NICKTOONS',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561208/index.mpd',
    key: '3161c6c45076419fbbc333c277a22f65:18827aad7e2e79e526f529fd5027cb47',
    drm: 'clearkey'
  },
  {
    name: 'DREAMWORKS',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
    key: '4ab9645a2a0a47edbd65e8479c2b9669:8cb209f1828431ce9b50b593d1f44079',
    drm: 'clearkey'
  },
  {
    name: 'CBEEBIES',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5093/default_ott.mpd',
    key: '50c699c444e5f80dacafc4c99667d810:de6c5feaae5f6963b4b392ddc8b6a778',
    drm: 'clearkey'
  },
  {
    name: 'MOONBUG',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5067/default_ott.mpd',
    key: 'e3cb7499710786eb105fab7b52459910:8ab093adabdc343b8734b7ecf0aea11a',
    drm: 'clearkey'
  },
  {
    name: 'JIMJAM',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561701/index.mpd',
    key: '6d7d9d2aef84494e94830feebe8c0e3c:24bcf3046de823566d8c41b08f633df9',
    drm: 'clearkey'
  },
  {
    name: 'BABY TV',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561306/index.mpd',
    key: 'a7707f7fb0c84c8ba54619f514eee4ec:fd2ceae6cddde71895e4718f00f34275',
    drm: 'clearkey'
  },
  {
    name: 'DA VINCI LEARNING',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561305/index.mpd',
    key: 'ee86cc9df1984d42ab7f4e4b5d4779c6:e7fff34cfa72c9be9de54d0d79d944f9',
    drm: 'clearkey'
  },
  {
    name: 'ENGLISH CLUB TV',
    src: 'https://live002.cda.pl/enc109/englishclubtvhd/englishclubtvhd.mpd',
    key: '62396662653361643639336337326338:35306664303035323431383738663631',
    drm: 'clearkey'
  },
  {
    name: 'KBS WORLD',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2306/default_ott.mpd',
    key: '692950d39869c92af9a9ddea453c0d10:eadc626ab959255f7ab881c03d306fe2',
    drm: 'clearkey'
  },
  {
    name: 'TVN',
    src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
    key: 'e1bde543e8a140b38d3f84ace746553e:b712c4ec307300043333a6899a402c10',
    drm: 'clearkey'
  },
  {
    name: 'TVN MOVIES',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2406/default_ott.mpd',
    key: '8e269c8aa32ad77eb83068312343d610:d12ccebafbba2a535d88a3087f884252',
    drm: 'clearkey'
  },
  {
    name: 'ONE',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2702/default_ott.mpd',
    key: 'd8fe398c79065173fa9788f226056510:45e77e6a8ba767b63cacfdb01ef2ac29',
    drm: 'clearkey'
  },
  {
    name: 'K-PLUS',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/9983/default_ott.mpd',
    key: 'aa48b28bd723f91214887df6ed9fad10:b5a3a800848120c843ae0fa68c09c261',
    drm: 'clearkey'
  },
  {
    name: 'KOREAN BLOCKBUSTERS',
    src: 'https://ABBFTJ3AAAAAAAAMBPTDXCMDYGR3L.ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/6dmgizf5p5/out/v1/9a8dc2d85b6d4f9bb081d53cb26d2003/cenc.mpd',
    key: '94bc19ad9cb04a7e6871e650a7f6529c:83e7dc469eb303c4237db6750225f6be',
    drm: 'clearkey'
  },
  {
    name: 'ANIMAX',
    src: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd',
    key: 'edf1a715de9748638dd2fad75a419af2:2f5a3199b26e9b693ae881af7ff864cf',
    drm: 'clearkey'
  },
  {
    name: 'NHK WORLD PREMIUM',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5018/default_ott.mpd',
    key: '98817b144bcf19fd0ddca7fe54cee110:44b423a77dd34ace162db35cbb0fb6a3',
    drm: 'clearkey'
  },
  {
    name: 'DISCOVERY ASIA',
    src: 'http://linearjitp-playback.astro.com.my/dash-wv/linear/501/default_ott.mpd',
    key: '3ff02fcd80c2e3230c52ae70fe903410:c3a58ec867cc25829e1fbe8938442553',
    drm: 'clearkey'
  },
  {
    name: 'CELESTIAL MOVIES',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/506/default_ott.mpd',
    key: 'c5c1ba26907291afec11a9a78d513410:361197805d0149c29801946cf2dde67c',
    drm: 'clearkey'
  },
  {
    name: 'CCM',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/100/default_ott.mpd',
    key: 'a642dd4bf3ea782e19202adefb604b10:3f59355e15eed1bb219ea1687d55cfbb',
    drm: 'clearkey'
  },
  {
    name: 'IQIYI',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/dashiso/1006/default_ott.mpd',
    key: '7ef7e913ce85a1131b27036069169a10:77d98ed71db7524c27875a09a975f9e6',
    drm: 'clearkey'
  },
  {
    name: 'TVB CLASSIC',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5016/default_ott.mpd',
    key: '071448690a0ec9b27eb2c1a7d5e03010:933ae273b166baa8fb203eef1a7adbdf',
    drm: 'clearkey'
  },
  {
    name: 'TVB JADE',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2600/default_ott.mpd',
    key: 'fe1219019a9f36cdef347088e592ca10:cb9e1a122ed1c6445f7d3fd2162358f1',
    drm: 'clearkey'
  },
  {
    name: 'TVB XING HE',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/401/default_ott.mpd',
    key: 'e36e0cbdef0677b48dba5c63e8caaf10:ecfb454b2f3e238c5b5dc196e4f91fb8',
    drm: 'clearkey'
  },
  {
    name: 'CCTV4',
    src: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
    key: 'b83566836c0d4216b7107bd7b8399366:32d50635bfd05fbf8189a0e3f6c8db09',
    drm: 'clearkey'
  },
  {
    name: 'CGTN DOCUMENTARY',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_cgtn.mpd',
    key: '0f854ee4412b11edb8780242ac120002:9f2c82a74e727deadbda389e18798d55',
    drm: 'clearkey'
  },
  {
    name: 'ABC AUSTRALIA',
    src: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
    key: '389497f9f8584a57b234e27e430e04b7:3b85594c7f88604adf004e45c03511c0',
    drm: 'clearkey'
  },
  {
    name: 'TV5MONDE ASIE',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tv5_monde.mpd',
    key: 'fba5a720b4a541b286552899ba86e38b:f63fa50423148bfcbaa58c91dfcffd0e',
    drm: 'clearkey'
  },
  {
    name: 'DISCOVERY CHANNEL',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2510/default_ott.mpd',
    key: '276767a578aae2eacb284247ccd9eb10:03ef88df1a47669e5459e105e3b535b1',
    drm: 'clearkey'
  },
  {
    name: 'ANIMAL PLANET',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2710/default_ott.mpd',
    key: 'd5199f1513a0286e038dae8f7d820010:4d4d4d9dc41be43f528a4940cf66f14c',
    drm: 'clearkey'
  },
  {
    name: 'DISCOVERY SCIENCE',
    src: 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryscience2/default/manifest.mpd',
    key: '5458f45efedb4d6f8aa6ac76c85b621b:dbf8a0a306a64525ba3012fd225370c0',
    drm: 'clearkey'
  },
  {
    name: 'DMAX',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2610/default_ott.mpd',
    key: '0e21da304a29298ceca1fdfd1e71e210:87de38cf3ed2bbcd5d89b63e571bfe21',
    drm: 'clearkey'
  },
  {
    name: 'DISCOVERY TURBO',
    src: 'https://d1g8wgjurz8via.cloudfront.net/bpk-tv/Discoveryturbo2/default/manifest.mpd',
    key: 'c011525969e44b99a86059dbb3cdf4e8:6700a5d93203417b8585f7de7dd1a09b',
    drm: 'clearkey'
  },
  {
    name: 'INVESTIGATION DISCOVERY',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561805/index.mpd',
    key: 'f500790fc198489bac7a5937cc5e2312:16ebfccee4852e9d63676106c11773bb',
    drm: 'clearkey'
  },
  {
    name: 'FOOD NETWORK',
    src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
    key: 'b7299ea0af8945479cd2f287ee7d530e:b8ae7679cf18e7261303313b18ba7a14',
    drm: 'clearkey'
  },
  {
    name: 'HGTV',
    src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/cg_hgtv_hd1.mpd',
    key: 'f0e3ab943318471abc8b47027f384f5a:13802a79b19cc3485d2257165a7ef62a',
    drm: 'clearkey'
  },
  {
    name: 'TLC',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2709/default_ott.mpd',
    key: '942ec156203b2aca1ddf3498f663c110:7f5e6c69698ddefcb74553431b2b1c98',
    drm: 'clearkey'
  },
  {
    name: 'TRAVEL CHANNEL',
    src: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
    key: 'f3047fc13d454dacb6db4207ee79d3d3:bdbd38748f51fc26932e96c9a2020839',
    drm: 'clearkey'
  },
  {
    name: 'ASIAN FOOD NETWORK',
    src: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
    key: '1619db30b9ed42019abb760a0a3b5e7f:5921e47fb290ae263291b851c0b4b6e4',
    drm: 'clearkey'
  },
  {
    name: 'DISCOVERY FAMILY',
    src: 'https://uselector.cdn.intigral-ott.net/DCF/DCF.isml/manifest.mpd',
    key: 'bce56c8de2f1b27b16dd7d3abc2409b6:8c1c393bb61be740910438f6e49c7c32a',
    drm: 'clearkey'
  },
  {
    name: 'NATIONAL GEOGRAPHIC',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561901/index.mpd',
    key: '6d647aff767c453daa5fb54a44c783c6:2f971e6a1cc58e7085afc761a3f13162',
    drm: 'clearkey'
  },
  {
    name: 'NATIONAL GEOGRAPHIC WILD',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561201/index.mpd',
    key: 'ffa7c3ca6020428c919e13b817b7e31b:adf163c6c1729e6f77668d4e49f32352',
    drm: 'clearkey'
  },
  {
    name: 'GLOBAL TREKKER',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5094/default_ott.mpd',
    key: '92d34a84fae8e54de0a829629941be10:2fb39ab3f55333d5fa3e830ebf99ec16',
    drm: 'clearkey'
  },
  {
    name: 'LOVE NATURE',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5096/default_ott.mpd',
    key: '168bd815468639fe4528b4bf0141f310:775a654c0610811ad022329a68884de1',
    drm: 'clearkey'
  },
  {
    name: 'HISTORY',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
    key: 'a7724b7ca2604c33bb2e963a0319968a:6f97e3e2eb2bade626e0281ec01d3675',
    drm: 'clearkey'
  },
  {
    name: 'CRIME + INVESTIGATION',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2111/default_ott.mpd',
    key: '22fc5baf47ae3b6322bc244206bbb210:db1ee2b8994b91aac65049ef3e493787',
    drm: 'clearkey'
  },
  {
    name: 'LIFETIME',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5052/default_ott.mpd',
    key: '8de11e005db5bd0db8228814863cd310:183b3eafa4c82e68f74c4244d54906b0',
    drm: 'clearkey'
  },
  {
    name: 'BBC EARTH',
    src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
    key: '34ce95b60c424e169619816c5181aded:0e2a2117d705613542618f58bf26fc8e',
    drm: 'clearkey'
  },
  {
    name: 'BBC LIFESTYLE',
    src: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_bbclifestyle.mpd',
    key: '34880f56627c11ee8c990242ac120002:c23677c829bb244b79a3dc09ffd88ca0',
    drm: 'clearkey'
  },
  {
    name: 'FASHION TV',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
    key: '971ebbe2d887476398e97c37e0c5c591:472aa631b1e671070a4bf198f43da0c7',
    drm: 'clearkey'
  },
  {
    name: 'AMC BREAK',
    src: 'https://ott.zapitv.com/live/eds_c2/blaze/dash_live_enc/blaze.mpd',
    key: '15e412a4edd85313233969913072e0ff:5098eafaff2b246ee15e8f9aeb5403fb',
    drm: 'clearkey'
  },
  {
    name: 'AMC CRIME',
    src: 'https://ott.zapitv.com/live/eds_c2/crimen/dash_live_enc/crimen.mpd',
    key: 'e3048d6cc539b8a8b90d74992fb4e197:4e494e4d179abc3d3f10073b21ac8630',
    drm: 'clearkey'
  },
  {
    name: 'MYX (TFC)',
    src: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-myxnola-dash-abscbnono/91ad5a54-112d-408d-948c-a56fd509adb0/index.mpd',
    key: 'f40a52a3ac9b4702bdd5b735d910fd2f:5ce1bc7f06b494c276252b4d13c90e51',
    drm: 'clearkey'
  },
  {
    name: 'MTV',
    src: 'https://ac-009.live.p7s1video.net/c580ce72/t_009/mtv-de-hd/cenc-default.mpd',
    key: '6291eca99cf551307166958ac7ed70ee:167e81feb4b3b6d909f43dd8d00810e5',
    drm: 'clearkey'
  },
  {
    name: 'MTV LIVE',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/560701/index.mpd',
    key: '1041d72f861c4e60a87a4e828250ded6:c75b1640bc83ec0c653902a775e5bb1a',
    drm: 'clearkey'
  },
  {
    name: 'MTV HITS',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/560612/index.mpd',
    key: '73be9dd0138241bcaced7d4fb3f5a4b1:eebcb531a9deb6ab2de1a342c058afb8',
    drm: 'clearkey'
  },
  {
    name: 'MTV 80S',
    src: 'https://ott.zapitv.com/live/eds_c2/MTV80_S/dash_live_enc/MTV80_S.mpd',
    key: '77318e15c3e69e56828e86528df8ff31:aa0dd9bbf74de516e23daaa9d5318cc2',
    drm: 'clearkey'
  },
  {
    name: 'MTV 00S',
    src: 'https://ott.zapitv.com/live/eds_c2/vh1/dash_live_enc/vh1.mpd',
    key: '999c8a5c8fdd7106a0c4b63cf9bc2223:d9a4c96e3cb098279b5db8f87621fd85',
    drm: 'clearkey'
  },
  {
    name: 'MEZZO',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/xfixnh8glr/out/v1/7bd3f3b9e3f94d15bc0a52878c067d60/cenc.mpd',
    key: '0ecfce9c56a46a42e4aba2dcf8037fed:3085cadf11d93aa24b88ba938ad61ccd',
    drm: 'clearkey'
  },
  {
    name: 'MEZZO LIVE',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/kaq34ndrio/out/v1/a8d9a45706e54ae49a922dc6d9dd151f/cenc.mpd',
    key: '4708dc633793632adb2287ef37b2dc79:4d09e48cae8061ed7612c1c969804922',
    drm: 'clearkey'
  },
  {
    name: 'STINGRAY ICONCERTS',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561101/index.mpd',
    key: 'fa806baddc384a168eff4f95f06ad289:eb65e4b92473ed6e33ff05a56343dbab',
    drm: 'clearkey'
  },
  {
    name: 'NOW 70S',
    src: 'https://tglmp03.akamaized.net/out/v1/b0ddd3ed82164617a9640ec76f3628c2/manifest.mpd',
  },
  {
    name: 'NOW 80S',
    src: 'https://tglmp02.akamaized.net/out/v1/4148d890e367435480ca18465a014dd8/manifest.mpd',
  },
  {
    name: 'NOW ROCK',
    src: 'https://tglmp04.akamaized.net/out/v1/61b00aa312c84a0b988dc000d37926db/manifest.mpd',
  },
  {
    name: 'PBA RUSH',
    src: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
    key: '76dc29dd87a244aeab9e8b7c5da1e5f3:95b2f2ffd4e14073620506213b62ac82',
    drm: 'clearkey'
  },
  {
    name: 'ONE SPORTS PLUS',
    src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
    key: '322d06e9326f4753a7ec0908030c13d8:1e3e0ca32d421fbfec86feced0efefda',
    drm: 'clearkey'
  },
  {
    name: 'NBA TV PHILIPPINES',
    src: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cgnl_nba.mpd',
    key: 'c5e51f41ceac48709d0bdcd9c13a4d88:20b91609967e472c27040716ef6a8b9a',
    drm: 'clearkey'
  },
  {
    name: 'TAP SPORTS',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
    key: 'eabd2d95c89e42f2b0b0b40ce4179ea0:0e7e35a07e2c12822316c0dc4873903f',
    drm: 'clearkey'
  },
  {
    name: 'PREMIER SPORTS',
    src: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
    key: 'fc19c98cb9504a0fb78b22fea0a4b814:ea683112a96d4ae6c32d4ea13923e8c7',
    drm: 'clearkey'
  },
  {
    name: 'PREMIER SPORTS 2',
    src: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
    key: '59454adb530b4e0784eae62735f9d850:61100d0b8c4dd13e4eb8b4851ba192cc',
    drm: 'clearkey'
  },
  {
    name: 'BEIN SPORTS 1',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/408/default_ott.mpd',
    key: '1a655189ab5c49eb235308c2b1a9e710:3c4508af348844107f5e026a4fd6b16e',
    drm: 'clearkey'
  },
  {
    name: 'BEIN SPORTS 2',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5066/default_ott.mpd',
    key: '39c175581e237eff9559607eb9b23c10:5102b12aac7756c65dcb46a101d960d3',
    drm: 'clearkey'
  },
  {
    name: 'BEIN SPORTS 3',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2705/default_ott.mpd',
    key: '20c884ef8ed26b2762f8b1a78f2d1910:042a21bf236ca729b1e343ed6e0a6337',
    drm: 'clearkey'
  },
  {
    name: 'SPOTV',
    src: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
    key: 'ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e',
    drm: 'clearkey'
  },
  {
    name: 'SPOTV2',
    src: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
    key: '7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed',
    drm: 'clearkey'
  },
  {
    name: 'EUROSPORT',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2100/default_ott.mpd',
    key: '4db23a41babfe9afc222a58c59828310:d0e794e3cff564ed2c720a098eb177c7',
    drm: 'clearkey'
  },
  {
    name: 'EUROSPORT 1',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/at8teepvrn/out/v1/ab8d59a847f046c88f07a7f3d115d7fe/cenc.mpd',
    key: '15b830e0b73b0b8ef99786121997d5f5:51646d5e500648c6a4e319c7861e963f',
    drm: 'clearkey'
  },
  {
    name: 'EUROSPORT 2',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/crenwml9jf/out/v1/09518f97387b4ea5a69279a1aa1daf0a/cenc.mpd',
    key: '7a98f8e748e2e14057e9f99ac8e3a025:a0d9aa1a419ced1f9f4c2804b92ee0f7',
    drm: 'clearkey'
  },
  {
    name: 'GOLF CHANNEL',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/1003/default_ott.mpd',
    key: '705bab5e645b6d7c95588b29520f8110:28639bcfb5cbee8ff9ca398fcf5bfcd0',
    drm: 'clearkey'
  },
  {
    name: 'FIGHT SPORTS',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561205/index.mpd',
    key: 'a9e3bdb344af427b90e4681174e41c97:de6bcb2bef4f1c7968296c1cde182494',
    drm: 'clearkey'
  },
  {
    name: 'SKY SPORTS',
    src: 'https://aka-live1-ott.izzigo.tv/3/out/u/dash/SKY-SPORTS-HD/default.mpd',
    key: '335511dfdf0d03bc06f1fdead5870b5a:1a022fb33ad3de4d4579b04966551488',
    drm: 'clearkey'
  },
  {
    name: 'TNT SPORTS 1',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd',
    key: 'ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d',
    drm: 'clearkey'
  },
  {
    name: 'TNT SPORTS 2',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd',
    key: '6d1708b185c6c4d7b37600520c7cc93c:1aace05f58d8edef9697fd52cb09f441',
    drm: 'clearkey'
  },
  {
    name: 'TNT SPORTS 3',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd',
    key: '4e993aa8c1f295f8b94e8e9e6f6d0bfe:86a1ed6e96caab8eb1009fe530d2cf4f',
    drm: 'clearkey'
  },
  {
    name: 'TNT SPORTS 4',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd',
    key: 'e31a5a81caff5d07ea2411a571fc2e59:96c5ef69479732ae734f962748c19729',
    drm: 'clearkey'
  },
  {
    name: 'EXTREME SPORTS CHANNEL',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561206/index.mpd',
    key: 'fcda490bfd8148179b0e93c5ef0d80e3:e4293507d592df040f2186f1ce82a712',
    drm: 'clearkey'
  },
  {
    name: 'PREMIER SPORTS ASIA',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2601/default_ott.mpd',
    key: '9bfeb5068725617dbad6338473da6d10:06577ffcc4935ba24aff4c4c9dd6846d',
    drm: 'clearkey'
  },
  {
    name: 'SETANTA SPORTS 1',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561002/index.mpd',
    key: '8ab2332442854e62b0018eec3ee58484:37fdee8b6eef5c96001e8c6fc47bfc08',
    drm: 'clearkey'
  },
  {
    name: 'SETANTA SPORTS 2',
    src: 'https://tr.live.cdn.cgates.lt/live/dash/561504/index.mpd',
    key: '9552bcbabfbd4ac19744422143bfb875:e6daacaced7eba147d2b667441060a4f',
    drm: 'clearkey'
  },
  {
    name: 'W-SPORT',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5060/default_primary.mpd',
    key: '010cbb9cf1a01ead38070730d38bc710:9cd5c0d1e54c22e035d88dd3c1dfc84c',
    drm: 'clearkey'
  },
  {
    name: 'ASTRO SPORTS PLUS 1',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5171/default_ott.mpd',
    key: '81352bc47ec1177b321ee65ac1be7f10:c8b886142005d7e5067c8717777eaac4',
    drm: 'clearkey'
  },
  {
    name: 'ASTRO SPORTS PLUS 2',
    src: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/5076/default_ott.mpd',
    key: '89c10c7ef0af145be7d6e88dec090b10:80558606a13a99d2c543872d8899ced0',
    drm: 'clearkey'
  },
  {
    name: 'DAZN 1',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd',
    key: '44dd9cd370b08a868ead115fe84ecfde:bff19ab0a51cf14e848389b152913fd0',
    drm: 'clearkey'
  },
  {
    name: 'DAZN 2',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd',
    key: '0eab5a3f3e3b4ba5d42d40ca30d17571:f3f061ded9b70e8160590d5802ecda6d',
    drm: 'clearkey'
  },
  {
    name: 'DAZN F1',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cqbcvgkb83/out/v1/4dbe05ecfb1540448d82d68eeebfbb1c/cenc.mpd',
    key: '1061be12d303247426ec25e8369b2647:bd622b0e610295de3b0bccb850ccaaaa',
    drm: 'clearkey'
  },
  {
    name: 'FOX SPORTS 1',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/oboxe53wyo/out/v1/f7892a9d706d419a846d738fa22ea33e/cenc.mpd',
    key: '2fbdaa3bea0d0323ae011b318d1db716:8726ef7eaf5b9dce15fb6aa9f80bd53f',
    drm: 'clearkey'
  },
  {
    name: 'FOX SPORTS 2',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/tepjqej1ys/out/v1/c9c9159baee749a19612b1598495859a/cenc.mpd',
    key: '8836fb04d62dc64c9f8a39ef8640d5eb:d4f05ce56c5231b7cdf53455bea58621',
    drm: 'clearkey'
  },
  {
    name: 'FOX SPORTS 3',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/wybgz0orr8/out/v1/2f6d1612abd44f5883917f8a585b955f/cenc.mpd',
    key: '11c8c1c2ef0385cf1e64d44bb9c3a395:5769730ffbdc4b2fd8945929d9ace063',
    drm: 'clearkey'
  },
  {
    name: 'FOX SPORTS PREMIUM',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/fdx74zqzhu/out/v1/7d7a8c6981a842b98a683e9fbfe51d17/cenc.mpd',
    key: '9f327d24c66fbd84e15ab5c9ead7c7a4:83837185529c0c4048f81386c2d36426',
    drm: 'clearkey'
  },
  {
    name: 'LALIGA TV',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd',
    key: '620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a',
    drm: 'clearkey'
  },
  {
    name: 'LALIGA TV HYPERMOTION',
    src: 'https://ottb.live.cf.ww.aiv-cdn.net/fra-nitro/live/clients/dash/enc/vcog5dpiby/out/v1/62521b63232844669628ad2c35776bd1/cenc.mpd',
    key: 'd8235cccf08d0ff149a20dfcd11ff68b:e8ea3a1ae6892eb76a73dc1b14d216d6',
    drm: 'clearkey'
  },
  {
    name: 'HBO BOXING',
    src: 'https://abbftj3aaaaaaaame5ktsp32q2ykl.ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cmtyd9kpfe/out/v1/813bba04214e4f4dab57f0129365635a/cenc.mpd',
    key: 'a4b2fe10c9d62d32220e8ea2dceda6f9:e6e1173c892f7fbd60a37a76a78935cb',
    drm: 'clearkey'
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
