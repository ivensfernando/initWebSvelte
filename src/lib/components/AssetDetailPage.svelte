<script>
  import EmailHero from './EmailHero.svelte';
  import SupportedConnections from './SupportedConnections.svelte';
  import AssetTables from './AssetTables.svelte';
  import TradingBotsSection from './TradingBotsSection.svelte';
  import SeeHowItWorksCta from './SeeHowItWorksCta.svelte';
  import ReadyCta from './ReadyCta.svelte';

  export let page;
</script>

<main>
  <EmailHero title={page.title} description={page.heroText} />
  <SupportedConnections
    title={page.connectionsTitle}
    description={page.connectionsText}
    connections={page.connections}
  />
  <AssetTables assetType={page.asset} assetClasses={page.assetClasses} tables={page.tables} />
  <TradingBotsSection
    title={page.botsTitle}
    description={`Build your custom ${page.asset} automated trading bot on the TradersPost platform.`}
  />
  <SeeHowItWorksCta />
  <ReadyCta />
</main>
