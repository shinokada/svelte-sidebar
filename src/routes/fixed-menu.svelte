<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { menuList, lorem, topMenus } from "./menus";
  let siteName = "Svelte sidebar";
  let asideClass =
    "absolute w-auto bg-white pt-8 shadow-lg z-50 px-4 min-h-screen";
  let headerClass =
    "bg-white py-3 px-20 items-center text-gray-600 border-b-2 p-8";
  let navClass = "p-8 bg-white text-xl ";
  let navDivClass = "pb-10";
</script>

<div class="fixed z-50 top-0 left-0 w-full">
  <Navbar {siteName} {headerClass} {topMenus} />
  <Aside {asideClass}>
    <Nav {navClass} {navDivClass}>
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
</div>

<main class="container mx-auto p-24 pt-40">
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
