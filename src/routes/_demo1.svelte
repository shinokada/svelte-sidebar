<script lang="ts">
	import { Sidebar } from '$lib/index';
	import { menuList, lorem } from '../../.svelte-kit/types/src/routes/menus';
	let siteName = 'Svelte-sidebar Demo';
</script>

<Sidebar lists={menuList} {siteName} />
<main class="container mx-auto p-8">
	<h1 class="text-3xl">Home page</h1>
	<p>
		{lorem}
	</p>
</main>
