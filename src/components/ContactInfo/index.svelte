<script type="ts">
  import MapPinList from '@app/components/MapPinList';
  import { items } from './items';

  let rootClass = '';
  export { rootClass as class };
</script>

<style>
  .t-info {
    list-style: none;
    padding: 0;
  }

  .fa-phone,
  .fa-envelope {
    color: #00247d;
  }
</style>

<div class={rootClass}>
  <h6>For all inquiries call, text or email Andrew</h6>
  <ul class="t-info fa-ul">
    <li><span class="fa-li"><i class="fas fa-phone" /></span>0408 242 015</li>
    <li><span class="fa-li"><i class="fas fa-envelope" /></span>southerncrossrubbishremovals@gmail.com</li>
  </ul>
  <h6>Payment</h6>
  <p>We accept cash, cheque, credit cards and bank transfer.</p>
  <h6>We service Melbourne's eastern suburbs including:</h6>
  <MapPinList {items} />
</div>
