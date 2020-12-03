<script type="ts">
  import CheckListItem from './map-pin-list-item.svelte';
  export let items = [];
</script>

<ul class="fa-ul">
  {#each items as item, i (i)}
    <li>
      <CheckListItem>{item}</CheckListItem>
    </li>
  {/each}
</ul>
