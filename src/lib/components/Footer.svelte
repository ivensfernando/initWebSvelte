<script>
  import { footerColumns, legalDisclaimer } from '../content/home.js';

  const socials = ['Facebook', 'Instagram', 'Twitter/X', 'GitHub', 'YouTube', 'Discord'];
</script>

<footer class="footer">
  <div class="container footer-top">
    <div class="brand">
      <div class="logo">
        <span class="logo-mark"></span>
        <span>BidiinPost</span>
      </div>
      <p>
        Automate your trading across brokers and exchanges with a single, secure workflow.
      </p>
      <div class="socials">
        {#each socials as social}
          <a href="/" aria-label={social}>
            <span class="social-icon">{social.charAt(0)}</span>
          </a>
        {/each}
      </div>
    </div>
    <div class="columns">
      {#each footerColumns as column}
        <div>
          <h4>{column.title}</h4>
          <ul>
            {#each column.links as link}
              <li><a href="/">{link}</a></li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
  <div class="container legal">
    <p>{legalDisclaimer}</p>
    <span>© 2024 BidiinPost. All rights reserved.</span>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(135deg, #1b2d22, #2f4f3a);
    color: #f2f7ef;
    padding: 64px 0 40px;
  }

  .footer-top {
    display: grid;
    gap: 40px;
  }

  .brand p {
    margin: 16px 0;
    color: rgba(242, 247, 239, 0.75);
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
  }

  .logo-mark {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: var(--color-primary);
    display: inline-block;
    border: 2px solid #000;
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .socials a {
    color: #f2f7ef;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .social-icon {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid #000;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .columns {
    display: grid;
    gap: 20px;
  }

  .columns h4 {
    margin-bottom: 12px;
  }

  .columns ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
  }

  .columns a {
    color: rgba(242, 247, 239, 0.75);
    text-decoration: none;
    font-size: 0.9rem;
  }

  .legal {
    margin-top: 40px;
    font-size: 0.85rem;
    color: rgba(242, 247, 239, 0.65);
    display: grid;
    gap: 12px;
  }

  @media (min-width: 768px) {
    .footer-top {
      grid-template-columns: 1.2fr 2fr;
    }

    .columns {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }
</style>
