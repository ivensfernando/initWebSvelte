<script>
  import { createEventDispatcher, tick } from 'svelte';
  import { createFocusTrap } from '../utils/focusTrap.js';

  export let open = false;
  export let videoId = 'dQw4w9WgXcQ';

  const dispatch = createEventDispatcher();
  let dialog;
  let releaseFocus = () => {};

  const closeModal = () => {
    dispatch('close');
  };

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  $: if (open) {
    tick().then(() => {
      releaseFocus = createFocusTrap(dialog);
      dialog?.focus();
      window.addEventListener('keydown', handleKeydown);
    });
  } else {
    releaseFocus();
    window.removeEventListener('keydown', handleKeydown);
  }
</script>

{#if open}
  <div
    class="overlay"
    role="button"
    tabindex="0"
    aria-label="Close video"
    on:click={closeModal}
    on:keydown={(event) => (event.key === 'Enter' || event.key === ' ') && closeModal()}
  ></div>
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-label="Video preview"
    bind:this={dialog}
    tabindex="-1"
  >
    <button class="close" type="button" on:click={closeModal} aria-label="Close video">
      ✕
    </button>
    <div class="frame">
      <iframe
        title="BidiinPost demo"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 60;
  }

  .modal {
    position: fixed;
    inset: 10% 12%;
    background: #1b2d22;
    border-radius: 20px;
    padding: 24px;
    z-index: 70;
    display: grid;
    gap: 16px;
    border: 1px solid #000;
    box-shadow: var(--shadow-lg);
  }

  .close {
    justify-self: end;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.2rem;
  }

  .frame {
    width: 100%;
    height: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    .modal {
      inset: 12% 6%;
    }
  }
</style>
