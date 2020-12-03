<script type="ts">
  import backgroundUrl from './background.jpg';
</script>

<style>
  div {
    min-height: 600px;
    background: var(--background-url) no-repeat center center;
    background-size: cover;
    margin-top: -186px;
  }

  h3 {
    padding-right: 20px;
    padding-bottom: 20px;
    color: #ffa401;
    font-family: 'Caveat', cursive;
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 3rem;
      padding-right: 50px;
    }
  }

  @media (min-width: 992px) {
    h3 {
      font-size: 4rem;
      padding-right: 100px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 5rem;
      padding-right: 100px;
      padding-bottom: 80px;
    }
  }
</style>

<div class="d-flex justify-content-end align-items-end" style="--background-url:url({backgroundUrl})">
  <h3>Call Andrew for a free quote</h3>
</div>
