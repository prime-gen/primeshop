<script>
    import { Link } from "svelte-routing";
</script>

<div class="text-left w-64 sm:w-96 sm:h-96" >
    <Link to="/camisa" class="" >
            <div 
                class="relative w-64 h-64 sm:w-96 sm:h-96 bg-transparent hover:scale-110 
                transition-all rounded-xl bg-center bg-contain overflow-hidden bg-clip-padding" 
                style="background-image: url('https://iili.io/H4eeXAg.jpg');" >
                <!-- <img src="src/assets/1.png" alt="background image" /> -->
                <div 
                    class="absolute bg-gradient-to-t from-black bottom-0 w-full text-xl rounded-none
                    text-white flex align-middle justify-center items-end h-1/2" 
                >
            </div>
        </div>
        <div class="flex justify-between mt-2">
            <div>
                <h1 class="text-lg hover:text-primeOrange-100" >Camisa PrimeGen 2023 </h1>
                <h2>S/65</h2>
            </div>
            <button class="bg-primePurple-50 rounded-md px-4">Comprar</button>
        </div>
    </Link>
</div>