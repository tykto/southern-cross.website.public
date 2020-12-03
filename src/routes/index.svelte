<script type="ts">
  import Nav from './_components/nav.svelte';
  import Hero from './_components/hero.svelte';
  import OurApproachCard from './_components/our-approach-card.svelte';
  import WhatWeDoCard from './_components/what-we-do-card.svelte';
  import TheresMoreCard from './_components/theres-more-card.svelte';
  import ContactInfo from './_components/contact-info.svelte';
  import Map from './_components/map.svelte';
  import Footer from './_components/footer.svelte';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Caveat');
</style>

<svelte:head>
  <title>Southern Cross :: Rubbish Removal</title>
  <link rel="stylesheet" href="styles/bootstrap.min.css" />
</svelte:head>

<Nav />
<Hero />
<div class="services d-flex flex-column align-items-center pt-5 pb-5 px-3">
  <h2 class="pb-3">Services</h2>
  <div class="card-deck">
    <OurApproachCard />
    <WhatWeDoCard />
    <TheresMoreCard />
  </div>
  <h5 class="pt-3">We are fully insured for your peace of mind</h5>
</div>
<div class="contact d-flex flex-column align-items-center py-5">
  <h2 class="pb-3">Contact</h2>
  <div class="container">
    <div class="row">
      <ContactInfo />
      <Map />
    </div>
  </div>
</div>
<Footer />
