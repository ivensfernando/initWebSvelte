<script>
  export let title;
  export let description;
</script>

<section class="section hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <h1>{title}</h1>
      <p>{description}</p>
      <a class="link" href="/" rel="noreferrer">Watch our video to learn more</a>
    </div>
    <form class="hero-form" aria-label="Email signup">
      <label for="email">Email address</label>
      <div class="input-row">
        <input id="email" type="email" placeholder="you@example.com" />
        <button type="button" class="btn primary">Register</button>
      </div>
      <p class="legal">
        Start your free paper account. By providing your email, you agree to our terms of
        service and privacy policy.
      </p>
    </form>
  </div>
</section>

<style>
  .hero {
    background: var(--brand-50);
  }

  .hero-grid {
    display: grid;
    gap: 28px;
    align-items: center;
  }

  .hero-copy h1 {
    margin-bottom: 12px;
  }

  .hero-copy p {
    max-width: 560px;
  }

  .link {
    font-weight: 600;
    color: var(--brand-700);
    text-decoration: none;
  }

  .hero-form {
    display: grid;
    gap: 12px;
    padding: 24px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: #fff;
    box-shadow: 0 12px 24px rgba(22, 163, 74, 0.08);
  }

  label {
    font-weight: 600;
  }

  .input-row {
    display: grid;
    gap: 12px;
  }

  input {
    border-radius: 999px;
    border: 1px solid var(--border);
    padding: 12px 16px;
    font-size: 1rem;
  }

  .legal {
    font-size: 0.85rem;
    color: var(--muted);
    margin: 0;
  }

  @media (min-width: 768px) {
    .hero-grid {
      grid-template-columns: 1.1fr 0.9fr;
    }

    .input-row {
      grid-template-columns: 1fr auto;
    }
  }
</style>
