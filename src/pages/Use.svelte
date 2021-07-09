<script>
    import { onMount } from 'svelte';
    import Banner from '../components/banner/Banner.svelte';
    import Footer from '../components/footer/Footer.svelte';

    import Data from '../data/usage';

    let DataDummy = Data;

    // onMount(async () => {
    //     const res = await fetch('http://api.anjasmara.id/generals/api/v1/web/usage');

    //     if (res.ok) {
    //         DataDummy = res.json()
    //     }
    // })

</script>

<style>
    a {
        padding: 10px 20px;
        margin: 5px;
        border-radius: 35px;
        box-shadow: gray 1px 1px;
        text-decoration: none;
        font-family: 'arial';
        color: #333;
    }
    
    p {
        line-height: 2em;
    }
</style>

<Banner imageBanner="{DataDummy.BANNER_DATA.BANNER_URL}" />

<section>
    <div class="text-center py-5">
        <a href="#mulai" class="">Mulai</a>
        <a href="#isi-saldo" class="">Isi Saldo</a>
        <a href="#beli-pulsa" class="">Beli Pulsa/Kuota</a>
        <a href="#bayar-tagihan" class="">Bayar Tagihan</a>
        <a href="#pesan-jasa" class="">Pesan Jasa</a>
    </div>
    <div style="background-color: #E5EFF7;" class="py-5" id="mulai">
        <div class="container">
            <h2 class="h2 text-center mb-4">Mulai #Adasajacara</h2>
            <div class="row justify-content-center">
                <div class="col-3">
                    <div class="row justify-content-center">
                        <img src="https://via.placeholder.com/120" alt="install" class="rounded mb-4" style="max-width: 180px;" />
                    </div>
                    <h5 class="h5 text-center">Install</h5>
                    <p class="text-center">Dapatkan Aplikasi Anjasmara di Play Store</p>
                </div>
                <div class="col-3">
                    <div class="row justify-content-center">
                        <img src="https://via.placeholder.com/120" alt="registrasi" class="rounded mb-4" style="max-width: 180px;" />
                    </div>
                    <h5 class="h5 text-center">Registrasi</h5>
                    <p class="text-center">Daftarkan diri kamu dan buat PIN rahasiamu</p>
                </div>
                <div class="col-3">
                    <div class="row justify-content-center">
                        <img src="https://via.placeholder.com/120" alt="isi_saldo" class="rounded mb-4" style="max-width: 180px;" />
                    </div>
                    <h5 class="h5 text-center">Isi Saldo</h5>
                    <p class="text-center">Pastikan Saldomu cukup untuk bertransaksi</p>
                </div>
            </div>
        </div>
    </div>
    <div class="py-5" id="isi-saldo">
        <div class="container">
            <h2 class="h2 text-center mb-4">Isi Saldo</h2>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <img src="https://via.placeholder.com/120" alt="isi_saldo_khusus" class="rounded mb-4" width="100%"/>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <p>Yuk isi saldomu. Kamu bisa melakukan pengisian saldo Anjasmara melalui rekening Bank (ATM Himbara, Mobile Banking, atau Internet Banking), Alfamart, Alfamidi, Circle K, Dan+Dan, FamilyMart, GraPARI, Indomaret, Kantorpos dan Mitra Anjasmara</p>
                </div>
            </div>
        </div>
    </div>
    <div style="background-color: #E5EFF7;" class="py-5" id="beli-pulsa">
        <div class="container">
            <h2 class="h2 text-center mb-4">Beli Pulsa / Kuota</h2>
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="card rounded-lg">
                        <div class="card-body text-right text-white bg-info">
                            <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                            <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <img src="https://via.placeholder.com/120" alt="beli_pulsa_khusus" class="rounded mb-4" width="100%" />
                </div>
            </div>
        </div>
    </div>
    <div class="py-5" id="bayar-tagihan">
        <div class="container">
            <h2 class="h2 text-center mb-4">Bayar Tagihan</h2>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <img src="https://via.placeholder.com/120" alt="beli_pulsa_khusus" class="rounded mb-4" width="100%" />
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="card rounded-lg">
                        <div class="card-body text-right text-white bg-info">
                            <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                            <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="py-5" id="pesan-jasa">
        <div class="container">
            <h2 class="h2 text-center mb-4">Pesan Jasa</h2>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="row justify-content-center">
                        <img src="https://via.placeholder.com/120" alt="user_image" class="mb-4" />
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="row justify-content-center">
                        <img src="https://via.placeholder.com/120" alt="mitra_image" class="mb-4" />
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 mb-2">
                            <div class="card rounded-lg">
                                <div class="card-body text-right text-white bg-info">
                                    <h5 class="h5 m-0 p-0">Pulsa/Kuota</h5>
                                    <p style="padding: 0; margin: 0;">Pilih menu beli pulsa/kuota</p>
                                </div>
                            </div>
                        </div>
                    </div>
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
