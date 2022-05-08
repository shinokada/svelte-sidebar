<script lang="ts">
	import { Sidebar } from '$lib/index';
	import { menuList, lorem } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Custom Style';
	let headerClass = 'bg-pink-300 py-3 px-10 items-center text-white border-b-2';
	let asideClass = 'absolute w-auto h-screen bg-red-50 pt-8 border-r-2 shadow-lg';
	let navClass = 'p-5 text-lg';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Sidebar
		lists={menuList}
		{siteName}
		{headerClass}
		{asideClass}
		{navClass}
		logo="/images/svelte-sidebar-logo.png"
		alt="Svelte Sidebar"
	/>
</div>

<main class="container mx-auto p-16">
	<h1 class="text-4xl text-center py-8">
		{title}
	</h1>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
	<p class="pt-4">
		{lorem}
	</p>
</main>
