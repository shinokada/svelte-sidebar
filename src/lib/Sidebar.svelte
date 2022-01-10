<script>
	import { open } from './store';
	import SidebarList from './SidebarList.svelte';
	import Navbar from './Navbar.svelte';
	export let siteName = 'Demo';
	export let lists = [
		{ url: 'item1', name: 'Item 1' },
		{ url: 'item2', name: 'Item 2' }
	];
	export let headerClass = 'bg-gray-200 py-3 px-10 items-center text-gray-600 border-b-2';
	export let barClass =
		'text-green-500 hover:text-green-700 cursor-pointer mr-4 border-none focus:outline-none';
	export let asideClass = 'absolute w-auto h-full bg-gray-200 border-r-2 shadow-lg';
</script>

<Navbar {siteName} {headerClass} {barClass} />
<aside class={asideClass} class:open={$open}>
	<nav class="p-12 text-xl">
		<div class="pb-10">
			{#each lists as list}
				<SidebarList url={list.url} name={list.name} />
			{/each}
		</div>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
