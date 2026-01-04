/**
 * Daily Sublime - Google Apps Script
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1FJt_0YhPhdsfURuufY0zVO_ULhCw1b41Kc2nbYukJu0
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Click "Deploy" > "New deployment"
 * 5. Select "Web app" as type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click "Deploy" and authorize when prompted
 * 9. Copy the Web App URL and paste it in gumroad-checkout.php (line ~25)
 */

// Handle POST requests from the subscription form
function doPost(e) {
    try {
        // Open the spreadsheet and get the subscribers sheet
        var spreadsheet = SpreadsheetApp.openById('1FJt_0YhPhdsfURuufY0zVO_ULhCw1b41Kc2nbYukJu0');
        var sheet = spreadsheet.getSheetByName('subscribers');

        // Get email from POST data
        var email = e.parameter.email;

        // Validate email
        if (!email || !isValidEmail(email)) {
            return createResponse({ success: false, message: 'Invalid email address' });
        }

        // Check if email already exists
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) { // Start at 1 to skip header row
            if (data[i][0] && data[i][0].toString().toLowerCase() === email.toLowerCase()) {
                return createResponse({ success: false, message: 'Email already subscribed' });
            }
        }

        // Add new subscriber
        var timestamp = new Date();
        var dayIndex = 0;

        // Append row: email, day_index, timestamp
        sheet.appendRow([email, dayIndex, timestamp]);

        return createResponse({ success: true, message: 'Successfully subscribed!' });

    } catch (error) {
        return createResponse({ success: false, message: 'Server error: ' + error.toString() });
    }
}

// Handle GET requests (for testing)
function doGet(e) {
    return createResponse({ success: true, message: 'API is working. Use POST to subscribe.' });
}

// Validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Create JSON response with CORS headers
function createResponse(data) {
    return ContentService
        .createTextOutput(JSON.stringify(data))
        .setMimeType(ContentService.MimeType.JSON);
}
