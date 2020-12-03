<script type="ts">
  import CheckList from '../check-list.svelte';
  import imageUrl from './image.jpg';

  const items = [
    'Mixed general hard waste removal',
    'Food waste',
    'Household waste, including furniture, books, mattresses, clothes, kitchen goods,',
    'Electronics TVs, Computers, DVD players, stereos, organs',
    'White goods, Fridge, freezer, dryer, washing machine microwave',
    'Paint, gas bottles, tyres, car batteries, car parts',
    'Builders waste, renovation materials, carpet, cupboards, plaster, tiles, timber, cardboard',
    'Shed/garage waste, tools, timber, metal, plastic, work benches, gardening tools and products',
  ];
</script>

<style>
</style>

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
