<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	import { fly, slide, blur, fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { SidebarList, Navbar } from '$lib/index';
	import type { MenuType, TransitionParamTypes, TransitionTypes } from './types';
	export let siteName: string = 'Demo';
	export let lists: MenuType[];
	export let logo: string = '';
	export let alt: string = '';
	export let headerClass: string = 'bg-gray-200 py-3 px-10 items-center text-gray-600';
	export let navClass: string = 'py-8 px-4 text-base';
	export let asideClass: string = 'absolute w-auto h-screen bg-white border-r-2 shadow-lg z-50';
	export let navDivClass: string = 'pb-10';
	export let logoClass: string = '';
	export let hamburgerClass: string = '';
	export let doTransition: boolean = true;
	// export let transitionParams: TransitionParamTypes = {
	// 	delay: 250,
	// 	duration: 250,
	// 	x: -100,
	// 	easing: quintInOut
	// };
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
			sidebarStatus = true;
			ariaHidden = true;
		} else {
			sidebarStatus = false;
			ariaHidden = false;
		}
	});
	// console.log('sidebarStatus', sidebarStatus);
</script>

<Navbar {siteName} {headerClass} {logo} {alt} {logoClass} {hamburgerClass}>
	<slot />
</Navbar>
{#if doTransition}
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
						<SidebarList {href} {name} {rel} />
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
					<SidebarList {href} {name} {rel} />
				{/each}
			</div>
		</nav>
	</aside>
{/if}

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
