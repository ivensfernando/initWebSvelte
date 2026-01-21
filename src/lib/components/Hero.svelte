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

    localStorage.setItem('bidiinpost_email', email);
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
      <p class="eyebrow">AUTOMATE FROM SIGNAL TO EXECUTION</p>
      <h1>{hero.title}</h1>
      <p class="hero-description">{hero.description}</p>
      <form
        class="hero-form"
        on:submit|preventDefault={submitForm}
        aria-label="Email capture"
      >
        <label class="sr-only" for="hero-email">Email address</label>
        <div class="input-shell">
          <input
            id="hero-email"
            type="email"
            placeholder={hero.emailPlaceholder}
            bind:value={email}
            aria-invalid={error ? 'true' : 'false'}
          />
          <span class="input-icon" aria-hidden="true">
            ✉
          </span>
        </div>
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
      <div class="video-preview video-card">
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
    font-size: var(--h1);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .hero-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    font-size: clamp(15px, 1.4vw, 18px);
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
    flex-direction: column;
    gap: 12px;
  }

  .input-shell {
    position: relative;
    flex: 1 1 240px;
  }

  .input-shell input {
    width: 100%;
    border-radius: 999px;
    border: none;
    padding: 12px 44px 12px 20px;
    font-size: 1rem;
  }

  .input-icon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(15, 23, 42, 0.5);
    font-size: 1rem;
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
    background: #0f172a;
    border-radius: 20px;
    width: min(520px, 100%);
    display: grid;
    place-items: center;
    position: relative;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.4);
    overflow: hidden;
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

  @media (min-width: 640px) {
    .hero-form {
      flex-direction: row;
      align-items: center;
    }
  }

  @media (min-width: 900px) {
    .hero-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }
  .hero-form button {
    width: 100%;
  }

  @media (min-width: 640px) {
    .hero-form button {
      width: auto;
    }
  }
</style>
