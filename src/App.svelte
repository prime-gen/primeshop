<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Nav from './lib/Nav.svelte';
  import ProductList from './lib/ProductList.svelte';
  import { Router, Link, Route } from "svelte-routing";
  import Camisa from './lib/Camisa.svelte';
  import Home from './lib/Home.svelte';
    import Footer from './lib/Footer.svelte';
</script>


<Router>
  <main class="h-full relative min-h-full">
    <!-- <Nav /> -->

    <!-- <div class="
      bg-no-repeat bg-cover left-0 
      h-28 sm:h-48 md:h-64 lg:h-[20rem] xl:h-[21rem] 
      w-screen
      bg-center 
      overflow-hidden bg-clip-padding" 
    style="background-image: url('src/assets/b3.jpg');" >
    </div> -->
    
    <img src="https://iili.io/H4eeMS1.jpg" class="w-screen" alt="">

    <div class=" container pb-56 md:pb-72 lg:pb-80 xl:pb-96 2xl:pb-[36rem] mx-auto md:pt-12 h-full min-h-screen"  >
      <Route path="/" component={Camisa} />
    </div>
    <Footer />
  </main>
</Router>
