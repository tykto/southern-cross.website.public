<script type="ts">
  import ContactInfo from '@app/components/ContactInfo';
  import Footer from '@app/components/Footer';
  import Hero from '@app/components/Hero';
  import Map from '@app/components/Map';
  import Nav from '@app/components/Nav';
  import OurApproachCard from '@app/components/OurApproachCard';
  import TheresMoreCard from '@app/components/TheresMoreCard';
  import WhatWeDoCard from '@app/components/WhatWeDoCard';
</script>

<style>
  h2 {
    color: #00247d;
    font-size: 2.5rem;
  }

  .t-contact {
    background-color: rgba(255, 164, 1, 0.5);
  }

  @media (min-width: 1200px) {
    .card-deck {
      width: 75%;
    }
  }
</style>

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
<div class="t-contact d-flex flex-column align-items-center py-5">
  <h2 class="pb-3">Contact</h2>
  <div class="container">
    <div class="row">
      <ContactInfo class="col-sm" />
      <Map class="col-sm" />
    </div>
  </div>
</div>
<Footer />
