<script>
    import { Link } from "svelte-routing";

    export let ICON_FOOTER      = "";
    export let SITEMAP_FOOTER   = [];
    export let SOCIAL_FOOTER    = [];
    export let LINK_FOOTER      = {};
</script>

<style>
    footer {
        margin-bottom: 0;
        background-color: #182A59;
    }
</style>

<footer id="contact">
    <div class="container pt-4">
        <div class="row border-bottom">
            <div class="col-3 d-flex justify-content-center align-items-center mb-2">
                <img src="{ICON_FOOTER == '' ? './logoanjas.png' : ICON_FOOTER}" alt="company logo" height="100px" class="text-right"/>
            </div>
            <div class="col-6">
                <div class="row text-white">
                    {#each SITEMAP_FOOTER as sitemap, i}
                    <div class="col-6">
                        <Link class="d-block text-white p-2 nav-link" to="{sitemap.LINK_SITEMAP}">{sitemap.NAME_SITEMAP}</Link>
                    </div>
                    {/each}
                </div>
                <div class="col-12 text-center my-3 d-flex justify-content-between text-right">
                    {#each SOCIAL_FOOTER as social}
                    <img src="{social.ICON_SOCIAL}" alt="{social.NAME_SOCIAL}" height="45px" class="m-2"/>
                    {/each}
                </div>
            </div>
            <div class="col-3 d-flex align-items-center mb-2">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <Link to={LINK_FOOTER.APPSTORE}>
                            <img src="./getappstore.png" alt="downloader icon" width="180px"/>
                        </Link>
                    </div>
                    <div class="col-12 text-center">
                        <Link to={LINK_FOOTER.PLAYSTORE}>
                            <img src="./getplaystore.png" alt="downloader icon" width="200px"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <p class="text-center text-white m-0 p-4">@2020 Anjasmara | Aneka Jasa Bersama Rakyat by Miladiyyah</p>

</footer>
