<script type="ts">
  import CheckList from '../CheckList/index.svelte';
  import imageUrl from './image.jpg';

  const items = [
    'Green waste removal, tree branches, stumps, logs, grass, and leaves',
    'Brick, concrete, rock and tiles',
    'Soil, clean fill, clay, top soil',
    'Demolition, sheds, garages, carports, pergolas, shop strip outs.',
    'End of lease or moving house cleanouts',
    'Hoarder house/property clean ups',
    'Deceased estates clean ups',
    'Concrete cutting and removal',
    'Tile, slate and screed removal',
    'Concrete grinding',
    'Narrow access Bobcat Earthmoving',
  ];
</script>

<style>
</style>

<div class="card">
  <img src={imageUrl} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">There's more</h5>
    <CheckList {items} />
  </div>
</div>
