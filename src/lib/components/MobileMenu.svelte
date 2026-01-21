<script>
  import { createEventDispatcher, tick } from 'svelte';
  import { createFocusTrap } from '../utils/focusTrap.js';

  export let menuOpen = false;
  export let navLinks = [];

  const dispatch = createEventDispatcher();
  let panel;
  let releaseFocus = () => {};

  const closeMenu = () => {
    dispatch('close');
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  $: if (menuOpen) {
    tick().then(() => {
      releaseFocus = createFocusTrap(panel);
      const first = panel?.querySelector('a, button');
      first?.focus();
      window.addEventListener('keydown', handleKeydown);
    });
  } else {
    releaseFocus();
    window.removeEventListener('keydown', handleKeydown);
  }
</script>

<div class:open={menuOpen} class="panel" bind:this={panel} aria-hidden={!menuOpen}>
  <nav aria-label="Mobile">
    {#each navLinks as link}
      <a href={link.href} on:click={closeMenu}>{link.label}</a>
    {/each}
  </nav>
  <div class="actions">
    <a class="btn secondary" href="/login" on:click={closeMenu}>Login</a>
    <a class="btn primary" href="/register" on:click={closeMenu}>Register</a>
  </div>
</div>

<style>
  .panel {
    width: 100%;
    background: #fff;
    border-radius: 0 0 20px 20px;
    padding: 24px clamp(16px, 4vw, 32px) 32px;
    display: grid;
    gap: 20px;
    box-shadow: 0 16px 24px rgba(15, 23, 42, 0.08);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  .panel.open {
    max-height: 500px;
    opacity: 1;
    pointer-events: all;
  }

  nav {
    display: grid;
    gap: 12px;
  }

  nav a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 600;
  }

  .actions {
    display: grid;
    gap: 12px;
  }

  @media (min-width: 1024px) {
    .panel {
      display: none;
    }
  }
</style>
