<script>
  import { featureGrid } from '../content/home.js';
</script>

<section class="section surface">
  <div class="container">
    <div class="section-header">
      <h2>All-in-One Trading Bot Platform</h2>
      <p>Everything you need to build, automate, and manage trading workflows.</p>
    </div>
    <div class="feature-grid">
      {#each featureGrid as feature}
        <div class="feature-card">
          <div class="feature-icon">◆</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .feature-grid {
    display: grid;
    gap: 20px;
    margin-top: 32px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .feature-card {
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: var(--shadow-sm);
    display: grid;
    gap: 8px;
    height: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .feature-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--color-primary) 20%, transparent);
    color: var(--color-primary);
    display: grid;
    place-items: center;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
  }

  @media (min-width: 1024px) {
    .feature-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
