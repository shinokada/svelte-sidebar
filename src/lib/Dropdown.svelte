<script lang="ts">
	import type { TopMenuType } from './types';
	export let id: string;
	export let name: string;
	export let child: TopMenuType[] | undefined;
	export let activeDropdownDiv =
		'z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow';
	export let activeChildLi = 'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100';
	export let dropdownLi =
		'flex justify-between items-center py-2 pr-4 pl-3 w-full text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto';
	let hidden = true;
	let block = false;
	const handleDropdown = () => {
		hidden = !hidden;
		block = !block;
		// console.log('hidden', hidden);
	};
	const closeDropdown = () => {
		// console.log('clicked outside');
		hidden = true;
		block = false;
	};
</script>

{#if hidden === false}
	<div on:click={closeDropdown} class="fixed w-full h-full inset-0" />
{/if}
<li>
	<button on:click={() => handleDropdown({ id })} class={dropdownLi}
		>{name}
		<svg
			class="ml-1 w-4 h-4"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		></button
	>
	<!-- Dropdown menu -->
	<div class:hidden class:block class={activeDropdownDiv} style="position: absolute; margin: 0px;">
		<ul class="py-1" aria-label="dropdown-button">
			{#each child as { href, name, rel }}
				<li>
					<a {href} {rel} class={activeChildLi}>{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</li>
