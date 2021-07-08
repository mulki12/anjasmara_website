<script>

    export let BENEFIT_DATA = {};

</script>

<style>
    section {
        height: 86vh;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        line-height: 96px;
    }
</style>

<section class="py-4">
    <h2 class="text-center py-3">
        {BENEFIT_DATA.HEADING == '' ? 'Keuntungan Pakai Anjasmara' : BENEFIT_DATA.HEADING}
    </h2>
    <div class="container">
        <div class='row justify-content-center'>
            {#each BENEFIT_DATA.BENEFIT_LIST as benefit}
            <div class="col-3">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="{benefit.ICON_BENEFIT_URL}" alt="icon" class="mb-5 rounded-circle" />
                        <h6 class="h5">{benefit.HEADING_BENEFIT}</h6>
                        <p class="text-center">
                            {benefit.DESCRIPTION_BENEFIT}
                        </p>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>