<script>
    import { onMount } from 'svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/privacy';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/privacy');

    //     if (res.ok) {
    //         DataDummy = res.json()
    //     }
    // })


</script>

<style>
    section {
        min-height: 89vh !important;
    }
</style>

<section>
    <div class="container py-5">
        {@html DataDummy.PRIVACY_DATA.CONTENT_PRIVACY }
    </div>
</section>

<Footer 
    ICON_FOOTER="{DataDummy.FOOTER_DATA.ICON_FOOTER}" 
    SITEMAP_FOOTER="{DataDummy.FOOTER_DATA.SITEMAP_FOOTER}"
    SOCIAL_FOOTER="{DataDummy.FOOTER_DATA.SOCIAL_MEDIA}"
    LINK_FOOTER="{DataDummy.FOOTER_DATA.LINK_DOWNLOAD}"/>
