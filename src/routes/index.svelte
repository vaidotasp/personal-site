<script>
  import InfoCard from "../components/InfoCard.svelte";
  import About from "../components/About.svelte";
  import Now from "../components/Now.svelte";
</script>

<InfoCard />
<div class="main">
  <About />
  <Now />
</div>

<style>
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    max-width: 960px;
    margin: 0 auto;
  }

</style>
