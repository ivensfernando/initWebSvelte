<script>
  export let hero;
</script>

<section class="hero-strip">
  <div class="container hero-content">
    <div class="hero-text">
      <span class="eyebrow">{hero.eyebrow}</span>
      <h1>{hero.title}</h1>
      <p>{hero.paragraph}</p>
    </div>
    <div class="hero-card">
      <span class="card-label">{hero.card.label}</span>
      <div class="card-price">{hero.card.price}</div>
      <span class="card-subtext">{hero.card.subtext}</span>
      <a class="btn primary" href="/register">{hero.ctaLabel}</a>
    </div>
  </div>
</section>

<style>
  .hero-strip {
    background: var(--color-hero);
    color: #fff;
    padding-block: clamp(40px, 6vw, 96px);
  }

  .hero-content {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: clamp(24px, 4vw, 48px);
    align-items: center;
  }

  .hero-text h1 {
    color: #fff;
    margin-bottom: 16px;
  }

  .hero-text p {
    color: rgba(255, 255, 255, 0.8);
  }

  .eyebrow {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: inline-block;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.75);
  }

  .hero-card {
    background: #fff;
    color: var(--color-text);
    border-radius: 24px;
    padding: 32px;
    box-shadow: var(--shadow-sm);
    display: grid;
    gap: 12px;
    justify-items: start;
  }

  .card-label {
    font-weight: 600;
    color: var(--color-muted);
  }

  .card-price {
    font-size: clamp(40px, 3vw, 52px);
    font-weight: 700;
  }

  .card-subtext {
    font-size: 0.95rem;
    color: var(--color-muted);
  }

  @media (max-width: 900px) {
    .hero-content {
      grid-template-columns: 1fr;
    }

    .hero-card {
      width: 100%;
    }
  }
</style>
