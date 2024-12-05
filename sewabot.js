




exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

╭────✎「 *SEWA BOT* 」
│*Harga!*
│• Pengguna baru Rp. 5.000/1group
│• Perpanjang Rp. 3.000
│• Masa aktif 7 hari
╰─────────❍

╭────✎「 *SEWA BOT* 」
│*Harga!*
│• Pengguna baru Rp. 10.000/1group
│• Masa aktif Permanent
╰─────────❍



╭────✎「 *PREMIUM* 」
│*Harga!*
│• Rp. 10.000/orang
│• Masa aktif 3 bulan
╰─────────❍

╭────✎「 *FITUR PREMIUM* 」
│*Listnya!*
│• Limit dan limit game tanpa batas
│• Claim lebih banyak EXP Harian
│• Ubah watermark sticker
│• dan masi banyak lagi
╰─────────❍



*PAYMENT*:
𖦹 Dana
𖦹 Gopay
𖦹 Qris All Payment
- 


_Silahkan ketik .owner untuk mengetahui pemilik bot ini_
`
}

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

    




















