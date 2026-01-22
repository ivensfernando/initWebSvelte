<script>
  import { testimonials } from '../content/home.js';

  const starCount = 5;
</script>

<section class="section surface">
  <div class="container">
    <div class="section-header">
      <h2>Why Customers Love Us</h2>
      <p>Real stories from traders who rely on BidiinPost daily.</p>
    </div>
    <div class="testimonial-grid">
      {#each testimonials as testimonial}
        <div class="testimonial-card">
          <div class="stars">
            {#each Array(starCount) as _, index}
              <span aria-hidden="true">★</span>
            {/each}
            <span class="rating">5 out of 5</span>
          </div>
          <p class="quote">“{testimonial.quote}”</p>
          <div class="author">
            <div class="avatar">{testimonial.name.charAt(0)}</div>
            <div>
              <strong>{testimonial.name}</strong>
              <div class="role">BidiinPost Customer Review</div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .testimonial-grid {
    display: grid;
    gap: 24px;
    margin-top: 32px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .testimonial-card {
    background: #fff;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 20px 36px rgba(15, 23, 42, 0.12);
    display: grid;
    gap: 16px;
  }

  .stars {
    color: #fbbf24;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .rating {
    color: var(--color-muted);
    font-size: 0.85rem;
    margin-left: 8px;
  }

  .quote {
    color: var(--color-text);
  }

  .author {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--color-primary) 20%, transparent);
    color: var(--color-primary);
    display: grid;
    place-items: center;
    font-weight: 700;
  }

  .role {
    font-size: 0.85rem;
    color: var(--color-muted);
  }

</style>
