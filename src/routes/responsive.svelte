<script lang="ts">
	import { Sidebar, open, isInert, responsive } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Responsive Sidebar';
	// $: paddingLeft = $open ? 'pl-80' : 'pl-0';
	// $: console.log('paddingLeft', paddingLeft);
	$: console.log('open', $open);
	let width: number;
	// $: console.log('width', width);
	$: if (width > 1024) {
		open.update((n) => (n = true));
		isInert.update((n) => (n = false));
		responsive.update((n) => (n = true));
	} else {
		open.update((n) => (n = false));
		isInert.update((n) => (n = true));
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
