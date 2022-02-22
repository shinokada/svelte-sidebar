<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { menuList, lorem, topMenus } from "./menus";
  let siteName = "Svelte-sidebar";
</script>

<Navbar {siteName} {topMenus} />
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each menuList as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each menuList as { url, name, rel }}
      <SidebarList {url} {name} {rel} />
    {/each}
  </Nav>
</Aside>
<main class="container mx-auto p-24">
  <h1 class="text-3xl">
    {siteName}
  </h1>
  <p class="pt-4">
    {lorem}
  </p>
  <p class="pt-4">
    {lorem}
  </p>
  <p class="pt-4">
    {lorem}
  </p>
  <p class="pt-4">
    {lorem}
  </p>
</main>
