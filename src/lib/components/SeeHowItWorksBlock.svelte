<script>
  export let content;
</script>

<section class="section">
  <div class="container block">
    <div class="text">
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <a class="btn primary" href="/register">{content.ctaLabel}</a>
    </div>
    <div class="video">
      <img src={content.videoThumbnailUrl} alt="Video preview" />
      <div class="play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
</section>

<style>
  .block {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(24px, 5vw, 48px);
    align-items: center;
  }

  .text h2 {
    margin-bottom: 12px;
  }

  .text p {
    margin-bottom: 24px;
  }

  .video {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }

  .video img {
    width: 100%;
    display: block;
    height: auto;
  }

  .play {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.35);
  }

  .play svg {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 900px) {
    .block {
      grid-template-columns: 1fr;
    }
  }
</style>
