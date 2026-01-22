<script>
  export let title;
  export let description;
  export let href;
  export let badge;
</script>

<a class="card" href={href}>
  <div class="card-header">
    <h3>{title}</h3>
    {#if badge}
      <span class="badge">{badge}</span>
    {/if}
  </div>
  <p>{description}</p>
  <span class="link">Learn more →</span>
</a>

<style>
  .card {
    display: grid;
    gap: 12px;
    padding: 24px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: var(--card);
    text-decoration: none;
    color: var(--text);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    min-height: 200px;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(22, 163, 74, 0.12);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: var(--muted);
  }

  .badge {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--brand-700);
    background: color-mix(in srgb, var(--brand-100) 70%, transparent);
    border: 1px solid color-mix(in srgb, var(--brand-200) 80%, transparent);
    white-space: nowrap;
  }

  .link {
    font-weight: 600;
    color: var(--brand-700);
  }
</style>
