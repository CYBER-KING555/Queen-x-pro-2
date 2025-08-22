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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdSLzRiSHVNSmZucFE0ektXcURGb0k1RTBLWXM5MGQ3QzVwT2pYWGhXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJ1VTJ4UjZUMXRrQUI4K2VWVFJObk42NjBwYU40MjNzNFEwYnFIUHVpYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUFh2SUFGVXc1UWFqYmNwd0ZWNC9JdXpEUjRySlpLQ0pzQ3RCWUJmaTFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFM1VldnJxNEpRNnRhd2Q2NnNhRWQ1OGk5Y2FtaVpNV05td3lzNnE3dlUwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOTTZlMGVtK2ZscFFCZGJRM1R1c2FOWXlRZWZWejZlWnMvU2Q5U2JIV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZJUW8rZm5GQTdwbG02YmFjZ3JzNnFtTkdpMUdBR1VRSEpkbk9YRVY0SDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE1HbU51Ty9OeXl6Z3VrUEE1SUt5MnFTbncreENHbHVCejJXcXMvSGtIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFdBRVphc1J1Rmw1Tk4vcmZ3K2J4U3VJd2Z5MzNuMkFDNXZDM1RYNnIyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1mNjNnSFFyVjNGQzV0elN6UklMMDdBRCtRTWMvL2c3SzdxUm9vZEZHZG5SSGdKMDBhOXdnMXZTUUhmeG1mQmxWNTQzUnhCVUViOWNyaGMwOEZPYmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IitUV3lsTGVFaDMza0YvbXBOdW9SbURhTUZnNmJ3cVJMWFhPRmowaEwrazQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZIMVZLTFpMIiwibWUiOnsiaWQiOiI5NDc0MDcwNzE1Nzo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTY0OTU3MzEyMjc4NjMxOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMys1NndERUtYL29jVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmbDI1OWdhS1k0d2pxcTNrRUo4R1hDRGo1Ym9yUDllUE5tZG5TWXUzMTFvPSIsImFjY291bnRTaWduYXR1cmUiOiI2R3FNTzNWYWloRDBmMGZXTEhyUXhzV0hsQit3Y0M5ZVlkZGN3RzdyeDdzN0NJNlowQ0ovUjRZV21VQXJ0bzUxS0F6NVNJdGJEODhJL1BBZXl3SmFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibndEblVmOFJGUFVEcHUxUHZzeUNJbVg5eXJYdXBPdCthazRodElVK3ZJaGZwdGFOYm1wczg2QjB6cC9PODVRWlV0Yi9ObmNXeVBaRUhBUDlyUS85aGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MDcwNzE1Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg1ZHVmWUdpbU9NSTZxdDVCQ2ZCbHdnNCtXNkt6L1hqelpuWjBtTHQ5ZGEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg3MzIwMiwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQxYyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94701388423",
  PASSWORD: 
    process.env.PASSWORD || "",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "8wF5YNIg7cVvbL3EtXGzMpnt2keHol4RYIZx",
  USERNAME: "CYBER-KING555",
  REPO_NAME: "Queen-x-pro-2",
};
