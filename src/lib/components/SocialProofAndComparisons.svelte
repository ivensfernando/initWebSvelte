<script>
  import { socialProof, comparisonGuides } from '../content/home.js';
</script>

<section class="section">
  <div class="container social-proof">
    <div class="metrics">
      {#each socialProof as metric}
        <div class="metric">
          <div class="value">{metric.value}</div>
          <div class="label">{metric.label}</div>
        </div>
      {/each}
    </div>
    <div class="comparisons">
      {#each comparisonGuides as guide}
        <div>
          <h3>{guide.title}</h3>
          <p>{guide.description}</p>
        </div>
        <div class="comparison-links">
          {#each guide.links as link}
            <a href={`/compare/${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .social-proof {
    display: grid;
    gap: 48px;
  }

  .metrics {
    display: grid;
    gap: 24px;
  }

  .metric {
    background: var(--color-hero);
    color: #fff;
    padding: 24px;
    border-radius: 16px;
  }

  .value {
    font-size: 2rem;
    font-weight: 700;
  }

  .label {
    color: rgba(255, 255, 255, 0.7);
  }

  .comparisons {
    display: grid;
    gap: 24px;
    background: #f8fafc;
    border-radius: 20px;
    padding: 32px;
  }

  .comparison-links {
    display: grid;
    gap: 8px;
  }

  .comparison-links a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    .metrics {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .comparisons {
      grid-template-columns: 1fr 1fr;
      align-items: start;
    }

    .comparison-links {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
