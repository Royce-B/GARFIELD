// π You Can change this your choice 
// π You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// π You Can change this your choice
global.emoji01 = ['πΌ'] // π Enter your Emoji 
global.emoji02 = ['ποΈ'] //π Enter your Emoji
global.notice = ` *Hi π₯° I m*
*ROYCE BOB*
*I am 22 years old developer...*
*From Nakuru Kenya*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/royceplusbob*`  // π Enter Your details and Social Media Links and Anything
global.owner =  ['+254718241545'] //π  Enter Your number
global.premium =  ['+254718241545'] //π  Enter Your number
global.ownernomer = '+254718241545' //π  Enter Your number
global.ownername = 'ROYCE' //π Enter Your name
global.botname = 'οΌ§οΌ‘οΌ²οΌ¦οΌ©οΌ₯οΌ¬οΌ€ V8' //π Enter Your Bot name
global.footer = 'Β© π―πππΎππΎπ½ π‘π Krakinzlab' //π Enter Your Name
global.ig = 'https://github.com/Royce-B/GARFIELD' // π You Can change this your choice
global.region = 'Kenya, East Africa, Nakuru' // π You Can change this your choice
global.sc = 'https://github.com/Royce-B/GARFIELD'
global.fbt = 'Follw Us ποΈ' // π Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/royceplusbob/'// π Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group π¦*' // π You Can change this your choice
global.bye = '*Bye bye Mother fucker ποΈ*' // π You Can change this your choice
global.packname = 'GARFIELD-v8'  // π You Can change this your choice 
global.author = 'ROYCE BOB' // π You Can change this your choice 
global.sessionName = 'session' // π You Can change this your choice
global.prefa = ['','!','.','π°οΈ','β','π'] // π You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Ph7Z6St/Pics-Art-22-06-03-01-01-46-876-1.jpg' 
global.spoty = 'https://i.postimg.cc/mrfdZDMx/Pics-Art-22-08-09-16-12-14-489-2.jpg'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = 'β­'
global.mess = {
    success: 'Done ποΈ', // π You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // π You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // π You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // π You Can change this your choice
    group: 'Feature Used Only For Groups!', // π You Can change this your choice
    private: 'Features Used Only For Private Chat!', // π You Can change this your choice
    bot: 'This Feature Is Only For Bot', // π You Can change this your choice
    wait: '```Please Wait...```', // π You Can change this your choice
    error: 'Error! Maybe Api Key Is Expiredπ€!', // π You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // π You Can change this your choice
/// Do Not Change π 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
