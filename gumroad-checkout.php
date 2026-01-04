<?php
/**
 * Daily Sublime - Email Subscription Page
 * Collects emails and adds them to Google Sheets
 */

// =====================================================
// CONFIGURATION - Update these values
// =====================================================

// IMPORTANT: Replace this with your Google Apps Script Web App URL
// Deploy the google-apps-script.js and paste the URL here
$apps_script_url = 'https://script.google.com/macros/s/AKfycbyFu278K91ko15aq7Hu9WadTLaLyCRg-zc7UgnHdBLaNY5Hyhn14mIYBcAy7YOo5s0P/exec';

// Gumroad payment link ($9.99)
$gumroad_url = 'https://sinadehesh.gumroad.com/l/pay';

// Site configuration
$site_name = 'Daily Sublime';
$site_email = 'support@dailysublime.com';
$current_year = date('Y');

// Handle form submission (server-side fallback)
$message = '';
$message_type = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Send to Google Apps Script
    $data = array('email' => $email);
    $options = array(
      'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data),
        'timeout' => 10
      )
    );

    $context = stream_context_create($options);
    $result = @file_get_contents($apps_script_url, false, $context);

    if ($result !== false) {
      $response = json_decode($result, true);
      if (isset($response['success']) && $response['success']) {
        $message = 'Welcome to Daily Sublime! Check your inbox soon.';
        $message_type = 'success';
      } else {
        $message = $response['message'] ?? 'Something went wrong. Please try again.';
        $message_type = 'error';
      }
    } else {
      $message = 'Could not connect. Please try again.';
      $message_type = 'error';
    }
  } else {
    $message = 'Please enter a valid email address.';
    $message_type = 'error';
  }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Join <?php echo $site_name; ?> - Begin Your Journey</title>
  <meta name="description"
    content="Subscribe to <?php echo $site_name; ?>. Begin your journey of contemplative observation.">

  <meta property="og:title" content="Join <?php echo $site_name; ?>">
  <meta property="og:description" content="Reclaim your attention with luxury daily rituals.">
  <meta property="og:type" content="website">

  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet">

  <style>
    :root {
      --bg-primary: #08080a;
      --bg-surface: #0f1013;
      --bg-card: #161820;
      --bg-elevated: #1c1e26;
      --text-main: #f5ece0;
      --text-secondary: #c8bfb0;
      --text-muted: #8a8279;
      --accent-gold: #d4af37;
      --accent-gold-light: #e5c866;
      --accent-gold-dark: #a68a29;
      --accent-amber: #f59e0b;
      --accent-purple: #9d7cff;
      --accent-emerald: #10b981;
      --accent-red: #ef4444;
      --gradient-gold: linear-gradient(135deg, #d4af37 0%, #f5d270 50%, #d4af37 100%);
      --gradient-dark: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-surface) 100%);
      --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);
      --shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.5);
      --shadow-xl: 0 40px 80px rgba(0, 0, 0, 0.6);
      --glow-gold: 0 0 40px rgba(212, 175, 55, 0.4);
      --glow-gold-intense: 0 0 60px rgba(212, 175, 55, 0.6);
      --fs-hero: clamp(2.5rem, 6vw, 4.5rem);
      --fs-xl: clamp(2rem, 4vw, 3rem);
      --fs-lg: clamp(1.5rem, 3vw, 2rem);
      --fs-md: clamp(1.125rem, 2vw, 1.5rem);
      --fs-base: clamp(1rem, 1.5vw, 1.125rem);
      --fs-sm: clamp(0.875rem, 1.2vw, 1rem);
      --fs-xs: clamp(0.75rem, 1vw, 0.875rem);
      --space-xs: 0.5rem;
      --space-sm: 1rem;
      --space-md: 1.5rem;
      --space-lg: 2rem;
      --space-xl: 3rem;
      --space-2xl: 4rem;
      --radius-sm: 0.5rem;
      --radius-md: 1rem;
      --radius-lg: 1.5rem;
      --radius-xl: 2rem;
      --radius-full: 100px;
      --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
      --border-subtle: 1px solid rgba(212, 175, 55, 0.15);
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-primary);
      color: var(--text-main);
      line-height: 1.7;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      -webkit-font-smoothing: antialiased;
    }

    h1,
    h2,
    h3 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.02em;
    }

    ::selection {
      background: var(--accent-gold);
      color: var(--bg-primary);
    }

    a {
      color: var(--accent-gold);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    a:hover {
      color: var(--accent-gold-light);
    }

    /* Page Layout */
    .subscribe-page {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-xl) var(--space-lg);
      background: var(--gradient-dark);
      position: relative;
      overflow: hidden;
    }

    .subscribe-page::before {
      content: '';
      position: absolute;
      width: clamp(300px, 50vw, 600px);
      height: clamp(300px, 50vw, 600px);
      top: -10%;
      right: -10%;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 60%);
      border-radius: 50%;
      pointer-events: none;
    }

    .subscribe-page::after {
      content: '';
      position: absolute;
      width: clamp(200px, 40vw, 500px);
      height: clamp(200px, 40vw, 500px);
      bottom: -15%;
      left: -10%;
      background: radial-gradient(circle, rgba(157, 124, 255, 0.06) 0%, transparent 60%);
      border-radius: 50%;
      pointer-events: none;
    }

    .subscribe-container {
      max-width: 550px;
      width: 100%;
      position: relative;
      z-index: 1;
    }

    /* Header */
    .subscribe-header {
      text-align: center;
      margin-bottom: var(--space-2xl);
    }

    .subscribe-logo {
      display: inline-block;
      margin-bottom: var(--space-lg);
    }

    .subscribe-logo img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid var(--accent-gold);
      box-shadow: var(--glow-gold);
      transition: all 0.5s var(--ease-bounce);
    }

    .subscribe-logo:hover img {
      transform: scale(1.1) rotate(10deg);
      box-shadow: var(--glow-gold-intense);
    }

    .subscribe-title {
      font-size: var(--fs-hero);
      background: linear-gradient(135deg, var(--text-main) 0%, var(--accent-gold) 50%, var(--accent-gold-light) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: var(--space-sm);
    }

    .subscribe-subtitle {
      font-size: var(--fs-md);
      color: var(--text-secondary);
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      max-width: 400px;
      margin: 0 auto;
    }

    /* Form Card */
    .subscribe-card {
      background: linear-gradient(145deg, var(--bg-card), var(--bg-elevated));
      border: var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: var(--space-2xl);
      position: relative;
      overflow: hidden;
    }

    .subscribe-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: var(--gradient-gold);
    }

    .form-group {
      margin-bottom: var(--space-lg);
    }

    .form-label {
      display: block;
      font-size: var(--fs-sm);
      color: var(--text-secondary);
      margin-bottom: var(--space-xs);
      font-weight: 500;
    }

    .form-input {
      width: 100%;
      padding: var(--space-md);
      font-size: var(--fs-base);
      font-family: 'Inter', sans-serif;
      color: var(--text-main);
      background: rgba(0, 0, 0, 0.3);
      border: 2px solid rgba(212, 175, 55, 0.2);
      border-radius: var(--radius-md);
      outline: none;
      transition: all 0.3s ease;
    }

    .form-input::placeholder {
      color: var(--text-muted);
    }

    .form-input:focus {
      border-color: var(--accent-gold);
      box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
    }

    .form-input:invalid:not(:placeholder-shown) {
      border-color: var(--accent-red);
    }

    /* Submit Button */
    .submit-btn {
      width: 100%;
      padding: var(--space-md) var(--space-lg);
      font-size: var(--fs-base);
      font-weight: 600;
      font-family: 'Inter', sans-serif;
      color: var(--bg-primary);
      background: var(--gradient-gold);
      border: none;
      border-radius: var(--radius-full);
      cursor: pointer;
      transition: all 0.4s var(--ease-bounce);
      box-shadow: var(--shadow-md), 0 4px 20px rgba(212, 175, 55, 0.3);
      position: relative;
      overflow: hidden;
    }

    .submit-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, var(--accent-gold-light), var(--accent-amber));
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .submit-btn:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: var(--shadow-lg), var(--glow-gold);
    }

    .submit-btn:hover::before {
      opacity: 1;
    }

    .submit-btn span {
      position: relative;
      z-index: 1;
    }

    .submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none !important;
    }

    /* Messages */
    .message {
      padding: var(--space-md);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-lg);
      font-size: var(--fs-sm);
      text-align: center;
      animation: slideDown 0.4s ease;
    }

    .message.success {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: var(--accent-emerald);
    }

    .message.error {
      background: rgba(239, 68, 68, 0.15);
      border: 1px solid rgba(239, 68, 68, 0.3);
      color: var(--accent-red);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Benefits */
    .benefits {
      margin-top: var(--space-xl);
      padding-top: var(--space-lg);
      border-top: 1px solid rgba(212, 175, 55, 0.1);
    }

    .benefits-title {
      font-size: var(--fs-sm);
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      margin-bottom: var(--space-md);
      text-align: center;
    }

    .benefits-list {
      list-style: none;
      display: grid;
      gap: var(--space-sm);
    }

    .benefits-list li {
      font-size: var(--fs-sm);
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: var(--space-sm);
    }

    .benefits-list li::before {
      content: '✦';
      color: var(--accent-gold);
      font-size: 0.75rem;
    }

    /* Trust */
    .trust-note {
      text-align: center;
      margin-top: var(--space-xl);
      font-size: var(--fs-xs);
      color: var(--text-muted);
    }

    .trust-note svg {
      width: 14px;
      height: 14px;
      vertical-align: middle;
      margin-right: 4px;
      stroke: var(--accent-gold);
    }

    /* Footer */
    .subscribe-footer {
      text-align: center;
      margin-top: var(--space-2xl);
      padding-top: var(--space-lg);
    }

    .footer-links {
      display: flex;
      justify-content: center;
      gap: var(--space-lg);
      margin-bottom: var(--space-md);
      flex-wrap: wrap;
    }

    .footer-links a {
      font-size: var(--fs-sm);
      color: var(--text-muted);
    }

    .footer-links a:hover {
      color: var(--accent-gold);
    }

    .footer-copyright {
      font-size: var(--fs-xs);
      color: var(--text-muted);
    }

    .footer-tagline {
      font-size: var(--fs-sm);
      color: var(--accent-gold);
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      margin-top: var(--space-xs);
    }

    /* Loading State */
    .loading .submit-btn span {
      opacity: 0;
    }

    .loading .submit-btn::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid var(--bg-primary);
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .subscribe-header {
      animation: fadeInUp 0.8s ease forwards;
    }

    .subscribe-card {
      opacity: 0;
      animation: fadeInUp 0.8s 0.2s ease forwards;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .subscribe-page {
        padding: var(--space-lg) var(--space-sm);
      }

      .subscribe-card {
        padding: var(--space-xl) var(--space-lg);
      }

      .footer-links {
        flex-direction: column;
        gap: var(--space-sm);
      }
    }
  </style>
</head>

<body>
  <main class="subscribe-page">
    <div class="subscribe-container">

      <!-- Header -->
      <header class="subscribe-header">
        <a href="index.html" class="subscribe-logo">
          <img src="Gemini_Generated_Image_i11pd9i11pd9i11p-removebg-preview.png" alt="<?php echo $site_name; ?>">
        </a>
        <h1 class="subscribe-title"><?php echo $site_name; ?></h1>
        <p class="subscribe-subtitle">One painting. One practice. Every morning.</p>
      </header>

      <!-- Subscription Form -->
      <div class="subscribe-card">

        <?php if ($message): ?>
          <div class="message <?php echo $message_type; ?>">
            <?php echo htmlspecialchars($message); ?>
          </div>
        <?php endif; ?>

        <form id="subscribeForm" method="POST" action="">
          <div class="form-group">
            <label for="email" class="form-label">Enter your email to begin</label>
            <input type="email" id="email" name="email" class="form-input" placeholder="your@email.com" required
              autocomplete="email">
          </div>

          <button type="submit" class="submit-btn" id="submitBtn">
            <span>Begin the Journey</span>
          </button>
        </form>

        <div class="benefits">
          <p class="benefits-title">What you'll receive</p>
          <ul class="benefits-list">
            <li>A masterwork painting delivered each morning</li>
            <li>Contemplative observations to guide your gaze</li>
            <li>A moment of beauty amidst the digital noise</li>
            <li>The art of slow, intentional observation</li>
          </ul>
        </div>

        <p class="trust-note">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          Free forever. No spam. Unsubscribe anytime.
        </p>
      </div>

      <!-- Footer -->
      <footer class="subscribe-footer">
        <div class="footer-links">
          <a href="index.html">Back to Home</a>
          <a href="mailto:<?php echo $site_email; ?>">Contact</a>
        </div>
        <p class="footer-copyright">© <?php echo $current_year; ?> <?php echo $site_name; ?></p>
        <p class="footer-tagline">Stop the scroll. Start the observation.</p>
      </footer>

    </div>
  </main>

  <script>
    // Configuration from PHP
    const APPS_SCRIPT_URL = '<?php echo $apps_script_url; ?>';
    const GUMROAD_URL = '<?php echo $gumroad_url; ?>';

    document.getElementById('subscribeForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      const form = this;
      const submitBtn = document.getElementById('submitBtn');
      const email = document.getElementById('email').value;

      // Show loading state
      form.classList.add('loading');
      submitBtn.disabled = true;

      try {
        // Submit email to Google Apps Script
        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: 'email=' + encodeURIComponent(email)
        });

        // Show success message briefly, then redirect to Gumroad
        showMessage('success', 'Email saved! Redirecting to payment...');

        // Redirect to Gumroad payment page with email prefilled
        setTimeout(() => {
          window.location.href = GUMROAD_URL + '?email=' + encodeURIComponent(email);
        }, 1500);

      } catch (error) {
        showMessage('error', 'Something went wrong. Please try again.');
        form.classList.remove('loading');
        submitBtn.disabled = false;
      }
    });

    function showMessage(type, text) {
      // Remove existing message
      const existing = document.querySelector('.message');
      if (existing) existing.remove();

      // Create new message
      const message = document.createElement('div');
      message.className = 'message ' + type;
      message.textContent = text;

      // Insert before form
      const form = document.getElementById('subscribeForm');
      form.parentNode.insertBefore(message, form);

      // Auto-remove after 5 seconds
      setTimeout(() => message.remove(), 5000);
    }
  </script>
</body>

</html>