<script>
  import AssetDetailPage from '$lib/components/AssetDetailPage.svelte';
  import { assetPages } from '$lib/data/assets-pages.ts';

  const page = assetPages.crypto;
</script>

<AssetDetailPage {page} />
