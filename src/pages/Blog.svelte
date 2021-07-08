<script>
    import { onMount } from 'svelte';
    import { Link } from "svelte-routing";
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/blog';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/blog');

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

<div style="background-color: #2D7ABD;">
    <div class="container py-5">
        <h1 class="h1 text-white">Ada Apa dengan Anjasmara?</h1>
        <p class="text-white">
            Kepo cerita kami, pembaruan terbaru, dan promo eksklusif. <br/> Temukan apa pun yang ingin Anda ketahui tentang kami.
        </p>
    </div>
</div>

<section>
    <div class="container py-5">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <img src="{DataDummy.SPECIAL_NEWS_DATA.IMAGE_NEWS}" alt="special_news_image" class="img-thumbnail" />
                        <h3 class="h3">{DataDummy.SPECIAL_NEWS_DATA.TITLE_NEWS}</h3>
                        <p>{@html DataDummy.SPECIAL_NEWS_DATA.DESCRIPTION_NEWS}</p>
                        <Link to="{DataDummy.SPECIAL_NEWS_DATA.IMAGE_NEWS}" class="btn btn-primary">
                            DETAIL
                        </Link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="row">
                {#each DataDummy.PREMIERE_NEWS_DATA as PREMIERE}
                    <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
                        <div class="card">
                            <div class="card-body">
                                <img src="{PREMIERE.IMAGE_NEWS}" alt="premiere_news_image" class="img-thumbnail" />
                                <h3 class="h4">{PREMIERE.TITLE_NEWS}</h3>
                                <p>{@html PREMIERE.DESCRIPTION_NEWS}</p>
                                <Link to="{PREMIERE.IMAGE_NEWS}" class="btn btn-primary">
                                    DETAIL
                                </Link>
                            </div>
                        </div>
                    </div>
                {/each}
                </div>
            </div>
        </div>
        <div class="row">
            {#each DataDummy.GENERAL_NEWS_DATA as GENERAL}
                <div class="col-lg-3 col-md-3 col-sm-12 mb-2">
                    <div class="card">
                        <div class="card-body">
                            <img src="{GENERAL.IMAGE_NEWS}" alt="GENERAL_news_image" class="img-thumbnail" />
                            <h3 class="h5">{GENERAL.TITLE_NEWS}</h3>
                            <p>{@html GENERAL.DESCRIPTION_NEWS}</p>
                            <Link to="{GENERAL.LINK_NEWS}" class="btn btn-primary">
                                DETAIL
                            </Link>
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
