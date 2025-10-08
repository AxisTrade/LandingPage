<script> 
    import Hero from "../components/Hero.svelte";
    import AboutUs from "../components/AboutUs.svelte";
</script>


<style>
    :global(body){
        background-color: white;
        margin: 0;
}
:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
<Hero />
<AboutUs/>
