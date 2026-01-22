<section class="section">
  <div class="container ready">
    <h2>Ready to automate your trading? Sign up for free today.</h2>
    <a class="btn primary" href="/register">Create Your Account</a>
  </div>
</section>

<style>
  .ready {
    display: grid;
    gap: 16px;
    align-items: center;
    text-align: center;
    padding: clamp(28px, 5vw, 48px);
    border-radius: 24px;
    background: var(--brand-gradient);
    color: #fff;
  }

  .ready h2 {
    color: #fff;
  }

  .ready .btn {
    justify-self: center;
    background: #fff;
    color: var(--brand-700);
    border: none;
  }

  @media (min-width: 768px) {
    .ready {
      grid-template-columns: 1fr auto;
      text-align: left;
    }

    .ready .btn {
      justify-self: end;
    }
  }
</style>
