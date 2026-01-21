<script>
  import { journalingPlatforms } from '../content/home.js';
</script>

<section class="section">
  <div class="container journaling">
    <div class="content">
      <h2>Compatible with trade journaling platforms</h2>
      <p>Sync your trades with the platforms you already rely on.</p>
      <div class="cta-row">
        <a class="btn primary" href="/integrations/journals">Learn More</a>
        <span class="badge">Coming Soon</span>
      </div>
    </div>
    <div class="logos">
      {#each journalingPlatforms as platform}
        <div class="logo">{platform}</div>
      {/each}
    </div>
  </div>
</section>

<style>
  .journaling {
    display: grid;
    gap: 32px;
    align-items: center;
  }

  .logos {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .logo {
    background: #fff;
    padding: 16px;
    border-radius: 12px;
    text-align: center;
    box-shadow: var(--shadow-sm);
    font-weight: 600;
  }

  .cta-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 16px;
  }

  .badge {
    background: #e2e8f0;
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 0.8rem;
    color: var(--color-muted);
  }

  @media (min-width: 1024px) {
    .journaling {
      grid-template-columns: 1fr 1fr;
    }

    .logos {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
