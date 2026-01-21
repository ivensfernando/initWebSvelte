<section class="section">
  <div class="container cta">
    <button class="btn primary" type="button" on:click={() => (window.location.href = '/register')}>
      Try it for free
    </button>
    <button class="btn secondary google" type="button" on:click={() => (window.location.href = '/register')}>
      <span class="icon">G</span>
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
    background: #fff;
    color: #4285f4;
    display: grid;
    place-items: center;
    font-weight: 700;
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
