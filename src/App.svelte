<script>
  import { onMount, onDestroy } from 'svelte';
  import Header from './lib/components/Header.svelte';
  import Footer from './lib/components/Footer.svelte';
  import HomePage from './routes/+page.svelte';
  import AboutPage from './routes/about/+page.svelte';
  import BlogPage from './routes/blog/+page.svelte';
  import ConnectionsPage from './routes/connections/+page.svelte';
  import DocsPage from './routes/docs/+page.svelte';
  import HowItWorksPage from './routes/how-it-works/+page.svelte';
  import PricingPage from './routes/pricing/+page.svelte';
  import SupportPage from './routes/support/+page.svelte';
  import AssetsPage from './routes/assets/+page.svelte';
  import StocksPage from './routes/assets/stocks/+page.svelte';
  import FuturesPage from './routes/assets/futures/+page.svelte';
  import OptionsPage from './routes/assets/options/+page.svelte';
  import CryptoPage from './routes/assets/crypto/+page.svelte';
  import CryptoFuturesPage from './routes/assets/crypto-futures/+page.svelte';
  import ForexPage from './routes/assets/forex/+page.svelte';

  let currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  let activePage = HomePage;

  const normalizePath = (path) => {
    if (!path) return '/';
    return path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const updatePath = (event) => {
    currentPath = normalizePath(event?.detail?.path ?? window.location.pathname);
  };

  const updateActivePage = () => {
    if (currentPath === '/') {
      activePage = HomePage;
      return;
    }

    if (currentPath === '/assets') {
      activePage = AssetsPage;
      return;
    }

    if (currentPath.startsWith('/assets/')) {
      const slug = currentPath.split('/')[2];
      const assetMap = {
        stocks: StocksPage,
        futures: FuturesPage,
        options: OptionsPage,
        crypto: CryptoPage,
        'crypto-futures': CryptoFuturesPage,
        forex: ForexPage
      };
      activePage = assetMap[slug] ?? AssetsPage;
      return;
    }

    const pageMap = {
      '/about': AboutPage,
      '/blog': BlogPage,
      '/connections': ConnectionsPage,
      '/docs': DocsPage,
      '/how-it-works': HowItWorksPage,
      '/pricing': PricingPage,
      '/support': SupportPage
    };

    activePage = pageMap[currentPath] ?? HomePage;
  };

  onMount(() => {
    updatePath();
    updateActivePage();
    window.addEventListener('popstate', updatePath);
  });

  onDestroy(() => {
    window.removeEventListener('popstate', updatePath);
  });

  $: if (currentPath) {
    updateActivePage();
  }
</script>

<Header on:navigate={updatePath} />
<svelte:component this={activePage} />
<Footer />
