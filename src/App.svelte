<script>
  import Nav from './lib/Nav.svelte';
  import ProductList from './lib/ProductList.svelte';
  import { Router, Link, Route } from "svelte-routing";
  import Camisa from './lib/Camisa.svelte';
  import Home from './lib/Home.svelte';
  import Footer from './lib/Footer.svelte';
</script>


<svelte:head>
  <link rel="icon" href="icon.png">
  <title>PrimeGen Shop</title>
</svelte:head>
<Router>
  <main class="h-full relative min-h-full">
    
    <img src="https://iili.io/H4eeMS1.jpg" class="w-screen" alt="">

    <div class=" container pb-56 md:pb-72 lg:pb-80 xl:pb-96 2xl:pb-[36rem] mx-auto md:pt-12 h-full min-h-screen"  >
      <Route path="/" component={Camisa} />
    </div>
    <Footer />
  </main>
</Router>
