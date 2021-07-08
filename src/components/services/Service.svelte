<script>

    export let SERVICE_DATA = {};
    export let PAYMENT_DATA = {};
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


<section>
    <div class="container py-4">
        <h2 class="h2">Layanan Kami</h2>
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h3 class="h3">
                    {SERVICE_DATA.HEADING_SERVICE ?? ''}
                </h3>
                <p class="strong">{SERVICE_DATA.DESCRIPTION_SERVICE}</p>
            </div>
            <div class="col-lg-4 col-md-4">
            </div>
        </div>

        <div class="row mb-5">
            {#each SERVICE_DATA.SERVICE_LIST as service }
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

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="h3">
                    {PAYMENT_DATA.HEADING_SERVICE ?? ''}
                </h3>
                <p class="strong">
                    {PAYMENT_DATA.DESCRIPTION_SERVICE ?? ''}
                </p>
            </div>
        </div>

        <div class="row mb-5">
            {#each PAYMENT_DATA.PAYMENT_LIST as payment }
            <div class="col-3">
                <div class="card">
                    <div class="card-body text-center">
                        <img src="{payment.ICON_SERVICE_URL}" alt="icon" class="mb-4 rounded-circle" />
                        <h6 class="h5">{payment.HEADING_SERVICE}</h6>
                        <p class="text-center">
                            {payment.DESCRIPTION_SERVICE}
                        </p>
                    </div>
                </div>
            </div>
            {/each}
        </div>
    </div>
    
</section>

