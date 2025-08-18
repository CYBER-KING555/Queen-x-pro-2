//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0FXczN4NmlsYjJZV2RHTWtEY1JCcEdxbkxkWEFjSWJnSFlOTGZYN04yZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZyNFV5M2hjMFJLUy96K3JKVUZPTnBjWWNMOU0wa0Z2b1Q3cm5FdHdGND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q0JEMk15UDJDUzZhemljdVVkRWgwMHpLNFVVL1pPbTVGRmFkYzk5TEVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJndFAwOHJjenl6ZE1Sc2NobkNXbUkxTS9pak1Kem1JV241dTdoWTBRRTJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBKTXZHMVcyUEFvSlFFWFBISXliaW1pTjVQMGV5SlRHb1psV1BQRGJiMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd1dUJsMWNNOVlGSlY1TDZVd0JHTCtTTzYyejVCNHZmSEloR2VYVkRNQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU44Y0ZrclJEaXRiRGtNK1o2UFhYV0xMUVZZamFQWnZKZGNBQkNrRjFYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTB2RW14YkFxekRUWVRHTUhLZmlERWphaERHN0IwME9vRmZ1NUtSNFRraz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1pVlVKWDkxaTN5SzZhQ3J0ZlFaQlVvYnNqU3RYUkFIQXVmNk1DcGJxYnNwd2RPM3RoM0o3bGxKaUVNQnIzQm9jUUFnMlExcWx5YjZGTTdIWjltNEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IkZLTGJHNWxPeitKajFxSFpaUnRzK1R3Q25NZU5GQmpGTFNtZDRYNC9uOXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEzODg0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTBGNzNCQjQwRjQ3REI0QzE1OTA0REVCODEwMUM0NDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTQ5NTIyNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDEzODg0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOThBMDRDQ0IyOUVFRkVCNjBBQzcyQjMwQ0VFMjM5MkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTQ5NTIyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicXZLMmdRWWxRMmV6dHBmOTJEaks4dyIsInBob25lSWQiOiIwZDE4ZDk4Mi02YWM1LTRjMGMtYjJmZi01NjY0M2ExMzEyMDciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblRMSmRPWFpqMWxQWmpDMUFyQVo4dXVCVFFjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InF2NWdUc1FCcHk2Vlo2UGkzdUhiSXNMK0lqWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUWU5ZRlhZViIsIm1lIjp7ImlkIjoiOTQ3MDEzODg0MjM6NzVAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5MDYxMTI2MDYyNTA4OTo3NUBsaWQiLCJuYW1lIjoi8J2RufCdkpDwnZKE8J2SjPCdkpog8J2RsPCdkbAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wya3VvQUdFS24yaXNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5sYVA4T2lvVytTNG44TVZxQTdxdnp3cUxhSDdkN3RFU3E0ZENEdERlUXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklwcWQ1SFRWcDlSV2tNTUgrV1hLUzFFeG8vZmlJR0I5MENiUVRRaGc2RmU2d2VqM0J1VG1BYUtta1VURTY4RXl4OHdPQVdoa1JtMUdyUnljZmZyeENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGUjhTbHJGWmNNbnRBMnVoVWpic1FjQkpFVUlEMWVRdUx0aUZMSlNwalQwYitFbGhlMERZVm9HMTFLRGYxemk0YWE3cVJldWtRZm5TbTNzUEsrMjhCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzg4NDIzOjc1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRaV2ovRG9xRnZrdUovREZhZ082cjg4S2kyaCszZTdSRXF1SFFnN1Eza00ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTQ5NTIyMywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpOUSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94701388423",
  PASSWORD: 
    process.env.PASSWORD || "",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "github auth token",
  USERNAME: "CYBER-KING555",
  REPO_NAME: "queen-x-pro-2",
};
