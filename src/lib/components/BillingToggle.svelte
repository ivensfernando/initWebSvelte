<script>
  import { createEventDispatcher } from 'svelte';

  export let value = 'monthly';
  export let labels;

  const dispatch = createEventDispatcher();

  const setValue = (next) => {
    value = next;
    dispatch('change', { value: next });
  };
</script>

<div class="billing-toggle">
  <div class="badge">{labels.badge}</div>
  <div class="toggle" role="group" aria-label="Billing options">
    <button
      type="button"
      class:selected={value === 'monthly'}
      on:click={() => setValue('monthly')}
    >
      {labels.monthlyLabel}
    </button>
    <button
      type="button"
      class:selected={value === 'yearly'}
      on:click={() => setValue('yearly')}
    >
      {labels.yearlyLabel}
    </button>
  </div>
</div>

<style>
  .billing-toggle {
    display: grid;
    gap: 16px;
    justify-items: center;
    margin-top: 24px;
  }

  .badge {
    background: #d7f6d5;
    color: #1b5e20;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    text-align: center;
  }

  .toggle {
    background: #f1f5f0;
    border-radius: 999px;
    padding: 6px;
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
  }

  .toggle button {
    border: none;
    background: transparent;
    padding: 10px 18px;
    border-radius: 999px;
    font-weight: 600;
    color: var(--color-muted);
    cursor: pointer;
  }

  .toggle button.selected {
    background: #fff;
    color: var(--color-text);
    box-shadow: var(--shadow-sm);
  }
</style>
