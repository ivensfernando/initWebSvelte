<script>
  import AppLogoChip from './AppLogoChip.svelte';
  import logos from '../content/logo-registry.json';
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
      {#each logos.journals as platform}
        <AppLogoChip name={platform.name} src={platform.src} />
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
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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
  }
</style>
