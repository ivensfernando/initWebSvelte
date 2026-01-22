<script>
  export let section;
</script>

<section class="section">
  <div class="container">
    <div class="section-header center">
      <h2>{section.title}</h2>
      <p>{section.description}</p>
    </div>
    <div class="grid">
      {#each section.features as feature}
        <div class="feature-card">
          <div class="icon" aria-hidden="true"></div>
          <div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .section-header.center {
    margin-inline: auto;
    text-align: center;
    margin-bottom: 32px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .feature-card {
    background: #fff;
    border-radius: 18px;
    padding: 20px;
    display: grid;
    gap: 12px;
    box-shadow: var(--shadow-sm);
  }

  .feature-card h3 {
    font-size: 1rem;
  }

  .icon {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: #e8f5e9;
  }

  @media (max-width: 1100px) {
    .grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>
