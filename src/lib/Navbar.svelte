<script lang="ts">
	import Hamburger from './components/Hamburger.svelte';
	export let hamburgerClass =
		'text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none';
	export let headerClass = 'bg-gray-200 py-3 px-10 items-center text-gray-600';
	export let navClass = 'flex relative';
	export let siteName = 'Demo';
	export let siteClass = 'w-full h-9 text-lg pt-1 pl-12';
	export let siteText: string | undefined = '';
</script>

<header class={headerClass}>
	<nav class={navClass}>
		<Hamburger {hamburgerClass} />
		<div class={siteClass}>
			<div class={siteText}><a href="/">{siteName}</a></div>
		</div>
		<slot />
	</nav>
</header>
