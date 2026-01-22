<script>
  import { onMount, onDestroy, createEventDispatcher } from 'svelte';
  import { navLinks } from '../content/home.js';
  import MobileMenu from './MobileMenu.svelte';

  let menuOpen = false;
  let hasShadow = false;
  let lastFocused;
  let currentPath = '';
  const dispatch = createEventDispatcher();

  const updateShadow = () => {
    hasShadow = window.scrollY > 8;
  };

  const updatePath = () => {
    currentPath = window.location.pathname;
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

  const handleNavClick = (event, href) => {
    event.preventDefault();
    if (currentPath !== href) {
      window.history.pushState({}, '', href);
      currentPath = href;
      dispatch('navigate', { path: href });
    }
    closeMenu();
  };

  onMount(() => {
    updateShadow();
    updatePath();
    window.addEventListener('scroll', updateShadow, { passive: true });
    window.addEventListener('popstate', updatePath);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', updateShadow);
    window.removeEventListener('popstate', updatePath);
  });

  const isActive = (href) => currentPath === href;
</script>

<header class:shadow={hasShadow}>
  <div class="container nav">
    <a class="logo" href="/" data-testid="brand-logo">
      <img
        class="logo-mark"
        src="/brand/logo.png"
        alt="BidiinPost logo"
        data-testid="brand-logo-img"
      />
    </a>
    <nav class="nav-links" aria-label="Primary">
      {#each navLinks as link}
        <a
          href={link.href}
          class:active={isActive(link.href)}
          on:click={(event) => handleNavClick(event, link.href)}
        >
          {link.label}
        </a>
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
    background: #fff;
    transition: box-shadow 0.2s ease, background 0.2s ease;
  }

  header.shadow {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  .nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 16px;
    height: 52px;
    min-height: 52px;
    padding-block: 6px;
    padding-inline: 12px;
  }

  .logo {
    display: flex;
    align-items: center;
    color: var(--color-text);
    text-decoration: none;
  }

  .logo-mark {
    width: 32px;
    height: 32px;
    display: inline-block;
    object-fit: contain;
  }

  .nav-links {
    display: none;
    gap: 20px;
    justify-content: center;
  }

  .nav-links a {
    color: #000;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .nav-links a:hover {
    color: #000;
  }

  .nav-links a.active {
    color: var(--color-primary);
    font-weight: 600;
  }

  .nav-actions {
    display: none;
    gap: 12px;
    justify-content: flex-end;
    align-items: center;
  }

  .nav-actions .btn {
    height: 36px;
    padding: 0 16px;
    font-size: 0.875rem;
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
    background: #000;
    display: block;
  }

  @media (min-width: 768px) {
    .nav {
      height: 56px;
      min-height: 56px;
      padding-inline: 16px;
    }

    .logo-mark {
      width: 44px;
      height: 44px;
    }
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
