<script>
    import { onMount } from 'svelte';
    import Banner from '../components/banner/Banner.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/tagihan';

    let DataDummy = Data;

    // onMount(async () => {

    //     await fetch('http://api.anjasmara.id/generals/api/v1/web/payment', {
    //         method: "GET"
    //     }).then( function ( res ) {
    //         DataDummy = res.json()
    //     }).then( function ( error ) {
    //         console.log(error)
    //     });
    // })


</script>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />

<section>
    <div class="container py-5">
        <div class="row">
            <h3 class="h3 text-center mb-3">{DataDummy.KENAPA_DATA.TITLE_DATA}</h3>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-body">

                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container my-5">
        <div class="row pb-5">
            <h3 class="h3 text-center mb-5">Manfaat bayar tanpa tunai</h3>
        </div>
        {#each DataDummy.MANFAAT_DATA as MANFAAT}
        <div class="row" style="margin-bottom: 1rem;">
            <div class="col-6">
                <h5 class="h5">{MANFAAT.TITLE_DATA}</h5>
                <p class="text-justify">
                    {MANFAAT.DESCRIPTION_DATA}
                </p>
            </div>
            <div class="col-6 text-center">
                <img src="{MANFAAT.IMAGE_DATA}" alt="banner_manfaat" class="img-thumbnail" />
            </div>
        </div>
        {/each}
    </div>
</section>

<section>
    <div class="container py-5">
        <div class="row mb-3">
            <h3 class="h3 text-center">{DataDummy.BAGAIMANA_DATA.TITLE_DATA}</h3>
        </div>
        <div class="row">
            <div class="col-6 justify-content-center">
                {#each DataDummy.BAGAIMANA_DATA.CARA_DATA as CARA}
                <div class="col-12 m-2">
                    <button class="btn btn-primary btn-block">{CARA.TITLE}</button>
                </div>
                {/each}
            </div>
            <div class="col-6 justify-content-center">
                <img src="{DataDummy.BAGAIMANA_DATA.IMAGE_DATA}" alt="image_bagaimana" class="img-thumbnail" />
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container py-5">
        <div class="col-12 text-center mb-3">
            <h3 class="h3">{DataDummy.PILIHAN_DATA.TITLE_DATA}</h3>
            <p class="text-justify">{DataDummy.PILIHAN_DATA.DESCRIPTION_DATA}</p>
        </div>
        <div class="row justify-content-center">
            <div class="col-4">
                <img src="{DataDummy.PILIHAN_DATA.IMAGE_DATA[0]}" alt="image_pilihan_1" class="img-thumbnail" />
            </div>
            <div class="col-4">
                <img src="{DataDummy.PILIHAN_DATA.IMAGE_DATA[1]}" alt="image_pilihan_2" class="img-thumbnail" />
            </div>
        </div>
    </div>
</section>

<Footer 
    ICON_FOOTER="{DataDummy.FOOTER_DATA.ICON_FOOTER}" 
    SITEMAP_FOOTER="{DataDummy.FOOTER_DATA.SITEMAP_FOOTER}"
    SOCIAL_FOOTER="{DataDummy.FOOTER_DATA.SOCIAL_MEDIA}"
    LINK_FOOTER="{DataDummy.FOOTER_DATA.LINK_DOWNLOAD}"/>
