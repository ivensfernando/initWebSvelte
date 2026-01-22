<script>
  import logoRegistry from '$lib/data/logo-registry.json';

  export let title;
  export let description;
  export let connections = [];

  const registry = logoRegistry?.brokers ?? {};
</script>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div class="logo-grid">
      {#each connections as id}
        {#if registry[id]}
          <div class="logo-card">
            <img src={registry[id].src} alt={registry[id].label} />
            <div class="logo-meta">
              <span>{registry[id].label}</span>
              {#if registry[id].badge}
                <span class="badge">{registry[id].badge}</span>
              {/if}
            </div>
          </div>
        {:else}
          <div class="logo-card">
            <span>{id}</span>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .logo-grid {
    display: grid;
    gap: 16px;
    margin-top: 24px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  .logo-card {
    padding: 16px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: var(--card);
    display: grid;
    gap: 10px;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  .logo-card img {
    height: 36px;
    width: auto;
    object-fit: contain;
  }

  .logo-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 600;
    font-size: 0.9rem;
  }

  .badge {
    background: color-mix(in srgb, var(--brand-500) 12%, transparent);
    color: var(--brand-700);
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.7rem;
    font-weight: 600;
  }
</style>
