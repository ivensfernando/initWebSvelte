<script>
  import AssetClassCard from '$lib/components/AssetClassCard.svelte';
  import ReadyCta from '$lib/components/ReadyCta.svelte';
  import SeeHowItWorksCta from '$lib/components/SeeHowItWorksCta.svelte';
  import { assetCards } from '$lib/data/assets-pages.ts';
</script>

<main>
  <section class="section hero">
    <div class="container hero-content">
      <h1>Asset Classes</h1>
      <p>
        BidiinPost can automate trading strategies in multiple asset classes like futures,
        stocks, options and crypto. Send signals from TradingView or TrendSpider alerts and
        execute orders in your broker!
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container cards-grid">
      {#each assetCards as card}
        <AssetClassCard {...card} />
      {/each}
    </div>
  </section>

  <SeeHowItWorksCta />
  <ReadyCta />
</main>

<style>
  .hero {
    background: var(--brand-50);
  }

  .hero-content {
    display: grid;
    gap: 16px;
    max-width: 720px;
  }

  .cards-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
</style>
