<script>
  export let plan;
  export let billingCycle = 'monthly';

  $: price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
  $: perLabel = billingCycle === 'yearly' ? '/mo billed yearly' : '/mo';
</script>

<article class="plan-card">
  <header>
    {#if plan.badge}
      <span class="popular">{plan.badge}</span>
    {/if}
    <h3>{plan.name}</h3>
    <div class="pricing">
      <div class="strike-row">
        <span class="strike">{plan.strikePrice}</span>
        <span class="discount">{plan.discountLabel}</span>
      </div>
      <div class="price">
        <span class="amount">{price}</span>
        <span class="per">{perLabel}</span>
      </div>
      <p class="yearly-summary">{plan.yearlySummaryText}</p>
    </div>
    <a class="btn primary" href="/register">Get Started</a>
  </header>
  <div class="features">
    <p class="features-label">{plan.name.toUpperCase()} FEATURES</p>
    <ul>
      {#each plan.features as feature}
        <li class:excluded={!feature.included}>
          <span class="icon" aria-hidden="true">
            {#if feature.included}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <path d="M6 12h12" />
              </svg>
            {/if}
          </span>
          <span>{feature.label}</span>
        </li>
      {/each}
    </ul>
  </div>
</article>

<style>
  .plan-card {
    background: #fff;
    border-radius: 20px;
    padding: 28px;
    box-shadow: var(--shadow-sm);
    display: grid;
    gap: 20px;
  }

  .plan-card header {
    display: grid;
    gap: 12px;
  }

  .plan-card h3 {
    font-size: 1.3rem;
  }

  .popular {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    background: #111827;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    width: fit-content;
  }

  .pricing {
    display: grid;
    gap: 8px;
  }

  .strike-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .strike {
    text-decoration: line-through;
    color: var(--color-muted);
    font-weight: 600;
  }

  .discount {
    background: #e0f4e7;
    color: #137333;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 999px;
  }

  .price {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }

  .amount {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .per {
    color: var(--color-muted);
  }

  .yearly-summary {
    font-size: 0.85rem;
    color: var(--color-muted);
  }

  .features {
    border-top: 1px solid #e5e7eb;
    padding-top: 16px;
  }

  .features-label {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 12px 0 0;
    display: grid;
    gap: 10px;
  }

  li {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 8px;
    align-items: start;
    color: var(--color-text);
  }

  .icon {
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #22c55e;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }

  li.excluded {
    color: #9ca3af;
  }

  li.excluded .icon {
    color: #d1d5db;
  }
</style>
