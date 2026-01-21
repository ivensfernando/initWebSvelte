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

{#if menuOpen}
  <div class="overlay" on:click={closeMenu}></div>
{/if}

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
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.4);
    z-index: 40;
  }

  .panel {
    position: fixed;
    top: 72px;
    left: 16px;
    right: 16px;
    background: var(--color-bg);
    border-radius: 16px;
    padding: 24px;
    display: grid;
    gap: 20px;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.18);
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 50;
  }

  .panel.open {
    transform: translateY(0);
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
    .panel,
    .overlay {
      display: none;
    }
  }
</style>
