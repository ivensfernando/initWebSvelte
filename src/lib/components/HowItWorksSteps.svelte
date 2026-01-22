<script>
  import { steps } from '../content/home.js';
  import StepCard from './StepCard.svelte';
</script>

<section class="section">
  <div class="container steps">
    {#each steps as step, index}
      <StepCard {step} {index} />
    {/each}
  </div>
</section>

<style>
  .steps {
    display: grid;
    gap: 24px;
  }

</style>
