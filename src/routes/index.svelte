<script type="ts">
  import '../style/all';
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Caveat');
</style>

<svelte:head>
  <title>Southern Cross :: Rubbish Removal</title>
  <link rel="stylesheet" href="styles/bootstrap.min.css" />
</svelte:head>

<nav class="navbar"><a class="navbar-brand" href="index.html"> <img src="images/logo.jpg" class="img-fluid" alt="Southern Cross Rubbish Removal" /> </a></nav>
<div class="hero d-flex justify-content-end align-items-end">
  <h3 class="tagline">Call Andrew for a free quote</h3>
</div>
<div class="services d-flex flex-column align-items-center pt-5 pb-5 px-3">
  <h2 class="pb-3">Services</h2>
  <div class="card-deck">
    <div class="card">
      <img src="images/trucks.jpg" class="card-img-top" alt="Trucks" />
      <div class="card-body">
        <h5 class="card-title">Our Approach</h5>
        <p class="card-text">
          Southern Cross Rubbish Removal is a full-service rubbish removal business, we will pick up and remove any unwanted rubbish from inside or outside your
          house, work, land, building site or farm regardless of how big or small the job is.
        </p>
        <p class="card-text">Being a small business, we offer a personal service at a fair upfront price, so there is no bill shock at the end of the job.</p>
        <p class="card-text">
          Of course, we offer free quotes, and come to you at a convenient day and time that suits you. Alternatively, you can email or Text pictures of your
          rubbish along with an approximate size, description of the rubbish and location we can email or txt back an estimate.
        </p>
        <p class="card-text">
          Caring for the environment is extremely important to us, so we will always aim to recycle or donate goods which are in good working order to local
          charities, first before disposing to landfills.
        </p>
      </div>
    </div>
    <div class="card">
      <img src="images/before-after.jpg" class="card-img-top" alt="Rubbish Removal" />
      <div class="card-body">
        <h5 class="card-title">What we do</h5>
        <p>
          Here's a list of some of what we can remove and services we can provide. If it's not on the below list please don’t hesitate to call Andrew, there's
          every chance we can remove it as well.
        </p>
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-check" /></span>Mixed general hard waste removal</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Food waste</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Household waste, including furniture, books, mattresses, clothes, kitchen goods,</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Electronics TVs, Computers, DVD players, stereos, organs</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>White goods, Fridge, freezer, dryer, washing machine microwave</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Paint, gas bottles, tyres, car batteries, car parts</li>
          <li>
            <span class="fa-li"><i class="fas fa-check" /></span>Builders waste, renovation materials, carpet, cupboards, plaster, tiles, timber, cardboard
          </li>
          <li>
            <span class="fa-li"><i class="fas fa-check" /></span>Shed/garage waste, tools, timber, metal, plastic, work benches, gardening tools and products
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <img src="images/bobcat.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">There's more</h5>
        <ul class="fa-ul">
          <li><span class="fa-li"><i class="fas fa-check" /></span>Green waste removal, tree branches, stumps, logs, grass, and leaves</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Brick, concrete, rock and tiles</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Soil, clean fill, clay, top soil</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Demolition, sheds, garages, carports, pergolas, shop strip outs.</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>End of lease or moving house cleanouts</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Hoarder house/property clean ups</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Deceased estates clean ups</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Concrete cutting and removal</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Tile, slate and screed removal</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Concrete grinding</li>
          <li><span class="fa-li"><i class="fas fa-check" /></span>Narrow access Bobcat Earthmoving</li>
        </ul>
      </div>
    </div>
  </div>
  <h5 class="pt-3">We are fully insured for your peace of mind</h5>
</div>
<div class="contact d-flex flex-column align-items-center py-5">
  <h2 class="pb-3">Contact</h2>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h6>For all inquiries call, text or email Andrew</h6>
        <ul class="contact-info fa-ul">
          <li><span class="fa-li"><i class="fas fa-phone" /></span>0408 242 015</li>
          <li><span class="fa-li"><i class="fas fa-envelope" /></span>southerncrossrubbishremovals@gmail.com</li>
        </ul>
        <h6>Payment</h6>
        <p>We accept cash, cheque, credit cards and bank transfer.</p>
        <h6>We service Melbourne's eastern suburbs including:</h6>
        <ul class="suburbs fa-ul">
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Bayswater</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Boronia</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Chirnside Park</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Croydon</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Ferntree Gully</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Kilsyth</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Lilydale</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Mooroolbark</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Montrose</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Ringwood</li>
          <li><span class="fa-li"><i class="fas fa-map-marker-alt" /></span>Wantirna</li>
        </ul>
      </div>
      <div class="col-sm"><img src="images/map.png" class="card-img-top" alt="Map" /></div>
    </div>
  </div>
</div>
<div class="footer d-flex justify-content-between py-3 px-3">
  <span>&copy; 2019 Southern Cross Rubbish Removal</span>
  <span>site created by <a href="http://www.tykto.com" target="_blank">tykto.com</a></span>
</div>
