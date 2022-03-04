<script type="ts">
  import MapPinList from '$lib/components/MapPinList';
  import { items } from './items';

  let rootClass = '';
  export { rootClass as class };
</script>

<div class={rootClass}>
  <h6 class="font-medium text-sm lg:text-lg pb-2">For all inquiries call, text or email Andrew</h6>
  <ul class="fa-ul text-sm lg:text-base">
    <li><span class="fa-li"><i class="fas fa-phone text-resolution" /></span>0408 242 015</li>
    <li><span class="fa-li"><i class="fas fa-envelope text-resolution" /></span>southerncrossrubbishremovals@gmail.com</li>
  </ul>
  <h6 class="font-medium text-sm lg:text-lg pt-5 pb-2">Payment</h6>
  <p class="text-sm lg:text-base">We accept cash, cheque, credit cards and bank transfer.</p>
  <h6 class="font-medium text-sm lg:text-lg pt-5 pb-2">We service Melbourne's eastern suburbs including:</h6>
  <MapPinList {items} />
</div>
