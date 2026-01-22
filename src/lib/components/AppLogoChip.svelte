<script>
  export let name;
  export let src;
</script>

<div class="logo-chip">
  <img src={src} alt={name} loading="lazy" />
  <span>{name}</span>
</div>

<style>
  .logo-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 999px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--color-text);
  }

  .logo-chip img {
    width: 20px;
    height: 20px;
  }
</style>
