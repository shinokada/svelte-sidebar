<script lang="ts">
	import { Sidebar, sidebarOpen, sidebarIsInert, sidebarResponsive } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Responsive Sidebar';
	let width: number;
	$: if (width > 1024) {
		sidebarOpen.update((n) => (n = true));
		sidebarIsInert.update((n) => (n = false));
		sidebarResponsive.update((n) => (n = true));
	} else {
		sidebarOpen.update((n) => (n = false));
		sidebarIsInert.update((n) => (n = true));
	}
</script>

<svelte:window bind:innerWidth={width} />
<Sidebar
	lists={menuList}
	{siteName}
	hamburgerClass=" lg:hidden"
	asideClass="absolute w-auto h-screen bg-white lg:fixed lg:w-64"
	logo="/images/svelte-sidebar-logo.png"
	alt="Svelte Sidebar"
/>
<main class="container mx-auto pt-24 p-8 lg:pl-64">
	<h1 class="text-3xl">
		{siteName}
	</h1>
	<h2 class="text-2xl w-full"><a href="/sidebar-custom-style">Custom Style</a></h2>
	<p class="pt-4">
		<a href="/sidebar-custom-style">Custom Style</a>
		{lorem}
	</p>
	<div inert>
		<h1 class="text-3xl">Inert paragraph</h1>

		<input
			type="text"
			class="
			form-control
			block
			w-full
			font-normal
			text-gray-700
			bg-white bg-clip-padding
			border border-solid border-gray-300		"
			id="exampleFormControlInput1"
			placeholder="Example label"
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
</main>

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
