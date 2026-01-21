<script>
  import { steps } from '../content/home.js';
  import StepCard from './StepCard.svelte';
</script>

<section class="section">
  <div class="container steps">
    {#each steps as step, index}
      <StepCard {step} {index} />
      {#if index < steps.length - 1}
        <div class="arrow" aria-hidden="true">↓</div>
      {/if}
    {/each}
  </div>
</section>

<style>
  .steps {
    display: grid;
    gap: 24px;
  }

  .arrow {
    text-align: center;
    font-size: 1.5rem;
    color: var(--color-muted);
  }
</style>
