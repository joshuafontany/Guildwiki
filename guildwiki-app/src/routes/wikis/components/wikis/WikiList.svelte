<script>
  import { onMount } from 'svelte';

  export let activeWiki = '';
  let wikis = [];

  onMount(async () => {
    // Pull the list of wikis from the WNFS API
    wikis = await getWikisFromWNFS();
  });

  async function getWikisFromWNFS() {
    // Use the Fission WNFS API to get the list of wikis
    // This is a placeholder and will need to be replaced with your actual implementation
    return [];
  }

  function createWiki() {
    // Create a new wiki
    // This is a placeholder and will need to be replaced with your actual implementation
  }

  function deleteWiki(wiki) {
    // Delete a wiki
    // This is a placeholder and will need to be replaced with your actual implementation
  }
</script>

<button on:click={createWiki}>Create Wiki</button>

<ul>
  {#each wikis as wiki}
    <li>
      <button on:click={() => activeWiki = wiki}>Open</button>
      <button on:click={() => deleteWiki(wiki)}>Delete</button>
      {wiki}
    </li>
  {/each}
</ul>
