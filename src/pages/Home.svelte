<script>
    import { onMount } from 'svelte';

    import Banner from '../components/banner/Banner.svelte';
    import Benefit from '../components/benefit/Benefit.svelte';
    import Service from '../components/services/Service.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/home';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/home');

    //     if (res.ok) {
    //         DataDummy = res.json()
    //     }
    // })

</script>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />

<Benefit BENEFIT_DATA="{DataDummy.BENEFIT_DATA}" />

<Service SERVICE_DATA="{DataDummy.SERVICE_DATA}" PAYMENT_DATA="{DataDummy.PAYMENT_DATA}" />

<Footer 
    ICON_FOOTER="{DataDummy.FOOTER_DATA.ICON_FOOTER}" 
    SITEMAP_FOOTER="{DataDummy.FOOTER_DATA.SITEMAP_FOOTER}"
    SOCIAL_FOOTER="{DataDummy.FOOTER_DATA.SOCIAL_MEDIA}"
    LINK_FOOTER="{DataDummy.FOOTER_DATA.LINK_DOWNLOAD}"/>
