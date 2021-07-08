<script>
    export let imageBanner = "";
</script>

<section>
    <img src={imageBanner} alt="banner" loading="lazy"/>
</section>

<style>
    section {
        height: 82vh;
        background-color: gray;
        overflow-y: hidden;
    }

    img {
        width: 100%;
    }
</style>