<script type="ts">
  import ContactInfo from '$lib/components/ContactInfo';
  import Footer from '$lib/components/Footer';
  import Hero from '$lib/components/Hero';
  import Map from '$lib/components/Map';
  import Nav from '$lib/components/Nav';
  import OurApproachCard from '$lib/components/OurApproachCard';
  import TheresMoreCard from '$lib/components/TheresMoreCard';
  import WhatWeDoCard from '$lib/components/WhatWeDoCard';
</script>

<Nav />
<Hero />
<div class="flex flex-col items-center py-5 md:py-10">
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-resolution pb-3 md:pb-7">Services</h2>
  <div class="flex flex-col lg:flex-row flex-wrap md:w-3/4 lg:w-full 2xl:w-3/4 px-2 lg:px-3 space-y-3 md:space-y-5 lg:space-y-0 lg:space-x-3">
    <OurApproachCard />
    <WhatWeDoCard />
    <TheresMoreCard />
  </div>
  <h5 class="font-medium text-center text-base lg:text-xl pt-3">We are fully insured for your peace of mind</h5>
</div>
<div class="flex flex-col items-center py-5 md:py-10 bg-grandis">
  <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-resolution pb-3 md:pb-7">Contact</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 md:w-3/5 lg:w-11/12 xl:w-3/4 2xl:w-3/5 space-y-5 lg:space-y-0">
    <ContactInfo class="text-sm lg:text-base px-4" />
    <Map class="px-4 ml-auto" />
  </div>
</div>
<Footer />
