//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "darkkingd172@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vayr4GFGzzKVPK5YtL3W";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vayr4GFGzzKVPK5YtL3W";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/Q6eIeGl.jpg";
global.devs = "https://t.me/";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "919846661032";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/Q6eIeGl.jpeg,https://i.imgur.com/zaulEiH.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0c1TW9va2ZwdXYxSTZEcFVtMVpFTldFMHpqcW9DV2tCSkpvZGhFNnFGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnY5NXBJWjltZmJ4NlYyc2JxV2tNRDZKZysrMjlyMTNZeHBVSVF2d2lqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TmZzcmlqdFNwYVpmQVBDMVBwQThFa29pSTdxZzVoUEdkc1QzaUNXcEU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZ2RLc2w5ZURDY2NFdGplUFJlN2MxYUF1SERGbXZ0dXR2Sytpa1IwR25zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPek5WSEM4dnc1c1h4NWFJNGdaMWhaV3QvcGw2OXdEMnF3TFMxOHhJM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV0ZWE0dkxXZmxCdDhoc2dVd2ZncXkvVDdNM0poVjQybEJ0b21rR2pqRGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JSclJHMDd4aEluajBHbHg4SXVGRitxNTJLcXlWU3RmcDBRSnZjSXRGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2YzYTV2OGJWQjNPM1FUdUtWQlU4ckR1S0RSTjl0c2pQbmh1TDcrZ20wYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5XZUNYQndZa3FiSUdWWDFyUnF1NjB3YytlM1YxRHFRWWlMQ1lBd1Q0WFVRQkdDSVp1RnlhWE5sb3JSaFR3WUJDYkJrbVMwL2RIVG5IWTR6MDcxaGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJlRFdRODNVTEFVaFIvSytQVmhLOVBiL1grUFFIWFhoRFdLWnlBSE5RcmRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2TVFXbW9lLVNfR3ZBTHNtTDlrVWR3IiwicGhvbmVJZCI6IjJhNTY5ZmU4LTk0YjUtNDU0My05MTFlLTE0NmYyZTgyYTRjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJZlJ4WjVGdVZwT3hBdllvejBneFNDREpZdnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGtSRTM0Z0ZDRm9ZZ3JjR1VuTXNKMFE3VU1zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRIMTdZUllUIiwibWUiOnsiaWQiOiI5MTk4NDY2NjEwMzI6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUExrMFc0UTg5bUR1d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkRaaTNXVytuNHlacHJ6cnAvcTE2cGNSSHh1Vk43VXV2YWlKVi90aHVHST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYllLc1ZSQVFtd2JhQ3Bkb3dqbFRrS3ZYMlZiNS9MMi9oRVlPZEp4cUJGVFp2SERnaGdWb0g3NHZ3TFk0bmZWTUxmZVZ5Y3VCOC9SQ2hyTUxraWZSQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImljL1cvQ2hUeHF4ZnBJVmowUVhIRlhkeHdiZ3I4TUFNei9ZdDFBcXp6WWk3RDRHS1AvVncrdDU5OS9iMmVZbU9oTHc4UDJMeWhWYnBzMzlHOUh2bWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5ODQ2NjYxMDMyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp3Mll0MWx2cCtNbWFhODY2ZjZ0ZXFYRVI4YmxUZTFMcjJvaVZmN1liaGkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ0MDUzNzZ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DARK_KING-V2™`",
  author: process.env.PACK_AUTHER || "DARK_KING-V2",
  packname: process.env.PACK_NAME || "D A R K K I N G",
  botname: process.env.BOT_NAME || "DARK_KING-V2",
  ownername: process.env.OWNER_NAME || "dhani",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
