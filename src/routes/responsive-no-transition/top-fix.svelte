<script>
	import { Responsive } from '$lib/index';
	import { lorem } from '../menus';
	let siteName = 'Responsive 2 with fixed';
</script>

<Responsive />
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
