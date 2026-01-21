<section class="section">
  <div class="container cta">
    <button class="btn primary" type="button" on:click={() => (window.location.href = '/register')}>
      Try it for free
    </button>
    <button class="btn secondary google" type="button" on:click={() => (window.location.href = '/register')}>
      <span class="icon" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="img">
          <path
            fill="#EA4335"
            d="M24 9.5c3.45 0 6.55 1.18 9 3.52l6.7-6.7C35.1 2.6 29.9 0 24 0 14.7 0 6.7 5.3 2.7 13l7.8 6.1C12.4 13.1 17.8 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.1 24.5c0-1.7-.1-3-.4-4.5H24v9h12.4c-.5 2.7-2 5-4.3 6.6l6.7 5.2c3.9-3.6 6.3-8.9 6.3-16.3z"
          />
          <path
            fill="#FBBC05"
            d="M10.5 28.9c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-7.8-6.1C.9 16.3 0 20.1 0 24s.9 7.7 2.7 11l7.8-6.1z"
          />
          <path
            fill="#34A853"
            d="M24 48c5.9 0 11-2 14.7-5.3l-6.7-5.2c-1.8 1.2-4.2 2-8 2-6.2 0-11.6-3.6-13.5-8.6l-7.8 6.1C6.7 42.7 14.7 48 24 48z"
          />
        </svg>
      </span>
      Continue with Google
    </button>
  </div>
</section>

<style>
  .cta {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .google {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 640px) {
    .cta {
      flex-direction: column;
    }

    .cta button {
      width: 100%;
    }
  }
</style>
