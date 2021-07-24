<nav>
  <a class="initial" href=".">VP</a>
  <a href=".">Home</a>
  <a href="blog">Blog</a>
</nav>

<slot />

<footer>
  <div class="social">
    <a target="_blank" href="https://github.com/vaidotasp">
      <img class="icon" src="github.svg" alt="github" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vaidotaspi">
      <img class="icon" src="twitter.svg" alt="twitter" />
    </a>
    <a target="_blank" rel="noopener noreferrer" href="mailto:vaidotasp@gmail.com">
      <img class="icon" src="mail.svg" alt="email" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/vaidotas-piekus-19a24021/"
    >
      <img class="icon" src="ln.svg" alt="linkedin" />
    </a>
  </div>
</footer>

<style>
  :global(body) {
    margin: 0;
    padding: 0.5rem 2rem 0.5rem 3rem;
    font-family:'Work Sans','Helvetica Neue','Segoe UI','Helvetica','Arial', sans-serif;
    color: hsla(0,0%,0%,0.8);
  }

  nav {
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 15px;
    align-items: center;
  }

  a {
    color: #020024;
    font-size: 1.2rem;
    text-decoration: none;
  }

  .initial {
    font-size: 2.2rem;
    font-weight: bold;
    line-height: 1.1;
  }

  footer {
    padding-top: 15px;
    width: 40rem;
    margin: 60px auto 0;
    border-top: 1px solid #000;
  }

  .social {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-bottom: 10px;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 20px;
  }
</style>
