<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import { menuList, lorem, topMenus } from "./menus";
  let siteName = "Svelte-sidebar Demo";
</script>

<Sidebar lists={menuList} {siteName} {topMenus} />
<main class="container mx-auto p-8">
  <h1 class="text-3xl">Home page</h1>
</main>
