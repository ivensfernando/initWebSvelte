<script>
  import { hero } from '../content/home.js';
  import { isValidEmail } from '../utils/validators.js';

  let email = '';
  let error = '';
  let toastMessage = '';
  let toastVisible = false;
  let timeoutId;

  const submitForm = () => {
    error = '';
    if (!isValidEmail(email)) {
      error = 'Please enter a valid email address.';
      return;
    }

    localStorage.setItem('traderspost_email', email);
    toastMessage = "Thanks! We'll reach out soon.";
    toastVisible = true;
    email = '';

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      toastVisible = false;
    }, 3000);
  };
</script>

<section class="hero">
  <div class="container hero-grid">
    <div class="hero-content">
      <p class="eyebrow">Automate from signal to execution</p>
      <h1>{hero.title}</h1>
      <p class="hero-description">{hero.description}</p>
      <form
        class="hero-form"
        on:submit|preventDefault={submitForm}
        aria-label="Email capture"
      >
        <label class="sr-only" for="hero-email">Email address</label>
        <input
          id="hero-email"
          type="email"
          placeholder={hero.emailPlaceholder}
          bind:value={email}
          aria-invalid={error ? 'true' : 'false'}
        />
        <button class="btn primary" type="submit">{hero.primaryCtaLabel}</button>
      </form>
      {#if error}
        <p class="form-error" role="alert">{error}</p>
      {/if}
      <p class="form-disclaimer">
        By registering you agree to our Terms and Privacy Policy.
      </p>
    </div>
    <div class="hero-media">
      <div class="video-preview">
        <span class="play-button" aria-hidden="true">▶</span>
        <div class="video-caption">Watch the 90-second platform tour</div>
      </div>
    </div>
  </div>
  {#if toastVisible}
    <div class="toast" role="status" aria-live="polite">
      {toastMessage}
    </div>
  {/if}
</section>

<style>
  .hero {
    background: var(--color-hero);
    color: var(--color-bg);
    padding: 96px 0;
    position: relative;
  }

  .hero-grid {
    display: grid;
    gap: 48px;
    align-items: center;
  }

  .hero-content h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .hero-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    font-size: 1.1rem;
  }

  .eyebrow {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.7);
  }

  .hero-form {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .hero-form input {
    flex: 1 1 240px;
    border-radius: 999px;
    border: none;
    padding: 14px 18px;
  }

  .form-error {
    margin-top: 8px;
    color: #fca5a5;
  }

  .form-disclaimer {
    margin-top: 12px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .hero-media {
    display: flex;
    justify-content: center;
  }

  .video-preview {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(30, 58, 138, 0.9));
    border-radius: 24px;
    width: min(480px, 100%);
    aspect-ratio: 4 / 3;
    display: grid;
    place-items: center;
    position: relative;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.4);
  }

  .play-button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    color: var(--color-hero);
    display: grid;
    place-items: center;
    font-size: 1.5rem;
  }

  .video-caption {
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
  }

  .toast {
    position: absolute;
    right: 24px;
    bottom: 24px;
    background: rgba(15, 23, 42, 0.9);
    color: #fff;
    padding: 12px 18px;
    border-radius: 12px;
  }

  @media (min-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 64px 0;
    }

    .hero-form {
      flex-direction: column;
    }

    .hero-form input,
    .hero-form button {
      width: 100%;
    }
  }
</style>
