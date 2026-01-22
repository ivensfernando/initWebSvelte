<script>
  import { audiences } from '../content/home.js';
</script>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>Who is BidiinPost for?</h2>
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
    grid-template-columns: repeat(1, minmax(0, 1fr));
    max-width: 900px;
    margin-inline: auto;
  }

  .card {
    padding: 24px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid #000;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    display: grid;
    gap: 12px;
  }

  .icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--color-primary) 20%, transparent);
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
