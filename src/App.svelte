<script>
	import { Router, Route } from "svelte-routing";
	import Navbar from "./components/navbar/Navbar.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Privacy from "./pages/Privacy.svelte";
	import Payment from "./pages/Payment.svelte";
	import Blog from "./pages/Blog.svelte";
	import BlogSingle from "./pages/BlogSingle.svelte";
	import Member from "./pages/Member.svelte";
	import Use from "./pages/Use.svelte";

	import NotFound from "./pages/NotFound.svelte";

	export let url = "";

</script>


<Router {url}>

	<Navbar />
	
	<Route path="/" component="{Home}" />
	<Route path="/about" component="{About}" />
	<Route path="/privacy" component="{Privacy}" />
	<Route path="/tagihan" component="{Payment}" />
	<Route path="/blog" component="{Blog}" />
	<Route path="/blog/:s" component="{BlogSingle}" />
	<Route path="/member-jasa" component="{Member}" />
	<Route path="/how-to-use" component="{Use}" />
	<Route component="{NotFound}" />

</Router>