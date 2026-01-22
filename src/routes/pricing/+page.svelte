<script>
  import PricingHeroTop from '$lib/components/PricingHeroTop.svelte';
  import BillingToggle from '$lib/components/BillingToggle.svelte';
  import PlanCard from '$lib/components/PlanCard.svelte';
  import PlatformFeatureGrid from '$lib/components/PlatformFeatureGrid.svelte';
  import SeeHowItWorksBlock from '$lib/components/SeeHowItWorksBlock.svelte';
  import CreateAccountStrip from '$lib/components/CreateAccountStrip.svelte';
  import {
    heroTop,
    billingToggle,
    plans,
    pricingIntro,
    platformSection,
    seeHowItWorks,
    createAccountStrip
  } from '$lib/content/pricing-page';

  let billingCycle = 'monthly';
</script>

<main>
  <PricingHeroTop hero={heroTop} />

  <section class="section">
    <div class="container pricing-header">
      <div class="section-header center">
        <h2>{pricingIntro.title}</h2>
        <p>{pricingIntro.description}</p>
      </div>
      <BillingToggle
        value={billingCycle}
        labels={billingToggle}
        on:change={(event) => (billingCycle = event.detail.value)}
      />
      <div class="plans-grid">
        {#each plans as plan}
          <PlanCard {plan} {billingCycle} />
        {/each}
      </div>
      <div class="helper-card">
        <p class="helper-text">{pricingIntro.helperText}</p>
      </div>
    </div>
  </section>

  <PlatformFeatureGrid section={platformSection} />
  <SeeHowItWorksBlock content={seeHowItWorks} />
  <CreateAccountStrip content={createAccountStrip} />
</main>

<style>
  .pricing-header {
    display: grid;
    gap: 32px;
  }

  .section-header.center {
    margin-inline: auto;
    text-align: center;
  }

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 24px;
  }

  .helper-text {
    text-align: center;
    max-width: 640px;
    margin-inline: auto;
  }

  .helper-card {
    background: #f3f4f6;
    border-radius: 16px;
    padding: 16px;
  }

  @media (max-width: 1024px) {
    .plans-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .plans-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
