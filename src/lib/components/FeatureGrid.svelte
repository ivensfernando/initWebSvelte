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
  }

  .feature-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: rgba(37, 99, 235, 0.15);
    color: var(--color-primary);
    display: grid;
    place-items: center;
  }

  @media (min-width: 1024px) {
    .feature-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
