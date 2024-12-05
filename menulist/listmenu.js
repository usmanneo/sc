const chalk = require('chalk')
const fs = require('fs')

global.animemenu = (prefix) => {
return`${global.gris}MENU ANIMEK${global.gris}
╭─❍
├ *${prefix}akira*
├ *${prefix}9anime*
├ *${prefix}akiyama*
├ *${prefix}ana*
├ *${prefix}asuna*
├ *${prefix}ayuzawa*
├ *${prefix}boruto*
├ *${prefix}chiho*
├ *${prefix}chitoge*
├ *${prefix}cosplayloli*
├ *${prefix}cosplaysagiri*
├ *${prefix}deidara*
├ *${prefix}doraemon*
├ *${prefix}elaina*
├ *${prefix}emilia*
├ *${prefix}erza*
├ *${prefix}gremory*
├ *${prefix}hestia*
├ *${prefix}hinata*
├ *${prefix}husbu*
├ *${prefix}inori*
├ *${prefix}isuzu*
├ *${prefix}itachi*
├ *${prefix}itori*
├ *${prefix}kaga*
├ *${prefix}kagura*
├ *${prefix}kakasih*
├ *${prefix}kaori*
├ *${prefix}keneki*
├ *${prefix}kotori*
├ *${prefix}kurumi*
├ *${prefix}loli*
├ *${prefix}madara*
├ *${prefix}megumin*
├ *${prefix}mikasa*
├ *${prefix}mikey*
├ *${prefix}miku*
├ *${prefix}minato*
├ *${prefix}naruto*
├ *${prefix}neko*
├ *${prefix}neko2*
├ *${prefix}nekonime*
├ *${prefix}nezuko*
├ *${prefix}onepiece*
├ *${prefix}pokemon*
├ *${prefix}randomnime*
├ *${prefix}randomnime2*
├ *${prefix}rize*
├ *${prefix}sagiri*
├ *${prefix}sakura*
├ *${prefix}sasuke*
├ *${prefix}shina*
├ *${prefix}shinka*
├ *${prefix}shinomiya*
├ *${prefix}shizuka*
├ *${prefix}shota*
├ *${prefix}tejina*
├ *${prefix}toukachan*
├ *${prefix}tsunade*
├ *${prefix}waifu*
├ *${prefix}animewall*
├ *${prefix}yotsuba*
├ *${prefix}yuki*
├ *${prefix}yulibocil*
├ *${prefix}yumeko*
├ *${prefix}8ball*
├ *${prefix}tickle*
├ *${prefix}gecg*
├ *${prefix}feed*
├ *${prefix}animeawoo*
├ *${prefix}animemegumin*
├ *${prefix}animeshinobu*
├ *${prefix}animehandhold*
├ *${prefix}animehighfive*
├ *${prefix}animecringe*
├ *${prefix}animedance*
├ *${prefix}animehappy*
├ *${prefix}animeglomp*
├ *${prefix}animeblush*
├ *${prefix}animesmug*
├ *${prefix}animewave*
├ *${prefix}animesmile*
├ *${prefix}animepoke*
├ *${prefix}animewink*
├ *${prefix}animebonk*
├ *${prefix}animebully*
├ *${prefix}animeyeet*
├ *${prefix}animebite*
├ *${prefix}animelick*
├ *${prefix}animekill*
├ *${prefix}animecry*
├ *${prefix}animewlp*
├ *${prefix}animekiss*
├ *${prefix}animehug*
├ *${prefix}animeneko*
├ *${prefix}animepat*
├ *${prefix}animeslap*
├ *${prefix}animecuddle*
├ *${prefix}animewaifu*
├ *${prefix}animenom*
├ *${prefix}animefoxgirl*
├ *${prefix}animegecg*
├ *${prefix}animetickle*
├ *${prefix}animefeed*
├ *${prefix}animeavatar*
├ *${prefix}genshin*
├ *${prefix}anime*
├ *${prefix}amv*
╰─────❍`}

global.ownermenu = (prefix) => {
return`${global.gris}OWNER MENU${global.gris}
╭──❍
├ *${prefix}self*
├ *${prefix}spam-pairing*
├ *${prefix}addsewa*
├ *${prefix}ceksewa*
├ *${prefix}listsewa*
├ *${prefix}sewalist*
├ *${prefix}xandroid*
├ *${prefix}xandroid2*
├ *${prefix}clearall*
├ *${prefix}pinchat*
├ *${prefix}unpinchat*
├ *${prefix}gconly* 
├ *${prefix}public* 
├ *${prefix}setpppanjang* 
├ *${prefix}setppgcpanjang* 
├ *${prefix}addcase*
├ *${prefix}join* 
├ *${prefix}bctext* 
├ *${prefix}poll* 
├ *${prefix}bcimage*
├ *${prefix}bcvideo*
├ *${prefix}creategc*
├ *${prefix}setexif*
├ *${prefix}userjid*
├ *${prefix}setbotname*
├ *${prefix}setbotbio*
├ *${prefix}delppbot*
├ *${prefix}restart*
├ *${prefix}setppbot*
├ *${prefix}addprem*
├ *${prefix}delprem*
├ *${prefix}addowner*
├ *${prefix}delowner*
├ *${prefix}addvn*
├ *${prefix}delvn*
├ *${prefix}addsticker*
├ *${prefix}delsticker*
├ *${prefix}addimage*
├ *${prefix}delimage*
├ *${prefix}addvideo*
├ *${prefix}delvideo*
├ *${prefix}block*
├ *${prefix}unblock del*
├ *${prefix}leavegc*
├ *${prefix}spamsms (628xx)*
├ *${prefix}clearalluser*
├ *${prefix}cut30*
├ *${prefix}pakaian*
├ *${prefix}speedtest*
╰─────❍`}

global.othermenu = (prefix) => {
return`${global.gris}OTHER MENU${global.gris}
╭─❍
├ *${prefix}ping*
├ *${prefix}jadwalsholat*
├ *${prefix}readviewonce*
├ *${prefix}cekkhodam*
├ *${prefix}cekkontol*
├ *${prefix}paptt*
├ *${prefix}alkitab*
├ *${prefix}totalfitur*
├ *${prefix}menu*
├ *${prefix}myip*
├ *${prefix}reportbug*
├ *${prefix}listpem*
├ *${prefix}liststicker*
├ *${prefix}listimage*
├ *${prefix}listvideo*
├ *${prefix}listvn*
├ *${prefix}listbadword*
├ *${prefix}listpc*
├ *${prefix}listgc*
├ *${prefix}owner*
├ *${prefix}jadibot*
├ *${prefix}listjadibot*
├ *${prefix}donate*
├ *${prefix}friend*
├ *${prefix}obfuscate*
├ *${prefix}styletext*
├ *${prefix}fliptext*
├ *${prefix}tts*
├ *${prefix}say*
├ *${prefix}togif*
├ *${prefix}toqr*
├ *${prefix}bass*
├ *${prefix}blown*
├ *${prefix}deep*
├ *${prefix}earrape*
├ *${prefix}fast*
├ *${prefix}fat*
├ *${prefix}nightcore*
├ *${prefix}reverse*
├ *${prefix}robot*
├ *${prefix}slow*
├ *${prefix}smooth*
├ *${prefix}squirrel*
├ *${prefix}tinyurl*
├ *${prefix}tinyurl*
├ *${prefix}tovn*
├ *${prefix}tourl*
├ *${prefix}toaudio*
├ *${prefix}tomp3*
├ *${prefix}tomp4*
├ *${prefix}toimg*
├ *${prefix}toonce*
├ *${prefix}sticker*
├ *${prefix}swm*
├ *${prefix}take*
├ *${prefix}emoji*
├ *${prefix}volume*
├ *${prefix}ebinary*
├ *${prefix}dbinary*
├ *${prefix}ssweb*
├ *${prefix}quoted*
├ *${prefix}runtime*
╰─────❍`}

global.digital = (prefix, hituet) => {
return`${global.gris}MENU SERVER${global.gris}
╭──❍
├ ${prefix}sisadroplet
├ ${prefix}deldroplet
├ ${prefix}cekdroplet
├ ${prefix}listdroplet
├ ${prefix}vps1g1c
├ ${prefix}vps1g2c
├ ${prefix}vps2g2c
├ ${prefix}vps4g2c
├ ${prefix}vps8g4c
├ ${prefix}vps16g4c
├ ${prefix}turnon
├ ${prefix}turnoff
├ ${prefix}cvpsubuntuv1 *otomati*
├ ${prefix}cvpsubuntuv2 *otomati*
├ ${prefix}changeapido
├ ${prefix}restartvps
├ ${prefix}resetpwvps
├ ${prefix}rebuild
├ ${prefix}sendvps
╰─────❍`}

global.up = (prefix, hituet) => {
return`${global.gris}MENU SERVER${global.gris}
╭──❍
├ ${prefix}upbashinstall
├ ${prefix}upbashinstall1
├ ${prefix}upbashinstall2
├ ${prefix}uptokeninstall
├ ${prefix}uptokeninstall1
├ ${prefix}uptokeninstall2
├ ${prefix}updomain
├ ${prefix}updomain2
├ ${prefix}upapikey
├ ${prefix}upapikey2
├ ${prefix}upcapikey
├ ${prefix}upcapikey2
├ ${prefix}uphargav1
├ ${prefix}uphargav2
├ ${prefix}uphargav3
├ ${prefix}uphargav3up
├ ${prefix}uphargapribadi
├ ${prefix}uphargav3saweria
├ ${prefix}upzone
├ ${prefix}upapi
╰─────❍`}

global.waws = (prefix, hituet) => {
return`${global.gris}DOXING MENU${global.gris}
╭──❍
├ ${prefix}doxxing *Button*
├ ${prefix}nikparser
├ ${prefix}getnik
├ ${prefix}dox
╰─────❍`}

global.walet = (prefix, hituet) => {
return`${global.gris}MENU PBOP${global.gris}
╭──❍
├ ${prefix}topup-dana
├ ${prefix}topup-gopay
├ ${prefix}topup-ovo
├ ${prefix}pulsa-axis
├ ${prefix}pulsa-indosat
├ ${prefix}pulsa-tsel
├ ${prefix}pulsa-tri
├ ${prefix}pulsa-xl
╰─────❍`}

global.guild = (prefix, hituet) => {
return`${global.gris}MENU GUILD${global.gris}
╭──❍
├ ${prefix}joinrpg
├ ${prefix}exitrpg
├ ${prefix}myguild
├ ${prefix}createguild
├ ${prefix}listguild
├ ${prefix}delguild
├ ${prefix}joinguild
├ ${prefix}guildinfo
╰─────❍`}

global.kudet = (prefix, hituet) => {
return`${global.gris}KUDET PANEL${global.gris}
╭──❍
├ ${prefix}kudetapanel
├ ${prefix}kudetpanel
├ ${prefix}btlkdtpanel
├ ${prefix}hbpanel
╰─────❍`}

global.rpgmenu = (prefix, hituet) => {
return`${global.gris}RPG MENU (PLUGINS)${global.gris}
╭─❍
├ *${prefix}kerja*
├ *${prefix}fightnaga*
├ *${prefix}fightkucing*
├ *${prefix}fightphonix*
├ *${prefix}fightgriffin*
├ *${prefix}fightkyubi*
├ *${prefix}fightcentaur*
├ *${prefix}nabung*
├ *${prefix}mining*
├ *${prefix}bankcek*
├ *${prefix}maling*
├ *${prefix}banknabung*
├ *${prefix}banktarik*
├ *${prefix}berkebon*
├ *${prefix}crafting*
├ *${prefix}bet*
├ *${prefix}bonus*
├ *${prefix}buah*
├ *${prefix}nebang*
├ *${prefix}bekerja*
├ *${prefix}bansos*
├ *${prefix}taxy*
├ *${prefix}mulung*
├ *${prefix}berburu*
├ *${prefix}polisi*
├ *${prefix}berdagang*
├ *${prefix}rampok*
├ *${prefix}bunuh*
├ *${prefix}collect*
├ *${prefix}mancing*
├ *${prefix}repair*
├ *${prefix}feed*
├ *${prefix}fight*
├ *${prefix}gajian*
├ *${prefix}upgrade*
├ *${prefix}transfer*
├ *${prefix}shop*
├ *${prefix}selectskill*
├ *${prefix}sampah*
├ *${prefix}roket*
├ *${prefix}ojek*
├ *${prefix}nguli*
├ *${prefix}pasar*
├ *${prefix}rob*
├ *${prefix}referal*
├ *${prefix}petshop*
├ *${prefix}kolam*
├ *${prefix}koboy*
├ *${prefix}leaderboard*
├ *${prefix}casino*
╰─────❍`}

global.gamemenu = (prefix, hituet) => {
return`${global.gris}MENU GAME${global.gris}
╭─❍
│${prefix} ${prefix}tictactoe
│${prefix} ${prefix}suit
│${prefix} ${prefix}slot
│${prefix} ${prefix}math (level)
│${prefix} ${prefix}rampok (@tag)
│${prefix} ${prefix}tekateki
│${prefix} ${prefix}tebaklirik
│${prefix} ${prefix}tebakkata
│${prefix} ${prefix}tebakbom
│${prefix} ${prefix}susunkata
│${prefix} ${prefix}tebakkimia
│${prefix} ${prefix}caklontong
│${prefix} ${prefix}tebaknegara
│${prefix} ${prefix}tebakgambar
│${prefix} ${prefix}tebakbendera
├ *${prefix}werewolf*
├ *${prefix}clan create
├ *${prefix}clan join
├ *${prefix}clan approve
├ *${prefix}clan war
├ *${prefix}clan list
├ *${prefix}clan leave
├ *${prefix}clan delete
├ *${prefix}clan member
├ *${prefix}clan missions
├ *${prefix}clan task
├ *${prefix}clan upgrade
├ *${prefix}clan tournament
├ *${prefix}werewolf*
├ *${prefix}clan create
├ *${prefix}clan join
├ *${prefix}clan approve
├ *${prefix}clan war
├ *${prefix}clan list
├ *${prefix}clan leave
├ *${prefix}clan delete
├ *${prefix}clan member
├ *${prefix}clan missions
├ *${prefix}clan task
├ *${prefix}clan upgrade
├ *${prefix}clan tournament
╰─────❍`}

global.downloadmenu = (prefix) => { 
return`${global.gris}DOWNLOAD MENU${global.gris}
╭──❍
├ ${prefix}ytsearch
├ ${prefix}ttsearch
├ ${prefix}brainly
├ ${prefix}teraboxdl
├ ${prefix}capcutdl
├ ${prefix}facebook
├ ${prefix}fbdown
├ ${prefix}capcut
├ ${prefix}mediafire2
├ ${prefix}ttslide
├ ${prefix}play
├ ${prefix}tiktok
├ ${prefix}tt
├ ${prefix}instagram
├ ${prefix}ig
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}google
├ ${prefix}weather
├ ${prefix}wanumber
├ ${prefix}twittervid
├ ${prefix}telestick
├ ${prefix}spotify
├ ${prefix}gitclone
├ ${prefix}happymod
├ ${prefix}pinterest
├ ${prefix}pinterestvid
├ ${prefix}ringtone
╰─────❍`}

global.groupmenu = (prefix) => {
return`${global.gris}GROUP MENU${global.gris}
╭─❍
├ *${prefix}autoaigc*
├ *${prefix}warcall*
├ *${prefix}autosimi*
├ *${prefix}fernazerchat*
├ *${prefix}mute*
├ *${prefix}setwelcome*
├ *${prefix}setleft*
├ *${prefix}welcome on/off*
├ *${prefix}antilink*
├ *${prefix}antiwame*
├ *${prefix}linkgc*
├ *${prefix}invite*
├ *${prefix}ephemeral*
├ *${prefix}delete*
├ *${prefix}setppgroup*
├ *${prefix}delppgroup*
├ *${prefix}setname*
├ *${prefix}setdesc*
├ *${prefix}add*
├ *${prefix}kick*
├ *${prefix}promote*
├ *${prefix}demote*
├ *${prefix}hidetag*
├ *${prefix}totag*
├ *${prefix}tagall*
├ *${prefix}editinfo*
├ *${prefix}opentime*
├ *${prefix}closetime*
├ *${prefix}resetlink*
├ *${prefix}getbio*
├ *${prefix}vote*
├ *${prefix}upvote*
├ *${prefix}downvote*
├ *${prefix}checkvote*
├ *${prefix}delvote*
├ *${prefix}autostickergc*
├ *${prefix}antilinkgc*
├ *${prefix}antiwame*
├ *${prefix}antilinkall*
├ *${prefix}antilinktiktok*
├ *${prefix}antilinkfb*
├ *${prefix}antilinktwitter*
├ *${prefix}antilinkig*
├ *${prefix}antilinktg*
├ *${prefix}antilinkytvid*
├ *${prefix}antilinkytch*
├ *${prefix}antivirus*
├ *${prefix}antitoxic*
├ *${prefix}nsfw*
├ *${prefix}react*
├ *${prefix}cekmati*
├ *${prefix}wanumber*
├ *${prefix}guess*
├ *${prefix}coin*
╰─────❍`}

global.funmenu = (prefix) => {
return`${global.gris}FUN MENU${global.gris}
╭─❍
├ *${prefix}smeme*
├ *${prefix}ppcouple*
├ *${prefix}define*
├ *${prefix}qc*
├ *${prefix}lyrics2*
├ *${prefix}lyrics*
├ *${prefix}suit*
├ *${prefix}math*
├ *${prefix}malesin*
├ *${prefix}tictactoe*
├ *${prefix}fact*
├ *${prefix}truth*
├ *${prefix}dare*
├ *${prefix}couple*
├ *${prefix}soulmate*
├ *${prefix}stupidcheck*
├ *${prefix}handsomecheck*
├ *${prefix}uncleancheck*
├ *${prefix}hotcheck*
├ *${prefix}smartcheck*
├ *${prefix}greatcheck*
├ *${prefix}evilcheck*
├ *${prefix}dogcheck*
├ *${prefix}coolcheck*
├ *${prefix}waifucheck*
├ *${prefix}awesomecheck*
├ *${prefix}gaycheck*
├ *${prefix}cutecheck*
├ *${prefix}lesbiancheck*
├ *${prefix}hornycheck*
├ *${prefix}prettycheck*
├ *${prefix}lovelycheck*
├ *${prefix}uglycheck*
├ *${prefix}pick*
├ *${prefix}quotes*
├ *${prefix}can*
├ *${prefix}is*
├ *${prefix}when*
├ *${prefix}where*
├ *${prefix}what*
├ *${prefix}how*
├ *${prefix}rate*
├ *${prefix}cry*
├ *${prefix}kill*
├ *${prefix}hug*
├ *${prefix}pat*
├ *${prefix}lick*
├ *${prefix}kiss*
├ *${prefix}bite*
├ *${prefix}yeet*
├ *${prefix}bully*
├ *${prefix}bonk*
├ *${prefix}wink*
├ *${prefix}poke*
├ *${prefix}nom*
├ *${prefix}slap*
├ *${prefix}smile*
├ *${prefix}wave*
├ *${prefix}awoo*
├ *${prefix}blush*
├ *${prefix}smug*
├ *${prefix}glomp*
├ *${prefix}happy*
├ *${prefix}dance*
├ *${prefix}cringe*
├ *${prefix}cuddle*
├ *${prefix}highfive*
├ *${prefix}shinobu*
├ *${prefix}handhold*
├ *${prefix}spank*
├ *${prefix}tickle*
├ *${prefix}avatar*
├ *${prefix}feed*
├ *${prefix}foxgirl*
├ *${prefix}gecg*
├ *${prefix}checkme*
╰─────❍`}

global.lagu = (prefix) => {
return `${global.gris}LAGU PENDEK${global.gris}
╭─❍
├ *${prefix}sound1 - sound161*
├ *${prefix}mengkane1 - mengkane161*
├ *${prefix}sad1 - sad35*
├ *${prefix}galauan 1 - galauan 55*
╰─────❍`}

global.stalkermenu = (prefix) => {
  return `${global.gris}STALKER${global.gris}
╭─❍
├ *${prefix}ffstalk* FF Stalker
├ *${prefix}mlstalk* ML Stalker
├ *${prefix}npmstalk* NPM Stalker
├ *${prefix}ghstalk* GH Stalker
├ ${prefix}igstalk2
├ ${prefix}ttstalk
╰─────❍`}

global.stickermenu = (prefix) => {
return`${global.gris}STICKER${global.gris}
╭─❍
├ *${prefix}goose*
├ *${prefix}woof*
├ *${prefix}8ball*
├ *${prefix}lizard*
├ *${prefix}meow*
├ *${prefix}gura*
├ *${prefix}doge*
├ *${prefix}patrick*
├ *${prefix}lovestick*
╰─────❍`}

global.databasemenu = (prefix) => {
return`${global.gris}DATABASE${global.gris}
╭─❍
├ *${prefix}setcmd*
├ *${prefix}delcmd*
├ *${prefix}listcmd*
├ *${prefix}lockcmd*
├ *${prefix}addmsg*
├ *${prefix}delmsg*
├ *${prefix}getmsg*
├ *${prefix}listmsg*
╰─────❍`}

global.aimenu = (prefix) => {
return`${global.gris}OPEN AI${global.gris}
╭─❍
├ *${prefix}hdvid*
├ *${prefix}remini*
├ *${prefix}hd*
├ *${prefix}hdr*
├ *${prefix}prodia*
├ *${prefix}gpt4*
├ *${prefix}txt2img*
├ *${prefix}tomoe*
├ *${prefix}songai*
├ *${prefix}kurumi-chat*
├ *${prefix}kurumi-wa*
├ *${prefix}autoai*
├ *${prefix}pixiv
├ *${prefix}morphic*
├ *${prefix}ebay*
╰─────❍
${global.gris}WITH APIKEY${global.gris}
╭─❍
├ *${prefix}jadianime
├ *${prefix}jadigta*
├ *${prefix}jadizombie*
╰─────❍`}

global.quotesmenu = (prefix) => {
return`${global.gris}QUOTE MENU${global.gris}
╭─❍
├ *${prefix}quotesanime*
├ *${prefix}quotesbacot*
├ *${prefix}quotesbucin*
├ *${prefix}quotesmotivasi*
├ *${prefix}quotesgalau*
├ *${prefix}quotesgombal*
├ *${prefix}quoteshacker*
├ *${prefix}quotesbijak*
╰─────❍`}
 
global.storemenu = (prefix) => {
return`${global.gris}STORE MENU${global.gris}
╭─❍
├ *${prefix}list*
├ *${prefix}addlist*
├ *${prefix}dellist*
├ *${prefix}update*
├ *${prefix}jeda*
├ *${prefix}tambah*
├ *${prefix}kurang*
├ *${prefix}kali*
├ *${prefix}bagi*
├ *${prefix}delsetdone*
├ *${prefix}changedone*
├ *${prefix}setdone*
├ *${prefix}delproses*
├ *${prefix}changeproses*
├ *${prefix}setproses*
├ *${prefix}proses <reply chat>*
├ *${prefix}done <reply chat>*
╰─────❍`}

global.anonymousmenu = (prefix) => {
return`${global.gris}ASING MENU${global.gris}
╭─❍
├ *${prefix}anonymouschat*
├ *${prefix}start*
├ *${prefix}next*
├ *${prefix}stop*
├ *${prefix}sendprofile*
├ *${prefix}menfess*
├ *${prefix}confess*
├ *${prefix}balasmenfess*
├ *${prefix}tolakmenfess*
├ *${prefix}stopmenfess*
╰─────❍`}

global.pushmenu = (prefix) => {
return`${global.gris}JPM MENU${global.gris}
╭─❍
├ *${prefix}cekidgc*
├ *${prefix}pushkontak*
├ *${prefix}pushkontakv2*
├ *${prefix}pushkontakv3*
├ *${prefix}pushkontakv4*
├ *${prefix}savekontakv*
├ *${prefix}savekontakv2*
├ *${prefix}getkontak*
├ *${prefix}sendkontak*
├ *${prefix}jpm*
├ *${prefix}jpm2*
╰─────❍`}

global.cpanelmenu = (prefix) => {
return`${global.gris}CPANEL MENU${global.gris}
╭─❍
├ *${prefix}panel*
├ *${prefix}listusr*
├ *${prefix}delusr*
├ *${prefix}listsrv*
├ *${prefix}delsrv*
├ *${prefix}tutorial*
├ *${prefix}ramlist*
├ *${prefix}premlist*
├ *${prefix}addusr*
├ *${prefix}addsrv*
├ *${prefix}updatesrv*
├ *${prefix}suspend*
├ *${prefix}unsuspend*
├ *${prefix}createadmin*
├ *${prefix}listadmin*
${global.gris}ADD PANEL${global.gris}
.1gb
.2gb
.3gb
.4gb
.5gb
.6gb
.7gb
.8gb
.unli
.ram
.1gb RaffX,628xxxxx
╰─────❍`}

global.randomphotomenu = (prefix) => {
return`${global.gris}RANDOM FOTO${global.gris}
╭─❍
├ *${prefix}aesthetic*
├ *${prefix}coffee*
├ *${prefix}wikimedia*
├ *${prefix}wallpaper*
├ *${prefix}art*
├ *${prefix}bts*
├ *${prefix}dogwoof*
├ *${prefix}catmeow*
├ *${prefix}lizardpic*
├ *${prefix}goosebird*
├ *${prefix}8ballpool*
├ *${prefix}cosplay*
├ *${prefix}hacker*
├ *${prefix}cyber*
├ *${prefix}gamewallpaper*
├ *${prefix}islamic*
├ *${prefix}jennie*
├ *${prefix}jiso*
├ *${prefix}satanic*
├ *${prefix}justina*
├ *${prefix}cartoon*
├ *${prefix}pentol*
├ *${prefix}cat*
├ *${prefix}kpop*
├ *${prefix}exo*
├ *${prefix}lisa*
├ *${prefix}space*
├ *${prefix}car*
├ *${prefix}technology*
├ *${prefix}bike*
├ *${prefix}shortquote*
├ *${prefix}antiwork*
├ *${prefix}hacking*
├ *${prefix}boneka*
├ *${prefix}rose*
├ *${prefix}ryujin*
├ *${prefix}ulzzangboy*
├ *${prefix}ulzzanggirl*
├ *${prefix}wallml*
├ *${prefix}wallphone*
├ *${prefix}mountain*
├ *${prefix}goose*
├ *${prefix}profilepic*
├ *${prefix}couplepic*
├ *${prefix}programming*
├ *${prefix}pubg*
├ *${prefix}blackpink*
├ *${prefix}randomboy*
├ *${prefix}randomgirl*
├ *${prefix}hijab*
├ *${prefix}chinese*
├ *${prefix}indo*
├ *${prefix}japanese*
├ *${prefix}korean*
├ *${prefix}malay*
├ *${prefix}thai*
├ *${prefix}vietnamese*
╰─────❍`}

global.randomvideomenu = (prefix) => {
return`${global.gris}RANDOM TOBRUT${global.gris}
╭─❍
├ *${prefix}tiktokgirl*
├ *${prefix}tiktoknukthy*
├ *${prefix}tiktokkayes*
├ *${prefix}tiktokpanrika*
├ *${prefix}tiktoknotnot*
├ *${prefix}tiktokghea*
├ *${prefix}tiktoksantuy*
├ *${prefix}tiktokbocil*
╰─────❍`}

global.primbonmenu = (prefix) => {
  return `${global.gris}PRIMBON MENU${global.gris}
╭─❍
├ *${prefix}artimimpi*
├ *${prefix}artinama*
├ *${prefix}ramaljodoh*
├ *${prefix}ramaljodohbali*
├ *${prefix}suamiistri*
├ *${prefix}ramalcinta*
├ *${prefix}cocoknama*
├ *${prefix}pasangan*
├ *${prefix}jadiannikah*
├ *${prefix}sifatusaha*
├ *${prefix}rezeki*
├ *${prefix}pekerjaan*
├ *${prefix}nasib*
├ *${prefix}penyakit*
├ *${prefix}tarot*
├ *${prefix}fengshui*
├ *${prefix}haribaik*
├ *${prefix}harisangar*
├ *${prefix}harisial*
├ *${prefix}nagahari*
├ *${prefix}arahrezeki*
├ *${prefix}peruntungan*
├ *${prefix}weton*
├ *${prefix}karakter*
├ *${prefix}keberuntungan*
├ *${prefix}memancing*
├ *${prefix}masasubur*
├ *${prefix}zodiak*
├ *${prefix}shio*
╰─────❍`}

global.islamimenu= (prefix) => {
return`${global.gris}ISLAM MENU${global.gris}
╭─❍
├ *${prefix}kisahnabi*
├ *${prefix}asmaulhusna*
├ *${prefix}bacaansholat*
├ *${prefix}audiosurah*
├ *${prefix}ayatkursi*
├ *${prefix}doaharian*
├ *${prefix}niatsholat*
├ *${prefix}quotesislami*
├ *${prefix}doatahlil*
╰─────❍`}

global.textpromenu = (prefix) => {
return`${global.gris}EDITING MENU${global.gris}
╭─❍
├ *${prefix}sertifikattolol*
├ *${prefix}attp*
├ *${prefix}ttp*
├ *${prefix}ktpmaker*
├ *${prefix}carimusik*
├ *${prefix}candy*
├ *${prefix}christmas*
├ *${prefix}3dchristmas*
├ *${prefix}sparklechristmas*
├ *${prefix}deepsea*
├ *${prefix}scifi*
├ *${prefix}rainbow*
├ *${prefix}waterpipe*
├ *${prefix}spooky*
├ *${prefix}pencil*
├ *${prefix}circuit*
├ *${prefix}discovery*
├ *${prefix}metalic*
├ *${prefix}fiction*
├ *${prefix}demon*
├ *${prefix}transformer*
├ *${prefix}berry*
├ *${prefix}thunder*
├ *${prefix}magma*
├ *${prefix}3dstone*
├ *${prefix}neonlight*
├ *${prefix}glitch*
├ *${prefix}harrypotter*
├ *${prefix}brokenglass*
├ *${prefix}papercut*
├ *${prefix}watercolor*
├ *${prefix}multicolor*
├ *${prefix}neondevil*
├ *${prefix}underwater*
├ *${prefix}graffitibike*
├ *${prefix}snow*
├ *${prefix}cloud*
├ *${prefix}honey*
├ *${prefix}ice*
├ *${prefix}fruitjuice*
├ *${prefix}biscuit*
├ *${prefix}wood*
├ *${prefix}chocolate*
├ *${prefix}strawberry*
├ *${prefix}matrix*
├ *${prefix}blood*
├ *${prefix}dropwater*
├ *${prefix}toxic*
├ *${prefix}lava*
├ *${prefix}rock*
├ *${prefix}bloodglas*
├ *${prefix}hallowen*
├ *${prefix}darkgold*
├ *${prefix}joker*
├ *${prefix}wicker*
├ *${prefix}firework*
├ *${prefix}skeleton*
├ *${prefix}blackpink*
├ *${prefix}sand*
├ *${prefix}glue*
├ *${prefix}1917*
├ *${prefix}leaves*
├ *${prefix}retro*
├ *${prefix}pornhub*
├ *${prefix}8bit*
├ *${prefix}batman*
├ *${prefix}3dbox*
├ *${prefix}lion*
├ *${prefix}3davengers*
├ *${prefix}window*
├ *${prefix}3dspace*
├ *${prefix}bokeh*
├ *${prefix}holographic*
├ *${prefix}thewall*
├ *${prefix}carbon*
├ *${prefix}whitebear*
├ *${prefix}metallic*
├ *${prefix}steel*
├ *${prefix}fabric*
├ *${prefix}ancient*
├ *${prefix}marvel*
╰─────❍`}

global.photooxymenu = (prefix) => {
return`${global.gris}EDITING MENU 2${global.gris}
╭─❍
├ *${prefix}shadow*
├ *${prefix}write*
├ *${prefix}romantic*
├ *${prefix}burnpaper*
├ *${prefix}smoke*
├ *${prefix}narutobanner*
├ *${prefix}love*
├ *${prefix}undergrass*
├ *${prefix}doublelove*
├ *${prefix}coffecup*
├ *${prefix}underwaterocean*
├ *${prefix}smokyneon*
├ *${prefix}starstext*
├ *${prefix}rainboweffect*
├ *${prefix}balloontext*
├ *${prefix}metalliceffect*
├ *${prefix}embroiderytext*
├ *${prefix}flamingtext*
├ *${prefix}stonetext*
├ *${prefix}writeart*
├ *${prefix}summertext*
├ *${prefix}wolfmetaltext*
├ *${prefix}nature3dtext*
├ *${prefix}rosestext*
├ *${prefix}naturetypography*
├ *${prefix}quotesunder*
├ *${prefix}shinetext*
╰─────❍`}

global.ephoto360menu = (prefix) => {
return`${global.gris}EDITING MENU 3${global.gris}
╭─❍
├ *${prefix}glitchtext*
├ *${prefix}writetext*
├ *${prefix}advancedglow*
├ *${prefix}typographytext*
├ *${prefix}pixelglitch*
├ *${prefix}neonglitch*
├ *${prefix}flagtext*
├ *${prefix}flag3dtext*
├ *${prefix}deletingtext*
├ *${prefix}blackpinkstyle*
├ *${prefix}glowingtext*
├ *${prefix}underwatertext*
├ *${prefix}logomaker*
├ *${prefix}cartoonstyle*
├ *${prefix}papercutstyle*
├ *${prefix}watercolortext*
├ *${prefix}effectclouds*
├ *${prefix}blackpinklogo*
├ *${prefix}gradienttext*
├ *${prefix}summerbeach*
├ *${prefix}luxurygold*
├ *${prefix}multicoloredneon*
├ *${prefix}sandsummer*
├ *${prefix}galaxywallpaper*
├ *${prefix}1917style*
├ *${prefix}makingneon*
├ *${prefix}royaltext*
├ *${prefix}freecreate*
├ *${prefix}galaxystyle*
├ *${prefix}lighteffects*
╰─────❍`}

global.nsfwmenu = (prefix) => {
return`${global.gris}NSFW MENU${global.gris}
╭─❍
├ *${prefix}hentai*
├ *${prefix}gifhentai*
├ *${prefix}gifblowjob*
├ *${prefix}hentaivid*
├ *${prefix}hneko*
├ *${prefix}nwaifu*
├ *${prefix}animespank*
├ *${prefix}trap*
├ *${prefix}gasm*
├ *${prefix}ahegao*
├ *${prefix}ass*
├ *${prefix}bdsm*
├ *${prefix}blowjob*
├ *${prefix}cuckold*
├ *${prefix}cum*
├ *${prefix}milf*
├ *${prefix}eba*
├ *${prefix}ero*
├ *${prefix}femdom*
├ *${prefix}foot*
├ *${prefix}gangbang*
├ *${prefix}glasses*
├ *${prefix}jahy*
├ *${prefix}masturbation*
├ *${prefix}manga*
├ *${prefix}neko-hentai*
├ *${prefix}neko-hentai2*
├ *${prefix}nsfwloli*
├ *${prefix}orgy*
├ *${prefix}panties*
├ *${prefix}pussy*
├ *${prefix}tentacles*
├ *${prefix}thighs*
├ *${prefix}yuri*
├ *${prefix}zettai*
╰─────❍`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
