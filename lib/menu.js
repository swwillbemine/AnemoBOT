const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/Urbaeexyz/wa-bot

Best regards, Thoriq Azzikra.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, rpls, jame, betime, blockNumber, prem, banned, cts, waver) => {
    return `
*┏━── AnemoBOT*
*┃➥ Owner : AzharAli*
*┃➥ Repo : https://github.com/AzzharAli/AnemoBOT
*┃➥ Owner Number : wa.me/6282232616678*
*┃➥ Date : ${betime}*
*┃➥ Time : ${jame}*
*┃➥ Premium : ${blockNumber.length} User*
*┃➥ Banned : ${banned.length} User*
*┃➥ Block  : ${prem.length} User* 
*┃➥ BOT Version  : 1.2* 
*┃*
*┗━──────────────*

*┏━──Road To Ramadhan :*
*┃	 ${rpls}*
*┗━──────────────*

*┏━──Donasi :*
*┃	 Donasi akan digunakan untuk biaya operasional BOT dan biaya sewa server*
*┃	 DANA : 085608689687*
*┃	 SHOPEE PAY : 085608689687*
*┗━──────────────*


*▌│█║▌│ █║▌│█│║▌*
  
*┏━───────────────╮*
*┃➥${prefix}sticker*
*┃➥${prefix}sfull*
*┃➥${prefix}attp*
*┃➥${prefix}ttp*
*┃➥${prefix}stickergif*
*┃➥${prefix}sgiffull*
*┃➥${prefix}stickergiphy*
*┃➥${prefix}stmg*
*┃➥${prefix}meme*
*┃➥${prefix}nulis*
*┃➥${prefix}quotemaker*
*┃➥${prefix}rate*
*┃➥${prefix}kapan*
*┃➥${prefix}apakah*
*┃➥${prefix}bisakah*
*┃➥${prefix}infosurah*
*┃➥${prefix}tafsir*
*┃➥${prefix}artinama*
*┃➥${prefix}cekjodoh*
*┃➥${prefix}zodiak*
*┃➥${prefix}motivasi*
*┃➥${prefix}urgay*
*┃➥${prefix}sreddit*
*┃➥${prefix}resep*
*┃➥${prefix}lirik*
*┃➥${prefix}whatanime*
*┃➥${prefix}aiquote*
*┃➥${prefix}anjing*
*┃➥${prefix}fakta*
*┃➥${prefix}fakboy*
*┃➥${prefix}katabijak*
*┃➥${prefix}quote*
*┃➥${prefix}cerpen*
*┃➥${prefix}anime*
*┃➥${prefix}kpop*
*┃➥${prefix}tts*
*┃➥${prefix}translate*
*┃➥${prefix}bapakfont*
*┃➥${prefix}linkgc*
*┃➥${prefix}adminList*
*┃➥${prefix}ownergc*
*┃➥${prefix}listban*
*┃➥${prefix}listblock*
*┃➥${prefix}dewabatch*
*┃➥${prefix}howmuch*
*┃➥${prefix}google*
*┃➥${prefix}read*
*┃➥${prefix}getpic @tagmember*
*┃➥${prefix}santet*
*┃➥${prefix}liststress*
*┃➥${prefix}addstress*
*┃➥${prefix}stress*
*┃➥${prefix}delstress*
*┃➥${prefix}jadian*
*┃➥${prefix}mystat*
*┃➥${prefix}infogempa*
*┃➥${prefix}tod*
*┃➥${prefix}logoph*
*┃➥${prefix}infobmkg*
*┃➥${prefix}tahta*
*┃➥${prefix}glitch*
*┃➥${prefix}tebakgambar*
*┃➥${prefix}kusonime*
*┃➥${prefix}detail*
*┃➥${prefix}imgtourl*
*┃➥${prefix}silverpb*
*┃➥${prefix}goldpb*
*┃➥${prefix}darkjokes*
*┃➥${prefix}trendingtwit*
*┃➥${prefix}fakta2*
*┃➥${prefix}memeindo*
*┃➥${prefix}kodenuklir*
*┃➥${prefix}covid19*
*┃➥${prefix}iplocation*
*┃➥${prefix}simi*
*┃➥${prefix}bot*
*┃➥${prefix}reverseword*
*┃➥${prefix}foliokiri*
*┃➥${prefix}foliokanan*
*┃➥${prefix}pinterest*
*┃➥${prefix}translate*
*┃➥${prefix}tr*
*┃➥${prefix}kisahnabi*
*┃➥${prefix}fiersa*
*┃➥${prefix}chika*
*┃➥${prefix}afk*
*┃➥${prefix}sgifwm*
*┃➥${prefix}shitposting*
*┃➥${prefix}ayatkursi*
*┃➥${prefix}quotesislam*
*┃➥${prefix}doaharian*
*┃➥${prefix}luassegitiga*
*┃➥${prefix}kelsegitiga*
*┃➥${prefix}luaspersegi*
*┃➥${prefix}kelpersegi*
*┃➥${prefix}kuadrat*
*┃➥${prefix}kubik*
*┃➥${prefix}perkalian*
*┃➥${prefix}arrowsigns*
*┃➥${prefix}rcitacita*
*┃➥${prefix}wanted*
*┃➥${prefix}triggered*
*┃➥${prefix}burn*
*┃➥${prefix}readmore*
*┃➥${prefix}pensil*
*┃➥${prefix}pensil2*
*┃➥${prefix}lolivid*
*┃➥${prefix}ppcp*
*┃➥${prefix}wikihow*
*┃➥${prefix}sfile*
*┃➥${prefix}tobecontinue*
*┃➥${prefix}raudio*
*┃➥${prefix}thuglife*
*┃➥${prefix}wangy*
*┗━───────────────╯*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜Movie & Streaming ⌟:

*┏━───────────────╮*
*┃➥${prefix}lk21*
*┃➥${prefix}lk21new*
*┃➥${prefix}lk21comingsoon*
*┃➥${prefix}lk21seriestv*
*┃➥${prefix}lk21genre*
*┃➥${prefix}lk21negara*
*┃➥${prefix}movie*
*┃➥${prefix}filmapik*
*┃➥${prefix}filmkat*
*┃➥${prefix}filmapiknew*
*┃➥${prefix}doramaindo*
*┃➥${prefix}drakor*
*┃➥${prefix}drakorupdate*
*┃➥${prefix}drakorapik*
*┃➥${prefix}drakorindo*
*┃➥${prefix}youwatch*
*┃➥${prefix}playapik*
*┃➥${prefix}film*
*┗━───────────────╯*


*▌│█║▌│ █║▌│█│║▌*

⌜ YouTube Audio / Video ⌟:

*┏━───────────────╮*
*┃➥${prefix}play*
*┃➥${prefix}play2*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜A̶n̶i̶m̶e̶ ⌟ツ:

*┏━───────────────╮*
*┃➥${prefix}rvidanime*
*┃➥${prefix}randomanime*
*┃➥${prefix}nhpdf [kodenuklir]*
*┃➥${prefix}rhug*
*┃➥${prefix}slap*
*┃➥${prefix}waifu*
*┃➥${prefix}nsfwgif*
*┃➥${prefix}bjgif*
*┃➥${prefix}cumgif*
*┃➥${prefix}kissgif*
*┃➥${prefix}rhentai*
*┃➥${prefix}rhentai2*
*┃➥${prefix}ryuri*
*┃➥${prefix}pussy*
*┃➥${prefix}gifhentai*
*┃➥${prefix}boobs*
*┃➥${prefix}baka*
*┃➥${prefix}animeavatar*
*┃➥${prefix}neko*
*┃➥${prefix}neko2*
*┃➥${prefix}neko3*
*┃➥${prefix}randompat*
*┃➥${prefix}loli ツ*
*┃➥${prefix}wallpaper*
*┃➥${prefix}wallpaper2*
*┃➥${prefix}nekonsfw*
*┃➥${prefix}spank*
*┃➥${prefix}classic*
*┃➥${prefix}kuni*
*┃➥${prefix}trapnime*
*┃➥${prefix}trapnime2*
*┃➥${prefix}cuddle*
*┃➥${prefix}tickle*
*┃➥${prefix}feetgif*
*┃➥${prefix}anal*
*┃➥${prefix}sologif*
*┃➥${prefix}ttgif*
*┃➥${prefix}lesbian*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜I̶m̶a̶g̶e̶s̶ ⌟:

*┏━───────────────╮*
*┃➥${prefix}venti*
*┃➥${prefix}randomgi*
*┃➥${prefix}aesthetic*
*┃➥${prefix}images*
*┃➥${prefix}pinimg*
*┃➥${prefix}rbts*
*┃➥${prefix}rexo*
*┃➥${prefix}rblackpink*
*┃➥${prefix}wallprogramming*
*┗━───────────────╯*
_-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜t̶e̶n̶t̶a̶n̶g  ̶b̶o̶t̶ ⌟:


*┏━───────────────╮*
*┃➥${prefix}donasi*
*┃➥${prefix}botstat*
*┃➥${prefix}ownerbot*
*┃➥${prefix}join*
*┃➥${prefix}runtime*
*┗━───────────────╯*
 _-_-_-_-_-_-_-_-_-_-_-_-_-_

⌜Owner Bot⌟:

*┏━───────────────╮*
*┃➥${prefix}mute*
*┃➥${prefix}unmute*
*┃➥${prefix}ban* <reply msg member>
*┃➥${prefix}pban* <nomor>
*┃➥${prefix}punban* <nomor>
*┃➥${prefix}unban* <reply msg member>
*┃➥${prefix}deleteban*
*┃➥${prefix}oaddprem*
*┃➥${prefix}odelprem*
*┃➥${prefix}bc* 
*┃➥${prefix}leaveall*
*┃➥${prefix}clearall* 
*┃➥${prefix}setstatus*
*┃➥${prefix}setpic*
*┃➥${prefix}screen*
*┃➥${prefix}delallstik*
*┃➥${prefix}delallimg*
*┃➥${prefix}oblock* <reply pesan member>
*┃➥${prefix}block*  <nomor>
*┃➥${prefix}unblock* <reply pesan member>
*┃➥${prefix}unblocked* <nomor>
*┃➥${prefix}deleteleft*
*┃➥${prefix}deletewelcome*
*┃➥${prefix}listleft*
*┗━───────────────╯*


*┏━━━━━━━━━━━━━━━━━┓*
*┃➥Runtime: ${cts}*
*┃➥WA Version: ${waver}*
*┗━━━━━━━━━━━━━━━━━┛*

Terima kasih telah menggunakan BOT kami
`
}
exports.help = help
    
    /*
    Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.
    */
    
const admin = (prefix) => {
    return `
⚠ [ *Admin Group Only* ] ⚠
*${prefix}welcome*
*${prefix}left*
*${prefix}add*
*${prefix}kick* <reply pesan orang yang ingin dikick>
*${prefix}pkick* <tag member yang ingin dikick>
*${prefix}promote* @tag
*${prefix}opromote* <reply pesan yang ingin dipromote>
*${prefix}odemote* <reply pesan yang ingin didemote>
*${prefix}demote* @tag
*${prefix}infoall*
*${prefix}del*
*${prefix}mutegrup on/off*
*${prefix}seticon*
*${prefix}revoke link gc*
*${prefix}setgroupname*
*${prefix}resend*
*${prefix}antilink on/off*
*${prefix}edotensei*
*${prefix}oedotensei* <reply pesan member>
*${prefix}inv* <reply pesan member>
    
_-_-_-_-_-_-_-_-_-_-_-_-_-_
⚠ [ *Owner Group Only* ] ⚠
*${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}
exports.admin = admin

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:
Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

DANA : 085608689687
SHOPEE PAY : 085608689687

Terimakasih. -Azhar Ali`
}

exports.kodebahasa = () => {
	return `
Kode Bahasa : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}