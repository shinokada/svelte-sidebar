<script>
	import { open } from './store';

	export let url;
	export let name;
	function toggleSide() {
		open.update((n) => (n = !n));
	}
</script>

<div class="border-b border-gray-400 mb-2 px-4">
	<a class="block" href="/{url}" on:click={toggleSide}>{name}</a>
</div>
