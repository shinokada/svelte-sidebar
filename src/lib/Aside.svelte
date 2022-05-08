<script lang="ts">
	import { sidebarOpen, sidebarIsInert } from './store';
	import type { TransitionParamTypes, TransitionTypes } from './types';
	import { fly, slide, blur, fade } from 'svelte/transition';

	export let transitionParams: TransitionParamTypes = {};
	export let transitionType: TransitionTypes = 'fly';
	export let asideClass = 'absolute w-auto h-screen bg-gray-200 border-r-2 shadow-lg';

	let inert = null;
	$: inert = $sidebarIsInert ? 'inert' : null;
	let ariaHidden: boolean;

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

	// $: console.log('Aside sidebarOpen', $sidebarOpen);
</script>

{#if $sidebarOpen}
	<aside class={asideClass} transition:multiple={transitionParams} aria-hidden={ariaHidden} {inert}>
		<slot />
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
