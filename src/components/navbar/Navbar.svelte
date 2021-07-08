<script>
    import { Link } from "svelte-routing";
    
    let src = "/logoanjas.png";

    function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
        return { class: "active" };
    }
    return {};
    }   
</script>

<header class="d-flex py-3">
    <div class="col-2">
        <Link to="/" class="nav-link d-flex justify-content-end">
            <img {src} alt="Logo Anjas" height="48px" />
        </Link>
    </div>
    <div class="col-8 d-flex align-items-center justify-content-center">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <Link to="about" class="nav-link">Tentang Anjasmara</Link>
            </li>
            <li class="nav-item">
                <Link to="services" class="nav-link dropdown-toggle" id="navbarServiceDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarServiceDropdownMenuLink">
                    <li><Link class="dropdown-item nav-link" to="jasa">Jasa</Link></li>
                    <li><Link class="dropdown-item nav-link" to="tagihan">Tagihan</Link></li>
                </ul>
            </li>
            <li class="nav-item">
                <Link to="how-to-use" class="nav-link">Cara Pakai</Link>
            </li>
            <li class="nav-item">
                <Link to="be-member" class="nav-link dropdown-toggle" id="navbarMemberDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Jadilah Mitra</Link>
                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarMemberDropdownMenuLink">
                    <li><Link class="dropdown-item nav-link" to="member-jasa">Jasa</Link></li>
                </ul>
            </li>
            <li class="nav-item">
                <Link to="blog" class="nav-link">Blog</Link>
            </li>
            <li class="nav-item">
                <a href="#contact" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
    <div class="col-2">

    </div>
</header>
