<script>
  import { onMount, onDestroy } from 'svelte';
  import { navLinks } from '../content/home.js';
  import MobileMenu from './MobileMenu.svelte';

  let menuOpen = false;
  let hasShadow = false;
  let lastFocused;

  const updateShadow = () => {
    hasShadow = window.scrollY > 8;
  };

  const toggleMenu = () => {
    if (!menuOpen) {
      lastFocused = document.activeElement;
    }
    menuOpen = !menuOpen;
  };

  const closeMenu = () => {
    menuOpen = false;
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  };

  onMount(() => {
    updateShadow();
    window.addEventListener('scroll', updateShadow, { passive: true });
  });

  onDestroy(() => {
    window.removeEventListener('scroll', updateShadow);
  });
</script>

<header class:shadow={hasShadow}>
  <div class="container nav">
    <a class="logo" href="/">
      <span class="logo-mark" aria-hidden="true"></span>
      <span>BidiinPost</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      {#each navLinks as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </nav>
    <div class="nav-actions">
      <a class="btn secondary" href="/login">Login</a>
      <a class="btn primary" href="/register">Register</a>
    </div>
    <button
      class="menu-toggle"
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
      on:click={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <MobileMenu {menuOpen} on:close={closeMenu} {navLinks} />
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: var(--color-bg);
    transition: box-shadow 0.2s ease, background 0.2s ease;
  }

  header.shadow {
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    gap: 16px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    color: var(--color-text);
    text-decoration: none;
    font-size: 1.1rem;
  }

  .logo-mark {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: inline-block;
  }

  .nav-links {
    display: none;
    gap: 20px;
  }

  .nav-links a {
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .nav-actions {
    display: none;
    gap: 12px;
  }

  .menu-toggle {
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 6px;
  }

  .menu-toggle span {
    width: 24px;
    height: 2px;
    background: var(--color-text);
    display: block;
  }

  @media (min-width: 1024px) {
    .nav-links,
    .nav-actions {
      display: flex;
    }

    .menu-toggle {
      display: none;
    }
  }
</style>
