<script>
  import { onMount, onDestroy } from 'svelte';
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import HowItWorksIntro from './lib/components/HowItWorksIntro.svelte';
  import HowItWorksSteps from './lib/components/HowItWorksSteps.svelte';
  import TryFreeCta from './lib/components/TryFreeCta.svelte';
  import AudienceGrid from './lib/components/AudienceGrid.svelte';
  import FeatureGrid from './lib/components/FeatureGrid.svelte';
  import SecondaryHero from './lib/components/SecondaryHero.svelte';
  import SocialProofAndComparisons from './lib/components/SocialProofAndComparisons.svelte';
  import JournalingPlatforms from './lib/components/JournalingPlatforms.svelte';
  import VideoBanner from './lib/components/VideoBanner.svelte';
  import Testimonials from './lib/components/Testimonials.svelte';
  import FinalCtaBand from './lib/components/FinalCtaBand.svelte';
  import Footer from './lib/components/Footer.svelte';

  let currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const updatePath = (event) => {
    currentPath = event?.detail?.path ?? window.location.pathname;
  };

  onMount(() => {
    updatePath();
    window.addEventListener('popstate', updatePath);
  });

  onDestroy(() => {
    window.removeEventListener('popstate', updatePath);
  });

  const isHome = () => currentPath === '/';
</script>

<Header on:navigate={updatePath} />
<main>
  {#if isHome()}
    <Hero />
    <HowItWorksIntro />
    <HowItWorksSteps />
    <TryFreeCta />
    <AudienceGrid />
    <FeatureGrid />
    <SecondaryHero />
    <SocialProofAndComparisons />
    <JournalingPlatforms />
    <VideoBanner />
    <Testimonials />
    <FinalCtaBand />
  {/if}
</main>
<Footer />
