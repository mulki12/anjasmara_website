<script>

    let services = [
        { 'id': 'J---aiyznGQ', name: 'Keyboard Cat' }
    ];

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
                <h3 class="h3">Jasa</h3>
                <p class="strong">Menyediakan sebuah jasa dengan cara negosiasi harga</p>
            </div>
            <div class="col-lg-4 col-md-4">
            </div>
        </div>

        <div class="row mb-5">
            {#each services as service}
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        {service.id}
                    </div>
                </div>
            </div>
            {/each}
        </div>

        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12">
                <h3 class="h3">Payment</h3>
                <p class="strong">
                    Kami melayani pembayaran secara digital yang dapat diandalkan,
                    mudah dan menyenangkan bagi pelanggan dan mitra kami.
                </p>
            </div>
            <div class="col-lg-4 col-md-4">
                image button
            </div>
        </div>

        <div class="row mb-5">
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <img />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>

