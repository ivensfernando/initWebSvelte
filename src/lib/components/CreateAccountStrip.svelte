<script>
  export let content;
</script>

<section class="cta-strip">
  <div class="container strip-content">
    <div>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </div>
    <form class="form" on:submit|preventDefault>
      <label class="sr-only" for="pricing-email">{content.formLabel}</label>
      <div class="field">
        <input id="pricing-email" type="email" placeholder={content.placeholder} required />
        <button class="btn primary" type="submit">{content.ctaLabel}</button>
      </div>
      <p class="legal">{content.legalText}</p>
    </form>
  </div>
</section>

<style>
  .cta-strip {
    background: var(--color-hero);
    color: #fff;
    padding-block: clamp(32px, 5vw, 72px);
  }

  .strip-content {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 32px;
    align-items: center;
  }

  .strip-content h2 {
    color: #fff;
    margin-bottom: 12px;
  }

  .strip-content p {
    color: rgba(255, 255, 255, 0.8);
  }

  .form {
    display: grid;
    gap: 12px;
  }

  .field {
    display: flex;
    gap: 12px;
    background: #fff;
    border-radius: 999px;
    padding: 6px;
    align-items: center;
  }

  input {
    border: none;
    background: transparent;
    padding: 12px 16px;
    flex: 1;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
  }

  .legal {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 900px) {
    .strip-content {
      grid-template-columns: 1fr;
    }

    .field {
      flex-direction: column;
      border-radius: 20px;
      padding: 12px;
      align-items: stretch;
    }

    .field .btn {
      width: 100%;
    }
  }
</style>
