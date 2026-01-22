<script>
  export let title;
  export let description;
</script>

<section class="section bots">
  <div class="container bots-grid">
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p class="muted">Take control of your trading with automation you can trust.</p>
    </div>
    <div class="actions">
      <a class="btn primary" href="/register">Get started</a>
      <a class="btn ghost" href="/">Learn more →</a>
    </div>
  </div>
</section>

<style>
  .bots {
    background: var(--brand-50);
  }

  .bots-grid {
    display: grid;
    gap: 20px;
    align-items: center;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .muted {
    color: var(--muted);
  }

  @media (min-width: 768px) {
    .bots-grid {
      grid-template-columns: 1.2fr auto;
      justify-content: space-between;
    }
  }
</style>
