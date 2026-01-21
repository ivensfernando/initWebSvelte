<script>
  export let step;
  export let index = 0;

  const isReversed = index % 2 === 1;
</script>

<div class:reversed={isReversed} class="step-card">
  <div class="step-content">
    <p class="step-label">Step {step.number}</p>
    <h3>{step.title}</h3>
    <p>{step.body}</p>
    {#if step.ctaLabel}
      <a class="btn secondary" href={step.ctaHref || '#'}>{step.ctaLabel}</a>
    {/if}
  </div>
  <div class="step-media">
    {#if step.mediaType === 'logos'}
      <div class="logo-row">
        {#each step.logos as logo}
          <span class="logo-chip">{logo}</span>
        {/each}
      </div>
    {:else if step.mediaType === 'code'}
      <div class="code-card">
        <pre><code>{step.codeSample}</code></pre>
      </div>
    {:else if step.mediaType === 'logos-grid'}
      <div class="logo-grid">
        {#each step.logos as logo}
          <span class="logo-tile">{logo}</span>
        {/each}
      </div>
    {:else if step.mediaType === 'screenshot'}
      <div class="screenshot dashboard-preview">
        <span>Dashboard preview</span>
      </div>
    {/if}
  </div>
  <div class="watermark">{step.number}</div>
</div>

<style>
  .step-card {
    position: relative;
    padding: clamp(24px, 4vw, 48px);
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(226, 232, 240, 0.7));
    display: grid;
    gap: 32px;
    overflow: hidden;
    container-type: inline-size;
  }

  .step-content {
    display: grid;
    gap: 12px;
    z-index: 1;
    padding-right: clamp(16px, 6vw, 96px);
  }

  .step-content h3 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  .step-content p {
    color: var(--color-muted);
  }

  .step-label {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
  }

  .step-media {
    display: grid;
    place-items: center;
    z-index: 1;
  }

  .logo-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
    width: 100%;
  }

  .logo-chip {
    padding: 10px 14px;
    border-radius: 999px;
    background: #fff;
    box-shadow: var(--shadow-sm);
    font-weight: 600;
    font-size: 0.85rem;
  }

  .code-card {
    width: min(360px, 100%);
    margin: 0 auto;
  }

  pre {
    background: #0f172a;
    color: #e2e8f0;
    padding: 24px;
    border-radius: 14px;
    font-size: 0.85rem;
    box-shadow: var(--shadow-sm);
    overflow-x: auto;
  }

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 12px;
    width: 100%;
  }

  .logo-tile {
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    text-align: center;
    font-weight: 600;
    box-shadow: var(--shadow-sm);
  }

  .screenshot {
    width: 100%;
    border-radius: 16px;
    background: linear-gradient(135deg, #1e3a8a, #0f172a);
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 600;
  }

  .watermark {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: clamp(56px, 8vw, 120px);
    font-weight: 700;
    opacity: 0.06;
    color: #0f172a;
    z-index: 0;
  }

  @media (min-width: 900px) {
    .step-card {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: center;
    }

    .step-card.reversed {
      direction: rtl;
    }

    .step-card.reversed > * {
      direction: ltr;
    }
  }

  @container (max-width: 600px) {
    .step-card {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .step-card {
      padding: 32px;
    }
  }
</style>
