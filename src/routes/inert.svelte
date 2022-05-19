<script lang="ts">
	import { Sidebar } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Svelte-Sidebar';
	let title = 'Inert Demo';
</script>

<div class="fixed z-50 top-0 left-0 w-full">
	<Sidebar
		lists={menuList}
		{siteName}
		logo="/images/svelte-sidebar-logo.png"
		alt="Svelte Sidebar"
	/>
</div>

<main class="container mx-auto p-24 pl-80">
	<h1 class="text-4xl text-center py-8">{title}</h1>
	<p class="text-xl font-bold text-red-600">
		Svelte-Sidebar uses inert polyfill. Press a tab without opening the sidebar. This will go
		through the link without the sidebar. When you open the side bar then it will go through the
		sidebar menu link.
	</p>
	<h2 class="text-2xl w-full">
		<a href="/sidebar-custom-style" class="text-blue-700 hover:underline">Link 1</a>
	</h2>

	<p class="pt-4">
		<a href="/sidebar-custom-style" class="text-blue-700 hover:underline">Link 2</a>
		<input
			type="text"
			class="border border-solid border-gray-300 h-12	w-full"
			id="exampleFormControlInput"
			placeholder="Example Input Field 1"
		/>
		{lorem}
	</p>
	<div inert>
		<h1 class="text-4xl text-center">Inert paragraph</h1>
		<input
			type="text"
			class="
			form-control
			block
			w-full
			p-4
			font-normal
			text-gray-700
			bg-white bg-clip-padding
			border border-solid border-gray-300		"
			id="exampleFormControlInput1"
			placeholder="Example Input Field 2"
		/>
		<p class="pt-4">
			{lorem}
		</p>
	</div>
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

<svelte:head>
	<title>Svelte-Sidebar-Menu Inert Example</title>
</svelte:head>

<style>
	[inert] {
		pointer-events: none;
		cursor: default;
	}

	[inert],
	[inert] * {
		opacity: 0.5;
		pointer-events: none;
		cursor: default;
		user-select: none;
	}
</style>
