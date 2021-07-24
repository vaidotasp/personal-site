<script>
  import Skills from "./Skills.svelte";
</script>

<div>
  <h4>About Me</h4>
  <p>
    I am a full-stack developer based in Stuttgart, Germany. I build performant, high quality
    applications in React and TypeScript. Currently, I work at<!-- -->
    <a
      class="main-module--link--3u0eq"
      href="https://www.blueraster.com"
      target="_blank"
      rel="noopener noreferrer">Blue Raster</a
    >
    <!-- -->where we build interactive geospatial applications for the web.
  </p>
  <p>When I am not programming I enjoy obsessing over keyboards, photography and coffee.</p>
  <Skills />
</div>

<style>
  h4 {
    font-size: 1.2rem;
  }
  a {
    color: #00f;
    text-decoration: none;
  }
  p {
    line-height: 30px;
    font-size: 1.1rem;
  }
</style>
