/**
 * =====================================================
 * DAILY SUBLIME - COLD OUTREACH SCRIPT
 * =====================================================
 * 
 * This script reads influencer data from a Google Sheet,
 * populates an HTML email template, and creates Gmail drafts
 * (or sends emails directly if configured).
 * 
 * SETUP:
 * 1. Create a Google Sheet with these columns (Row 1 = Headers):
 *    A: Recipient_Email
 *    B: Influencer_Name
 *    C: Profile_Pic_Url
 *    D: Custom_Hook
 *    E: Video_Topic
 *    F: Status
 * 
 * 2. Copy this script to Extensions > Apps Script
 * 3. Update the CONFIG section below
 * 4. Run the main function: processOutreachEmails()
 * 
 * =====================================================
 */

// ============ CONFIGURATION ============
const CONFIG = {
  // Set to true to send emails immediately, false to create drafts
  SEND_IMMEDIATELY: false,
  
  // Email subject line (can use {{placeholders}})
  EMAIL_SUBJECT: "Daily Sublime × {{Influencer_Name}} — A Curator Invitation",
  
  // Your sender name
  SENDER_NAME: "Daily Sublime",
  
  // Static "Best of" gallery images (update these URLs)
  GALLERY: {
    mini1_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    mini1_title: "Mona Lisa",
    mini1_year: "1503",
    
    mini2_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VanGogh-starry_night_ballance1.jpg/1280px-VanGogh-starry_night_ballance1.jpg",
    mini2_title: "Starry Night",
    mini2_year: "1889",
    
    mini3_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg",
    mini3_title: "Girl with a Pearl Earring",
    mini3_year: "1665"
  },
  
  // Exercise text for the email
  EXERCISE_TEXT: "Take a moment today to look at a piece of art — not to analyze it, but to simply be present with it. What do you notice? What do you feel?"
};

// ============ HTML TEMPLATE ============
const HTML_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Sublime - Partner Proposal</title>
</head>
<body style="margin:0;padding:0;background:#e3eaff;font-family:Arial,sans-serif;">

<!-- DAILY SUBLIME – PARTNER SPOTLIGHT (dynamic) -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0;padding:0;">
  <tr>
    <td bgcolor="#e3eaff" style="background:#e3eaff;padding:22px 22px 22px 22px;">

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
        style="background:#ffffff;border:1px solid #e9edf3;border-radius:14px;">
        <tr>
          <td style="padding:18px 18px 16px 18px;">

            <!-- Label -->
            <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.2;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:rgba(17,17,17,0.65);">
              Proposed Partner
            </div>

            <!-- Accent line -->
            <div style="width:44px;height:4px;background:#fed54a;border-radius:999px;margin:10px 0 14px 0;"></div>

            <!-- Partner info row -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>
                <!-- Profile Picture -->
                <td width="60" valign="top" style="padding-right:16px;">
                  <div style="width:60px;height:60px;border-radius:50%;overflow:hidden;background:#e3eaff;">
                    <img
                      src="{{Profile_Pic_Url}}"
                      alt="{{Influencer_Name}}"
                      width="60"
                      height="60"
                      style="display:block;width:60px;height:60px;border-radius:50%;object-fit:cover;border:0;outline:none;text-decoration:none;"
                    />
                  </div>
                </td>
                <!-- Partner Details -->
                <td valign="middle">
                  <div style="font-family:Arial,sans-serif;font-size:18px;line-height:1.3;font-weight:700;color:#111111;">
                    {{Influencer_Name}}
                  </div>
                  <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#6b7280;margin-top:4px;">
                    Curator of the <strong style="color:#111111;">{{Custom_Hook}}</strong> Edition
                  </div>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>

<!-- DAILY SUBLIME – MINI GALLERY (3 artworks, dynamic) -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0;padding:0;">
  <tr>
    <td bgcolor="#e3eaff" style="background:#e3eaff;padding:0 22px 22px 22px;">

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
        style="background:#ffffff;border:1px solid #e9edf3;border-radius:14px;">
        <tr>
          <td style="padding:18px 18px 16px 18px;">

            <!-- Label -->
            <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.2;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:rgba(17,17,17,0.65);">
              Mini gallery
            </div>

            <!-- Accent line -->
            <div style="width:44px;height:4px;background:#fed54a;border-radius:999px;margin:10px 0 14px 0;"></div>

            <!-- 3-column gallery -->
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
              <tr>

                <!-- Item 1 -->
                <td width="33.33%" valign="top" style="padding-right:10px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="border-radius:12px;overflow:hidden;">
                        <img
                          src="{{mini1_url}}"
                          alt="{{mini1_title}}"
                          width="180"
                          style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:10px;">
                        <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.45;color:#111111;">
                          <span style="display:inline-block;width:8px;height:8px;background:#fed54a;border-radius:999px;vertical-align:middle;margin-right:8px;"></span>
                          <span style="font-weight:700;">{{mini1_title}}</span>
                          <span style="color:#6b7280;"> — {{mini1_year}}</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>

                <!-- Item 2 -->
                <td width="33.33%" valign="top" style="padding-left:5px;padding-right:5px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="border-radius:12px;overflow:hidden;">
                        <img
                          src="{{mini2_url}}"
                          alt="{{mini2_title}}"
                          width="180"
                          style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:10px;">
                        <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.45;color:#111111;">
                          <span style="display:inline-block;width:8px;height:8px;background:#fed54a;border-radius:999px;vertical-align:middle;margin-right:8px;"></span>
                          <span style="font-weight:700;">{{mini2_title}}</span>
                          <span style="color:#6b7280;"> — {{mini2_year}}</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>

                <!-- Item 3 -->
                <td width="33.33%" valign="top" style="padding-left:10px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="border-radius:12px;overflow:hidden;">
                        <img
                          src="{{mini3_url}}"
                          alt="{{mini3_title}}"
                          width="180"
                          style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:10px;">
                        <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.45;color:#111111;">
                          <span style="display:inline-block;width:8px;height:8px;background:#fed54a;border-radius:999px;vertical-align:middle;margin-right:8px;"></span>
                          <span style="font-weight:700;">{{mini3_title}}</span>
                          <span style="color:#6b7280;"> — {{mini3_year}}</span>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>

              </tr>
            </table>

          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>

<!-- DAILY SUBLIME – THE EXERCISE (dynamic) -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0;padding:0;">
  <tr>
    <td bgcolor="#e3eaff" style="background:#e3eaff;padding:0 22px 22px 22px;">

      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
        style="background:#ffffff;border:1px solid #e9edf3;border-radius:14px;">
        <tr>
          <td style="padding:18px 18px 16px 18px;">

            <!-- Label -->
            <div style="font-family:Arial,sans-serif;font-size:12px;line-height:1.2;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:rgba(17,17,17,0.65);">
              The exercise
            </div>

            <!-- Accent line -->
            <div style="width:44px;height:4px;background:#fed54a;border-radius:999px;margin:10px 0 12px 0;"></div>

            <!-- Prompt -->
            <div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.85;color:#111111;">
              {{exercise}}
            </div>

          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;

// ============ MAIN FUNCTION ============
/**
 * Main function to process outreach emails.
 * Run this from the Apps Script editor or set up a trigger.
 */
function processOutreachEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  
  // Find column indices
  const colIndex = {
    email: headers.indexOf("Recipient_Email"),
    name: headers.indexOf("Influencer_Name"),
    profilePic: headers.indexOf("Profile_Pic_Url"),
    hook: headers.indexOf("Custom_Hook"),
    topic: headers.indexOf("Video_Topic"),
    status: headers.indexOf("Status")
  };
  
  // Validate columns exist
  for (const [key, index] of Object.entries(colIndex)) {
    if (index === -1) {
      throw new Error(`Column not found: ${key}. Make sure your headers match exactly.`);
    }
  }
  
  let processedCount = 0;
  
  // Process each row (skip header)
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const status = row[colIndex.status];
    
    // Skip if already processed
    if (status && status.toString().trim() !== "") {
      continue;
    }
    
    const recipientEmail = row[colIndex.email];
    const influencerName = row[colIndex.name];
    const profilePicUrl = row[colIndex.profilePic];
    const customHook = row[colIndex.hook];
    const videoTopic = row[colIndex.topic];
    
    // Skip if no email
    if (!recipientEmail || recipientEmail.toString().trim() === "") {
      continue;
    }
    
    // Build the email
    const htmlBody = populateTemplate({
      Influencer_Name: influencerName,
      Profile_Pic_Url: profilePicUrl,
      Custom_Hook: customHook,
      Video_Topic: videoTopic
    });
    
    const subject = CONFIG.EMAIL_SUBJECT
      .replace(/\{\{Influencer_Name\}\}/g, influencerName)
      .replace(/\{\{Custom_Hook\}\}/g, customHook)
      .replace(/\{\{Video_Topic\}\}/g, videoTopic);
    
    // Create draft or send
    if (CONFIG.SEND_IMMEDIATELY) {
      GmailApp.sendEmail(recipientEmail, subject, "", {
        htmlBody: htmlBody,
        name: CONFIG.SENDER_NAME
      });
      sheet.getRange(i + 1, colIndex.status + 1).setValue("SENT");
    } else {
      GmailApp.createDraft(recipientEmail, subject, "", {
        htmlBody: htmlBody,
        name: CONFIG.SENDER_NAME
      });
      sheet.getRange(i + 1, colIndex.status + 1).setValue("DRAFTED");
    }
    
    processedCount++;
  }
  
  // Show completion message
  const action = CONFIG.SEND_IMMEDIATELY ? "sent" : "drafted";
  SpreadsheetApp.getUi().alert(`Done! ${processedCount} email(s) ${action}.`);
}

/**
 * Populates the HTML template with data.
 * @param {Object} data - Object containing placeholder values
 * @returns {string} - Populated HTML
 */
function populateTemplate(data) {
  let html = HTML_TEMPLATE;
  
  // Replace influencer-specific placeholders
  html = html.replace(/\{\{Influencer_Name\}\}/g, data.Influencer_Name || "");
  html = html.replace(/\{\{Profile_Pic_Url\}\}/g, data.Profile_Pic_Url || "");
  html = html.replace(/\{\{Custom_Hook\}\}/g, data.Custom_Hook || "");
  html = html.replace(/\{\{Video_Topic\}\}/g, data.Video_Topic || "");
  
  // Replace static gallery placeholders
  html = html.replace(/\{\{mini1_url\}\}/g, CONFIG.GALLERY.mini1_url);
  html = html.replace(/\{\{mini1_title\}\}/g, CONFIG.GALLERY.mini1_title);
  html = html.replace(/\{\{mini1_year\}\}/g, CONFIG.GALLERY.mini1_year);
  
  html = html.replace(/\{\{mini2_url\}\}/g, CONFIG.GALLERY.mini2_url);
  html = html.replace(/\{\{mini2_title\}\}/g, CONFIG.GALLERY.mini2_title);
  html = html.replace(/\{\{mini2_year\}\}/g, CONFIG.GALLERY.mini2_year);
  
  html = html.replace(/\{\{mini3_url\}\}/g, CONFIG.GALLERY.mini3_url);
  html = html.replace(/\{\{mini3_title\}\}/g, CONFIG.GALLERY.mini3_title);
  html = html.replace(/\{\{mini3_year\}\}/g, CONFIG.GALLERY.mini3_year);
  
  // Replace exercise placeholder
  html = html.replace(/\{\{exercise\}\}/g, CONFIG.EXERCISE_TEXT);
  
  return html;
}

/**
 * Creates a custom menu when the spreadsheet opens.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("📧 Cold Outreach")
    .addItem("Process Emails", "processOutreachEmails")
    .addItem("Test with First Row", "testFirstRow")
    .addToUi();
}

/**
 * Test function - processes only the first data row.
 * Useful for testing before running the full batch.
 */
function testFirstRow() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  if (data.length < 2) {
    SpreadsheetApp.getUi().alert("No data rows found!");
    return;
  }
  
  const headers = data[0];
  const row = data[1];
  
  const colIndex = {
    email: headers.indexOf("Recipient_Email"),
    name: headers.indexOf("Influencer_Name"),
    profilePic: headers.indexOf("Profile_Pic_Url"),
    hook: headers.indexOf("Custom_Hook"),
    topic: headers.indexOf("Video_Topic")
  };
  
  const htmlBody = populateTemplate({
    Influencer_Name: row[colIndex.name],
    Profile_Pic_Url: row[colIndex.profilePic],
    Custom_Hook: row[colIndex.hook],
    Video_Topic: row[colIndex.topic]
  });
  
  const subject = CONFIG.EMAIL_SUBJECT
    .replace(/\{\{Influencer_Name\}\}/g, row[colIndex.name]);
  
  // Always create draft for test
  GmailApp.createDraft(row[colIndex.email], subject, "", {
    htmlBody: htmlBody,
    name: CONFIG.SENDER_NAME
  });
  
  SpreadsheetApp.getUi().alert(`Test draft created for: ${row[colIndex.email]}`);
}
