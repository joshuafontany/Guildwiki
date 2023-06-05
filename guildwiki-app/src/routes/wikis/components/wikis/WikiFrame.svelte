<script>
  import { onMount, onDestroy } from 'svelte';

  export let src = '';
  let iframe;

  onMount(() => {
    // Load TiddlyWiki in the iframe
    iframe.src = src;

    // Set up a message listener
    window.addEventListener('message', handleMessage);
  });

  onDestroy(() => {
    // Clean up the message listener
    window.removeEventListener('message', handleMessage);
  });

  $: if (src) {
    // Reload TiddlyWiki if the source changes
    iframe.src = src;
  }

  function handleMessage(event) {
    // Handle messages from the iframe
    const data = event.data;
    // Do something with data
  }
</script>

<iframe bind:this={iframe} title={src} />