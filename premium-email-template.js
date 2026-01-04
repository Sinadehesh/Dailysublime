// n8n Code node - SEVEN PREMIUM DAY TEMPLATES
// ═══════════════════════════════════════════════════════════════════════════════
// One template per day of week with researched color palettes
// Features: Rich gradients, ornate double frames, gold used purposefully
// ═══════════════════════════════════════════════════════════════════════════════

var data = $json;

// HELPERS
function safe(v) { return (v === undefined || v === null) ? "" : v; }
function formatText(str) { return safe(str).toString().replace(/\n/g, "<br>"); }
function safeLink(url) {
  var u = safe(url).toString().trim();
  if (!u) return "";
  if (u.charAt(0) === "[") u = u.slice(1);
  if (u.charAt(u.length - 1) === "]") u = u.slice(0, -1);
  return u.trim();
}
function cleanUrl(url) {
  var raw = safeLink(url);
  if (!raw) return "https://dummyimage.com/1200x800/1a1a1a/d4af37.png&text=✦";
  if (raw.indexOf("images.weserv.nl") !== -1 || raw.indexOf("wsrv.nl") !== -1) return raw;
  if (raw.indexOf("dummyimage.com") !== -1) return raw;
  if (raw.indexOf("placehold.co") !== -1) return raw;
  var noProto = raw.replace(/^https?:\/\//i, "");
  return "https://images.weserv.nl/?url=" + encodeURIComponent(noProto);
}

// NORMALIZE FIELDS
var emailValue = safe(data.email) || safe(data.subscriber_email) || safe(data.recipient_email) || safe(data.to_email) || "";
var dayIndex = safe(data.day_index) || safe(data.dayIndex) || safe(data.index) || safe(data.day) || "";
var galleryTotal = safe(data.gallery_total) || safe(data.galleryTotal) || safe(data.total) || "";
var exhibitionTitle = safe(data.exhibition_title) || safe(data.exhibitionTitle) || safe(data["title other"]) || safe(data.title) || safe(data.subject_title) || safe(data.subject) || "";
var artistName = safe(data.artist_name) || safe(data.artist) || safe(data.painter_name) || "";
var brandName = safe(data.brand_name) || safe(data.brand) || "Daily Sublime";
var artistPortraitUrl = safe(data.artist_portrait_url) || safe(data.artistPortraitUrl) || safe(data.portrait_url) || "";
var heroUrl = safe(data.hero_url) || safe(data.hero) || safe(data.main_image_url) || "";
var heroTitle = safe(data.hero_title) || safe(data.hero_work_title) || safe(data.main_title) || safe(data.title_1) || "";
var heroYear = safe(data.hero_year) || safe(data.hero_date) || safe(data.year_1) || "";
var heroAlt = safe(data.hero_alt) || safe(data.hero_description) || safe(data.alt_1) || "";
var hookText = safe(data.hook_text) || safe(data.hook) || safe(data.intro) || "";
var art2Url = safe(data.art2_url) || safe(data.work2_url) || safe(data.secondary_image_url) || "";
var art2Title = safe(data.art2_title) || safe(data.work2_title) || safe(data.title_2) || "";
var art2Year = safe(data.art2_year) || safe(data.work2_year) || safe(data.year_2) || "";
var art2Alt = safe(data.art2_alt) || safe(data.work2_alt) || safe(data.alt_2) || "";
var whyItMatters = safe(data.why_it_matters) || safe(data.why) || safe(data.why_text) || "";
var practice = safe(data.practice) || safe(data.exercise) || "";
var stickyStory = safe(data.sticky_story) || safe(data.story) || "";
var culturalMusic = safe(data.cultural_music) || safe(data.music) || "";
var culturalLit = safe(data.cultural_lit) || safe(data.cultural_literature) || safe(data.cultural_reading) || "";
var philosophy = safe(data.philosophy) || safe(data.thought) || "";
var styleArtUrl = safe(data.style_art_url) || safe(data.style_url) || "";
var styleArtTitle = safe(data.style_art_title) || safe(data.style_title) || "";
var styleArtYear = safe(data.style_art_year) || safe(data.style_year) || "";
var styleArtAlt = safe(data.style_art_alt) || safe(data.style_alt) || "";
var mini1Url = safe(data.mini1_url) || safe(data.mini_1_url) || "";
var mini1Title = safe(data.mini1_title) || safe(data.mini_1_title) || "";
var mini1Year = safe(data.mini1_year) || safe(data.mini_1_year) || "";
var mini1Alt = safe(data.mini1_alt) || safe(data.mini_1_alt) || "";
var mini2Url = safe(data.mini2_url) || safe(data.mini_2_url) || "";
var mini2Title = safe(data.mini2_title) || safe(data.mini_2_title) || "";
var mini2Year = safe(data.mini2_year) || safe(data.mini_2_year) || "";
var mini2Alt = safe(data.mini2_alt) || safe(data.mini_2_alt) || "";
var poemLine1 = safe(data.poem_line_1) || safe(data.poem1) || "";
var poemLine2 = safe(data.poem_line_2) || safe(data.poem2) || "";
var poemAuthor = safe(data.poem_author) || safe(data.poet) || "";
var poemWork = safe(data.poem_work) || safe(data.poem_title) || "";
var poemSourceUrl = safeLink(data.poem_source_url);
var stickyStorySourceUrl = safeLink(data.sticky_story_source_url);

// ═══════════════════════════════════════════════════════════════════════════════
// GOLD - CONSISTENT ACCENT (used sparingly)
// ═══════════════════════════════════════════════════════════════════════════════
var gold = "#D4AF37";
var goldLight = "#E8C857";
var goldBright = "#F5E085";
var goldDark = "#B8962E";
var goldDeep = "#9A7B1A";
var goldGlow = "rgba(212,175,55,0.35)";
var goldShadow = "rgba(154,123,26,0.5)";

// PREMIUM LABEL STYLE - Matches reference gradient with pop
var premiumLabel = 'display:inline-block;padding:10px 22px;background:linear-gradient(135deg,' + goldDeep + ' 0%,' + goldDark + ' 15%,' + gold + ' 35%,' + goldLight + ' 50%,' + goldBright + ' 60%,' + goldLight + ' 75%,' + gold + ' 90%,' + goldDark + ' 100%);border:1px solid ' + goldDeep + ';box-shadow:0 1px 0 rgba(255,255,255,0.3) inset,0 -1px 0 rgba(0,0,0,0.2) inset,0 4px 15px ' + goldShadow + ',0 0 25px ' + goldGlow + ';';

// ═══════════════════════════════════════════════════════════════════════════════
// SEVEN DAY PALETTES - Based on Color Theory Research
// ═══════════════════════════════════════════════════════════════════════════════

var themes = [
  // SUNDAY - Midnight Blue & Gold (Mystery & Calm)
  {
    name: "Midnight Blue",
    day: "Sunday",
    // Dark gradient stops
    bg1: "#050A14", bg2: "#0A1628", bg3: "#12243D",
    // Primary color gradient
    primary1: "#1A3A5C", primary2: "#2A5A8C", primary3: "#3A7ABC",
    // Light section gradient
    light1: "#F8FAFD", light2: "#EDF2F9", light3: "#DCE6F2",
    // Accents
    accent: "#4A90C8", accentDark: "#2A5A8C",
    // Text
    textLight: "#E8F0FA", textDark: "#0A1628", textMuted: "#6A8AAC"
  },
  // MONDAY - Teal & Gold (Modern Elegance)
  {
    name: "Teal Elegance",
    day: "Monday",
    bg1: "#03100F", bg2: "#082220", bg3: "#0D3533",
    primary1: "#0F4A48", primary2: "#1A6B68", primary3: "#258C88",
    light1: "#F5FBFB", light2: "#E8F5F4", light3: "#D5EBEA",
    accent: "#30A8A3", accentDark: "#1A6B68",
    textLight: "#E5F5F4", textDark: "#082220", textMuted: "#5A9A98"
  },
  // TUESDAY - Royal Purple & Gold (Majestic)
  {
    name: "Royal Purple",
    day: "Tuesday",
    bg1: "#0A0812", bg2: "#15102A", bg3: "#221842",
    primary1: "#3A2875", primary2: "#5040A0", primary3: "#6858C8",
    light1: "#FAF8FD", light2: "#F2EEFA", light3: "#E5DCF5",
    accent: "#8068D8", accentDark: "#5040A0",
    textLight: "#EDE8F8", textDark: "#15102A", textMuted: "#8878B8"
  },
  // WEDNESDAY - Terracotta & Gold (Earthy Warmth)
  {
    name: "Terracotta",
    day: "Wednesday",
    bg1: "#120A08", bg2: "#251812", bg3: "#3A251C",
    primary1: "#6B3A28", primary2: "#8B4A35", primary3: "#AB5A42",
    light1: "#FDF8F5", light2: "#F8EDE8", light3: "#F0DED5",
    accent: "#C86A50", accentDark: "#8B4A35",
    textLight: "#F8EBE5", textDark: "#251812", textMuted: "#A8786A"
  },
  // THURSDAY - Emerald & Gold (Natural Luxury)
  {
    name: "Emerald",
    day: "Thursday",
    bg1: "#04100A", bg2: "#0A2218", bg3: "#123528",
    primary1: "#1A4A35", primary2: "#256B4A", primary3: "#308C60",
    light1: "#F5FDF8", light2: "#E8F8EE", light3: "#D5F0E2",
    accent: "#40A870", accentDark: "#256B4A",
    textLight: "#E5F8EE", textDark: "#0A2218", textMuted: "#5AA880"
  },
  // FRIDAY - Navy & Gold (Classic Prestige)
  {
    name: "Navy Prestige",
    day: "Friday",
    bg1: "#080A12", bg2: "#101828", bg3: "#1A2840",
    primary1: "#223858", primary2: "#2E4A78", primary3: "#3A5C98",
    light1: "#F8FAFC", light2: "#EDF1F8", light3: "#DCE4F0",
    accent: "#4A70B0", accentDark: "#2E4A78",
    textLight: "#E8EFF8", textDark: "#101828", textMuted: "#6888B0"
  },
  // SATURDAY - Rose & Gold (Romantic Luxury)
  {
    name: "Rose Gold",
    day: "Saturday",
    bg1: "#120A0C", bg2: "#251518", bg3: "#3A2025",
    primary1: "#5C3040", primary2: "#804555", primary3: "#A55A6A",
    light1: "#FDF8F9", light2: "#F8ECF0", light3: "#F0DDE2",
    accent: "#C87085", accentDark: "#804555",
    textLight: "#F8EBF0", textDark: "#251518", textMuted: "#A88090"
  }
];

// Select theme based on day of week (0=Sunday...6=Saturday)
var today = new Date();
var dayOfWeek = today.getDay();
var theme = themes[dayOfWeek];

// ═══════════════════════════════════════════════════════════════════════════════
// PREMIUM ORNATE FRAME - Double-layer with gold corners
// ═══════════════════════════════════════════════════════════════════════════════
function buildFrame(size) {
  var borderWidth = size === "large" ? "12px" : "8px";
  var innerPad = size === "large" ? "6px" : "4px";
  return {
    outer: "background:linear-gradient(135deg," + gold + " 0%," + goldLight + " 20%," + gold + " 40%," + goldLight + " 60%," + gold + " 80%," + goldLight + " 100%);padding:3px;box-shadow:0 0 20px " + goldGlow + ",0 20px 50px rgba(0,0,0,0.4);",
    middle: "background:linear-gradient(180deg," + theme.bg1 + " 0%," + theme.bg2 + " 100%);padding:" + innerPad + ";",
    inner: "border:" + borderWidth + " solid;border-image:linear-gradient(180deg," + theme.primary2 + " 0%," + theme.primary1 + " 30%," + theme.primary1 + " 70%," + theme.primary2 + " 100%) 1;background:" + theme.bg1 + ";padding:4px;box-shadow:inset 0 0 50px rgba(0,0,0,0.5),inset 0 0 100px " + goldGlow + ";"
  };
}

var heroFrame = buildFrame("large");
var artFrame = buildFrame("medium");
var miniFrameStyle = "border:6px solid;border-image:linear-gradient(180deg," + theme.primary2 + " 0%," + theme.primary1 + " 100%) 1;background:" + theme.bg1 + ";padding:3px;box-shadow:inset 0 0 30px rgba(0,0,0,0.4);";

// ═══════════════════════════════════════════════════════════════════════════════
// BUILD COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

// Bullets with Roman numerals
var bullets = [data.notice_bullet_1, data.notice_bullet_2, data.notice_bullet_3, data.notice_bullet_4, data.notice_bullet_5];
var noticeRows = "";
var romanNumerals = ["I", "II", "III", "IV", "V"];
for (var i = 0; i < bullets.length; i++) {
  if (bullets[i]) {
    noticeRows += '<tr><td style="padding:0 0 18px 0;"><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>'
      + '<td width="42" valign="top" style="padding-right:16px;">'
      + '<div style="width:42px;height:42px;background:linear-gradient(135deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);border:2px solid ' + gold + ';box-shadow:0 4px 12px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.05);">'
      + '<span style="color:' + gold + ';font-size:15px;font-weight:500;font-family:Cormorant Garamond,Georgia,serif;line-height:42px;text-align:center;display:block;text-shadow:0 0 10px ' + goldGlow + ';">' + romanNumerals[i] + '</span></div></td>'
      + '<td style="font-size:17px;line-height:1.8;color:' + theme.textLight + ';font-family:Georgia,serif;border-left:2px solid ' + theme.primary1 + ';padding-left:16px;">' + safe(bullets[i]) + '</td>'
      + '</tr></table></td></tr>';
  }
}

// Cultural pairings
var culturalPairingsHtml = "";
if (culturalLit) {
  culturalPairingsHtml = '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
    + '<td width="48%" valign="top" style="padding:22px;background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);border-top:3px solid ' + gold + ';">'
    + '<p style="margin:0 0 12px 0;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;color:' + gold + ';font-family:Montserrat,sans-serif;">♬ Music</p>'
    + '<p style="margin:0;font-size:14px;line-height:1.7;color:' + theme.textLight + ';font-family:Georgia,serif;">' + culturalMusic + '</p></td>'
    + '<td width="4%"></td>'
    + '<td width="48%" valign="top" style="padding:22px;background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);border-top:3px solid ' + gold + ';">'
    + '<p style="margin:0 0 12px 0;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;color:' + gold + ';font-family:Montserrat,sans-serif;">📖 Literature</p>'
    + '<p style="margin:0;font-size:14px;line-height:1.7;color:' + theme.textLight + ';font-family:Georgia,serif;">' + culturalLit + '</p></td>'
    + '</tr></table>';
} else {
  culturalPairingsHtml = '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td valign="top" style="padding:22px;background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);border-top:3px solid ' + gold + ';"><p style="margin:0 0 12px 0;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:2.5px;color:' + gold + ';font-family:Montserrat,sans-serif;">♬ Music</p><p style="margin:0;font-size:14px;line-height:1.7;color:' + theme.textLight + ';font-family:Georgia,serif;">' + culturalMusic + '</p></td></tr></table>';
}

// Source lines
var stickyStorySourceLine = stickyStorySourceUrl ? '<div style="margin-top:14px;font-size:10px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">Source: <a href="' + stickyStorySourceUrl + '" style="color:' + gold + ';text-decoration:none;">view →</a></div>' : "";
var poemSourceLine = poemSourceUrl ? '<div style="margin-top:16px;font-size:10px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">Source: <a href="' + poemSourceUrl + '" style="color:' + gold + ';text-decoration:none;">view →</a></div>' : "";

// ═══════════════════════════════════════════════════════════════════════════════
// BUILD HTML
// ═══════════════════════════════════════════════════════════════════════════════
var html_content = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><style>@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap");@media only screen and (max-width:600px){.mobile-text{font-size:18px!important;line-height:1.9!important}.mobile-heading{font-size:28px!important}.mobile-quote{font-size:22px!important;line-height:1.8!important}.mobile-label{font-size:11px!important;letter-spacing:2px!important}}</style></head>'
  + '<body style="margin:0;padding:0;background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);font-family:Montserrat,Helvetica,Arial,sans-serif;">'
  + '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);"><tr><td align="center" style="padding:40px 20px 50px 20px;">'

  // MAIN CONTAINER with outer gold frame line
  + '<table role="presentation" width="660" cellspacing="0" cellpadding="0" border="0" style="max-width:660px;background:linear-gradient(180deg,' + theme.bg2 + ' 0%,' + theme.bg3 + ' 100%);overflow:hidden;box-shadow:0 0 0 1px ' + gold + ',0 0 0 6px ' + theme.bg1 + ',0 0 0 7px ' + theme.primary1 + ',0 30px 80px rgba(0,0,0,0.5);">'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 1: HEADER - Primary gradient
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(135deg,' + theme.primary1 + ' 0%,' + theme.primary2 + ' 50%,' + theme.primary3 + ' 100%);">'
  // Top gold band with gradient
  + '<div style="height:5px;background:linear-gradient(90deg,transparent 0%,' + goldDark + ' 15%,' + gold + ' 35%,' + goldLight + ' 50%,' + gold + ' 65%,' + goldDark + ' 85%,transparent 100%);"></div>'
  + '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td style="padding:35px 45px 28px 45px;">'
  + '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
  // Title
  + '<td align="left" valign="middle" width="62%">'
  + '<p style="margin:0 0 6px 0;font-size:9px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + gold + ';font-family:Montserrat,sans-serif;text-shadow:0 0 15px ' + goldGlow + ';">✦ Gallery Exhibition ✦</p>'
  + '<h1 style="margin:0;font-size:32px;line-height:1.2;color:' + theme.textLight + ';font-weight:400;font-family:Cormorant Garamond,Georgia,serif;text-shadow:0 2px 15px rgba(0,0,0,0.3);">' + exhibitionTitle + '</h1>'
  + '</td>'
  // Brand box
  + '<td align="right" valign="middle" width="38%">'
  + '<div style="text-align:right;padding:14px 18px;background:linear-gradient(135deg,' + theme.bg2 + ' 0%,' + theme.bg3 + ' 100%);border:1px solid ' + theme.primary1 + ';border-top:2px solid ' + gold + ';">'
  + '<p style="margin:0 0 3px 0;font-size:12px;color:' + gold + ';font-weight:600;font-family:Montserrat,sans-serif;text-shadow:0 0 10px ' + goldGlow + ';">' + brandName + '</p>'
  + '<p style="margin:0;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">Gallery ' + dayIndex + ' of ' + galleryTotal + '</p>'
  + '</div></td></tr></table>'
  + '</td></tr></table>'
  // Bottom gradient line
  + '<div style="height:3px;background:linear-gradient(90deg,' + theme.primary1 + ' 0%,' + theme.primary3 + ' 50%,' + theme.primary1 + ' 100%);"></div>'
  + '</td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 2: ARTIST STRIP - Darker gradient
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);padding:22px 45px;border-bottom:1px solid ' + theme.primary1 + ';">'
  + '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
  + '<td width="62" valign="middle" align="left">'
  + '<div style="width:62px;height:62px;border-radius:50%;background:linear-gradient(135deg,' + gold + ' 0%,' + goldLight + ' 50%,' + gold + ' 100%);padding:3px;box-shadow:0 0 15px ' + goldGlow + ',0 5px 20px rgba(0,0,0,0.4);">'
  + '<img src="' + cleanUrl(artistPortraitUrl) + '" width="56" height="56" style="border-radius:50%;display:block;border:2px solid ' + theme.bg1 + ';" alt="' + artistName + '">'
  + '</div></td>'
  + '<td style="padding-left:18px;vertical-align:middle;">'
  + '<p style="margin:0 0 2px 0;font-size:9px;text-transform:uppercase;letter-spacing:2px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">Featured Artist</p>'
  + '<p style="margin:0;font-size:17px;color:' + theme.textLight + ';font-weight:500;font-family:Cormorant Garamond,Georgia,serif;">' + artistName + '</p>'
  + '</td></tr></table></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 3: HERO IMAGE - Darkest background
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td align="center" style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);padding:40px 35px;">'
  // Premium ornate frame
  + '<div style="' + heroFrame.outer + '">'
  + '<div style="' + heroFrame.middle + '">'
  + '<div style="' + heroFrame.inner + '">'
  + '<img src="' + cleanUrl(heroUrl) + '" alt="' + heroAlt + '" width="530" style="width:100%;max-width:530px;height:auto;display:block;">'
  + '</div></div></div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 4: HERO CAPTION - Light gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.light3 + ' 0%,' + theme.light2 + ' 50%,' + theme.light1 + ' 100%);padding:30px 45px 35px 45px;border-top:4px solid ' + theme.primary2 + ';">'
  // Artwork info
  + '<div style="font-size:14px;color:' + theme.textDark + ';font-family:Montserrat,sans-serif;margin-bottom:25px;">'
  + '<span style="display:inline-block;width:8px;height:8px;background:linear-gradient(135deg,' + theme.primary2 + ' 0%,' + theme.primary3 + ' 100%);margin-right:10px;vertical-align:middle;box-shadow:0 0 8px ' + theme.accent + ';"></span>'
  + '<strong>' + heroTitle + '</strong>'
  + '<span style="color:' + theme.textMuted + ';"> · ' + heroYear + '</span></div>'
  // Quote box with gradient
  + '<div style="padding:28px 32px;background:linear-gradient(180deg,' + theme.light1 + ' 0%,#FFFFFF 100%);border-left:4px solid ' + gold + ';box-shadow:0 3px 15px rgba(0,0,0,0.06);">'
  + '<p style="margin:0;font-family:Cormorant Garamond,Georgia,serif;font-size:24px;line-height:1.75;color:' + theme.textDark + ';font-style:italic;">' + hookText + '</p>'
  + '</div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 5: SECOND ARTWORK - Dark gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg2 + ' 0%,' + theme.bg3 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.light3 + ';">'
  // Decorative divider
  + '<div style="text-align:center;margin-bottom:25px;"><span style="color:' + gold + ';font-size:10px;letter-spacing:6px;text-shadow:0 0 10px ' + goldGlow + ';">◆ ─── ◆ ─── ◆</span></div>'
  + '<div style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);padding:25px;box-shadow:0 10px 35px rgba(0,0,0,0.3);">'
  + '<div style="' + artFrame.outer + '">'
  + '<div style="' + artFrame.middle + '">'
  + '<div style="' + artFrame.inner + '">'
  + '<img src="' + cleanUrl(art2Url) + '" alt="' + art2Alt + '" width="510" style="width:100%;max-width:510px;height:auto;display:block;">'
  + '</div></div></div></div>'
  + '<p style="margin:20px 0 0 0;font-size:14px;color:' + theme.textLight + ';font-family:Montserrat,sans-serif;">'
  + '<strong style="color:' + gold + ';">' + art2Title + '</strong><span style="color:' + theme.textMuted + ';">, ' + art2Year + '</span></p></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 6: WHY IT MATTERS - Primary gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(135deg,' + theme.primary1 + ' 0%,' + theme.primary2 + ' 50%,' + theme.primary1 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.bg1 + ';">'
  + '<h3 style="margin:0 0 8px 0;font-size:26px;font-weight:400;color:' + theme.textLight + ';font-family:Cormorant Garamond,Georgia,serif;text-shadow:0 2px 10px rgba(0,0,0,0.2);">Why It Matters</h3>'
  + '<div style="width:50px;height:2px;background:linear-gradient(90deg,' + gold + ' 0%,' + goldLight + ' 100%);margin-bottom:24px;box-shadow:0 0 10px ' + goldGlow + ';"></div>'
  + '<div style="font-size:18px;line-height:1.9;color:' + theme.textLight + ';font-family:Georgia,serif;opacity:0.95;">' + formatText(whyItMatters) + '</div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 7: OBSERVATIONS - Dark gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.primary3 + ';">'
  + '<h4 style="margin:0 0 20px 0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + gold + ';font-family:Montserrat,sans-serif;text-shadow:0 0 10px ' + goldGlow + ';">✦ Five Key Observations</h4>'
  + '<table width="100%" cellspacing="0" cellpadding="0" border="0">' + noticeRows + '</table></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 8: STYLE SPOTLIGHT - Dark section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg2 + ' 0%,' + theme.bg1 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.bg3 + ';">'
  + '<div style="' + premiumLabel + 'margin-bottom:22px;">'
  + '<p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#FFFFFF;font-family:Montserrat,sans-serif;text-shadow:0 1px 2px rgba(0,0,0,0.3);">Style Spotlight</p></div>'
  + '<div style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);padding:25px;box-shadow:0 10px 35px rgba(0,0,0,0.3);">'
  + '<div style="' + artFrame.outer + '">'
  + '<div style="' + artFrame.middle + '">'
  + '<div style="' + artFrame.inner + '">'
  + '<img src="' + cleanUrl(styleArtUrl) + '" width="510" alt="' + styleArtAlt + '" style="width:100%;display:block;">'
  + '</div></div></div></div>'
  + '<p style="margin:18px 0 0 0;font-size:13px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">' + styleArtTitle + ' · ' + styleArtYear + '</p></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 9: STICKY STORY - Light gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.light3 + ' 0%,' + theme.light2 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.bg2 + ';">'
  + '<h4 style="margin:0 0 20px 0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + theme.primary2 + ';font-family:Montserrat,sans-serif;">✦ The Memorable Story</h4>'
  + '<div style="font-size:16px;line-height:1.85;color:' + theme.textDark + ';background:linear-gradient(180deg,' + theme.light1 + ' 0%,#FFFFFF 100%);padding:28px;border-left:4px solid ' + theme.primary2 + ';font-family:Georgia,serif;box-shadow:0 3px 15px rgba(0,0,0,0.04);">'
  + formatText(stickyStory) + stickyStorySourceLine + '</div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 10: CULTURAL PAIRINGS - Dark section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg3 + ' 0%,' + theme.bg2 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.light2 + ';">'
  + '<h4 style="margin:0 0 20px 0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + gold + ';font-family:Montserrat,sans-serif;text-shadow:0 0 10px ' + goldGlow + ';">✦ Cultural Pairings</h4>'
  + culturalPairingsHtml + '</td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 11: PHILOSOPHY - Primary accent gradient
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(135deg,' + theme.primary2 + ' 0%,' + theme.primary3 + ' 50%,' + theme.primary2 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.bg2 + ';">'
  + '<h4 style="margin:0 0 18px 0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + theme.light1 + ';font-family:Montserrat,sans-serif;">✦ Consider This</h4>'
  + '<div style="font-size:18px;line-height:1.8;color:' + theme.textLight + ';font-family:Cormorant Garamond,Georgia,serif;font-style:italic;text-shadow:0 1px 5px rgba(0,0,0,0.2);">' + formatText(philosophy) + '</div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 12: MINI GALLERY - Dark gradient section
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.bg2 + ' 0%,' + theme.bg3 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.primary2 + ';">'
  + '<div style="' + premiumLabel + 'margin-bottom:25px;">'
  + '<p style="margin:0;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:3px;color:#FFFFFF;font-family:Montserrat,sans-serif;text-shadow:0 1px 2px rgba(0,0,0,0.3);">Mini Gallery</p></div>'
  + '<table width="100%" cellspacing="0" cellpadding="0" border="0"><tr>'
  + '<td width="48%" valign="top">'
  + '<div style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);padding:18px;box-shadow:0 6px 25px rgba(0,0,0,0.25);">'
  + '<div style="' + miniFrameStyle + '">'
  + '<img src="' + cleanUrl(mini1Url) + '" alt="' + mini1Alt + '" style="width:100%;display:block;"></div></div>'
  + '<div style="font-size:12px;font-family:Montserrat,sans-serif;margin-top:12px;">'
  + '<strong style="color:' + gold + ';">' + mini1Title + '</strong><br><span style="color:' + theme.textMuted + ';">' + mini1Year + '</span></div></td>'
  + '<td width="4%"></td>'
  + '<td width="48%" valign="top">'
  + '<div style="background:linear-gradient(180deg,' + theme.bg1 + ' 0%,' + theme.bg2 + ' 100%);padding:18px;box-shadow:0 6px 25px rgba(0,0,0,0.25);">'
  + '<div style="' + miniFrameStyle + '">'
  + '<img src="' + cleanUrl(mini2Url) + '" alt="' + mini2Alt + '" style="width:100%;display:block;"></div></div>'
  + '<div style="font-size:12px;font-family:Montserrat,sans-serif;margin-top:12px;">'
  + '<strong style="color:' + gold + ';">' + mini2Title + '</strong><br><span style="color:' + theme.textMuted + ';">' + mini2Year + '</span></div></td>'
  + '</tr></table></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 13: PRACTICE - Light with gold frame
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.light2 + ' 0%,' + theme.light1 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.bg3 + ';">'
  + '<div style="padding:35px;background:linear-gradient(180deg,#FFFFFF 0%,' + theme.light1 + ' 100%);border:2px solid ' + gold + ';box-shadow:0 0 0 4px ' + theme.light2 + ',0 0 0 6px ' + theme.primary1 + ',0 5px 20px rgba(0,0,0,0.08);">'
  + '<div style="text-align:center;margin-bottom:22px;">'
  + '<div style="display:inline-block;width:40px;height:2px;background:linear-gradient(90deg,' + gold + ' 0%,' + goldLight + ' 100%);margin-bottom:12px;"></div>'
  + '<h4 style="margin:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:3px;color:' + theme.primary2 + ';font-family:Montserrat,sans-serif;">✦ Today\'s Practice</h4></div>'
  + '<p style="font-size:16px;line-height:1.85;color:' + theme.textDark + ';margin:0;text-align:center;font-family:Georgia,serif;">' + formatText(practice) + '</p></div></td></tr>'

  // ═══════════════════════════════════════════════════════════════════════════════
  // SECTION 14: POEM FOOTER - Light gradient
  // ═══════════════════════════════════════════════════════════════════════════════
  + '<tr><td style="background:linear-gradient(180deg,' + theme.light3 + ' 0%,' + theme.light2 + ' 100%);padding:40px 45px;border-top:4px solid ' + theme.light1 + ';">'
  + '<div style="text-align:center;">'
  + '<div style="display:inline-block;width:40px;height:2px;background:linear-gradient(90deg,' + theme.primary1 + ' 0%,' + theme.primary2 + ' 100%);margin-bottom:25px;"></div>'
  + '<div style="font-family:Cormorant Garamond,Georgia,serif;font-size:19px;line-height:1.75;color:' + theme.textDark + ';font-style:italic;margin-bottom:20px;">'
  + safe(poemLine1) + '<br>' + safe(poemLine2) + '</div>'
  + '<p style="margin:0;font-size:12px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">— ' + poemAuthor + ', <em>' + poemWork + '</em></p>'
  + poemSourceLine + '</div></td></tr>'

  // CLOSING BAND
  + '<tr><td style="background:linear-gradient(135deg,' + theme.primary1 + ' 0%,' + theme.primary2 + ' 50%,' + theme.primary1 + ' 100%);padding:0;">'
  + '<div style="height:5px;background:linear-gradient(90deg,transparent 0%,' + goldDark + ' 15%,' + gold + ' 35%,' + goldLight + ' 50%,' + gold + ' 65%,' + goldDark + ' 85%,transparent 100%);"></div>'
  + '</td></tr>'

  // Close main container
  + '</table>'

  // FOOTER
  + '<div style="height:35px;"></div>'
  + '<table role="presentation" width="660" cellspacing="0" cellpadding="0" border="0" style="max-width:660px;"><tr><td align="center" style="padding:25px 45px;">'
  + '<div style="width:60px;height:1px;background:linear-gradient(90deg,transparent,' + theme.primary1 + ',transparent);margin:0 auto 18px auto;"></div>'
  + '<p style="margin:0 0 6px 0;font-size:10px;color:' + theme.textMuted + ';font-family:Montserrat,sans-serif;">© ' + brandName + ' · <em>' + theme.name + '</em> Theme</p>'
  + '<p style="margin:0;"><a href="#" style="color:' + gold + ';text-decoration:none;font-size:10px;font-family:Montserrat,sans-serif;">Manage Preferences</a></p>'
  + '</td></tr></table>'

  + '</td></tr></table></body></html>';

// OUTPUT
return {
  json: {
    email: emailValue,
    subject: "✦ Gallery " + dayIndex + " · " + exhibitionTitle,
    html: html_content,
    theme: theme.name,
    day: theme.day
  }
};
