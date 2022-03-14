<script lang="ts">
	import { open } from './store';
	// export let lists;
	export let asideClass = 'absolute w-auto bg-gray-200 border-r-2 shadow-lg';
</script>

<aside class={asideClass} class:open={$open}>
	<slot />
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		left: 0;
	}
</style>
