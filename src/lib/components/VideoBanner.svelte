<script>
  import VideoModal from './VideoModal.svelte';

  let open = false;
  let trigger;

  const handleOpen = () => {
    open = true;
  };

  const handleClose = () => {
    open = false;
    trigger?.focus();
  };
</script>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2>See how it works!</h2>
      <p>Automate your strategy signals at your broker in minutes.</p>
    </div>
    <button class="banner" type="button" on:click={handleOpen} bind:this={trigger}>
      <div class="banner-content">
        <span class="banner-label">Watch the platform walkthrough</span>
        <h3>Automate your strategy signals at your broker</h3>
      </div>
      <div class="banner-play">▶</div>
    </button>
  </div>
  <VideoModal open={open} on:close={handleClose} videoId="KQ6zr6kCPj8" />
</section>

<style>
  .banner {
    width: 100%;
    border: none;
    border-radius: 28px;
    padding: clamp(24px, 4vw, 40px);
    background: #0f172a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    text-align: left;
    margin-top: 32px;
  }

  .banner-content h3 {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    margin-top: 8px;
  }

  .banner-play {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .banner-label {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 640px) {
    .banner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
