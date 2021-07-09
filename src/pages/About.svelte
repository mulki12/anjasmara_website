<script>
    import { onMount } from 'svelte';

    import Banner from '../components/banner/Banner.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/about';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/about');

    //     if (res.ok) {
    //         DataDummy = res.json()
    //     }
    // })

</script>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />

<section>
    <div class="container mb-5">
        <div class="row py-5">
            <div class="col-6">
                <img src="{DataDummy.TENTANG_DATA.IMAGE_ABOUT}" alt="image_tentang" class="img-thumbnail" loading="lazy"/>
            </div>
            <div class="col-6">
                <h3 class="h3">{DataDummy.TENTANG_DATA.TITLE_ABOUT}</h3>
                <p class="text-justify">{DataDummy.TENTANG_DATA.DESCRIPTION_ABOUT}</p>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-6">
                <h3 class="h3">{DataDummy.SEJARAH_DATA.TITLE_ABOUT}</h3>
                <p class="text-justify">{DataDummy.SEJARAH_DATA.DESCRIPTION_ABOUT}</p>
            </div>
            <div class="col-6">
                <img src="{DataDummy.SEJARAH_DATA.IMAGE_ABOUT}" alt="image_sejarah" class="img-thumbnail" />
            </div>
        </div>
        <div class="row py-5">
            <div class="col-12 text-center">
                <h3 class="h3">{DataDummy.JENIS_APLIKASI_DATA.TITLE_ABOUT}</h3>
                <p class="text-justify">{DataDummy.JENIS_APLIKASI_DATA.DESCRIPTION_ABOUT}</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-4">
                    <img src="{DataDummy.JENIS_APLIKASI_DATA.IMAGE_ABOUT[0]}" alt="image_jenis_1" class="img-thumbnail" />
                </div>
                <div class="col-4">
                    <img src="{DataDummy.JENIS_APLIKASI_DATA.IMAGE_ABOUT[1]}" alt="image_jenis_2" class="img-thumbnail" />
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
