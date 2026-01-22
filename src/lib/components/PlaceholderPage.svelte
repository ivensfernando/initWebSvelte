<script>
  export let title;
</script>

<main class="section">
  <div class="container placeholder">
    <h1>{title}</h1>
    <p>We’re preparing this page now. Check back soon for updates.</p>
    <span class="badge">Coming soon</span>
  </div>
</main>

<style>
  .placeholder {
    display: grid;
    gap: 12px;
    max-width: 720px;
  }

  h1 {
    font-size: var(--h1);
  }

  .badge {
    justify-self: flex-start;
    background: color-mix(in srgb, var(--color-primary) 15%, transparent);
    color: var(--color-primary);
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 600;
  }
</style>
