<script lang="ts">
	import Hamburger from './components/Hamburger.svelte';
	export let hamburgerClass: string =
		'text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none';
	export let headerClass: string = 'bg-gray-200 py-3 px-10 items-center text-gray-600';
	export let logo: string = '';
	export let alt: string = '';
	export let navClass = 'flex relative';
	export let siteName: string = 'Demo';
	export let siteClass: string = 'w-full h-9 text-lg pt-1 pl-12';
	export let spanClass: string =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap';
	export let logoClass: string = '';
	// export let siteText: string | undefined = '';
</script>

<header class={headerClass}>
	<nav class={navClass}>
		<Hamburger {hamburgerClass} />
		<div class={siteClass}>
			<a href="/" class="flex">
				<img src={logo} {alt} class={logoClass} />
				<span class={spanClass}>{siteName}</span>
			</a>
		</div>
		<slot />
	</nav>
</header>
