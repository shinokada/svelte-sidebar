<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './sidebarStore';
	import { fly, slide, blur, fade } from 'svelte/transition';
	import { SidebarList, Navbar, OutsideClick } from '$lib/index';
	import type { MenuType, TransitionParamTypes, TransitionTypes } from './types';

	export let lists: MenuType[];

	// Navbar
	export let alt: string = '';
	export let hamburgerClass: string = '';
	export let headerClass: string = 'bg-gray-200 pt-4 px-10 items-center text-gray-600';
	export let logo: string = '';
	export let logoClass: string = '';
	// navClass for Navbar
	export let navBarClass = 'flex relative';
	export let siteName: string = 'Demo';
	export let siteClass: string = 'w-1/4 h-12 text-lg pt-1 pl-12';
	export let spanClass: string =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap';
	// end of Navbar

	export let navClass: string = 'py-8 px-4 text-lg';
	export let asideClass: string = 'absolute w-auto h-screen bg-white border-r-2 shadow-lg z-50';
	export let navDivClass: string = 'pb-10';

	export let sideBarListClass: string = 'border-b border-gray-400 mb-2 px-4';
	export let transitionParams: TransitionParamTypes = {};
	export let transitionType: TransitionTypes = 'fly';
	function multiple(node: HTMLElement, params: any) {
		switch (transitionType) {
			case 'slide':
				return slide(node, params);
			case 'blur':
				return blur(node, params);
			case 'fly':
				return fly(node, params);
			case 'fade':
				return fade(node, params);
		}
	}
	let inert = null;
	$: inert = $sidebarIsInert ? 'inert' : null;
	// $: console.log('isInert', $isInert);
	let sidebarStatus: boolean;
	let ariaHidden: boolean;

	sidebarOpen.subscribe((value) => {
		if (value === true) {
			// sidebar is open
			sidebarStatus = true;
			ariaHidden = false;
		} else {
			// sidebar is hidden
			sidebarStatus = false;
			ariaHidden = true;
		}
	});
	// console.log('sidebarStatus', sidebarStatus);

	// $: console.log('sidebarOpen from Sidebar comp', $sidebarOpen);
</script>

<OutsideClick>
	<Navbar
		{alt}
		{hamburgerClass}
		{headerClass}
		{logo}
		{logoClass}
		navClass={navBarClass}
		{siteClass}
		{siteName}
		{spanClass}
	>
		<slot />
	</Navbar>
	{#if transitionType}
		{#if sidebarStatus}
			<aside
				class={asideClass}
				transition:multiple={transitionParams}
				aria-hidden={ariaHidden}
				{inert}
			>
				<nav class={navClass}>
					<div class={navDivClass}>
						{#each lists as { href, name, rel }}
							<SidebarList {href} {name} {rel} {sideBarListClass} />
						{/each}
					</div>
				</nav>
			</aside>
		{/if}
	{:else}
		<aside
			class={asideClass}
			class:open={sidebarStatus}
			class:close={!sidebarStatus}
			aria-hidden={ariaHidden}
			{inert}
		>
			<nav class={navClass}>
				<div class={navDivClass}>
					{#each lists as { href, name, rel }}
						<SidebarList {href} {name} {rel} {sideBarListClass} />
					{/each}
				</div>
			</nav>
		</aside>
	{/if}
</OutsideClick>

<style>
	.close {
		left: -100%;
	}
	.open {
		left: 0;
	}

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
