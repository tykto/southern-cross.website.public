<script type="ts">
  import CheckList from '../CheckList/index.svelte';
  import imageUrl from './image.jpg';
  import { items } from './items';
</script>

<div class="relative flex flex-col grow shrink-0 basis-0 rounded border border-gray-200 border-solid">
  <img src={imageUrl} class="" alt="Rubbish Removal" />
  <div class="text-sm lg:text-base p-5">
    <h5 class="font-medium text-base lg:text-xl pb-3">What we do</h5>
    <p class="pb-3">
      Here's a list of some of what we can remove and services we can provide. If it's not on the below list please don't hesitate to call Andrew, there's every
      chance we can remove it as well.
    </p>
    <CheckList {items} />
  </div>
</div>
