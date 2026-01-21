<section class="cta-band">
  <div class="container band">
    <div>
      <h2>Ready to automate your trading?</h2>
      <p>Sign up for free today and start executing your strategies instantly.</p>
    </div>
    <a class="btn light" href="/register">Create Your Account</a>
  </div>
</section>

<style>
  .cta-band {
    background: var(--color-primary);
    color: #fff;
    padding: 56px 0;
  }

  .band {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }

  .band h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    .band {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
