// DAILY SUBLIME - FEMININE LUXURY VERSION
// Designed for lady influencers - softer, warmer, more elegant

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
html += '.heroName{font-size:42px!important;letter-spacing:1px!important;}';
html += '.btnWrap{width:auto!important;}';
html += '@media screen and (max-width:600px){';
html += '.outerPad{padding:20px!important;}';
html += '.cardPad{padding:24px!important;}';
html += '.heroName{font-size:32px!important;letter-spacing:0.5px!important;}';
html += '.propPad{padding:24px!important;}';
html += '.btnWrap{width:100%!important;}';
html += '.btnCell{padding-left:24px!important;padding-right:24px!important;}';
html += '.btnLink{padding:18px 24px!important;}';
html += '}';
html += '</style>';

html += '<!--[if mso]><style type="text/css">body,table,td{font-family:Arial,sans-serif!important;}</style><![endif]-->';

html += '</head>';

// SOFT BLUSH/ROSE BACKGROUND
html += '<body style="margin:0;padding:0;background-color:#FDF6F3;font-family:Helvetica Neue,Arial,sans-serif;" bgcolor="#FDF6F3">';

// HIDDEN PREHEADER
html += '<div style="display:none;font-size:1px;color:#FDF6F3;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">';
html += 'A personal invitation to partner with Daily Sublime, ' + escapedName + '. I have been thinking about you.';
html += '</div>';

// OUTER WRAPPER
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FDF6F3" style="background-color:#FDF6F3;">';
html += '<tr>';
html += '<td align="center" valign="top" class="outerPad" style="padding:40px 20px;">';

// MSO GHOST TABLE
html += '<!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->';

html += '<div style="max-width:600px;margin:0 auto;">';

// MAIN CARD - PURE WHITE
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:20px;box-shadow:0 4px 6px rgba(183,110,121,0.08),0 20px 40px rgba(183,110,121,0.12);overflow:hidden;">';

// TOP BAR - ROSE GOLD GRADIENT
html += '<tr><td style="height:5px;background-color:#B76E79;background:linear-gradient(90deg,#D4A574 0%,#B76E79 50%,#E8B4B8 100%);" bgcolor="#B76E79"></td></tr>';

// INNER CARD FRAME
html += '<tr><td style="padding:8px 8px 0 8px;">';
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid rgba(183,110,121,0.1);border-radius:16px;overflow:hidden;">';
html += '<tr><td>';

// ==================== HEADER SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="background-color:#FFFFFF;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:48px 48px 40px 48px;">';

// LABEL PILL - ROSE GOLD
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">';
html += '<tr><td align="center" style="padding:10px 22px;background-color:#B76E79;background:linear-gradient(135deg,#B76E79 0%,#D4A574 100%);border-radius:24px;box-shadow:0 4px 12px rgba(183,110,121,0.25);" bgcolor="#B76E79">';
html += '<span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#FFFFFF;font-weight:600;">✦&nbsp;&nbsp;DAILY SUBLIME&nbsp;&nbsp;✦</span>';
html += '</td></tr>';
html += '</table>';

// AVATAR - ROSE GOLD FRAME
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:32px;">';
html += '<tr><td align="center">';

// Outer soft glow
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:6px;background-color:rgba(183,110,121,0.1);border-radius:50%;">';

// Rose gold ring
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:4px;background-color:#B76E79;background:linear-gradient(145deg,#D4A574 0%,#B76E79 50%,#E8B4B8 100%);border-radius:50%;box-shadow:0 8px 20px rgba(183,110,121,0.3);" bgcolor="#B76E79">';

// White ring
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr><td style="padding:4px;background-color:#FFFFFF;border-radius:50%;box-shadow:inset 0 2px 4px rgba(183,110,121,0.1);" bgcolor="#FFFFFF">';

if (profilePic && profilePic.length > 5) {
    html += '<img src="' + profilePic + '" alt="Photo of ' + escapedName + '" width="88" height="88" style="display:block;width:88px;height:88px;object-fit:cover;border-radius:50%;border:0;outline:none;text-decoration:none;" />';
} else {
    html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
    html += '<tr><td align="center" valign="middle" bgcolor="#B76E79" style="width:88px;height:88px;background-color:#B76E79;background:linear-gradient(135deg,#B76E79 0%,#D4A574 100%);border-radius:50%;font-family:Georgia,serif;font-size:30px;letter-spacing:2px;color:#FFFFFF;font-weight:500;">DS</td></tr>';
    html += '</table>';
}

html += '</td></tr></table>';
html += '</td></tr></table>';
html += '</td></tr></table>';

html += '</td></tr></table>';

// HEADLINE - Elegant, feminine
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:16px;">';
html += '<tr><td align="center">';
html += '<span style="font-family:Helvetica Neue,Arial,sans-serif;font-size:16px;color:#999999;font-weight:300;">Hello</span>';
html += '<span style="display:inline-block;width:10px;"></span>';
html += '<span class="heroName" style="font-family:Georgia,serif;font-size:42px;font-weight:400;font-style:italic;color:#B76E79;letter-spacing:1px;">' + escapedName + '</span>';
html += '</td></tr>';
html += '</table>';

// DECORATIVE FLOURISH
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0">';
html += '<tr>';
html += '<td style="width:40px;height:1px;background:linear-gradient(90deg,transparent,#E8B4B8);"></td>';
html += '<td style="width:12px;"></td>';
html += '<td style="font-family:Georgia,serif;font-size:14px;color:#D4A574;">❀</td>';
html += '<td style="width:12px;"></td>';
html += '<td style="width:40px;height:1px;background:linear-gradient(90deg,#E8B4B8,transparent);"></td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';

// SOFT DIVIDER
html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(183,110,121,0.15),transparent);"></td></tr></table></td></tr>';

html += '</table>';

// ==================== PERSONAL NOTE SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="background-color:#FFFFFF;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:32px 48px 28px 48px;">';

// Subtle ornament
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:20px;">';
html += '<tr><td align="center" style="font-family:Georgia,serif;font-size:14px;color:rgba(183,110,121,0.4);">✦</td></tr>';
html += '</table>';

// Body text - constrained
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="max-width:460px;width:100%;">';
html += '<tr>';
html += '<td align="left" valign="top">';
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:16px;line-height:1.9;color:#4A4A4A;text-align:left;">';
html += formattedBody;
html += '</div>';
html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// ==================== PROPOSITION BOX ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="background-color:#FFFFFF;">';
html += '<tr>';
html += '<td align="center" valign="top" class="cardPad" style="padding:12px 48px 32px 48px;">';

// Box - Soft rose background
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FDF6F3" style="background-color:#FDF6F3;border:1px solid rgba(183,110,121,0.2);border-radius:16px;overflow:hidden;">';

html += '<tr>';
html += '<td align="center" valign="top" class="propPad" style="padding:32px;">';

// Heading
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#B76E79;margin-bottom:16px;">✦&nbsp;&nbsp;THE PARTNERSHIP&nbsp;&nbsp;✦</div>';

// Copy
html += '<div style="font-family:Georgia,serif;font-size:16px;line-height:1.8;color:#5A4A4A;margin-bottom:8px;max-width:400px;">';
html += 'I\'m looking to partner with the right community to share this philosophy, and I think you might be a perfect fit.';
html += '</div>';

html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:14px;color:#888888;margin-bottom:24px;">';
html += 'Here\'s what I\'m offering:';
html += '</div>';

// 50/50 BADGE - Rose gold
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">';
html += '<tr><td align="center">';
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" bgcolor="#B76E79" style="background-color:#B76E79;background:linear-gradient(135deg,#D4A574 0%,#B76E79 50%,#E8B4B8 100%);border-radius:10px;box-shadow:0 6px 16px rgba(183,110,121,0.3);">';
html += '<tr><td style="padding:14px 28px;font-family:Georgia,serif;font-size:22px;font-weight:500;color:#FFFFFF;letter-spacing:0.5px;">50/50 Lifetime Split</td></tr>';
html += '</table>';
html += '</td></tr>';
html += '</table>';

html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;color:#888888;">on any revenue generated through your channel or audience.</div>';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// ==================== CTA SECTION ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="background-color:#FFFFFF;">';

html += '<tr>';
html += '<td align="center" valign="top" class="cardPad btnCell" style="padding:24px 48px 36px 48px;">';

// Button - Rose gold
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" class="btnWrap">';
html += '<tr>';
html += '<td align="center" valign="middle" bgcolor="#B76E79" style="background-color:#B76E79;background:linear-gradient(135deg,#D4A574 0%,#B76E79 50%,#E8B4B8 100%);border-radius:50px;box-shadow:0 8px 20px rgba(183,110,121,0.35);">';
html += '<a href="mailto:sinadehesh@gmail.com?subject=Re: Daily Sublime Partnership" class="btnLink" style="display:block;padding:18px 48px;font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;font-weight:600;color:#FFFFFF;text-decoration:none;letter-spacing:1.5px;text-transform:uppercase;text-align:center;">Reply to This Email</a>';
html += '</td>';
html += '</tr>';
html += '</table>';

// Secondary link
html += '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;">';
html += '<tr><td align="center" style="font-family:Helvetica Neue,Arial,sans-serif;font-size:13px;color:#999999;line-height:1.6;">';
html += 'or explore <a href="https://daily.sinadehesh.com" style="color:#B76E79;text-decoration:underline;font-weight:500;">daily.sinadehesh.com</a>';
html += '</td></tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

// ==================== SIGNATURE ====================
html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" style="background-color:#FFFFFF;">';

html += '<tr><td style="padding:0 48px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="height:1px;background:linear-gradient(90deg,transparent,rgba(183,110,121,0.15),transparent);"></td></tr></table></td></tr>';

html += '<tr>';
html += '<td align="center" valign="top" style="padding:28px 48px;">';

html += '<div style="font-family:Georgia,serif;font-size:24px;font-style:italic;color:#5A4A4A;margin-bottom:6px;">Sina</div>';
html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#B76E79;font-weight:500;">Creator of Daily Sublime</div>';

html += '</td></tr>';
html += '</table>';

html += '</td></tr>';
html += '</table>';

html += '</td></tr>';

// ==================== FOOTER ====================
html += '<tr>';
html += '<td style="padding:0 8px 8px 8px;">';

html += '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#B76E79" style="background-color:#B76E79;background:linear-gradient(135deg,#B76E79 0%,#D4A574 100%);border-radius:14px;overflow:hidden;">';

html += '<tr>';
html += '<td align="center" valign="top" style="padding:24px 32px;">';

html += '<div style="font-family:Helvetica Neue,Arial,sans-serif;font-size:12px;color:rgba(255,255,255,0.85);line-height:1.8;">';
html += 'If you\'d like a newsletter like this for your audience, contact <a href="mailto:sinadehesh@gmail.com" style="color:#FFFFFF;text-decoration:underline;">sinadehesh@gmail.com</a><br><br>';
html += '<a href="https://daily.sinadehesh.com" style="color:#FFFFFF;text-decoration:underline;font-weight:500;">daily.sinadehesh.com</a>';
html += '</div>';

html += '</td>';
html += '</tr>';
html += '</table>';

html += '</td>';
html += '</tr>';

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
