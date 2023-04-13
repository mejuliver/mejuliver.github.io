<script>
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import About from './components/About.svelte';
	import Works from './components/Works.svelte';
	import Skills from './components/Skills.svelte';
	import Contact from './components/Contact.svelte';
	import NavDot from './components/NavDot.svelte';
	import SmoothScroll from 'smooth-scroll';

	onMount(()=>{
		(new SmoothScroll('a[href*="#"]', {
			speed: 500,
			speedAsDuration: true
		}));
	});

</script>
<main>
	<Home />
	<About />
	<Works />
	<Skills />
	<Contact />
	<NavDot />
</main>

<style lang="scss"></style>