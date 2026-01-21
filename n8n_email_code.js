// DAILY SUBLIME - 8 TARGETED FIXES APPLIED
// Same structure + colors, refined typography and copy

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatLineBreaks(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/\n/g, '</p><p style="margin:0;padding-top:16px;">');
}

var inputData = $input.item.json;
var name = inputData.Influencer_Name || inputData['Influencer_Name'] || 'Daily Sublime';
var profilePic = inputData.Profile_Pic_Url || inputData['Profile_Pic_Url'] || '';
var personalBody = inputData.Personal_Body || inputData['Personal_Body'] || '';
var recipientEmail = inputData.Recipient_Email || inputData['Recipient_Email'] || '';

var escapedName = escapeHtml(name);
var formattedBody = '<p style="margin:0;">' + formatLineBreaks(personalBody) + '</p>';

var html = '';

html += '<!DOCTYPE html>';
html += '<html lang="en" xmlns="http://www.w3.org/1999/xhtml">';
html += '<head>';
html += '<meta charset="UTF-8">';
html += '<meta name="viewport" content="width=device-width,initial-scale=1.0">';
html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
html += '<title>Daily Sublime</title>';

// STYLE BLOCK
html += '<style type="text/css">';
html += 'body{margin:0!important;padding:0!important;-webkit-text-size-adjust:100%;}';
html += 'table{border-spacing:0!important;border-collapse:collapse!important;}';
html += '.cardPad{padding:48px!important;}';
html += '.heroName{font-size:44px!important;letter-spacing:0.5px!important;}';
html += '.btnWrap{width:auto!important;}';
html += '.labelTrack{letter-spacing:2px!important;}';
html += '@media screen and (max-width:600px){';
html += '.outerPad{padding:20px!important;}';
html += '.cardPad{padding:24px!important;}';
html += '.heroName{font-size:34px!important;letter-spacing:0.3px!important;}';
html += '.propPad{padding:24px!important;}';
html += '.btnWrap{width:100%!important;}';
html += '.btnCell{padding-left:24px!important;padding-right:24px!important;}';
html += '.btnLink{padding:18px 24px!important;}';
html += '.labelTrack{letter-spacing:1.5px!important;}';
html += '}';
html += '</style>';

html += '<!--[if mso]><style type="text/css">body,table,td{font-family:Arial,sans-serif!important;}</style><![endif]-->';

html += '</head>';

html += '<body style="margin:0;padding:0;background-color:#0D0D0D;font-family:Helvetica Neue,Arial,sans-serif;" bgcolor="#0D0D0D">';

// HIDDEN PREHEADER
html += '<div style="display:none;font-size:1px;color:#0D0D0D;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">';
html += 'A personal invitation to partner with Daily Sublime — ' + escapedName + ', I have been thinking about you.';
html += '</div>';

// OUTER WRAPPER
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0D0D0D" style="background-color:#0D0D0D;">';
html += '<tr>';
html += '<td align="center" valign="top" class="outerPad" style="padding:40px 20px;">';

// MSO GHOST TABLE
html += '<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->';

html += '<div style="max-width:600px;margin:0 auto;">';

// MAIN CARD
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="max-width:600px;width:100%;background-color:#FEFEFE;border-radius:16px;box-shadow:0 2px 4px rgba(0,0,0,0.15),0 24px 48px rgba(0,0,0,0.35);overflow:hidden;">';

// TOP EDGE HIGHLIGHT
html += '<tr><td style="height:1px;background-color:rgba(255,255,255,0.6);font-size:0;line-height:0;">&nbsp;</td></tr>';

// TOP BAR
html += '<tr><td style="height:6px;background-color:#B76E79;background:linear-gradient(90deg,#B76E79 0%,#D4A574 35%,#2D6A4F 65%,#1B4332 100%);" bgcolor="#B76E79"></td></tr>';

// TOP BAR SHADOW
html += '<tr><td style="height:1px;background-color:rgba(183,110,121,0.15);font-size:0;line-height:0;">&nbsp;</td></tr>';

// INNER CARD FRAME
html += '<tr><td style="padding:8px 8px 0 8px;">';
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid rgba(183,110,121,0.12);border-radius:12px;overflow:hidden;">';
html += '<tr><td>';

// ==================== HEADER SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:48px 48px 40px 48px;">';

// LABEL PILL - FIX #4: Reduced tracking to 2px
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">';
html += '<tr><td align="center" class="labelTrack" style="padding:10px 20px;background-color:#1B4332;background:linear-gradient(135deg,#1B4332 0%,#2D6A4F 100%);border-radius:24px;box-shadow:0 4px 12px rgba(27,67,50,0.25);" bgcolor="#1B4332">';
html += '<span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#D4A574;font-weight:600;">✦&nbsp;&nbsp;DAILY SUBLIME&nbsp;&nbsp;✦</span>';
html += '</td></tr>';
html += '</table>';

// AVATAR JEWEL MOUNT
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">';
html += '<tr><td align="center">';

// Outer glow
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:4px;background-color:rgba(183,110,121,0.08);border-radius:50%;">';

// Rose gold ring
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:4px;background-color:#B76E79;background:linear-gradient(145deg,#B76E79 0%,#D4A574 50%,#B76E79 100%);border-radius:50%;box-shadow:0 8px 20px rgba(183,110,121,0.35);" bgcolor="#B76E79">';

// White ring with inset shadow
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:4px;background-color:#FFFFFF;border-radius:50%;box-shadow:inset 0 2px 4px rgba(0,0,0,0.08);" bgcolor="#FFFFFF">';

if (profilePic && profilePic.length > 5) {
  html += '<img src="' + profilePic + '" alt="Photo of ' + escapedName + '" width="84" height="84" style="display:block;width:84px;height:84px;object-fit:cover;border-radius:50%;border:0;outline:none;text-decoration:none;" />';
} else {
  html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
  html += '<tr><td align="center" valign="middle" bgcolor="#1B4332" style="width:84px;height:84px;background-color:#1B4332;background:linear-gradient(135deg,#1B4332 0%,#2D6A4F 100%);border-radius:50%;font-family:Georgia,serif;font-size:28px;letter-spacing:2px;color:#D4A574;font-weight:600;">DS</td></tr>';
  html += '</table>';
}

html += '</td></tr></table>';
html += '</td></tr></table>';
html += '</td></tr></table>';

html += '</td></tr></table>';

// FIX #1: HEADLINE - "Hi" subordinate, NAME is hero
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">';
html += '<tr><td align="center">';
html += '<span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:18px;color:#888888;font-weight:400;">Hi</span>';
html += '<span style="display:inline-block;width:8px;"></span>';
html += '<span class="heroName" style="font-family:Georgia,serif;font-size:44px;font-weight:600;font-style:italic;color:#B76E79;letter-spacing:0.5px;">' + escapedName + '</span>';
html += '</td></tr>';
html += '</table>';

// HEADLINE UNDERLINE MODULE
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr>';
html += '<td style="width:32px;height:2px;background:linear-gradient(90deg,transparent,#D4A574);"></td>';
html += '<td style="width:8px;"></td>';
html += '<td style="font-family:Georgia,serif;font-size:10px;color:#B76E79;">✦</td>';
html += '<td style="width:8px;"></td>';
html += '<td style="width:32px;height:2px;background:linear-gradient(90deg,#D4A574,transparent);"></td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';

// SPACER
html += '<tr><td style="font-size:0;line-height:0;height:8px;">&nbsp;</td></tr>';

// DOUBLE DIVIDER
html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(45,106,79,0.3),transparent);"></td></tr></table></td></tr>';
html += '<tr><td style="font-size:0;line-height:0;height:8px;">&nbsp;</td></tr>';
html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(45,106,79,0.15),transparent);"></td></tr></table></td></tr>';

html += '</table>';

// ==================== PERSONAL NOTE SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:32px 48px 24px 48px;">';

// FIX #2: Replace label with subtle ornament
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">';
html += '<tr><td align="center" style="font-family:Georgia,serif;font-size:12px;color:rgba(183,110,121,0.5);">✦</td></tr>';
html += '</table>';

// FIX #3: Constrained width body copy (max 480px, centered, left-aligned text)
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:480px;width:100%;">';
html += '<tr>';
html += '<td align="left" valign="top">';

// Body text
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:16px;line-height:1.85;color:#333333;text-align:left;">';
html += formattedBody;
html += '</div>';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// SPACER
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="font-size:0;line-height:0;height:16px;">&nbsp;</td></tr></table>';

// ==================== ABOUT DAILY SUBLIME SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';
html += '<tr>';
html += '<td align="center" valign="top" style="padding:8px 48px 24px 48px;">';

// Rose gold tinted box
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FDF6F3" style="background-color:#FDF6F3;border:1px solid rgba(183,110,121,0.2);border-radius:12px;overflow:hidden;">';

// Top accent line
html += '<tr><td style="height:3px;background-color:#B76E79;background:linear-gradient(90deg,#D4A574 0%,#B76E79 50%,#D4A574 100%);" bgcolor="#B76E79"></td></tr>';

html += '<tr>';
html += '<td align="center" valign="top" style="padding:28px 32px;">';

// Heading
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#B76E79;margin-bottom:16px;">✦&nbsp;&nbsp;WHY I\'M REACHING OUT&nbsp;&nbsp;✦</div>';

// Body copy
html += '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.8;color:#4A3F3A;max-width:440px;">';
html += 'I built <strong style="color:#B76E79;">Daily Sublime</strong>, a daily digital publication that teaches observation through fine art. It\'s a 5-minute morning practice that complements morning routines beautifully. I think your community would embrace it.';
html += '</div>';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// SPACER
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="font-size:0;line-height:0;height:8px;">&nbsp;</td></tr></table>';

// ==================== PROPOSITION BOX ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:8px 48px 32px 48px;">';

// Ticket perforation top
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:8px;"><tr><td style="height:1px;border-top:1px dotted rgba(183,110,121,0.35);"></td></tr></table>';

// Box container
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1B4332" style="background-color:#1B4332;background:linear-gradient(160deg,#1B4332 0%,#2D6A4F 100%);border-radius:12px;box-shadow:0 8px 24px rgba(27,67,50,0.3);overflow:hidden;">';

// Top highlight
html += '<tr><td style="height:1px;background-color:rgba(255,255,255,0.08);font-size:0;line-height:0;">&nbsp;</td></tr>';

// Inner stroke frame
html += '<tr><td style="padding:2px;">';
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid rgba(212,165,116,0.2);border-radius:10px;">';
html += '<tr>';
html += '<td align="center" valign="top" class="propPad" style="padding:32px;">';

// FIX #4: Partnership heading - reduced tracking
html += '<div class="labelTrack" style="font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#D4A574;margin-bottom:16px;">✦&nbsp;&nbsp;THE PARTNERSHIP&nbsp;&nbsp;✦</div>';

// FIX #5: Rewritten copy
html += '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.75;color:#FFFFFF;margin-bottom:8px;max-width:420px;">';
html += 'I\'m looking to partner with the right community to share this philosophy, and I think you might be a great fit.';
html += '</div>';

html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.8);margin-bottom:24px;">';
html += 'Here\'s what I\'m offering:';
html += '</div>';

// FIX #6: 50/50 PLAQUE - refined, inlaid feel
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">';
html += '<tr><td align="center">';
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#B76E79" style="background-color:#B76E79;background:linear-gradient(135deg,#B76E79 0%,#D4A574 50%,#B76E79 100%);border-radius:8px;border:1px solid rgba(255,255,255,0.15);box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),inset 0 -1px 0 rgba(0,0,0,0.15),0 4px 12px rgba(183,110,121,0.35);">';
html += '<tr><td style="padding:12px 24px;font-family:Georgia,serif;font-size:21px;font-weight:600;color:#FFFFFF;text-shadow:0 1px 1px rgba(0,0,0,0.1);">50/50 Lifetime Split</td></tr>';
html += '</table>';
html += '</td></tr>';
html += '</table>';

// Supporting line
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;color:rgba(255,255,255,0.65);letter-spacing:0.3px;margin-bottom:12px;">on any revenue generated through your channel or audience.</div>';

// Pricing tiers
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.5);line-height:1.7;">Recurring revenue at $9.99/month, $53.99 for 6 months, or $99.99 annually.</div>';

html += '</td>';
html += '</tr>';
html += '</table>';
html += '</td></tr>';

// Bottom weight
html += '<tr><td style="height:2px;background-color:rgba(0,0,0,0.15);font-size:0;line-height:0;">&nbsp;</td></tr>';

html += '</table>';

// Ticket perforation bottom
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;"><tr><td style="height:1px;border-top:1px dotted rgba(183,110,121,0.35);"></td></tr></table>';

html += '</td></tr>';
html += '</table>';

// ==================== CTA SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';

// Divider above CTA
html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(183,110,121,0.2),transparent);"></td></tr></table></td></tr>';

html += '<tr>';
// FIX #7: Mobile button padding
html += '<td align="center" valign="top" class="cardPad btnCell" style="padding:32px 48px;">';

// Button wrapper
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="btnWrap">';
html += '<tr>';
html += '<td align="center" valign="middle" bgcolor="#B76E79" style="background-color:#B76E79;background:linear-gradient(135deg,#A65D68 0%,#B76E79 30%,#D4A574 60%,#B76E79 100%);border-radius:50px;border:1px solid rgba(255,255,255,0.1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.3),inset 0 -2px 0 rgba(0,0,0,0.1),0 8px 20px rgba(183,110,121,0.4);">';
html += '<a href="mailto:sinadehesh@gmail.com?subject=Daily Sublime Sample Editions&body=Send me some free editions." class="btnLink" style="display:block;padding:18px 48px;font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;letter-spacing:2px;text-transform:uppercase;text-align:center;">Send Me Sample Editions</a>';
html += '</td>';
html += '</tr>';
html += '</table>';

// Secondary link
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">';
html += '<tr><td align="center" style="font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;color:#666666;line-height:1.6;">';
html += 'or explore <a href="https://daily.sinadehesh.com" style="color:#2D6A4F;text-decoration:underline;font-weight:600;">daily.sinadehesh.com</a>';
html += '</td></tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// ==================== SIGNATURE ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FEFEFE" style="background-color:#FEFEFE;">';

// Divider
html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(45,106,79,0.2),transparent);"></td></tr></table></td></tr>';

html += '<tr>';
html += '<td align="center" valign="top" style="padding:32px 48px;">';

html += '<div style="font-family:Georgia,serif;font-size:24px;font-style:italic;color:rgba(26,26,26,0.85);margin-bottom:6px;">Sina</div>';
// FIX #4: Reduced tracking on signature
html += '<div class="labelTrack" style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#B76E79;font-weight:600;">Creator of Daily Sublime</div>';

html += '</td></tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

html += '</td></tr>';

// ==================== FOOTER ====================
html += '<tr>';
html += '<td style="padding:0 8px 8px 8px;">';

html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1B4332" style="background-color:#1B4332;background:linear-gradient(180deg,#1B4332 0%,#0D0D0D 100%);border-radius:12px;overflow:hidden;">';

// Top stroke
html += '<tr><td style="height:1px;background-color:rgba(212,165,116,0.15);font-size:0;line-height:0;">&nbsp;</td></tr>';

html += '<tr>';
html += '<td align="center" valign="top" style="padding:24px 32px;">';

// FIX #8: Rewritten footer copy
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.6);line-height:1.8;letter-spacing:0.3px;">';
html += 'If you\'d like a newsletter like this for your audience, contact <a href="mailto:sinadehesh@gmail.com" style="color:#D4A574;text-decoration:underline;">sinadehesh@gmail.com</a><br><br>';
html += '<a href="https://daily.sinadehesh.com" style="color:#D4A574;text-decoration:underline;font-weight:500;">daily.sinadehesh.com</a>';
html += '</div>';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td>';
html += '</tr>';

// BOTTOM EDGE WEIGHT
html += '<tr><td style="height:2px;background-color:rgba(0,0,0,0.08);border-radius:0 0 16px 16px;font-size:0;line-height:0;">&nbsp;</td></tr>';

html += '</table>';

html += '</div>';

html += '<!--[if mso]></td></tr></table><![endif]-->';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</body>';
html += '</html>';

return {
  email: recipientEmail,
  subject: escapedName + ', a thought for you ✦',
  htmlBody: html
};
