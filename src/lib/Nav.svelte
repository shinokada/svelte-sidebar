<script lang="ts">
	export let navClass: string = 'py-8 px-4 text-lg';
	export let navDivClass: string = 'pb-8';
</script>

<nav class={navClass}>
	<div class={navDivClass}>
		<slot />
	</div>
</nav>
