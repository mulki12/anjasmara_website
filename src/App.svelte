<script>
	import { Router, Route } from "svelte-routing";
	import Navbar from "./components/navbar/Navbar.svelte";
	import Footer from "./components/footer/Footer.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";

	export let url = "";
</script>

<Router url="{url}">

	<Navbar />

	<Route path="/" component="{Home}" />
	<Route path="about" component="{About}" />

	<Footer />

</Router>