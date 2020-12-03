<script type="ts">
  import CheckList from '../CheckList/index.svelte';
  import imageUrl from './image.jpg';
  import { items } from './items';
</script>

<div class="card">
  <img src={imageUrl} class="card-img-top" alt="Rubbish Removal" />
  <div class="card-body">
    <h5 class="card-title">What we do</h5>
    <p>
      Here's a list of some of what we can remove and services we can provide. If it's not on the below list please don’t hesitate to call Andrew, there's every
      chance we can remove it as well.
    </p>
    <CheckList {items} />
  </div>
</div>
