<script lang="ts">
	export let navClass = 'py-8 px-4 text-xl';
	export let navDivClass = 'pb-8';
</script>

<nav class={navClass}>
	<div class={navDivClass}>
		<slot />
	</div>
</nav>
