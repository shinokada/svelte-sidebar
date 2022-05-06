<script lang="ts">
	import { page } from '$app/stores';
	import Dropdown from './Dropdown.svelte';
	import type { TopMenuType } from './types';

	export let buttonClass: string =
		'inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200';

	export let childLi: string =
		'block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-sm';

	export let topMenuDiv: string = 'container flex flex-wrap justify-end mx-auto';
	export let topMenus: TopMenuType[];
	export let topul: string =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1';
	export let topli: string =
		'block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0';

	let barHidden = true;
	const handleClickbtn = () => {
		barHidden = !barHidden;
	};
</script>

<div class={topMenuDiv}>
	<button
		on:click={handleClickbtn}
		data-collapse-toggle="mobile-menu"
		type="button"
		class={buttonClass}
		aria-controls="mobile-menu-2"
		aria-expanded="false"
	>
		<span class="sr-only">Open main menu</span>
		<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/></svg
		>
		<svg
			class="hidden w-8 h-8"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		>
	</button>
	<div class:hidden={barHidden} class="w-full md:block md:w-auto" id="mobile-menu">
		<ul class={topul}>
			{#each topMenus as { id, name, href, rel, child }}
				{#if child}
					<Dropdown {id} {name} {href} {rel} {child} />
				{:else}
					<li class={topli}>
						<a class:active={$page.url.pathname === href} {href} {rel} class={childLi}>{name}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
