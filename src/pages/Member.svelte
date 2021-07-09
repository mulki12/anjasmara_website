<script>
    import { onMount } from 'svelte';
    import Banner from '../components/banner/Banner.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/member_jasa';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/blog');

    //     if (res.ok) {
    //         DataDummy = res.json()
    //     }
    // })

</script>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />

<section>
    <div class="container mb-5">
        <div class="row py-5">
            <h3 class="h3">{DataDummy.DAFTAR_SEKARANG.TITLE}</h3>
            <div class="col-12">
                <div class="card bg-secondary">

                </div>
            </div>
        </div>
        <div class="row py-5">
            <h3 class="h3">{DataDummy.KEUNTUNGAN_MITRA.TITLE}</h3>
            <div class="col-12">
                <div class="card bg-secondary">

                </div>
            </div>
        </div>
    </div>
</section>

<Footer 
    ICON_FOOTER="{DataDummy.FOOTER_DATA.ICON_FOOTER}" 
    SITEMAP_FOOTER="{DataDummy.FOOTER_DATA.SITEMAP_FOOTER}"
    SOCIAL_FOOTER="{DataDummy.FOOTER_DATA.SOCIAL_MEDIA}"
    LINK_FOOTER="{DataDummy.FOOTER_DATA.LINK_DOWNLOAD}"/>
