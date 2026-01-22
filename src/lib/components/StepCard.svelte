<script>
  import AppLogoChip from './AppLogoChip.svelte';
  import logos from '../content/logo-registry.json';

  export let step;
  export let index = 0;

  const isReversed = index % 2 === 1;
</script>

<div class:reversed={isReversed} class="step-card step-bg">
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
        {#each logos.signalSources as logo}
          <AppLogoChip name={logo.name} src={logo.src} />
        {/each}
      </div>
    {:else if step.mediaType === 'code'}
      <div class="code-card">
        <pre><code>{step.codeSample}</code></pre>
      </div>
    {:else if step.mediaType === 'logos-grid'}
      <div class="logo-grid">
        {#each logos.connections as logo}
          <AppLogoChip name={logo.name} src={logo.src} />
        {/each}
      </div>
    {:else if step.mediaType === 'screenshot'}
      <div class="screenshot dashboard-preview">
        <span>Dashboard preview</span>
      </div>
    {/if}
  </div>
  <div class="step-watermark">{step.number}</div>
</div>

<style>
  .step-card {
    position: relative;
    padding: clamp(24px, 4vw, 48px);
    border-radius: 20px;
    display: grid;
    gap: 32px;
    overflow: hidden;
    container-type: inline-size;
  }

  .step-bg {
    background:
      radial-gradient(1200px circle at top right, rgba(0, 150, 255, 0.08), transparent 40%),
      linear-gradient(135deg, #f7fbff, #eef4fb);
  }

  .step-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 95%, rgba(0, 0, 0, 0.02) 100%);
    opacity: 0.2;
    pointer-events: none;
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
    width: 100%;
  }

  .logo-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    width: 100%;
  }

  .code-card {
    width: min(320px, 100%);
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
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px;
    width: 100%;
  }

  .screenshot {
    width: 100%;
    border-radius: 24px;
    background: linear-gradient(135deg, #1e3a8a, #0f172a);
    color: #fff;
    display: grid;
    place-items: center;
    font-weight: 600;
    min-height: 220px;
  }

  .step-watermark {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: clamp(64px, 10vw, 140px);
    opacity: 0.06;
    font-weight: 700;
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
