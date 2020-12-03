<script type="ts">
  import CheckList from '../CheckList/index.svelte';
  import imageUrl from './image.jpg';
  import { items } from './items';
</script>

<div class="card">
  <img src={imageUrl} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">There's more</h5>
    <CheckList {items} />
  </div>
</div>
