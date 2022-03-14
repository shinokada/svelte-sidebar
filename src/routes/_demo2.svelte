<script lang="ts">
	import { Sidebar } from '$lib/index';
	let lists = [
		{ href: 'sidebar-module/item1', name: 'Item 1' },
		{ href: 'sidebar-module/item2', name: 'Item 2' },
		{ href: 'sidebar-module/item3', name: 'Item 3' }
	];
	let siteName = 'Svelte-Sidebar';
	let hamburgerClass =
		'text-white hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none';
	let headerClass = 'bg-gray-700 py-3 px-10 items-center text-white border-b-2';
	let asideClass = 'absolute w-auto bg-gray-700 text-white border-r-2 shadow-lg';
	let navClass = 'p-5 text-xl';
	let navDivClass = 'pb-10 ';
</script>

<Sidebar {lists} {siteName} {headerClass} {asideClass} {navClass} {navDivClass} {hamburgerClass} />
<div class="container mx-auto">
	<main class="p-24">
		<slot />
	</main>
</div>
