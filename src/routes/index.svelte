<script type="ts">
  import ContactInfo from './_components/contact-info.svelte';
  import Footer from './_components/footer.svelte';
  import Hero from './_components/hero/index.svelte';
  import Map from './_components/map/index.svelte';
  import Nav from './_components/nav/index.svelte';
  import OurApproachCard from './_components/our-approach-card/index.svelte';
  import TheresMoreCard from './_components/theres-more-card/index.svelte';
  import WhatWeDoCard from './_components/what-we-do-card/index.svelte';
</script>

<style>
  h2 {
    color: #00247d;
    font-size: 2.5rem;
  }

  .contact {
    background-color: rgba(255, 164, 1, 0.5);
  }

  @media (min-width: 1200px) {
    .card-deck {
      width: 75%;
    }
  }
</style>

<svelte:head>
  <meta name="description" content="Rubbish removal" />
  <meta name="author" content="Southern Cross Rubbish Removal" />
  <meta name="keywords" content="Rubbish removal" />
  <meta name="robots" content="index, follow" />
  <title>Southern Cross :: Rubbish Removal</title>
</svelte:head>

<Nav />
<Hero />
<div class="d-flex flex-column align-items-center pt-5 pb-5 px-3">
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
      <ContactInfo class="col-sm" />
      <Map class="col-sm" />
    </div>
  </div>
</div>
<Footer />
