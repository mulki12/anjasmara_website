<script>
    import { onMount } from 'svelte';

    import Banner from '../components/banner/Banner.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/service';

    let DataDummy = Data;

    onMount(async () => {
        const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/servce');

        if (res.ok) {
            DataDummy = res.json()
        }
    })

</script>


<style>
    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 96px;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 46px;
    }

    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        line-height: 30px;
    }
</style>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />


<section>
    <div class="container py-4">
        <h2 class="h2">Layanan Kami</h2>
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h3 class="h3">
                    {DataDummy.SERVICE_DATA.HEADING_SERVICE ?? ''}
                </h3>
                <p class="strong">{DataDummy.SERVICE_DATA.DESCRIPTION_SERVICE}</p>
            </div>
            <div class="col-lg-4 col-md-4">
            </div>
        </div>

        <div class="row mb-5">
            {#each DataDummy.SERVICE_DATA.SERVICE_LIST as service }
            <div class="col-3">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="{service.ICON_SERVICE_URL}" alt="icon" class="mb-4 rounded-circle" />
                        <h6 class="h5">{service.HEADING_SERVICE}</h6>
                        <p class="text-center">
                            {service.DESCRIPTION_SERVICE}
                        </p>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    
</section>

<Footer 
    ICON_FOOTER="{DataDummy.FOOTER_DATA.ICON_FOOTER}" 
    SITEMAP_FOOTER="{DataDummy.FOOTER_DATA.SITEMAP_FOOTER}"
    SOCIAL_FOOTER="{DataDummy.FOOTER_DATA.SOCIAL_MEDIA}"
    LINK_FOOTER="{DataDummy.FOOTER_DATA.LINK_DOWNLOAD}"/>
