<script> 
    import Hero from "../components/Hero.svelte";
    import AboutUs from "../components/AboutUs.svelte";
    import Features from "../components/Features.svelte";
	import CaseStudy from "../components/CaseStudy.svelte";
	import ProductWorks from "../components/ProductWorks.svelte";
  import Footer from "../components/Footer.svelte";
</script>


<style>
    :global(body){
        background-color: white;
        margin: 0;
        font-family: "Gothic A1", sans-serif;
}
:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
<Hero />
<AboutUs/>
<CaseStudy/>
<Features/>
<ProductWorks/>
<Footer/>
