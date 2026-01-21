<script>
  import { howItWorks } from '../content/home.js';
</script>

<section class="section">
  <div class="container intro">
    <h2>{howItWorks.introTitle}</h2>
    <p>{howItWorks.introDescription}</p>
  </div>
</section>

<style>
  .intro {
    text-align: center;
    max-width: 720px;
  }

  .intro h2 {
    font-size: var(--h2);
    margin-bottom: 16px;
  }

  .intro p {
    color: var(--color-muted);
  }
</style>
