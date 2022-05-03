<script lang="ts">
	import { Sidebar, sidebarStayOpen } from '$lib/index';
	import { lorem, menuList } from './menus';
	let siteName = 'Default Demo';
	sidebarStayOpen.set(false);
</script>

<Sidebar lists={menuList} {siteName} logo="/images/svelte-sidebar-logo.png" alt="Svelte Sidebar" />
<main class="container mx-auto p-24">
	<h1 class="text-3xl">
		{siteName}
	</h1>
	<h2 class="text-2xl w-full"><a href="/sidebar-custom-style">Custom Style</a></h2>
	<p class="pt-4">
		Svelte-Sidevar implemented <a
			href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert">`inert`</a
		>
		attribute.
		<a href="/sidebar-custom-style">Link to Sidebar custom style</a>
		{lorem}
	</p>
	<h1 class="text-3xl">Inert paragraph</h1>
	<p>Below is inert div.</p>
	<div inert>
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
