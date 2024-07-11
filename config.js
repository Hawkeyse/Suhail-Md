const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Ghana,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Ghana/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/BHf6FUVjt8N0R8IteGMc5T";
global.website=process.env.GURL || "https://chat.whatsapp.com/BHf6FUVjt8N0R8IteGMc5T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://media.discordapp.net/attachments/1046052469815382060/1261047315540480081/t-95.png?ex=66918955&is=669037d5&hm=6759eb1f6c636c48331335b81ca03dd729ed0db407466f0cb54cc0926f65c11c&=&format=webp&quality=lossless&width=508&height=677" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Timtech-ᴍᴅ" 


global.devs = "233595885532" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233595885532";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_48_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImVXckpQN1hQYkRqa245NEpkeUE4VmpqMkIwVzVDTkQwYkVmUVh5TytsVWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTkyMTczNDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTkzOTU2M0FDMzRGQkVCNjVGMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MzQ1MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1OTIxNzM0ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTQxMTgyNzEzODNCNTNGQjg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDczNDUyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzU5MjE3MzQ4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwNzk4RjU2MUVFQTc3NTI0MENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzM0NTI0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhWZERDYWxXUkFpZlBUZ0Jkd1RmZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGUzMmY4MGEtNmIzMi00MGNmLTlmZTctYTVkNDRlODkxNzZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNCxcbiAgICAgIDkxLFxuICAgICAgMjU1LFxuICAgICAgNTAsXG4gICAgICA3MixcbiAgICAgIDIzOSxcbiAgICAgIDk4LFxuICAgICAgMTg3LFxuICAgICAgNzQsXG4gICAgICA4NixcbiAgICAgIDE4MSxcbiAgICAgIDE1LFxuICAgICAgMTA2LFxuICAgICAgMTI1LFxuICAgICAgNzAsXG4gICAgICAxNDMsXG4gICAgICAxMzAsXG4gICAgICAyMzUsXG4gICAgICAxNTEsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDIxMixcbiAgICAgIDIyNixcbiAgICAgIDEzOSxcbiAgICAgIDEwOSxcbiAgICAgIDE3MyxcbiAgICAgIDI0LFxuICAgICAgMjU1LFxuICAgICAgMjI0LFxuICAgICAgMTg1LFxuICAgICAgMjMyLFxuICAgICAgMzUsXG4gICAgICA4NyxcbiAgICAgIDI1NSxcbiAgICAgIDI0NixcbiAgICAgIDEzNyxcbiAgICAgIDEwNCxcbiAgICAgIDYwLFxuICAgICAgNjYsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTG1sdTRKRUxHbXdiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhEN1JIbmhIcnRrYTRzeHNoOGNpMkR5cTRXeC9QRVI1SncrQUVmaTdoVEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmdKRnBvQjc2Mmk0c2JMcXArQjIyWTJpZU53ZS93NHpBaFB4ZXhUVnVUWVpmMmN1V2FkQmx6L1ZNYW0rNDE0TnBqcDJ4ZHBwTEdEeXhTaS9WcDZHZ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1NPQmlQM0cwTTROMDF0blBpSlEyTHpvY3dqQUZBYjBYTU9OQVNLUFphYmRhZ3drc2VvMFVmYzVzRTZ1cnZoQjZlNTIrWG9PSDZQNG5QS09wYVBRQVE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1OTIxNzM0ODg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRSSUJBTEdBTUVSTkVUV09SS1wiLFxuICAgIFwibGlkXCI6IFwiMjQyNDM4NTA1NTIxMzQ3OjhAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1OTIxNzM0ODg6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzM0NTE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkxmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlbGRoYk1haVJXVnVUazZHZUZ0UVhCVTBJczdPSDlJSnZIZXgvTG4xUG5zPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NDY5NzkzNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDczNDUxODU5N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Timtech ᴍᴅ 』),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "TribalGamerNetwork-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Timtech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Timtech"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
