<script>
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faFlag, faShirt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import { faFacebook, faTwitter, faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'
    import { Link } from 'svelte-routing';

</script>


<div class="absolute bottom-0 w-screen text-white">
    <div class="bg-primePurple-100">
        <div>
            <img src="https://iili.io/H4eeWHF.jpg" alt="" class="left-0 w-screen">
            <h3>Visita nuestras redes</h3>
            <div class="flex justify-center " >
                <a href="https://www.facebook.com/profile.php?id=100085929251168" >
                    <Fa size="2x" class="m-2" icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/primegen.gg/" >
                    <Fa size="2x" class="m-2" icon={faInstagram} />
                </a>                
                <a href="https://twitter.com/PrimeGenGG" >
                    <Fa size="2x" class="m-2" icon={faTwitter} />
                </a>                
                <a href="https://www.tiktok.com/@primegengg" >
                    <Fa size="2x" class="m-2" icon={faTiktok} />
                </a>                
                <a href="https://discord.com/invite/h3ZXmkk8Yc" >
                    <Fa size="2x" class="m-2" icon={faDiscord} />
                </a>
                
            </div>
            <div class="flex items-center justify-center" >
                <Fa icon={faEnvelope} /> Contacto: <a href="mailto:primegencontacto@gmail.com">primegencontacto@gmail.com</a>
            </div>

            <p>
                ©2023 PrimeGen
            </p>
        </div>
    </div>
</div>