<script type="ts">
  import CheckList from '../CheckList/index.svelte';
  import imageUrl from './image.jpg';
  import { items } from './items';
</script>

<div class="relative flex flex-col grow shrink-0 basis-0 rounded border border-gray-200 border-solid">
  <img src={imageUrl} class="" alt="..." />
  <div class="text-sm lg:text-base p-5">
    <h5 class="font-medium text-base lg:text-xl pb-3">There's more</h5>
    <CheckList {items} />
  </div>
</div>
