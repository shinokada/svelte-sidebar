<script>
  import Sidebar from "$lib/Sidebar.svelte";
  import { menuList, lorem, topMenus } from "./menus";
  let siteName = "Svelte-sidebar Demo";
</script>

<Sidebar lists={menuList} {siteName} {topMenus} />
<main class="container mx-auto p-24">
  <h1 class="text-3xl">About page</h1>
  <p class="pt-4">
    {lorem}
  </p>
</main>
