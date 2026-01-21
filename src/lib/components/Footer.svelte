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
          <a href="/" aria-label={social}>{social}</a>
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
    background: #0f172a;
    color: #e2e8f0;
    padding: 64px 0 40px;
  }

  .footer-top {
    display: grid;
    gap: 40px;
  }

  .brand p {
    margin: 16px 0;
    color: rgba(226, 232, 240, 0.7);
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
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: inline-block;
  }

  .socials {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .socials a {
    color: #e2e8f0;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .columns {
    display: grid;
    gap: 24px;
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
    color: rgba(226, 232, 240, 0.7);
    text-decoration: none;
    font-size: 0.9rem;
  }

  .legal {
    margin-top: 40px;
    font-size: 0.85rem;
    color: rgba(226, 232, 240, 0.6);
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
