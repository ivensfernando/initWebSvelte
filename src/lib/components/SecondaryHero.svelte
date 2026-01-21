<section class="section">
  <div class="container secondary-hero">
    <div class="content">
      <h2>Automated Trading Bots</h2>
      <p>
        Launch fully automated strategies in minutes with smart routing, risk controls, and
        real-time monitoring.
      </p>
      <div class="actions">
        <a class="btn primary" href="/register">Get started</a>
        <a class="btn ghost" href="/how-it-works">Learn more →</a>
      </div>
    </div>
    <div class="preview">
      <div class="screenshot">
        <span>App screenshot</span>
      </div>
    </div>
  </div>
</section>

<style>
  .secondary-hero {
    display: grid;
    gap: 32px;
    align-items: center;
  }

  .content h2 {
    font-size: clamp(2rem, 3vw, 2.6rem);
    margin-bottom: 12px;
  }

  .actions {
    display: flex;
    gap: 16px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .preview {
    display: flex;
    justify-content: center;
  }

  .screenshot {
    width: min(520px, 100%);
    aspect-ratio: 4 / 3;
    border-radius: 24px;
    background: linear-gradient(135deg, #0f172a, #1d4ed8);
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    .secondary-hero {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
