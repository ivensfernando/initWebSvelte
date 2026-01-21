<script>
  import { audiences } from '../content/home.js';
</script>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>Who is TradersPost for?</h2>
      <p>Flexible automation for every type of trader and strategy builder.</p>
    </div>
    <div class="grid">
      {#each audiences as audience}
        <div class="card">
          <div class="icon">◎</div>
          <h3>{audience.title}</h3>
          <p>{audience.description}</p>
          <a href="/about" class="link">Read more →</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .grid {
    display: grid;
    gap: 24px;
    margin-top: 32px;
  }

  .card {
    padding: 24px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: var(--shadow-sm);
    display: grid;
    gap: 12px;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(37, 99, 235, 0.12);
    color: var(--color-primary);
    display: grid;
    place-items: center;
    font-weight: 700;
  }

  .link {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
