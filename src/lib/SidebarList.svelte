<script>
	import { open } from './store';
	export let href;
	export let rel = null;
	export let name;
	export let sideBarListClass = 'border-b border-gray-400 mb-2 px-4';
	function toggleSide() {
		open.update((n) => (n = !n));
	}
</script>

<div class={sideBarListClass}>
	<a class="block" {href} {rel} on:click={toggleSide}>{name}</a>
</div>
